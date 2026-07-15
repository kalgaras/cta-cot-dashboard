from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Optional

import os

from src.config import Settings
from src.report import Report


@dataclass(frozen=True)
class SendResult:
    ok: bool
    error: Optional[str]
    used_session_path: Optional[str]
    used_target: Optional[str]


def _session_exists(path: str) -> bool:
    try:
        p = Path(path)
        if p.exists():
            return True
        # Telethon may append .session automatically; check both.
        if not str(path).endswith(".session") and Path(str(path) + ".session").exists():
            return True
    except Exception:
        return False
    return False


def _chunk_message(text: str, limit: int = 3500) -> list[str]:
    # Telegram has a message length limit (~4096). Keep a safety margin and split on paragraph boundaries.
    s = (text or "").strip()
    if len(s) <= limit:
        return [s]
    parts: list[str] = []
    while s:
        if len(s) <= limit:
            parts.append(s)
            break
        cut = s.rfind("\n\n", 0, limit)
        if cut < 500:
            cut = s.rfind("\n", 0, limit)
        if cut < 100:
            cut = limit
        parts.append(s[:cut].rstrip())
        s = s[cut:].lstrip()
    return [p for p in parts if p]


async def _send_via_telethon(settings: Settings, report: Report) -> SendResult:
    try:
        from telethon import TelegramClient  # type: ignore
    except Exception as exc:  # noqa: BLE001
        return SendResult(ok=False, error=f"telethon not available: {exc}", used_session_path=None, used_target=None)

    if settings.telegram_api_id is None or settings.telegram_api_hash is None:
        return SendResult(ok=False, error="missing api_id/api_hash", used_session_path=None, used_target=None)

    session_path = settings.telegram_session_path
    target = settings.telegram_target_chat
    client = None
    try:
        # In some sandboxed environments, outbound sockets are blocked and Telethon will retry many times.
        # Keep retries low so the daily job fails fast and prints a readable report.
        client = TelegramClient(
            session_path,
            settings.telegram_api_id,
            settings.telegram_api_hash,
            connection_retries=1,
            retry_delay=1,
        )
        await client.connect()
        if not await client.is_user_authorized():
            return SendResult(
                ok=False,
                error=f"telethon session not authorized (session exists={_session_exists(session_path)})",
                used_session_path=session_path,
                used_target=target,
            )
        entity = await client.get_entity(target)
        for msg in _chunk_message(report.body):
            await client.send_message(entity, msg)
        return SendResult(ok=True, error=None, used_session_path=session_path, used_target=target)
    except Exception as exc:  # noqa: BLE001
        msg = str(exc)
        if "too many values to unpack (expected 5)" in msg:
            msg = (
                msg
                + " (session schema mismatch 의심: Telethon 버전 불일치 가능. telethon 업그레이드 또는 세션 재생성 필요)"
            )
        return SendResult(ok=False, error=msg, used_session_path=session_path, used_target=target)
    finally:
        if client is not None:
            try:
                await client.disconnect()
            except Exception:
                pass


def _print_missing_setup(report: Report, settings: Settings) -> None:
    print(report.body)
    print("\n[TELEGRAM] 전송 설정을 찾지 못해 출력으로 대체했습니다.")
    if report.missing_telegram_setup:
        print("[MISSING] " + ", ".join(report.missing_telegram_setup))
    print("[HINT] 우선순위: TELEGRAM_API_ID/TELEGRAM_API_HASH 또는 credentials JSON, 그리고 TELEGRAM_TARGET_CHAT.")
    print(f"[HINT] session 후보: {settings.telegram_session_path} (존재={_session_exists(settings.telegram_session_path)})")
    print(f"[HINT] credentials 후보: {settings.telegram_credentials_path} (존재={Path(settings.telegram_credentials_path).exists()})")


def _persist_report(report: Report) -> Optional[Path]:
    try:
        stamp = datetime.now().astimezone().strftime("%Y%m%d")
        out_dir = Path("data")
        out_dir.mkdir(parents=True, exist_ok=True)
        out_path = out_dir / f"last_report_{stamp}.txt"
        out_path.write_text(report.body + "\n", encoding="utf-8")
        # Convenience symlink/copy for tooling that expects a stable filename.
        latest_path = out_dir / "last_report_latest.txt"
        try:
            latest_path.write_text(report.body + "\n", encoding="utf-8")
        except Exception:
            pass
        return out_path
    except Exception:
        return None


async def send_or_print_report(settings: Settings, report: Report) -> None:
    persisted = _persist_report(report)
    if persisted is not None:
        print(f"[REPORT] saved: {persisted}")

    delivery_mode = (os.getenv("REPORT_DELIVERY") or "dashboard").strip().lower()
    if delivery_mode in {"dashboard", "file", "none"} or (os.getenv("DISABLE_TELEGRAM") or "").strip() == "1":
        print(report.body)
        if persisted is not None:
            print("\n[DELIVERY] dashboard/file mode → 텔레그램 전송 생략")
            print("[DASHBOARD] run: python3 scripts/dashboard_server.py")
        else:
            print("\n[DELIVERY] dashboard/file mode → 텔레그램 전송 생략, 리포트 저장 실패")
        return

    # Prefer Telethon session/credentials workflow; Bot API is intentionally not used unless added later.
    if report.missing_telegram_setup:
        _print_missing_setup(report, settings)
        return

    # Allow hard-disable sending for debug
    if (os.getenv("TELEGRAM_DRY_RUN") or "").strip() == "1":
        print(report.body)
        print("\n[TELEGRAM] TELEGRAM_DRY_RUN=1 → 전송 생략")
        return

    res = await _send_via_telethon(settings, report)
    if res.ok:
        print(f"[TELEGRAM] sent to '{res.used_target}' via session '{res.used_session_path}'")
        return

    print(report.body)
    print("\n[TELEGRAM] 전송 실패로 출력으로 대체했습니다.")
    print(f"[ERROR] {res.error}")
    if res.error and (
        "Operation not permitted" in res.error
        or "PermissionError" in res.error
        or "Connection to Telegram failed" in res.error
    ):
        print("[HINT] 현재 실행 환경에서 네트워크/소켓 권한이 차단된 것으로 보입니다. (서버/로컬 cron에서 실행 권장)")
    print(f"[HINT] target={settings.telegram_target_chat}")
    print(f"[HINT] session={settings.telegram_session_path} (존재={_session_exists(settings.telegram_session_path)})")
    print(f"[HINT] credentials={settings.telegram_credentials_path} (존재={Path(settings.telegram_credentials_path).exists()})")
