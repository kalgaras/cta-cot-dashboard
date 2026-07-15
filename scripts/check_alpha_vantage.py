from __future__ import annotations

import asyncio
import os
import sys
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

from src.config import load_settings  # noqa: E402
from src.sources.alpha_vantage import fetch_daily_adjusted  # noqa: E402


def _load_env_file() -> None:
    env_file = Path(os.getenv("ENV_FILE", ROOT_DIR / ".env"))
    if not env_file.exists():
        return
    for line in env_file.read_text(encoding="utf-8").splitlines():
        raw = line.strip()
        if not raw or raw.startswith("#") or "=" not in raw:
            continue
        key, value = raw.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


async def _amain() -> int:
    _load_env_file()
    settings = load_settings()
    symbols = ["SPY", "DBMF", "KMLM", "CTA", "IWM", "VGK", "GLD"]
    print("Alpha Vantage quote fallback check")
    print("----------------------------------")
    if not settings.alpha_vantage_api_key:
        print("FAIL missing ALPHA_VANTAGE_API_KEY")
        return 1
    if settings.alpha_vantage_api_key in {"YOUR_KEY_HERE", "demo", "..."}:
        print("FAIL placeholder ALPHA_VANTAGE_API_KEY; set your real key")
        return 1

    ok_count = 0
    for symbol in symbols:
        result = await fetch_daily_adjusted(symbol, timeout_s=settings.http_timeout_s, api_key=settings.alpha_vantage_api_key)
        if result.ok:
            ok_count += 1
            last = result.bars[-1]
            print(f"OK   {symbol:5} {last.d} {last.close:.2f} {result.source_label}")
        else:
            print(f"FAIL {symbol:5} {result.error}")
        await asyncio.sleep(1.2)
    print("----------------------------------")
    print(f"usable: {ok_count}/{len(symbols)}")
    return 0 if ok_count >= 4 else 1


def main() -> int:
    return asyncio.run(_amain())


if __name__ == "__main__":
    raise SystemExit(main())
