from __future__ import annotations

import json
import os
from dataclasses import dataclass
from typing import Optional


@dataclass(frozen=True)
class Settings:
    telegram_api_id: Optional[int]
    telegram_api_hash: Optional[str]
    telegram_target_chat: str
    telegram_session_path: str
    telegram_credentials_path: str
    http_timeout_s: float
    fred_api_key: Optional[str]
    alpha_vantage_api_key: Optional[str]
    cta_proxy_csv_path: str


def _parse_int(value: Optional[str]) -> Optional[int]:
    if value is None or not str(value).strip():
        return None
    try:
        return int(str(value).strip())
    except ValueError:
        return None


def _load_credentials_json(path: str) -> dict:
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return {}
    except Exception:
        return {}


def load_settings() -> Settings:
    telegram_session_path = os.getenv(
        "TELEGRAM_SESSION_PATH", "/Users/jaycom/.openclaw/workspace/telegram_session.session"
    )
    telegram_credentials_path = os.getenv(
        "TELEGRAM_CREDENTIALS_PATH", "/Users/jaycom/.openclaw/workspace/telegram_credentials.json"
    )
    telegram_target_chat = os.getenv("TELEGRAM_TARGET_CHAT", "제이팍 저장소").strip() or "제이팍 저장소"

    api_id = _parse_int(os.getenv("TELEGRAM_API_ID"))
    api_hash = (os.getenv("TELEGRAM_API_HASH") or "").strip() or None

    if api_id is None or api_hash is None:
        creds = _load_credentials_json(telegram_credentials_path)
        api_id = api_id if api_id is not None else _parse_int(str(creds.get("api_id") or creds.get("TELEGRAM_API_ID") or ""))
        api_hash = api_hash if api_hash is not None else (str(creds.get("api_hash") or creds.get("TELEGRAM_API_HASH") or "").strip() or None)
    else:
        creds = _load_credentials_json(telegram_credentials_path)

    fred_api_key = (os.getenv("FRED_API_KEY") or "").strip() or None
    if fred_api_key is None:
        fred_api_key = (str(creds.get("fred_api_key") or creds.get("FRED_API_KEY") or "").strip() or None) if isinstance(creds, dict) else None

    alpha_vantage_api_key = (os.getenv("ALPHA_VANTAGE_API_KEY") or "").strip() or None
    if alpha_vantage_api_key is None:
        alpha_vantage_api_key = (
            str(creds.get("alpha_vantage_api_key") or creds.get("ALPHA_VANTAGE_API_KEY") or "").strip() or None
        ) if isinstance(creds, dict) else None

    http_timeout_s = float(os.getenv("HTTP_TIMEOUT_S", "20").strip() or "20")
    cta_proxy_csv_path = os.getenv("CTA_PROXY_CSV_PATH", "data/cta_proxies.csv").strip() or "data/cta_proxies.csv"

    return Settings(
        telegram_api_id=api_id,
        telegram_api_hash=api_hash,
        telegram_target_chat=telegram_target_chat,
        telegram_session_path=telegram_session_path,
        telegram_credentials_path=telegram_credentials_path,
        http_timeout_s=http_timeout_s,
        fred_api_key=fred_api_key,
        alpha_vantage_api_key=alpha_vantage_api_key,
        cta_proxy_csv_path=cta_proxy_csv_path,
    )
