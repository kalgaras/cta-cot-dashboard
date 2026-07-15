from __future__ import annotations

import html
from pathlib import Path

from dashboard_server import LATEST_NAME, _read_report, _report_meta, _report_paths


ROOT_DIR = Path(__file__).resolve().parents[1]
OUT_PATH = ROOT_DIR / "dashboard" / "static.html"


def _render_report_button(name: str, label: str, title: str, active: bool) -> str:
    current = ' aria-current="true"' if active else ""
    return (
        f'<button class="report-button" type="button" data-report="{html.escape(name)}"{current}>'
        f"{html.escape(label)}<span>{html.escape(title)}</span></button>"
    )


def _trigger_label(title: str) -> str:
    if "재차 발생" in title:
        return "재차 발생"
    if "미발생" in title:
        return "미발생"
    if "발생" in title:
        return "발생"
    if "확인 제한" in title:
        return "확인 제한"
    return "모니터링"


def main() -> int:
    paths = _report_paths()
    reports = []
    for path in paths:
        body = _read_report(path)
        meta = _report_meta(path)
        reports.append({"path": path, "body": body, "meta": meta})

    active = next((item for item in reports if item["meta"].name == LATEST_NAME), reports[0] if reports else None)
    if active is None:
        title = "CTA 포지셔닝 모니터"
        body = "저장된 리포트가 없습니다."
        asof = "확인 제한"
        mtime = "확인 제한"
        trigger = "확인 제한"
    else:
        title = active["meta"].title
        body = active["body"]
        asof = active["meta"].date
        mtime = active["meta"].mtime
        trigger = _trigger_label(title)

    buttons = "\n".join(
        _render_report_button(
            item["meta"].name,
            item["meta"].date,
            "latest pointer" if item["meta"].name == LATEST_NAME else item["meta"].title,
            active is not None and item["meta"].name == active["meta"].name,
        )
        for item in reports
    )

    html_doc = f"""<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>CTA/COT Proxy Monitor</title>
    <style>
      :root {{ color-scheme: light; --bg: #f6f7f4; --panel: #ffffff; --ink: #151713; --muted: #6c7168; --line: #daded4; --accent: #11675a; --accent-2: #a5452d; --soft: #edf3ec; --code: #10130f; }}
      * {{ box-sizing: border-box; }}
      body {{ margin: 0; background: var(--bg); color: var(--ink); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height: 1.5; }}
      .shell {{ min-height: 100vh; display: grid; grid-template-columns: 320px 1fr; }}
      .sidebar {{ border-right: 1px solid var(--line); background: #fbfcf9; padding: 24px 18px; position: sticky; top: 0; height: 100vh; overflow: auto; }}
      .brand {{ display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 18px; }}
      .brand h1 {{ margin: 0; font-size: 18px; line-height: 1.2; }}
      .status-card, .metric, .report-button, .report {{ border: 1px solid var(--line); border-radius: 8px; background: var(--panel); }}
      .status-card {{ background: var(--soft); padding: 14px; margin-bottom: 16px; }}
      .status-card small, .metric span, .report-button span {{ display: block; color: var(--muted); font-size: 12px; }}
      .status-card strong {{ display: block; font-size: 15px; margin-top: 4px; }}
      .report-list {{ display: grid; gap: 8px; }}
      .report-button {{ text-align: left; padding: 11px 12px; cursor: pointer; font: inherit; }}
      .report-button[aria-current="true"] {{ border-color: var(--accent); box-shadow: inset 3px 0 0 var(--accent); }}
      .report-button span {{ margin-top: 3px; }}
      main {{ padding: 28px clamp(18px, 4vw, 48px); }}
      .topline {{ display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 16px; align-items: start; border-bottom: 1px solid var(--line); padding-bottom: 20px; margin-bottom: 20px; }}
      .topline h2 {{ margin: 0; font-size: clamp(22px, 3vw, 34px); line-height: 1.18; }}
      .badge {{ display: inline-flex; align-items: center; min-height: 34px; border: 1px solid var(--line); border-radius: 8px; padding: 6px 10px; background: var(--panel); color: var(--accent-2); font-weight: 700; white-space: nowrap; }}
      .metrics {{ display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 18px; }}
      .metric {{ padding: 14px; }}
      .metric strong {{ display: block; margin-top: 4px; font-size: 18px; }}
      .report {{ overflow: hidden; }}
      .report-toolbar {{ display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 14px; border-bottom: 1px solid var(--line); }}
      .report-toolbar button {{ border: 1px solid var(--line); border-radius: 8px; background: #fbfcf9; padding: 7px 10px; cursor: pointer; font: inherit; }}
      pre {{ margin: 0; padding: 18px; overflow: auto; color: var(--code); font: 13px/1.55 "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace; white-space: pre-wrap; word-break: keep-all; }}
      @media (max-width: 860px) {{ .shell {{ grid-template-columns: 1fr; }} .sidebar {{ position: static; height: auto; border-right: 0; border-bottom: 1px solid var(--line); }} .metrics, .topline {{ grid-template-columns: 1fr; }} .badge {{ width: fit-content; }} }}
    </style>
  </head>
  <body>
    <div class="shell">
      <aside class="sidebar">
        <div class="brand"><h1>CTA/COT Monitor</h1></div>
        <div class="status-card"><small>최신 리포트</small><strong>{html.escape(title)}</strong></div>
        <div class="report-list">{buttons}</div>
      </aside>
      <main>
        <section class="topline"><h2>{html.escape(title)}</h2><div class="badge">{html.escape(trigger)}</div></section>
        <section class="metrics">
          <div class="metric"><span>기준일</span><strong>{html.escape(asof)}</strong></div>
          <div class="metric"><span>저장 시각</span><strong>{html.escape(mtime)}</strong></div>
          <div class="metric"><span>히스토리</span><strong>{len(reports)}개</strong></div>
        </section>
        <section class="report"><div class="report-toolbar"><strong>리포트 원문</strong><button id="copy" type="button">복사</button></div><pre id="body">{html.escape(body)}</pre></section>
      </main>
    </div>
    <script>
      document.querySelector("#copy").addEventListener("click", async () => {{
        await navigator.clipboard.writeText(document.querySelector("#body").textContent || "");
        document.querySelector("#copy").textContent = "복사됨";
        setTimeout(() => document.querySelector("#copy").textContent = "복사", 1200);
      }});
    </script>
  </body>
</html>
"""
    OUT_PATH.write_text(html_doc, encoding="utf-8")
    print(OUT_PATH)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
