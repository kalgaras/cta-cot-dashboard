from __future__ import annotations

from dataclasses import dataclass
from typing import Optional

import httpx
import json
import time
import hashlib
import base64
from pathlib import Path
from typing import Any


@dataclass(frozen=True)
class FetchResult:
    ok: bool
    url: str
    text: Optional[str]
    error: Optional[str]
    status_code: Optional[int] = None
    content_type: Optional[str] = None


@dataclass(frozen=True)
class FetchBytesResult:
    ok: bool
    url: str
    content: Optional[bytes]
    error: Optional[str]


def _cache_dir() -> Path:
    cache_dir = Path("data/.cache")
    cache_dir.mkdir(parents=True, exist_ok=True)
    return cache_dir


def _stable_cache_path(url: str) -> Path:
    return _cache_dir() / (hashlib.sha256(url.encode("utf-8")).hexdigest()[:20] + ".json")


def _legacy_cache_path(url: str) -> Path:
    return _cache_dir() / (str(abs(hash(url))) + ".json")


def _load_cached_text(url: str, now: float, cache_ttl_s: float) -> tuple[Optional[dict[str, Any]], Optional[dict[str, Any]]]:
    fresh_payload: Optional[dict[str, Any]] = None
    stale_payload: Optional[dict[str, Any]] = None
    seen: set[Path] = set()
    candidates = [_stable_cache_path(url), _legacy_cache_path(url)]
    candidates.extend(_cache_dir().glob("*.json"))

    for path in candidates:
        if path in seen or not path.exists():
            continue
        seen.add(path)
        try:
            payload = json.loads(path.read_text(encoding="utf-8"))
        except Exception:
            continue
        if payload.get("text") is None:
            continue
        cached_url = str(payload.get("url") or "")
        if cached_url and cached_url != url:
            continue
        # Legacy cache entries did not include URL, so only trust direct legacy/stable path matches.
        if not cached_url and path not in {_stable_cache_path(url), _legacy_cache_path(url)}:
            continue
        ts = float(payload.get("ts") or 0)
        age_s = max(0.0, now - ts)
        if age_s <= cache_ttl_s:
            fresh_payload = payload
            break
        if stale_payload is None or ts > float(stale_payload.get("ts") or 0):
            stale_payload = payload
    return fresh_payload, stale_payload


def _write_cached_text(url: str, text: str, content_type: Optional[str], ts: Optional[float] = None) -> None:
    try:
        _stable_cache_path(url).write_text(
            json.dumps(
                {
                    "ts": time.time() if ts is None else ts,
                    "url": url,
                    "text": text,
                    "content_type": content_type,
                },
                ensure_ascii=False,
            ),
            encoding="utf-8",
        )
    except Exception:
        pass


def _one_line(value: str, limit: int = 180) -> str:
    cleaned = " ".join(str(value or "").split())
    if len(cleaned) <= limit:
        return cleaned
    return cleaned[: max(0, limit - 1)] + "…"


def _cached_fetch_result(url: str, payload: dict[str, Any], stale: bool) -> FetchResult:
    ts = float(payload.get("ts") or 0)
    age_s = max(0.0, time.time() - ts)
    content_type = str(payload.get("content_type") or "cached")
    if stale:
        content_type = f"cached-stale age_s={int(age_s)}"
    return FetchResult(
        ok=True,
        url=url,
        text=str(payload.get("text")),
        error=None,
        status_code=200,
        content_type=content_type,
    )


def _load_cached_bytes(url: str) -> Optional[bytes]:
    try:
        path = _cache_dir() / (hashlib.sha256(("bytes:" + url).encode("utf-8")).hexdigest()[:20] + ".json")
        if not path.exists():
            return None
        payload = json.loads(path.read_text(encoding="utf-8"))
        if payload.get("url") != url or not payload.get("content_b64"):
            return None
        return base64.b64decode(str(payload.get("content_b64")))
    except Exception:
        return None


def _write_cached_bytes(url: str, content: bytes, ts: Optional[float] = None) -> None:
    try:
        path = _cache_dir() / (hashlib.sha256(("bytes:" + url).encode("utf-8")).hexdigest()[:20] + ".json")
        path.write_text(
            json.dumps(
                {
                    "ts": time.time() if ts is None else ts,
                    "url": url,
                    "content_b64": base64.b64encode(content).decode("ascii"),
                },
                ensure_ascii=False,
            ),
            encoding="utf-8",
        )
    except Exception:
        pass


async def fetch_text(url: str, timeout_s: float) -> FetchResult:
    try:
        # Simple on-disk cache to reduce rate-limit issues for public proxy endpoints (e.g., Yahoo chart).
        # TTL is intentionally short to keep "daily" freshness.
        cache_ttl_s = 60 * 30  # 30 minutes
        now = time.time()
        stale_payload: Optional[dict] = None
        try:
            fresh_payload, stale_payload = _load_cached_text(url, now, cache_ttl_s)
            if fresh_payload is not None:
                return _cached_fetch_result(url, fresh_payload, stale=False)
        except Exception:
            pass

        headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
            "Accept": "text/csv,text/plain,application/json,text/html;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9,ko;q=0.8",
            "Referer": "https://fred.stlouisfed.org/",
        }
        try:
            client = httpx.AsyncClient(timeout=timeout_s, follow_redirects=True, http2=True, headers=headers)
        except Exception:
            client = httpx.AsyncClient(timeout=timeout_s, follow_redirects=True, http2=False, headers=headers)

        async with client:
            try:
                resp = await client.get(url)
            except Exception as exc:
                # If http2 support is missing, retry without it.
                msg = str(exc)
                if "http2=True" in msg and "h2" in msg:
                    async with httpx.AsyncClient(timeout=timeout_s, follow_redirects=True, http2=False, headers=headers) as c2:
                        resp = await c2.get(url)
                else:
                    raise
            ct = resp.headers.get("content-type")
            if resp.status_code >= 400:
                snippet = ""
                try:
                    snippet = _one_line(resp.text[:300])
                except Exception:
                    snippet = ""
                if stale_payload is not None and resp.status_code in {403, 429, 500, 502, 503, 504}:
                    return _cached_fetch_result(url, stale_payload, stale=True)
                return FetchResult(
                    ok=False,
                    url=str(resp.url),
                    text=None,
                    error=_one_line(f"HTTP {resp.status_code} {ct or ''} {snippet}".strip()),
                    status_code=resp.status_code,
                    content_type=ct,
                )
            out = FetchResult(ok=True, url=str(resp.url), text=resp.text, error=None, status_code=resp.status_code, content_type=ct)
            _write_cached_text(url, resp.text, ct, ts=now)
            return out
    except Exception as exc:  # noqa: BLE001
        # If network/DNS is blocked, prefer returning a stale cache payload (explicitly labeled).
        try:
            if "stale_payload" in locals() and stale_payload and stale_payload.get("text") is not None:
                return _cached_fetch_result(url, stale_payload, stale=True)
        except Exception:
            pass
        err = _one_line(f"{type(exc).__name__}: {exc}".strip())
        return FetchResult(ok=False, url=url, text=None, error=err, status_code=None, content_type=None)


async def quick_dns_check(host: str, timeout_s: float = 2.0) -> tuple[bool, str]:
    # Best-effort diagnostics for "why everything is NA" situations.
    import asyncio
    import socket

    loop = asyncio.get_running_loop()
    try:
        fut = loop.getaddrinfo(host, None, proto=socket.IPPROTO_TCP)
        res = await asyncio.wait_for(fut, timeout=timeout_s)
        if res:
            return True, "ok"
        return False, "no result"
    except Exception as exc:  # noqa: BLE001
        return False, f"{type(exc).__name__}: {exc}"


async def fetch_bytes(url: str, timeout_s: float) -> FetchBytesResult:
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.9,ko;q=0.8",
        }
        try:
            client = httpx.AsyncClient(timeout=timeout_s, follow_redirects=True, http2=True, headers=headers)
        except Exception:
            client = httpx.AsyncClient(timeout=timeout_s, follow_redirects=True, http2=False, headers=headers)
        async with client:
            try:
                resp = await client.get(url)
            except Exception as exc:
                msg = str(exc)
                if "http2=True" in msg and "h2" in msg:
                    async with httpx.AsyncClient(timeout=timeout_s, follow_redirects=True, http2=False, headers=headers) as c2:
                        resp = await c2.get(url)
                else:
                    raise
            resp.raise_for_status()
            _write_cached_bytes(url, resp.content)
            return FetchBytesResult(ok=True, url=str(resp.url), content=resp.content, error=None)
    except Exception as exc:  # noqa: BLE001
        cached = _load_cached_bytes(url)
        if cached:
            return FetchBytesResult(ok=True, url=url, content=cached, error=None)
        err = f"{type(exc).__name__}: {exc}".strip()
        return FetchBytesResult(ok=False, url=url, content=None, error=err)


async def fetch_text_via_curl(url: str, timeout_s: float) -> FetchResult:
    # Last-resort fallback when Python TLS/DNS behaves differently than curl on macOS.
    import asyncio

    try:
        proc = await asyncio.create_subprocess_exec(
            "curl",
            "-L",
            "-sS",
            "--max-time",
            str(int(max(1, timeout_s))),
            url,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )
        out_b, err_b = await proc.communicate()
        if proc.returncode != 0:
            return FetchResult(
                ok=False,
                url=url,
                text=None,
                error=_one_line(f"curl rc={proc.returncode}: {err_b.decode('utf-8','replace')}"),
                status_code=None,
                content_type=None,
            )
        text = out_b.decode("utf-8", errors="replace")
        _write_cached_text(url, text, "curl")
        return FetchResult(ok=True, url=url, text=text, error=None, status_code=None, content_type=None)
    except Exception as exc:  # noqa: BLE001
        err = _one_line(f"{type(exc).__name__}: {exc}".strip())
        return FetchResult(ok=False, url=url, text=None, error=err, status_code=None, content_type=None)
