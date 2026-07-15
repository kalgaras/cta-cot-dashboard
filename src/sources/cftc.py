from __future__ import annotations

import csv
import io
import zipfile
from dataclasses import dataclass
from datetime import date, datetime
from typing import Optional

from src.sources.http import fetch_bytes, fetch_text


@dataclass(frozen=True)
class CotPoint:
    d: date
    market: str
    net: float


@dataclass(frozen=True)
class CotResult:
    ok: bool
    used_url: Optional[str]
    points: list[CotPoint]
    error: Optional[str]
    source_label: str


def _safe_float(x: str) -> Optional[float]:
    x = (x or "").strip()
    if not x:
        return None
    try:
        return float(x.replace(",", ""))
    except ValueError:
        return None


def _parse_any_date(s: str) -> Optional[date]:
    s = (s or "").strip()
    if not s:
        return None
    for fmt in ("%Y-%m-%d", "%m/%d/%Y", "%Y%m%d"):
        try:
            return datetime.strptime(s, fmt).date()
        except ValueError:
            continue
    return None


def _extract_cot_rows(text: str) -> list[dict]:
    # Some endpoints may return binary (zip/xls) that includes NUL bytes, which breaks csv parsing.
    if "\x00" in text:
        raise ValueError("binary response (contains NUL)")
    f = io.StringIO(text)
    reader = csv.DictReader(f)
    return [row for row in reader]


def _pick_net_from_row(row: dict) -> Optional[float]:
    # Support a few common CFTC formats.
    # Prefer "Noncommercial" net where available; fallback to "Money Manager" net.
    keys = {k.lower(): k for k in row.keys()}

    def gv(name: str) -> Optional[str]:
        k = keys.get(name.lower())
        return row.get(k) if k else None

    # Common legacy format: Noncommercial Positions Long/Short (All)
    ncl = _safe_float(gv("Noncommercial_Positions_Long_All") or gv("Noncommercial Positions-Long (All)") or "")
    ncs = _safe_float(gv("Noncommercial_Positions_Short_All") or gv("Noncommercial Positions-Short (All)") or "")
    if ncl is not None and ncs is not None:
        return ncl - ncs

    # Disaggregated / financial: M_Money positions long/short
    mml = _safe_float(gv("M_Money_Positions_Long_All") or gv("Money Manager Positions-Long (All)") or "")
    mms = _safe_float(gv("M_Money_Positions_Short_All") or gv("Money Manager Positions-Short (All)") or "")
    if mml is not None and mms is not None:
        return mml - mms

    # TFF (Traders in Financial Futures) format often uses "Lev_Money" and "Asset_Mgr".
    lml = _safe_float(gv("Lev_Money_Positions_Long_All") or gv("Leveraged Funds Positions-Long (All)") or "")
    lms = _safe_float(gv("Lev_Money_Positions_Short_All") or gv("Leveraged Funds Positions-Short (All)") or "")
    if lml is not None and lms is not None:
        return lml - lms

    aml = _safe_float(gv("Asset_Mgr_Positions_Long_All") or gv("Asset Manager Positions-Long (All)") or "")
    ams = _safe_float(gv("Asset_Mgr_Positions_Short_All") or gv("Asset Manager Positions-Short (All)") or "")
    if aml is not None and ams is not None:
        return aml - ams

    return None


def _pick_date_from_row(row: dict) -> Optional[date]:
    for key in (
        "As_of_Date_In_Form_YYYY-MM-DD",
        "As of Date in Form YYYY-MM-DD",
        "Report_Date_as_YYYY-MM-DD",
        "Report Date as YYYY-MM-DD",
        "report_date_as_yyyy-mm-dd",
    ):
        if key in row and row.get(key):
            d = _parse_any_date(str(row.get(key)))
            if d:
                return d
    return None


def _pick_market_from_row(row: dict) -> Optional[str]:
    for key in (
        "Market_and_Exchange_Names",
        "Market and Exchange Names",
        "market_and_exchange_names",
        "Contract_Market_Name",
        "Contract Market Name",
    ):
        v = (row.get(key) or "").strip()
        if v:
            return v
    return None


async def fetch_cot_csv_any(
    timeout_s: float,
    urls: list[str],
    target_markets: dict[str, list[str]],
    source_label: str = "CFTC COT (official, if reachable)",
) -> dict[str, CotResult]:
    # Returns per-asset best-effort series; each is a list of weekly points.
    text: Optional[str] = None
    used_url: Optional[str] = None
    last_error: Optional[str] = None
    effective_label = source_label
    for url in urls:
        res = await fetch_text(url, timeout_s=timeout_s)
        if res.ok and res.text:
            if (res.content_type or "").lower().startswith("cached"):
                effective_label = source_label + " [cache]"
            # Skip binary-like payloads early to avoid "line contains NUL" crashes.
            if "\x00" in res.text:
                last_error = "binary response (contains NUL)"
                continue
            text = res.text
            used_url = res.url
            break
        last_error = res.error or "fetch failed"

    if not text or not used_url:
        return {
            asset: CotResult(ok=False, used_url=None, points=[], error=last_error or "unreachable", source_label=effective_label)
            for asset in target_markets.keys()
        }

    try:
        rows = _extract_cot_rows(text)
    except Exception as exc:  # noqa: BLE001
        return {
            asset: CotResult(ok=False, used_url=used_url, points=[], error=str(exc), source_label=effective_label)
            for asset in target_markets.keys()
        }
    bucket: dict[str, list[CotPoint]] = {asset: [] for asset in target_markets.keys()}

    for row in rows:
        d = _pick_date_from_row(row)
        mkt = _pick_market_from_row(row)
        net = _pick_net_from_row(row)
        if not d or not mkt or net is None:
            continue
        mkt_l = mkt.lower()
        for asset, needles in target_markets.items():
            if any(n.lower() in mkt_l for n in needles):
                bucket[asset].append(CotPoint(d=d, market=mkt, net=net))

    out: dict[str, CotResult] = {}
    for asset, pts in bucket.items():
        pts.sort(key=lambda x: x.d)
        if len(pts) < 2:
            out[asset] = CotResult(ok=False, used_url=used_url, points=[], error="insufficient matched rows", source_label=effective_label)
        else:
            out[asset] = CotResult(ok=True, used_url=used_url, points=pts, error=None, source_label=effective_label)
    return out


async def fetch_cot_financial_zip(
    timeout_s: float,
    zip_urls: list[str],
    target_markets: dict[str, list[str]],
    source_label: str = "CFTC COT Financial Futures (official zip)",
) -> dict[str, CotResult]:
    # Download financial futures zip (txt inside) and parse as CSV.
    content: Optional[bytes] = None
    used_url: Optional[str] = None
    last_error: Optional[str] = None

    for url in zip_urls:
        res = await fetch_bytes(url, timeout_s=timeout_s)
        if res.ok and res.content:
            content = res.content
            used_url = res.url
            break
        last_error = res.error or "fetch failed"

    if not content or not used_url:
        return {
            asset: CotResult(ok=False, used_url=None, points=[], error=last_error or "unreachable", source_label=source_label)
            for asset in target_markets.keys()
        }

    try:
        zf = zipfile.ZipFile(io.BytesIO(content))
        name = next((n for n in zf.namelist() if n.lower().endswith((".txt", ".csv"))), None)
        if not name:
            raise ValueError("zip contains no txt/csv")
        raw = zf.read(name)
        # CFTC files are typically latin-1/utf-8 compatible; try utf-8 then fallback.
        try:
            text = raw.decode("utf-8")
        except UnicodeDecodeError:
            text = raw.decode("latin-1", errors="replace")
        rows = _extract_cot_rows(text)
    except Exception as exc:  # noqa: BLE001
        return {
            asset: CotResult(ok=False, used_url=used_url, points=[], error=str(exc), source_label=source_label)
            for asset in target_markets.keys()
        }

    bucket: dict[str, list[CotPoint]] = {asset: [] for asset in target_markets.keys()}
    for row in rows:
        d = _pick_date_from_row(row)
        mkt = _pick_market_from_row(row)
        net = _pick_net_from_row(row)
        if not d or not mkt or net is None:
            continue
        mkt_l = mkt.lower()
        for asset, needles in target_markets.items():
            if any(n.lower() in mkt_l for n in needles):
                bucket[asset].append(CotPoint(d=d, market=mkt, net=net))

    out: dict[str, CotResult] = {}
    for asset, pts in bucket.items():
        pts.sort(key=lambda x: x.d)
        if len(pts) < 2:
            out[asset] = CotResult(ok=False, used_url=used_url, points=[], error="insufficient matched rows", source_label=source_label)
        else:
            out[asset] = CotResult(ok=True, used_url=used_url, points=pts, error=None, source_label=source_label)
    return out
