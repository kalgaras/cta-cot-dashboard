from __future__ import annotations

import csv
import io
from dataclasses import dataclass
from datetime import date, datetime
from typing import Iterable, Optional

from src.sources.http import fetch_text


@dataclass(frozen=True)
class DailyBar:
    d: date
    close: float


@dataclass(frozen=True)
class SeriesResult:
    ok: bool
    symbol: str
    used_url: Optional[str]
    bars: list[DailyBar]
    error: Optional[str]
    source_label: str
    is_proxy: bool


def _parse_stooq_daily_csv(text: str) -> list[DailyBar]:
    f = io.StringIO(text)
    reader = csv.DictReader(f)
    out: list[DailyBar] = []
    for row in reader:
        ds = (row.get("Date") or "").strip()
        cs = (row.get("Close") or "").strip()
        if not ds or not cs:
            continue
        try:
            d = datetime.strptime(ds, "%Y-%m-%d").date()
            c = float(cs)
        except Exception:
            continue
        out.append(DailyBar(d=d, close=c))
    out.sort(key=lambda x: x.d)
    return out


def _urls_for_symbol(symbol: str) -> Iterable[str]:
    # Stooq daily CSV endpoint pattern. Some symbols require URL-encoding (e.g., ^spx).
    # We keep this very simple; if a symbol fails, caller can provide alternates.
    from urllib.parse import quote_plus

    s = quote_plus(symbol.lower())
    yield f"https://stooq.com/q/d/l/?s={s}&i=d"


async def fetch_series(
    symbol: str,
    timeout_s: float,
    alternates: Optional[list[str]] = None,
    source_label: str = "Stooq (proxy)",
    is_proxy: bool = True,
) -> SeriesResult:
    candidates = [symbol] + (alternates or [])
    last_error: Optional[str] = None
    for sym in candidates:
        for url in _urls_for_symbol(sym):
            res = await fetch_text(url, timeout_s=timeout_s)
            if not res.ok or not res.text:
                last_error = res.error or "fetch failed"
                continue
            cache_note = ""
            if (res.content_type or "").lower().startswith("cached"):
                cache_note = " [cache]"
            # Stooq sometimes returns a small HTML page (e.g., blocked/redirect) instead of CSV.
            if "text/html" in (res.content_type or "").lower():
                last_error = f"unexpected content-type: {res.content_type}"
                continue
            bars = _parse_stooq_daily_csv(res.text)
            if len(bars) < 2:
                head = (res.text or "")[:200]
                if "Get your apikey" in head or "get_apikey" in head:
                    last_error = "blocked (requires apikey/captcha)"
                else:
                    snippet = head.replace("\n", "\\n")
                    last_error = f"insufficient rows (ct={res.content_type}; head={snippet})"
                continue
            return SeriesResult(
                ok=True,
                symbol=sym,
                used_url=res.url,
                bars=bars,
                error=None,
                source_label=source_label + cache_note,
                is_proxy=is_proxy,
            )
    return SeriesResult(
        ok=False,
        symbol=symbol,
        used_url=None,
        bars=[],
        error=last_error or "no candidate worked",
        source_label=source_label,
        is_proxy=is_proxy,
    )
