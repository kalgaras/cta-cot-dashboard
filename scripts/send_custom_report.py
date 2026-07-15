from __future__ import annotations

import asyncio
import sys
from pathlib import Path

# Ensure repo root is on sys.path when invoked as a script.
_ROOT = Path(__file__).resolve().parents[1]
if str(_ROOT) not in sys.path:
    sys.path.insert(0, str(_ROOT))

from src.config import load_settings  # noqa: E402
from src.report import Report  # noqa: E402
from src.telegram_send import send_or_print_report  # noqa: E402


def _read_text(path: str) -> str:
    p = Path(path)
    return p.read_text(encoding="utf-8")


async def _amain() -> int:
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/send_custom_report.py <report_text_file>", file=sys.stderr)
        return 2
    report_path = sys.argv[1]
    body = _read_text(report_path).rstrip() + "\n"
    report = Report(title="custom", body=body, missing_telegram_setup=[])
    settings = load_settings()
    await send_or_print_report(settings, report)
    return 0


def main() -> int:
    try:
        return asyncio.run(_amain())
    except KeyboardInterrupt:
        return 130


if __name__ == "__main__":
    raise SystemExit(main())
