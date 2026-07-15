from __future__ import annotations

import csv
from dataclasses import dataclass
from datetime import date, datetime
from pathlib import Path
from typing import Optional


@dataclass(frozen=True)
class LocalSeriesResult:
    ok: bool
    asset: str
    points: list[tuple[date, float]]
    error: Optional[str]
    source_label: str
    is_proxy: bool


def _parse_date(s: str) -> Optional[date]:
    s = (s or "").strip()
    if not s:
        return None
    for fmt in ("%Y-%m-%d", "%Y/%m/%d"):
        try:
            return datetime.strptime(s, fmt).date()
        except ValueError:
            continue
    return None


def load_local_series_csv(path: str, asset_name: str) -> LocalSeriesResult:
    p = Path(path)
    if not p.exists():
        return LocalSeriesResult(
            ok=False,
            asset=asset_name,
            points=[],
            error=f"missing file: {path}",
            source_label="Local CSV (user-provided)",
            is_proxy=True,
        )
    try:
        pts: list[tuple[date, float]] = []
        with p.open("r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                a = (row.get("asset") or row.get("Asset") or "").strip()
                if a and a != asset_name:
                    continue
                d = _parse_date(row.get("date") or row.get("Date") or "")
                v = row.get("value") or row.get("Value") or ""
                if not d or not str(v).strip():
                    continue
                try:
                    fv = float(str(v).replace(",", ""))
                except ValueError:
                    continue
                pts.append((d, fv))
        pts.sort(key=lambda x: x[0])
        if len(pts) < 2:
            return LocalSeriesResult(
                ok=False,
                asset=asset_name,
                points=[],
                error="insufficient rows",
                source_label="Local CSV (user-provided)",
                is_proxy=True,
            )
        return LocalSeriesResult(ok=True, asset=asset_name, points=pts, error=None, source_label="Local CSV (user-provided)", is_proxy=True)
    except Exception as exc:  # noqa: BLE001
        return LocalSeriesResult(
            ok=False,
            asset=asset_name,
            points=[],
            error=str(exc),
            source_label="Local CSV (user-provided)",
            is_proxy=True,
        )

