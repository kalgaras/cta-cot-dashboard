from __future__ import annotations

import json
from dataclasses import dataclass
from datetime import date, datetime, timezone
from typing import Optional

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


def _to_date(ts: int) -> date:
    return datetime.fromtimestamp(ts, tz=timezone.utc).date()


async def fetch_series(symbol: str, timeout_s: float, range_: str = "30d") -> SeriesResult:
    # Unofficial but widely used public endpoint; treat as proxy unless user provides official source.
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?range={range_}&interval=1d"
    res = await fetch_text(url, timeout_s=timeout_s)
    # Basic retry for rate limiting (HTTP 429).
    if (not res.ok) and getattr(res, "status_code", None) == 429:
        import asyncio

        for delay_s in (2.0, 5.0, 10.0):
            await asyncio.sleep(delay_s)
            res = await fetch_text(url, timeout_s=timeout_s)
            if res.ok and res.text:
                break
    if not res.ok or not res.text:
        return SeriesResult(
            ok=False,
            symbol=symbol,
            used_url=res.url,
            bars=[],
            error=res.error or "fetch failed",
            source_label="Yahoo Finance (proxy)",
            is_proxy=True,
        )
    cache_note = ""
    if (res.content_type or "").lower().startswith("cached"):
        cache_note = " [cache]"
    try:
        payload = json.loads(res.text)
        chart = (payload.get("chart") or {})
        err = chart.get("error")
        if err:
            return SeriesResult(
                ok=False,
                symbol=symbol,
                used_url=res.url,
                bars=[],
                error=str(err),
                source_label="Yahoo Finance (proxy)",
                is_proxy=True,
            )
        result = (chart.get("result") or [None])[0] or {}
        ts = result.get("timestamp") or []
        indicators = (result.get("indicators") or {})
        quote = (indicators.get("quote") or [None])[0] or {}
        closes = quote.get("close") or []
        out: list[DailyBar] = []
        for t, c in zip(ts, closes):
            if t is None or c is None:
                continue
            try:
                out.append(DailyBar(d=_to_date(int(t)), close=float(c)))
            except Exception:
                continue
        out.sort(key=lambda x: x.d)
        if len(out) < 2:
            return SeriesResult(
                ok=False,
                symbol=symbol,
                used_url=res.url,
                bars=[],
                error="insufficient bars",
                source_label="Yahoo Finance (proxy)" + cache_note,
                is_proxy=True,
            )
        return SeriesResult(
            ok=True,
            symbol=symbol,
            used_url=res.url,
            bars=out,
            error=None,
            source_label="Yahoo Finance (proxy)" + cache_note,
            is_proxy=True,
        )
    except Exception as exc:  # noqa: BLE001
        return SeriesResult(
            ok=False,
            symbol=symbol,
            used_url=res.url,
            bars=[],
            error=f"parse error: {exc}",
            source_label="Yahoo Finance (proxy)" + cache_note,
            is_proxy=True,
        )
