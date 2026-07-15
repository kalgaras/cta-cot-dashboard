from __future__ import annotations

from dataclasses import dataclass
from datetime import date, datetime
from typing import Optional

from src.sources.http import fetch_text, fetch_text_via_curl


@dataclass(frozen=True)
class FredPoint:
    d: date
    value: float


@dataclass(frozen=True)
class FredSeriesResult:
    ok: bool
    series_id: str
    used_url: Optional[str]
    points: list[FredPoint]
    error: Optional[str]
    source_label: str


def _parse_date(s: str) -> Optional[date]:
    s = (s or "").strip()
    if not s:
        return None
    try:
        return datetime.strptime(s, "%Y-%m-%d").date()
    except ValueError:
        return None


async def fetch_fred_series(series_id: str, timeout_s: float, limit: int = 30, api_key: Optional[str] = None) -> FredSeriesResult:
    # Use the public fredgraph CSV endpoint (no API key required):
    # https://fred.stlouisfed.org/graph/fredgraph.csv?id={series_id}
    url = f"https://fred.stlouisfed.org/graph/fredgraph.csv?id={series_id}"
    res = await fetch_text(url, timeout_s=timeout_s)
    cache_note = ""
    if (res.content_type or "").lower().startswith("cached"):
        cache_note = " [cache]"
    if not res.ok or not res.text:
        # curl fallback (often works even when Python DNS/TLS fails on some macOS setups)
        res = await fetch_text_via_curl(url, timeout_s=timeout_s)
        if (res.content_type or "").lower().startswith("cached") and not cache_note:
            cache_note = " [cache]"
    if not res.ok or not res.text:
        # Fallback to FRED API if an API key is provided.
        api_key_s = (api_key or "").strip()
        if api_key_s:
            api_url = (
                "https://api.stlouisfed.org/fred/series/observations"
                f"?series_id={series_id}&api_key={api_key_s}&file_type=json&sort_order=desc&limit={limit}"
            )
            api_res = await fetch_text(api_url, timeout_s=timeout_s)
            if not api_res.ok or not api_res.text:
                return FredSeriesResult(
                    ok=False,
                    series_id=series_id,
                    used_url=api_res.url,
                    points=[],
                    error=api_res.error or "fetch failed",
                    source_label="FRED API (needs key)",
                )
            try:
                import json

                payload = json.loads(api_res.text)
                obs = payload.get("observations", [])
                pts: list[FredPoint] = []
                for o in obs:
                    d = _parse_date(str(o.get("date", "")))
                    v = str(o.get("value", "")).strip()
                    if not d or v in (".", ""):
                        continue
                    try:
                        fv = float(v)
                    except ValueError:
                        continue
                    pts.append(FredPoint(d=d, value=fv))
                pts.sort(key=lambda x: x.d)
                if len(pts) < 2:
                    return FredSeriesResult(
                        ok=False,
                        series_id=series_id,
                        used_url=api_res.url,
                        points=[],
                        error="insufficient points",
                        source_label="FRED API (needs key)",
                    )
                return FredSeriesResult(ok=True, series_id=series_id, used_url=api_res.url, points=pts, error=None, source_label="FRED API (needs key)")
            except Exception as exc:  # noqa: BLE001
                return FredSeriesResult(
                    ok=False,
                    series_id=series_id,
                    used_url=api_res.url,
                    points=[],
                    error=f"parse error: {exc}",
                    source_label="FRED API (needs key)",
                )

        return FredSeriesResult(
            ok=False,
            series_id=series_id,
            used_url=res.url,
            points=[],
            error=res.error or "fetch failed",
            source_label="FRED fredgraph.csv (public)" + cache_note,
        )

    try:
        import csv
        import io

        f = io.StringIO(res.text)
        reader = csv.DictReader(f)
        pts: list[FredPoint] = []

        if not reader.fieldnames or len(reader.fieldnames) < 2:
            return FredSeriesResult(
                ok=False,
                series_id=series_id,
                used_url=res.url,
                points=[],
                error=f"unexpected CSV header: {reader.fieldnames}",
                source_label="FRED fredgraph.csv (public)" + cache_note,
            )

        # FRED returns either "DATE,{series}" or "observation_date,{series}" depending on endpoint/redirects.
        date_col = reader.fieldnames[0]
        value_col = reader.fieldnames[1]

        for row in reader:
            d = _parse_date(str(row.get(date_col, "")))
            if not d:
                continue
            raw_v = str(row.get(value_col or series_id, "")).strip()
            if raw_v in (".", ""):
                continue
            try:
                fv = float(raw_v)
            except ValueError:
                continue
            pts.append(FredPoint(d=d, value=fv))

        pts.sort(key=lambda x: x.d)
        if len(pts) < 2:
            return FredSeriesResult(
                ok=False,
                series_id=series_id,
                used_url=res.url,
                points=[],
                error="insufficient points",
                source_label="FRED fredgraph.csv (public)" + cache_note,
            )
        if limit and len(pts) > limit:
            pts = pts[-limit:]

        return FredSeriesResult(ok=True, series_id=series_id, used_url=res.url, points=pts, error=None, source_label="FRED fredgraph.csv (public)" + cache_note)
    except Exception as exc:  # noqa: BLE001
        return FredSeriesResult(
            ok=False,
            series_id=series_id,
            used_url=res.url,
            points=[],
            error=f"parse error: {exc}",
            source_label="FRED fredgraph.csv (public)" + cache_note,
        )
