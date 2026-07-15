from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional


ROOT_DIR = Path(__file__).resolve().parents[1]
REPORT_DIR = ROOT_DIR / "data"
DASHBOARD_DATA_DIR = ROOT_DIR / "dashboard" / "data"
OUT_PATH = DASHBOARD_DATA_DIR / "data.js"
NETWORK_STATUS_PATH = DASHBOARD_DATA_DIR / "network_status.json"


def _read(path: Path) -> str:
    return path.read_text(encoding="utf-8").strip()


def _date_from(path: Path, body: str) -> str:
    for token in path.stem.split("_"):
        if len(token) == 8 and token.isdigit():
            return f"{token[:4]}-{token[4:6]}-{token[6:]}"
    match = re.search(r"CTA 프록시 트리거:\s*[^\n]*\(기준일:\s*(20\d{2}-\d{2}-\d{2})\)", body)
    if match:
        return match.group(1)
    match = re.search(r"\b20\d{2}-\d{2}-\d{2}\b", body)
    return match.group(0) if match else "확인 제한"


def _title(body: str) -> str:
    for line in body.splitlines():
        if line.strip():
            return line.strip()
    return "CTA 포지셔닝 모니터"


def _trigger(title: str) -> str:
    if "재차 발생" in title:
        return "재차 발생"
    if "미발생" in title:
        return "미발생"
    if "발생" in title:
        return "발생"
    if "확인 제한" in title:
        return "확인 제한"
    return "모니터링"


def _regime(body: str) -> str:
    match = re.search(r"국면 판단:\s*([^\n]+)", body)
    if match:
        return match.group(1).strip()
    if "slow deleveraging" in body:
        return "slow deleveraging / exposure reduction"
    if "risk re-leveraging" in body:
        return "risk re-leveraging"
    if "neutral/no trigger" in body:
        return "neutral/no trigger"
    return "확인 제한"


def _line_after(label: str, body: str) -> Optional[str]:
    for line in body.splitlines():
        if label in line:
            return line.strip()
    return None


def _section(body: str, heading: str) -> str:
    marker = heading
    start = body.find(marker)
    if start < 0:
        return ""
    next_match = re.search(r"\n[①②③④⑤⑥⑦⑧]\s", body[start + len(marker) :])
    if not next_match:
        return body[start:].strip()
    end = start + len(marker) + next_match.start()
    return body[start:end].strip()


def _bullets(section: str, limit: int = 4) -> list[str]:
    out: list[str] = []
    for line in section.splitlines():
        s = line.strip()
        if s.startswith("- "):
            out.append(s[2:].strip())
        if len(out) >= limit:
            break
    return out


def _count(pattern: str, body: str) -> int:
    return len(re.findall(pattern, body))


def _fenced_blocks(section: str) -> list[str]:
    return [m.group(1).strip() for m in re.finditer(r"```([\s\S]*?)```", section or "")]


def _table_rows(block: str) -> list[str]:
    rows: list[str] = []
    for line in (block or "").splitlines():
        row = line.strip()
        if not row or set(row.replace(" ", "")) <= {"-"}:
            continue
        if "VVIX" in row:
            continue
        if any(header in row for header in ("기준일", "Date  ", "Asset", "Index", "Rate", "FX", "Commodity", "Vol")):
            continue
        rows.append(row)
    return rows


def _row_has_value(row: str) -> bool:
    if "확인 제한" in row:
        return False
    parts = row.split()
    value_tokens = [p for p in parts if p not in {"NA", "❌", "부분", "✔"}]
    return bool(value_tokens) and " NA " not in f" {row} "


def _group(name: str, rows: list[str], source_type: str) -> dict:
    available = sum(1 for row in rows if _row_has_value(row))
    total = len(rows)
    if total == 0:
        status = "unavailable"
    elif available == total:
        status = "ok"
    elif available > 0:
        status = "partial"
    else:
        status = "unavailable"
    return {
        "name": name,
        "sourceType": source_type,
        "status": status,
        "available": available,
        "total": total,
        "rows": rows,
    }


def _dashboard_groups(cta_section: str, cot_section: str, market_section: str) -> list[dict]:
    cta_blocks = _fenced_blocks(cta_section)
    cot_blocks = _fenced_blocks(cot_section)
    market_blocks = _fenced_blocks(market_section)
    market_names = [
        ("Overnight Index", "proxy quotes"),
        ("UST Rates", "official/FRED"),
        ("FX", "official/proxy"),
        ("Commodities", "official/proxy"),
        ("Volatility", "official/proxy"),
    ]
    groups = [
        _group("Daily CTA Proxy", _table_rows(cta_blocks[0] if cta_blocks else ""), "official/manual/proxy"),
        _group("Weekly COT", _table_rows(cot_blocks[0] if cot_blocks else ""), "official/CFTC"),
    ]
    for idx, (name, source_type) in enumerate(market_names):
        groups.append(_group(name, _table_rows(market_blocks[idx] if idx < len(market_blocks) else ""), source_type))
    return groups


def _source_status(body: str) -> list[dict]:
    try:
        payload = json.loads(NETWORK_STATUS_PATH.read_text(encoding="utf-8"))
        mapped = []
        for item in payload.get("results", []):
            http_ok = bool(item.get("http_ok"))
            dns_ok = bool(item.get("dns_ok"))
            if http_ok:
                status = "ok"
            elif dns_ok:
                status = "http_fail"
            else:
                status = "blocked"
            mapped.append(
                {
                    "name": str(item.get("name") or "unknown"),
                    "status": status,
                    "detail": str(item.get("detail") or ""),
                }
            )
        if mapped:
            alpha_configured = bool(payload.get("alphaVantageKeyConfigured"))
            if "missing ALPHA_VANTAGE_API_KEY" in body or not alpha_configured:
                for item in mapped:
                    if item["name"] == "Alpha Vantage":
                        item["status"] = "missing_key"
                        item["detail"] = "reachable, but ALPHA_VANTAGE_API_KEY is not configured"
            if not any(item["name"] == "Alpha Vantage" for item in mapped):
                mapped.append({"name": "Alpha Vantage", "status": "not_configured", "detail": "optional quote fallback"})
            return mapped
    except Exception:
        pass

    checks = [
        ("Yahoo Finance", "query1.finance.yahoo.com"),
        ("Stooq", "stooq.com"),
        ("CFTC", "www.cftc.gov"),
    ]
    out: list[dict] = []
    for label, marker in checks:
        if f"{marker}: OK" in body:
            status = "ok"
            detail = "DNS reachable"
        elif f"{marker}: FAIL" in body:
            status = "blocked"
            detail = "DNS/HTTPS blocked in this run"
        else:
            status = "unknown"
            detail = "not checked"
        out.append({"name": label, "status": status, "detail": detail})

    if "FRED 접근 실패" in body or "fred.stlouisfed.org" in body:
        out.append({"name": "FRED", "status": "blocked", "detail": "official rates/macros unavailable"})
    else:
        out.append({"name": "FRED", "status": "unknown", "detail": "not checked"})

    if "missing ALPHA_VANTAGE_API_KEY" in body:
        out.append({"name": "Alpha Vantage", "status": "missing_key", "detail": "set ALPHA_VANTAGE_API_KEY for quote fallback"})
    elif "Alpha Vantage" in body:
        out.append({"name": "Alpha Vantage", "status": "used", "detail": "keyed fallback attempted"})
    else:
        out.append({"name": "Alpha Vantage", "status": "not_configured", "detail": "optional quote fallback"})
    return out


def _recommendations(groups: list[dict], sources: list[dict]) -> list[str]:
    recs: list[str] = []
    blocked = [s["name"] for s in sources if s["status"] == "blocked"]
    if blocked:
        recs.append("네트워크 가능한 로컬 터미널/서버에서 한 번 실행해 공식 데이터와 캐시를 채우세요.")
    if any(s["status"] in {"missing_key", "not_configured"} and s["name"] == "Alpha Vantage" for s in sources):
        recs.append("ETF/지수 프록시 확인 제한을 줄이려면 .env에 ALPHA_VANTAGE_API_KEY를 추가하세요.")
    if next((g for g in groups if g["name"] == "Daily CTA Proxy" and g["status"] == "unavailable"), None):
        recs.append("SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.")
    if next((g for g in groups if g["name"] == "Weekly COT" and g["status"] == "unavailable"), None):
        recs.append("COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다.")
    return recs[:4]


def _paths() -> list[Path]:
    paths = [p for p in REPORT_DIR.glob("last_report_*.txt") if p.is_file()]
    return sorted(paths, key=lambda p: p.stat().st_mtime, reverse=True)


def _build_item(path: Path) -> dict:
    body = _read(path)
    title = _title(body)
    stat = path.stat()
    cta_section = _section(body, "① DAILY CTA Proxy Trigger")
    cot_section = _section(body, "② Weekly COT Signals")
    alert_section = _section(body, "③ 종합 Alert")
    market_section = _section(body, "④ 간결한 일일 마켓 모니터")
    groups = _dashboard_groups(cta_section, cot_section, market_section)
    source_status = _source_status(body)
    total_rows = sum(g["total"] for g in groups)
    available_rows = sum(g["available"] for g in groups)
    coverage_pct = round((available_rows / total_rows) * 100, 1) if total_rows else 0.0
    return {
        "name": path.name,
        "title": title,
        "date": _date_from(path, body),
        "trigger": _trigger(title),
        "regime": _regime(body),
        "mtime": datetime.fromtimestamp(stat.st_mtime, tz=timezone.utc).astimezone().isoformat(timespec="seconds"),
        "size": stat.st_size,
        "body": body,
        "summary": {
            "cta": _line_after("CTA 프록시 트리거:", body) or "확인 제한",
            "regime": _line_after("국면 판단:", body) or _regime(body),
            "network": "확인 제한" if "네트워크/DNS 진단" in body else "정상/미표기",
            "confirmLimited": _count(r"확인 제한", body),
            "proxy": _count(r"프록시", body),
            "availableRows": available_rows,
            "totalRows": total_rows,
            "coveragePct": coverage_pct,
        },
        "dashboard": {
            "groups": groups,
            "sourceStatus": source_status,
            "recommendations": _recommendations(groups, source_status),
        },
        "sections": {
            "cta": cta_section,
            "cot": cot_section,
            "alert": alert_section,
            "market": market_section,
        },
        "alertBullets": _bullets(alert_section, limit=5),
    }


def main() -> int:
    DASHBOARD_DATA_DIR.mkdir(parents=True, exist_ok=True)
    reports = [_build_item(path) for path in _paths()]
    latest = next((r for r in reports if r["name"] == "last_report_latest.txt"), reports[0] if reports else None)
    payload = {
        "generatedAt": datetime.now().astimezone().isoformat(timespec="seconds"),
        "latest": latest,
        "reports": reports,
    }
    OUT_PATH.write_text(
        "window.CTA_DASHBOARD_DATA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(OUT_PATH)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
