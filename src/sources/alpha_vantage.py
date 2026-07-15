from __future__ import annotations

import json
import asyncio
import time
from dataclasses import dataclass
from datetime import date, datetime
from typing import Optional

from src.sources.http import fetch_text


_ALPHA_LOCK: Optional[asyncio.Lock] = None
_ALPHA_LOCK_LOOP_ID: Optional[int] = None
_LAST_ALPHA_CALL_TS = 0.0


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


def _parse_date(value: str) -> Optional[date]:
    try:
        return datetime.strptime(value, "%Y-%m-%d").date()
    except ValueError:
        return None


def _alpha_lock() -> asyncio.Lock:
    global _ALPHA_LOCK, _ALPHA_LOCK_LOOP_ID

    loop_id = id(asyncio.get_running_loop())
    if _ALPHA_LOCK is None or _ALPHA_LOCK_LOOP_ID != loop_id:
        _ALPHA_LOCK = asyncio.Lock()
        _ALPHA_LOCK_LOOP_ID = loop_id
    return _ALPHA_LOCK


async def fetch_daily_adjusted(symbol: str, timeout_s: float, api_key: Optional[str]) -> SeriesResult:
    global _LAST_ALPHA_CALL_TS

    key = (api_key or "").strip()
    if not key:
        return SeriesResult(
            ok=False,
            symbol=symbol,
            used_url=None,
            bars=[],
            error="missing ALPHA_VANTAGE_API_KEY",
            source_label="Alpha Vantage (keyed fallback)",
            is_proxy=True,
        )

    url = (
        "https://www.alphavantage.co/query"
        f"?function=TIME_SERIES_DAILY&symbol={symbol}&outputsize=compact&apikey={key}"
    )
    async with _alpha_lock():
        elapsed = time.monotonic() - _LAST_ALPHA_CALL_TS
        if elapsed < 1.2:
            await asyncio.sleep(1.2 - elapsed)
        _LAST_ALPHA_CALL_TS = time.monotonic()
        res = await fetch_text(url, timeout_s=timeout_s)
    cache_note = ""
    if (res.content_type or "").lower().startswith("cached"):
        cache_note = " [cache]"
    if not res.ok or not res.text:
        return SeriesResult(
            ok=False,
            symbol=symbol,
            used_url=res.url,
            bars=[],
            error=res.error or "fetch failed",
            source_label="Alpha Vantage daily (keyed fallback)" + cache_note,
            is_proxy=True,
        )

    try:
        payload = json.loads(res.text)
        if payload.get("Note") or payload.get("Information") or payload.get("Error Message"):
            msg = payload.get("Note") or payload.get("Information") or payload.get("Error Message")
            return SeriesResult(
                ok=False,
                symbol=symbol,
                used_url=res.url,
                bars=[],
                error=str(msg),
                source_label="Alpha Vantage daily (keyed fallback)" + cache_note,
                is_proxy=True,
            )
        series = payload.get("Time Series (Daily)") or {}
        bars: list[DailyBar] = []
        for ds, row in series.items():
            d = _parse_date(str(ds))
            raw = row.get("4. close") or row.get("5. adjusted close")
            if not d or raw is None:
                continue
            try:
                bars.append(DailyBar(d=d, close=float(raw)))
            except ValueError:
                continue
        bars.sort(key=lambda x: x.d)
        if len(bars) < 2:
            return SeriesResult(
                ok=False,
                symbol=symbol,
                used_url=res.url,
                bars=[],
                error="insufficient bars",
                source_label="Alpha Vantage daily (keyed fallback)" + cache_note,
                is_proxy=True,
            )
        return SeriesResult(
            ok=True,
            symbol=symbol,
            used_url=res.url,
            bars=bars,
            error=None,
            source_label="Alpha Vantage daily (keyed fallback)" + cache_note,
            is_proxy=True,
        )
    except Exception as exc:  # noqa: BLE001
        return SeriesResult(
            ok=False,
            symbol=symbol,
            used_url=res.url,
            bars=[],
            error=f"parse error: {exc}",
            source_label="Alpha Vantage daily (keyed fallback)" + cache_note,
            is_proxy=True,
        )
