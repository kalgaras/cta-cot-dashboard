from __future__ import annotations

import asyncio
import json
import os
import socket
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

import httpx


ROOT_DIR = Path(__file__).resolve().parents[1]
OUT_PATH = ROOT_DIR / "dashboard" / "data" / "network_status.json"


def _load_env_file() -> None:
    env_file = Path(os.getenv("ENV_FILE", ROOT_DIR / ".env"))
    if not env_file.exists():
        return
    for line in env_file.read_text(encoding="utf-8").splitlines():
        raw = line.strip()
        if not raw or raw.startswith("#") or "=" not in raw:
            continue
        key, value = raw.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        os.environ.setdefault(key, value)


def _checks() -> list[tuple[str, str, float]]:
    alpha_key = (os.getenv("ALPHA_VANTAGE_API_KEY") or "demo").strip() or "demo"
    if alpha_key in {"YOUR_KEY_HERE", "..."}:
        alpha_key = "demo"
    fred_key = (os.getenv("FRED_API_KEY") or "").strip()
    fred_url = "https://fred.stlouisfed.org/graph/fredgraph.csv?id=DGS10"
    if fred_key:
        fred_url = f"https://api.stlouisfed.org/fred/series/observations?series_id=DGS10&api_key={fred_key}&file_type=json&sort_order=desc&limit=2"
    fred_timeout = float((os.getenv("FRED_CHECK_TIMEOUT_S") or "20").strip() or "20")
    return [
        ("Yahoo Finance", "https://query1.finance.yahoo.com/v8/finance/chart/SPY?range=5d&interval=1d", 10.0),
        ("FRED", fred_url, fred_timeout),
        ("CFTC", "https://www.cftc.gov/MarketReports/CommitmentsofTraders/HistoricalCompressed/index.htm", 10.0),
        ("Stooq", "https://stooq.com/q/d/l/?s=spy.us&i=d", 10.0),
        ("Alpha Vantage", f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=SPY&apikey={alpha_key}", 10.0),
    ]


@dataclass(frozen=True)
class CheckResult:
    name: str
    host: str
    dns_ok: bool
    http_ok: bool
    detail: str


async def _dns_ok(host: str) -> tuple[bool, str]:
    loop = asyncio.get_running_loop()
    try:
        await loop.getaddrinfo(host, 443, proto=socket.IPPROTO_TCP)
        return True, "dns ok"
    except Exception as exc:  # noqa: BLE001
        return False, f"{type(exc).__name__}: {exc}"


async def _check(name: str, url: str, timeout_s: float) -> CheckResult:
    host = urlparse(url).hostname or url
    dns_ok, dns_detail = await _dns_ok(host)
    if not dns_ok:
        return CheckResult(name=name, host=host, dns_ok=False, http_ok=False, detail=dns_detail)

    try:
        async with httpx.AsyncClient(timeout=timeout_s, follow_redirects=True) as client:
            response = await client.get(url, headers={"User-Agent": "Mozilla/5.0"})
        content_type = response.headers.get("content-type", "unknown")
        ok = response.status_code < 400
        return CheckResult(
            name=name,
            host=host,
            dns_ok=True,
            http_ok=ok,
            detail=f"HTTP {response.status_code} {content_type}",
        )
    except Exception as exc:  # noqa: BLE001
        return CheckResult(name=name, host=host, dns_ok=True, http_ok=False, detail=f"{type(exc).__name__}: {exc}")


async def _amain() -> int:
    _load_env_file()
    checks = _checks()
    results = await asyncio.gather(*[_check(name, url, timeout_s) for name, url, timeout_s in checks])
    print("CTA/COT data-source network check")
    print("---------------------------------")
    ok_count = 0
    for result in results:
        status = "OK" if result.dns_ok and result.http_ok else "FAIL"
        if status == "OK":
            ok_count += 1
        print(f"{status:4} {result.name:14} {result.host:34} {result.detail}")
    print("---------------------------------")
    print(f"reachable: {ok_count}/{len(results)}")
    try:
        OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
        OUT_PATH.write_text(
            json.dumps(
                {
                    "checkedAt": datetime.now().astimezone().isoformat(timespec="seconds"),
                    "reachable": ok_count,
                    "total": len(results),
                    "alphaVantageKeyConfigured": bool((os.getenv("ALPHA_VANTAGE_API_KEY") or "").strip())
                    and (os.getenv("ALPHA_VANTAGE_API_KEY") or "").strip() not in {"YOUR_KEY_HERE", "demo", "..."},
                    "results": [result.__dict__ for result in results],
                },
                ensure_ascii=False,
                indent=2,
            ),
            encoding="utf-8",
        )
    except Exception:
        pass
    return 0 if ok_count >= 3 else 1


def main() -> int:
    return asyncio.run(_amain())


if __name__ == "__main__":
    raise SystemExit(main())
