from __future__ import annotations

import asyncio
import sys
from datetime import datetime, timezone

from src.config import load_settings
from src.report import build_report
from src.telegram_send import send_or_print_report


def _now_iso_local() -> str:
    # Use local time for display; keep ISO-like string.
    return datetime.now().astimezone().strftime("%Y-%m-%d %H:%M:%S %Z")


async def _amain() -> int:
    settings = load_settings()
    report = await build_report(settings)
    await send_or_print_report(settings, report)
    return 0


def main() -> int:
    try:
        return asyncio.run(_amain())
    except KeyboardInterrupt:
        print("\nInterrupted.", file=sys.stderr)
        return 130
    except Exception as exc:  # noqa: BLE001
        print(f"[ERROR] {exc}", file=sys.stderr)
        print(f"[RUNTIME] {_now_iso_local()}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())

