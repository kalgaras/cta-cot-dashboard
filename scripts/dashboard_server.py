from __future__ import annotations

import json
import mimetypes
import re
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Optional
from urllib.parse import parse_qs, urlparse


ROOT_DIR = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT_DIR / "data"
DASHBOARD_DIR = ROOT_DIR / "dashboard"
LATEST_NAME = "last_report_latest.txt"


@dataclass(frozen=True)
class ReportMeta:
    name: str
    title: str
    date: str
    mtime: str
    size: int
    is_latest_pointer: bool


def _read_report(path: Path) -> str:
    return path.read_text(encoding="utf-8").strip()


def _report_title(body: str) -> str:
    for line in body.splitlines():
        line = line.strip()
        if line:
            return line
    return "리포트 제목 없음"


def _report_date(path: Path, body: str) -> str:
    for token in path.stem.split("_"):
        if len(token) == 8 and token.isdigit():
            return f"{token[:4]}-{token[4:6]}-{token[6:]}"
    match = re.search(r"\b20\d{2}-\d{2}-\d{2}\b", body)
    if match:
        return match.group(0)
    return "확인 제한"


def _report_meta(path: Path) -> ReportMeta:
    body = _read_report(path)
    stat = path.stat()
    mtime = datetime.fromtimestamp(stat.st_mtime, tz=timezone.utc).astimezone().isoformat(timespec="seconds")
    return ReportMeta(
        name=path.name,
        title=_report_title(body),
        date=_report_date(path, body),
        mtime=mtime,
        size=stat.st_size,
        is_latest_pointer=path.name == LATEST_NAME,
    )


def _report_paths() -> list[Path]:
    paths = [p for p in DATA_DIR.glob("last_report_*.txt") if p.is_file()]
    return sorted(paths, key=lambda p: p.stat().st_mtime, reverse=True)


def _safe_report_path(name: Optional[str]) -> Path:
    if not name:
        return DATA_DIR / LATEST_NAME
    path = (DATA_DIR / Path(name).name).resolve()
    if DATA_DIR.resolve() not in path.parents and path != DATA_DIR.resolve():
        raise ValueError("invalid report path")
    if not path.name.startswith("last_report_") or path.suffix != ".txt":
        raise ValueError("invalid report name")
    return path


class DashboardHandler(BaseHTTPRequestHandler):
    server_version = "CTADashboard/1.0"

    def _send_json(self, payload: object, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _send_file(self, path: Path) -> None:
        if not path.exists() or not path.is_file():
            self.send_error(404)
            return
        body = path.read_bytes()
        content_type = mimetypes.guess_type(str(path))[0] or "application/octet-stream"
        if path.suffix in {".html", ".css", ".js"}:
            content_type += "; charset=utf-8"
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:  # noqa: N802
        parsed = urlparse(self.path)
        if parsed.path in {"/", "/dashboard"}:
            self._send_file(DASHBOARD_DIR / "index.html")
            return

        if parsed.path == "/api/reports":
            reports = [asdict(_report_meta(path)) for path in _report_paths()]
            self._send_json({"reports": reports})
            return

        if parsed.path == "/api/report":
            params = parse_qs(parsed.query)
            name = (params.get("name") or [None])[0]
            try:
                path = _safe_report_path(name)
            except ValueError as exc:
                self._send_json({"error": str(exc)}, status=400)
                return
            if not path.exists():
                self._send_json({"error": "report not found"}, status=404)
                return
            body = _read_report(path)
            self._send_json({"meta": asdict(_report_meta(path)), "body": body})
            return

        self.send_error(404)


def main() -> int:
    host = "127.0.0.1"
    port = 8765
    server = ThreadingHTTPServer((host, port), DashboardHandler)
    print(f"CTA/COT dashboard: http://{host}:{port}")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
