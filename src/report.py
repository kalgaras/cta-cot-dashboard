from __future__ import annotations

import asyncio
from dataclasses import dataclass
from datetime import date, datetime
from typing import Optional

from dateutil import tz

from src.config import Settings
from src.sources.cftc import fetch_cot_csv_any, fetch_cot_financial_zip
from src.sources.fred import fetch_fred_series
from src.sources.ics import fetch_ics_any, pick_upcoming_events
from src.sources.local_csv import load_local_series_csv
from src.sources.alpha_vantage import fetch_daily_adjusted as fetch_series_alpha_vantage
from src.sources.stooq import fetch_series as fetch_series_stooq
from src.sources.yahoo import fetch_series as fetch_series_yahoo
from src.sources.http import quick_dns_check
from src.utils import ReturnStats, any_true, compute_return_stats, fmt_float, fmt_pct, render_mono_table


@dataclass(frozen=True)
class Report:
    title: str
    body: str
    missing_telegram_setup: list[str]


def _today_stamp() -> str:
    # Always include explicit date in report (local timezone).
    return datetime.now().astimezone().strftime("%Y-%m-%d")


def _proxy_confirmation_label(is_proxy: bool) -> str:
    return "프록시" if is_proxy else "확인"


def _trigger_flags(stats: ReturnStats) -> dict[str, bool]:
    return {
        "d1_drop": (stats.d1_pct is not None and stats.d1_pct <= -1.0),
        "abs_z": (stats.d1_z is not None and abs(stats.d1_z) >= 1.0),
        "d3_drop": (stats.d3_pct is not None and stats.d3_pct <= -2.0),
        "d5_drop": (stats.d5_pct is not None and stats.d5_pct <= -3.0),
    }


def _trigger_any(stats: ReturnStats) -> bool:
    f = _trigger_flags(stats)
    return any_true(f.values())


def _cot_unwind_mark(z: Optional[float]) -> str:
    if z is None:
        return "❌"
    if z <= -1.5:
        return "✔"
    if z <= -1.0:
        return "부분 ✔"
    return "❌"


def _zscore_from_series(latest: float, history: list[float]) -> Optional[float]:
    if len(history) < 20:
        return None
    m = sum(history) / len(history)
    var = sum((x - m) ** 2 for x in history) / (len(history) - 1)
    if var <= 0:
        return None
    return (latest - m) / (var**0.5)


async def _build_cta_proxy_section(settings: Settings) -> tuple[str, Optional[bool], Optional[bool], list[str]]:
    # Returns (section_text, today_trigger, yesterday_trigger, source_notes)
    asof = _today_stamp()

    async def _fetch_etf(symbol: str) -> tuple[bool, list[tuple[date, float]], str]:
        sr = await fetch_series_yahoo(symbol, timeout_s=settings.http_timeout_s, range_="180d")
        if not sr.ok:
            s2 = await fetch_series_stooq(
                f"{symbol.lower()}.us",
                timeout_s=settings.http_timeout_s,
                alternates=[symbol, symbol.lower()],
                source_label="Stooq (proxy)",
                is_proxy=True,
            )
            if not s2.ok:
                av = await fetch_series_alpha_vantage(
                    symbol,
                    timeout_s=settings.http_timeout_s,
                    api_key=settings.alpha_vantage_api_key,
                )
                if not av.ok:
                    return False, [], f"yahoo={sr.error}; stooq={s2.error}; alpha_vantage={av.error}"
                sr = av  # type: ignore[assignment]
            else:
                sr = s2  # type: ignore[assignment]
        return True, [(b.d, b.close) for b in sr.bars], f"{sr.source_label}({sr.symbol})"

    def _build_equal_weight_index(
        components: dict[str, list[tuple[date, float]]],
    ) -> Optional[list[tuple[date, float]]]:
        # Build a synthetic index from component price series.
        # Use intersection of dates; compute equal-weight daily return average; normalize to 100.
        if not components:
            return None
        date_sets = [set(d for d, _ in pts) for pts in components.values() if pts]
        if not date_sets:
            return None
        common = set.intersection(*date_sets)
        if len(common) < 6:
            return None
        dates = sorted(common)
        # Build per-symbol maps for quick lookup
        maps = {sym: {d: v for d, v in pts} for sym, pts in components.items()}
        level = 100.0
        out: list[tuple[datetime.date, float]] = [(dates[0], level)]
        for i in range(1, len(dates)):
            d0, d1 = dates[i - 1], dates[i]
            rets: list[float] = []
            for sym, m in maps.items():
                v0 = m.get(d0)
                v1 = m.get(d1)
                if v0 is None or v1 is None or v0 == 0:
                    continue
                rets.append(v1 / v0 - 1.0)
            if not rets:
                continue
            level *= 1.0 + sum(rets) / len(rets)
            out.append((d1, level))
        if len(out) < 6:
            return None
        return out

    items = [
        # Prefer user-provided local CSV for non-public indices; fallback to ETF baskets as proxies.
        {"name": "SG CTA Trend Index (proxy: DBMF/KMLM/CTA)", "local_asset": "SG CTA Trend Index", "kind": "basket", "components": ["DBMF", "KMLM", "CTA"]},
        {"name": "SG Short-Term Traders Index (proxy: DBMF)", "local_asset": "SG Short-Term Traders Index", "kind": "single", "symbol": "DBMF"},
        {"name": "Barclay BTOP50 (proxy: DBMF/KMLM)", "local_asset": "Barclay BTOP50", "kind": "basket", "components": ["DBMF", "KMLM"]},
        # Minimum monitor set.
        {"name": "DBMF ETF", "kind": "etf", "symbol": "DBMF"},
        {"name": "KMLM ETF", "kind": "etf", "symbol": "KMLM"},
        {"name": "Simplify CTA ETF (proxy)", "kind": "etf", "symbol": "CTA"},
    ]

    rows: list[list[str]] = []
    today_triggers: list[bool] = []
    yday_triggers: list[bool] = []
    today_valid = 0
    yday_valid = 0
    notes: list[str] = []

    for it in items:
        kind = it["kind"]
        local_asset = it.get("local_asset")
        if local_asset:
            lr = load_local_series_csv(settings.cta_proxy_csv_path, asset_name=str(local_asset))
            if lr.ok:
                stats = compute_return_stats(lr.points)
                if stats is not None:
                    y_stats = compute_return_stats(lr.points[:-1]) if len(lr.points) >= 3 else None
                    today_valid += 1
                    if y_stats is not None:
                        yday_valid += 1
                    today_triggers.append(_trigger_any(stats))
                    yday_triggers.append(_trigger_any(y_stats) if y_stats else False)
                    rows.append(
                        [
                            str(stats.asof),
                            it["name"],
                            fmt_float(stats.value, 2),
                            fmt_pct(stats.d1_pct),
                            (fmt_pct(stats.d3_pct) if stats.d3_pct is not None else "NA"),
                            (fmt_pct(stats.d5_pct) if stats.d5_pct is not None else "NA"),
                            fmt_float(stats.d1_z, 2),
                            "확인(로컬)",
                        ]
                    )
                    notes.append(f"- {it['name']}: {lr.source_label} 사용({settings.cta_proxy_csv_path})")
                    continue
        if kind in ("etf", "single"):
            ok, bars, src = await _fetch_etf(it["symbol"])
            if not ok:
                rows.append([asof, it["name"], "NA", "NA", "NA", "NA", "NA", "확인 제한"])
                notes.append(f"- {it['name']}: 시세 접근 실패({src}) → 확인 제한")
                continue
            stats = compute_return_stats(bars)
            if stats is None:
                rows.append([asof, it["name"], "NA", "NA", "NA", "NA", "NA", "확인 제한"])
                notes.append(f"- {it['name']}: 데이터 부족 → 확인 제한")
                continue
            y_stats = compute_return_stats(bars[:-1]) if len(bars) >= 3 else None
            today_valid += 1
            if y_stats is not None:
                yday_valid += 1
            today_triggers.append(_trigger_any(stats))
            yday_triggers.append(_trigger_any(y_stats) if y_stats else False)
            rows.append(
                [
                    str(stats.asof),
                    it["name"],
                    fmt_float(stats.value, 2),
                    fmt_pct(stats.d1_pct),
                    (fmt_pct(stats.d3_pct) if stats.d3_pct is not None else "NA"),
                    (fmt_pct(stats.d5_pct) if stats.d5_pct is not None else "NA"),
                    fmt_float(stats.d1_z, 2),
                    "프록시",
                ]
            )
            notes.append(f"- {it['name']}: {src}")
            continue

        if kind == "basket":
            comps: dict[str, list[tuple[date, float]]] = {}
            comp_srcs: list[str] = []
            failed: list[str] = []
            for sym in it["components"]:
                ok, bars, src = await _fetch_etf(sym)
                if not ok:
                    failed.append(f"{sym}({src})")
                    continue
                comps[sym] = bars
                comp_srcs.append(f"{sym}:{src}")
            idx_pts = _build_equal_weight_index(comps)
            if idx_pts is None:
                rows.append([asof, it["name"], "NA", "NA", "NA", "NA", "NA", "확인 제한"])
                notes.append(f"- {it['name']}: 구성 시계열 부족(실패={'; '.join(failed) or 'none'}) → 확인 제한")
                continue
            stats = compute_return_stats(idx_pts)
            if stats is None:
                rows.append([asof, it["name"], "NA", "NA", "NA", "NA", "NA", "확인 제한"])
                notes.append(f"- {it['name']}: 합성 지수 데이터 부족 → 확인 제한")
                continue
            y_stats = compute_return_stats(idx_pts[:-1]) if len(idx_pts) >= 3 else None
            today_valid += 1
            if y_stats is not None:
                yday_valid += 1
            today_triggers.append(_trigger_any(stats))
            yday_triggers.append(_trigger_any(y_stats) if y_stats else False)
            rows.append(
                [
                    str(stats.asof),
                    it["name"],
                    fmt_float(stats.value, 2),
                    fmt_pct(stats.d1_pct),
                    (fmt_pct(stats.d3_pct) if stats.d3_pct is not None else "NA"),
                    (fmt_pct(stats.d5_pct) if stats.d5_pct is not None else "NA"),
                    fmt_float(stats.d1_z, 2),
                    "프록시",
                ]
            )
            notes.append(f"- {it['name']}: 합성(동일가중) / " + ", ".join(comp_srcs))
            continue

    hdr = ["기준일", "Asset/Index", "Value", "D1 Δ%", "D3", "D5", "Δ Z", "Confirm"]
    table = render_mono_table(hdr, rows, max_col_width=22)
    # Keep at least one diagnostic line visible in-section when everything is 제한.
    diag_lines: list[str] = []
    fail_notes = [n for n in notes if "접근 실패" in n or "미확인" in n or "부족" in n]
    if len(fail_notes) >= 1:
        diag_lines.append("메모: " + fail_notes[0].replace("- ", ""))

    # Trigger state (overall) today vs yesterday
    # If we couldn't compute any valid series, do not label as "미발생".
    today_any: Optional[bool] = any_true(today_triggers) if today_valid > 0 else None
    yday_any: Optional[bool] = any_true(yday_triggers) if yday_valid > 0 else None

    section = "\n".join(
        [
            "① DAILY CTA Proxy Trigger",
            table,
            *diag_lines,
            ("판정: 유효 데이터 부족 → Trigger 판정 불가" if today_any is None else ""),
            "Trigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        ]
    )
    section = "\n".join([ln for ln in section.split("\n") if ln.strip() != ""])
    return section, today_any, yday_any, notes


async def _build_cot_section(settings: Settings) -> tuple[str, list[str]]:
    # Candidate URLs (may change; we treat as best-effort and clearly flag when unavailable).
    urls = [
        # Prefer plain CSV endpoints; binary (zip/xls) may contain NUL bytes and is intentionally skipped.
        "https://www.cftc.gov/files/dea/history/fut_fin_xls.csv",
        "https://www.cftc.gov/files/dea/history/deacotfinancial.csv",
    ]

    targets = {
        "S&P 500 (ES)": ["S&P 500", "E-MINI S&P 500", "E-mini S&P 500"],
        "USD Index (DX)": ["U.S. DOLLAR INDEX", "USD INDEX", "US DOLLAR INDEX"],
        "UST 10Y": ["10-YEAR", "10 YEAR", "10YR"],
        "UST 2Y": ["2-YEAR", "2 YEAR", "2YR"],
        "UST 5Y": ["5-YEAR", "5 YEAR", "5YR"],
        "UST 30Y": ["30-YEAR", "30 YEAR", "30YR", "ULTRA", "BOND"],
    }

    results = await fetch_cot_csv_any(settings.http_timeout_s, urls=urls, target_markets=targets)

    # If all failed, try official yearly zip (txt inside) as a robust fallback.
    if all(not r.ok for r in results.values()):
        year = datetime.now().year
        zip_urls = [
            f"https://www.cftc.gov/files/dea/history/fut_fin_txt_{year}.zip",
            f"https://www.cftc.gov/files/dea/history/fut_fin_txt_{year-1}.zip",
            "https://www.cftc.gov/files/dea/history/fut_fin_txt.zip",
        ]
        results = await fetch_cot_financial_zip(settings.http_timeout_s, zip_urls=zip_urls, target_markets=targets)

    rows: list[list[str]] = []
    notes: list[str] = []

    for asset, r in results.items():
        if not r.ok:
            rows.append(["NA", asset, "NA", "NA", "NA", "NA", "❌", "확인 제한"])
            notes.append(f"- {asset}: CFTC COT 접근/매칭 실패({r.error}) → 확인 제한")
            continue
        pts = r.points
        last = pts[-1]
        prev = pts[-2]
        wow = last.net - prev.net
        pct = (wow / abs(prev.net) * 100.0) if prev.net != 0 else None
        # z-score of WoW deltas over history
        deltas = [pts[i].net - pts[i - 1].net for i in range(1, len(pts) - 1)]
        z = _zscore_from_series(wow, deltas)
        mark = _cot_unwind_mark(z)
        confirm = "확인"
        if "[cache]" in (r.source_label or ""):
            confirm = "확인(캐시)"
        rows.append(
            [
                str(last.d),
                asset,
                f"{last.net:,.0f}",
                f"{wow:+,.0f}",
                (f"{pct:+.1f}%" if pct is not None else "NA"),
                (f"{z:+.2f}" if z is not None else "NA"),
                mark,
                confirm,
            ]
        )
        notes.append(f"- {asset}: {r.source_label} 사용")

    hdr = ["Date", "Asset", "Value(Net)", "WoW Δ", "%", "Δ Z", "Unwind?", "Confirm"]
    table = render_mono_table(hdr, rows, max_col_width=20)
    diag_lines: list[str] = []
    fail_notes = [n for n in notes if "실패" in n or "확인 제한" in n]
    if len(fail_notes) >= 1:
        diag_lines.append("메모: " + fail_notes[0].replace("- ", ""))
    section = "\n".join(
        [
            "② Weekly COT Signals (최신 CFTC 기준)",
            table,
            *diag_lines,
            "표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        ]
    )
    return section, notes


async def _build_market_monitor_section(settings: Settings) -> tuple[str, list[str]]:
    # Prefer FRED for broad market snapshot because Yahoo may 429 and Stooq may require apikey/captcha.
    # Missing series are explicitly marked as 확인 제한.
    idx = [
        ("S&P 500", "SP500", "SPY"),
        ("Nasdaq 100", "NASDAQ100", "QQQ"),
        ("Dow", "DJIA", "DIA"),
        ("Russell 2000", None, "IWM"),
        ("STOXX 600 (proxy: Europe ETF)", None, "VGK"),
        ("Nikkei 225", "NIKKEI225", "EWJ"),
    ]
    fx = [("DXY (proxy: DTWEXBGS)", "DTWEXBGS", "UUP"), ("EURUSD", "DEXUSEU", "EURUSD=X"), ("USDJPY", "DEXJPUS", "JPY=X")]
    cmdty = [("WTI", "DCOILWTICO", "CL=F"), ("Brent", "DCOILBRENTEU", "BZ=F"), ("Gold (proxy: GLD)", "GOLDAMGBD228NLBM", "GLD")]
    vol = [("VIX", "VIXCLS", "^VIX")]

    async def get_row(name: str, series_id: Optional[str], proxy_symbol: Optional[str]) -> tuple[str, str, str, str, str, str, str]:
        # Prefer FRED (more authoritative for many series); fallback to ETF/Index proxy quotes via Yahoo/Stooq.
        fred_fail_note: Optional[str] = None
        if series_id:
            rr = await fetch_fred_series(series_id, timeout_s=settings.http_timeout_s, limit=15, api_key=settings.fred_api_key)
            if rr.ok:
                pts = [(p.d, p.value) for p in rr.points]
                stats = compute_return_stats(pts)
                if stats:
                    confirm = "확인"
                    if "[cache]" in (rr.source_label or ""):
                        confirm = "확인(캐시)"
                    return (
                        str(stats.asof),
                        name,
                        fmt_float(stats.value, 2),
                        fmt_pct(stats.d1_pct),
                        (fmt_pct(stats.d3_pct) if stats.d3_pct is not None else "NA"),
                        confirm,
                        f"{name}: FRED({series_id})",
                    )
                return (_today_stamp(), name, "NA", "NA", "NA", "확인 제한", f"{name}: FRED 데이터 부족")
            # FRED failed; continue to proxy fallback (if available)
            fred_fail_note = f"{name}: FRED 접근 실패({rr.error})"

        if not proxy_symbol:
            return (_today_stamp(), name, "NA", "NA", "NA", "확인 제한", fred_fail_note or f"{name}: 프록시 심볼 없음(확인 제한)")

        # Proxy: attempt Yahoo first; fallback to Stooq.
        sr = await fetch_series_yahoo(proxy_symbol, timeout_s=settings.http_timeout_s, range_="90d")
        if not sr.ok:
            s2 = None
            # Only attempt Stooq for simple US-listed tickers.
            if proxy_symbol.isalpha() and len(proxy_symbol) <= 6:
                s2 = await fetch_series_stooq(
                    f"{proxy_symbol.lower()}.us",
                    timeout_s=settings.http_timeout_s,
                    alternates=[proxy_symbol, proxy_symbol.lower()],
                    source_label="Stooq (proxy)",
                    is_proxy=True,
                )
            if not s2 or not s2.ok:
                av = await fetch_series_alpha_vantage(
                    proxy_symbol,
                    timeout_s=settings.http_timeout_s,
                    api_key=settings.alpha_vantage_api_key,
                )
                if av.ok:
                    sr = av  # type: ignore[assignment]
                else:
                    s2_err = (s2.error if s2 else "skipped")
                    return (
                        _today_stamp(),
                        name,
                        "NA",
                        "NA",
                        "NA",
                        "확인 제한",
                        f"{name}: 시세 접근 실패(yahoo={sr.error}; stooq={s2_err}; alpha_vantage={av.error})",
                    )
            else:
                sr = s2  # type: ignore[assignment]

        pts = [(b.d, b.close) for b in sr.bars]
        stats = compute_return_stats(pts)
        if not stats:
            return (_today_stamp(), name, "NA", "NA", "NA", "확인 제한", f"{name}: 프록시 데이터 부족({sr.source_label})")

        return (
            str(stats.asof),
            name,
            fmt_float(stats.value, 2),
            fmt_pct(stats.d1_pct),
            (fmt_pct(stats.d3_pct) if stats.d3_pct is not None else "NA"),
            "프록시",
            f"{name}: {sr.source_label}({sr.symbol})",
        )

    tasks = [get_row(name, sid, proxy) for name, sid, proxy in (idx + fx + cmdty + vol)]
    got = await asyncio.gather(*tasks)

    # Split into small tables by category to keep Telegram readability.
    def mk_table(title: str, subset: list[tuple[str, str, str, str, str, str, str]]) -> tuple[str, list[str]]:
        rows = [[d, n, v, d1, d3, confirm] for (d, n, v, d1, d3, confirm, _) in subset]
        hdr = ["기준일", title, "Value", "D1", "D3", "Confirm"]
        return render_mono_table(hdr, rows, max_col_width=18), [note for *_, note in subset]

    idx_rows = got[: len(idx)]
    fx_rows = got[len(idx) : len(idx) + len(fx)]
    cmd_rows = got[len(idx) + len(fx) : len(idx) + len(fx) + len(cmdty)]
    vol_rows = got[len(idx) + len(fx) + len(cmdty) :]

    t1, n1 = mk_table("Index", idx_rows)
    t2, n2 = mk_table("FX", fx_rows)
    t3, n3 = mk_table("Commodity", cmd_rows)
    t4, n4 = mk_table("Vol", vol_rows)
    # Surface a short diagnostic if most rows are NA.
    diag_lines: list[str] = []
    all_notes = n1 + n2 + n3 + n4
    fail_notes = [n for n in all_notes if "시세 접근 실패" in n]
    if len(fail_notes) >= 1:
        diag_lines.append("메모: " + fail_notes[0])

    # Rates via FRED (public CSV endpoint; no API key)
    rate_ids = [("UST 2Y", "DGS2"), ("UST 5Y", "DGS5"), ("UST 10Y", "DGS10"), ("UST 30Y", "DGS30")]
    rate_tasks = [fetch_fred_series(sid, timeout_s=settings.http_timeout_s, limit=10, api_key=settings.fred_api_key) for _, sid in rate_ids]
    rate_res = await asyncio.gather(*rate_tasks)

    rate_rows: list[list[str]] = []
    rate_notes: list[str] = []
    rate_any_ok = False
    first_rate_error: Optional[str] = None
    for (label, sid), rr in zip(rate_ids, rate_res):
        if not rr.ok:
            rate_rows.append([_today_stamp(), label, "NA", "NA", "확인 제한"])
            rate_notes.append(f"- {label}: {rr.source_label} 실패({rr.error}) → 확인 제한")
            if first_rate_error is None:
                first_rate_error = f"{rr.source_label}: {rr.error}"
            continue
        rate_any_ok = True
        last = rr.points[-1]
        prev = rr.points[-2]
        # Values are in percent. Convert delta to basis points.
        d1_bp = (last.value - prev.value) * 100.0
        r_confirm = "확인"
        if "[cache]" in (rr.source_label or ""):
            r_confirm = "확인(캐시)"
        rate_rows.append([str(last.d), label, f"{last.value:.2f}%", f"{d1_bp:+.1f}bp", r_confirm])
        rate_notes.append(f"- {label}: {rr.source_label} 사용({sid})")

    rate_table = render_mono_table(["Date", "Rate", "Yield", "D1", "Confirm"], rate_rows, max_col_width=18)
    rate_diag_line = ""
    if not rate_any_ok and first_rate_error:
        rate_diag_line = f"(금리) FRED 접근 실패: {first_rate_error}"

    # Official macro event schedules (24~48h): BLS + BEA iCalendar feeds.
    cal_notes: list[str] = []
    events_line = "(7) 향후 24~48h 주요 이벤트: 확인 제한(캘린더 미연동)"
    try:
        now = datetime.now().astimezone()
        et = tz.gettz("America/New_York")
        kst = tz.gettz("Asia/Seoul")

        bls = await fetch_ics_any(
            settings.http_timeout_s,
            urls=["https://www.bls.gov/schedule/news_release/bls.ics"],
            source_label="BLS schedule (official iCal)",
        )
        bea = await fetch_ics_any(
            settings.http_timeout_s,
            urls=["https://www.bea.gov/news/schedule/icalendar"],
            source_label="BEA schedule (official iCal)",
        )
        all_events = []
        if bls.ok:
            all_events.extend(bls.events)
            cal_notes.append("- 이벤트: BLS iCal 사용")
        else:
            cal_notes.append(f"- 이벤트: BLS iCal 실패({bls.error})")
        if bea.ok:
            all_events.extend(bea.events)
            cal_notes.append("- 이벤트: BEA iCal 사용")
        else:
            cal_notes.append(f"- 이벤트: BEA iCal 실패({bea.error})")

        upcoming = pick_upcoming_events(all_events, now=now, within_hours=48, limit=6)
        if upcoming:
            lines = ["(7) 향후 24~48h 주요 이벤트(공식 일정)"]
            for ev in upcoming:
                st_et = ev.start.astimezone(et) if et else ev.start
                st_kst = ev.start.astimezone(kst) if kst else ev.start
                if ev.is_all_day:
                    lines.append(f"- {st_et:%m-%d} (ET) {ev.summary}")
                else:
                    lines.append(f"- {st_et:%m-%d %H:%M} ET / {st_kst:%m-%d %H:%M} KST: {ev.summary}")
            events_line = "\n".join(lines)
        else:
            events_line = "(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한"
    except Exception as exc:  # noqa: BLE001
        cal_notes.append(f"- 이벤트: 파싱 실패({type(exc).__name__}: {exc})")

    section = "\n".join(
        [
            "④ 간결한 일일 마켓 모니터(CTA 제외)",
            "(1) overnight 주요 지수 (프록시)",
            t1,
            "(2) 금리 (FRED 공개 CSV)",
            rate_table,
            rate_diag_line,
            "(3) FX (프록시)",
            t2,
            "(4) 원자재 (프록시)",
            t3,
            "(5) 주식 변동성 (프록시)",
            t4,
            "메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.",
            *diag_lines,
            "(6) 미 증시 breadth: 확인 제한(소스 미연동)",
            events_line,
            "(8) 실행 가능한 핵심 요약: 아래 Alert 참고",
        ]
    )
    return section, (n1 + n2 + n3 + n4 + rate_notes + cal_notes)


def _build_alert_section(
    today_trigger: Optional[bool],
    yday_trigger: Optional[bool],
    cta_notes: list[str],
    cot_notes: list[str],
    mkt_notes: list[str],
) -> tuple[str, str]:
    if today_trigger is None:
        status = "확인 제한"
        regime = "insufficient data / 확인 제한"
    else:
        if today_trigger and (yday_trigger is True):
            status = "재차 발생"
        elif today_trigger:
            status = "발생"
        else:
            status = "미발생"

        if today_trigger:
            regime = "slow deleveraging / exposure reduction"
        else:
            regime = "neutral/no trigger"

    title = f"CTA 포지셔닝 모니터 — Proxy Trigger {status} / {regime}"

    bullets: list[str] = [
        f"- CTA 프록시 트리거: {status} (기준일: {_today_stamp()})",
        f"- 국면 판단: {regime}",
        "- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
    ]

    all_notes = cta_notes + cot_notes + mkt_notes

    def looks_like_network_block(note: str) -> bool:
        n = note.lower()
        return (
            "permissionerror" in n
            or "operation not permitted" in n
            or "could not resolve host" in n
            or "name or service not known" in n
            or "nodename nor servname provided" in n
            or "network is unreachable" in n
        )

    if any(looks_like_network_block(n) for n in all_notes):
        bullets.append("- 환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨")

    # Keep notes short; prefer a couple of source attributions, then one failure note if present.
    notes: list[str] = []
    for n in all_notes:
        if "사용" in n:
            notes.append(n)
        if len(notes) >= 2:
            break
    if not notes:
        for n in all_notes:
            if "접근 실패" in n or "실패" in n:
                notes.append(n)
            if len(notes) >= 2:
                break

    if notes:
        bullets.append("- 데이터 메모: " + " / ".join(x.replace("- ", "") for x in notes))

    section = "\n".join(["③ 종합 Alert", *bullets])
    return title, section


async def build_report(settings: Settings) -> Report:
    missing: list[str] = []
    if settings.telegram_api_id is None:
        missing.append("TELEGRAM_API_ID 또는 credentials(api_id)")
    if settings.telegram_api_hash is None:
        missing.append("TELEGRAM_API_HASH 또는 credentials(api_hash)")
    if not settings.telegram_target_chat:
        missing.append("TELEGRAM_TARGET_CHAT")

    cta_section, today_trigger, yday_trigger, cta_notes = await _build_cta_proxy_section(settings)
    cot_section, cot_notes = await _build_cot_section(settings)
    mkt_section, mkt_notes = await _build_market_monitor_section(settings)
    title, alert_section = _build_alert_section(today_trigger, yday_trigger, cta_notes, cot_notes, mkt_notes)

    # Lightweight diagnostics for common "everything NA" cases.
    dns_lines: list[str] = []
    try:
        y_ok, y_msg = await quick_dns_check("query1.finance.yahoo.com")
        s_ok, s_msg = await quick_dns_check("stooq.com")
        c_ok, c_msg = await quick_dns_check("www.cftc.gov")
        if not y_ok or not s_ok or not c_ok:
            dns_lines.append("네트워크/DNS 진단:")
            dns_lines.append(f"- query1.finance.yahoo.com: {'OK' if y_ok else 'FAIL'} ({y_msg})")
            dns_lines.append(f"- stooq.com: {'OK' if s_ok else 'FAIL'} ({s_msg})")
            dns_lines.append(f"- www.cftc.gov: {'OK' if c_ok else 'FAIL'} ({c_msg})")
    except Exception:
        dns_lines = []

    body_parts = [
        title,
        "",
        cta_section,
        "",
        cot_section,
        "",
        alert_section,
        "",
        mkt_section,
        *([""] + dns_lines if dns_lines else []),
        "",
        "데이터 소스/제약:",
        "- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).",
        "- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).",
        "- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
    ]
    return Report(title=title, body="\n".join(body_parts).strip(), missing_telegram_setup=missing)
