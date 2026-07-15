from __future__ import annotations

import math
from dataclasses import dataclass
from datetime import date
from typing import Iterable, Optional


@dataclass(frozen=True)
class ReturnStats:
    asof: date
    value: float
    d1_pct: Optional[float]
    d3_pct: Optional[float]
    d5_pct: Optional[float]
    d1_z: Optional[float]


def _pct(a: float, b: float) -> Optional[float]:
    if b == 0:
        return None
    return (a / b - 1.0) * 100.0


def _mean(xs: list[float]) -> float:
    return sum(xs) / max(len(xs), 1)


def _stdev(xs: list[float]) -> float:
    if len(xs) < 2:
        return 0.0
    m = _mean(xs)
    v = sum((x - m) ** 2 for x in xs) / (len(xs) - 1)
    return math.sqrt(v)


def compute_return_stats(
    bars: list[tuple[date, float]],
    z_lookback: int = 252,
    z_min_points: int = 60,
) -> Optional[ReturnStats]:
    if len(bars) < 2:
        return None
    bars = sorted(bars, key=lambda x: x[0])
    dates = [d for d, _ in bars]
    closes = [c for _, c in bars]
    asof = dates[-1]
    value = closes[-1]

    d1 = _pct(closes[-1], closes[-2]) if len(closes) >= 2 else None
    d3 = _pct(closes[-1], closes[-4]) if len(closes) >= 4 else None
    d5 = _pct(closes[-1], closes[-6]) if len(closes) >= 6 else None

    d1_z: Optional[float] = None
    if d1 is not None and len(closes) >= z_min_points + 1:
        # Compute historical daily returns (%) excluding the latest return.
        start = max(1, len(closes) - (z_lookback + 1))
        rets = []
        for i in range(start, len(closes) - 1):
            r = _pct(closes[i], closes[i - 1])
            if r is not None:
                rets.append(r)
        if len(rets) >= z_min_points:
            sd = _stdev(rets)
            if sd > 0:
                d1_z = (d1 - _mean(rets)) / sd

    return ReturnStats(asof=asof, value=value, d1_pct=d1, d3_pct=d3, d5_pct=d5, d1_z=d1_z)


def fmt_pct(x: Optional[float]) -> str:
    if x is None:
        return "NA"
    return f"{x:+.2f}%"


def fmt_float(x: Optional[float], nd: int = 2) -> str:
    if x is None:
        return "NA"
    return f"{x:.{nd}f}"


def render_mono_table(headers: list[str], rows: list[list[str]], max_col_width: int = 18) -> str:
    cols = len(headers)
    widths = [len(h) for h in headers]
    for r in rows:
        for i in range(cols):
            widths[i] = min(max(widths[i], len(str(r[i]))), max_col_width)

    def clip(s: str, w: int) -> str:
        s = str(s)
        if len(s) <= w:
            return s.ljust(w)
        return (s[: max(0, w - 1)] + "…") if w >= 2 else s[:w]

    lines = []
    lines.append("  ".join(clip(h, widths[i]) for i, h in enumerate(headers)))
    lines.append("  ".join("-" * widths[i] for i in range(cols)))
    for r in rows:
        lines.append("  ".join(clip(r[i], widths[i]) for i in range(cols)))
    return "```\n" + "\n".join(lines) + "\n```"


def any_true(vals: Iterable[bool]) -> bool:
    return any(vals)

