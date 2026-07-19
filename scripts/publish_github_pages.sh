#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[RUN] refresh dashboard data"
./scripts/run_local_dashboard.sh

echo "[SYNC] dashboard -> docs"
mkdir -p docs/data
cp dashboard/index.html dashboard/styles.css dashboard/app.js dashboard/config.js dashboard/static.html docs/
cp dashboard/data/data.js dashboard/data/network_status.json docs/data/
cp dashboard/.nojekyll docs/.nojekyll

CACHE_BUST="$(date '+%Y%m%d%H%M%S')"
python3 - "$CACHE_BUST" <<'PY'
from pathlib import Path
import re
import sys

cache_bust = sys.argv[1]
index_path = Path("docs/index.html")
html = index_path.read_text(encoding="utf-8")
html = re.sub(r'\./data/data\.js(?:\?v=[0-9]+)?', f'./data/data.js?v={cache_bust}', html)
html = re.sub(r'\./app\.js(?:\?v=[0-9]+)?', f'./app.js?v={cache_bust}', html)
html = re.sub(r'\./styles\.css(?:\?v=[0-9]+)?', f'./styles.css?v={cache_bust}', html)
index_path.write_text(html, encoding="utf-8")
PY

if git diff --quiet -- docs dashboard/data/data.js dashboard/data/network_status.json data/last_report_latest.txt data/last_report_*.txt; then
  echo "[SKIP] no report/dashboard changes to publish"
  exit 0
fi

STAMP="$(date '+%Y-%m-%d')"
echo "[GIT] commit dashboard update: $STAMP"
git add docs dashboard/data/data.js dashboard/data/network_status.json data/last_report_latest.txt data/last_report_*.txt
git commit -m "Update dashboard data ${STAMP}"

echo "[GIT] push"
git push

echo "[DONE] GitHub Pages will update shortly"
