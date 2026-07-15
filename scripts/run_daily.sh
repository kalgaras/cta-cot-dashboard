#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

VENV_DIR="${VENV_DIR:-$ROOT_DIR/.venv}"
PY_BIN="$VENV_DIR/bin/python"

# Optional env file for cron (secrets should live on the cron server, not in git)
ENV_FILE="${ENV_FILE:-$ROOT_DIR/.env}"
if [[ -f "$ENV_FILE" ]]; then
  # shellcheck disable=SC1090
  set -a
  source "$ENV_FILE"
  set +a
fi

if [[ ! -x "$PY_BIN" ]]; then
  echo "[ERROR] venv python not found: $PY_BIN" >&2
  echo "[HINT] first-time setup:" >&2
  echo "  cd $ROOT_DIR" >&2
  echo "  python3 -m venv .venv && . .venv/bin/activate && pip install -r requirements.txt" >&2
  exit 2
fi

# The daily automation now defaults to file/dashboard delivery. Set
# REPORT_DELIVERY=telegram explicitly to use the legacy Telethon path.
export REPORT_DELIVERY="${REPORT_DELIVERY:-dashboard}"

"$PY_BIN" "$ROOT_DIR/main.py"
"$PY_BIN" "$ROOT_DIR/scripts/build_dashboard_data.py"
