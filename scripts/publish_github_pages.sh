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
