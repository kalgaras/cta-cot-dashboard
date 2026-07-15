#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

VENV_DIR="${VENV_DIR:-$ROOT_DIR/.venv}"
PY_BIN="$VENV_DIR/bin/python"
ENV_FILE="${ENV_FILE:-$ROOT_DIR/.env}"
LOG_FILE="${LOG_FILE:-/tmp/cta-cot-local-dashboard.log}"
DASHBOARD_FILE="$ROOT_DIR/dashboard/index.html"

if [[ ! -x "$PY_BIN" ]]; then
  echo "[SETUP] creating venv: $VENV_DIR"
  python3 -m venv "$VENV_DIR"
  "$PY_BIN" -m pip install -r "$ROOT_DIR/requirements.txt"
fi

if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi

export REPORT_DELIVERY="${REPORT_DELIVERY:-dashboard}"

echo "[CHECK] data-source network reachability"
if ! "$PY_BIN" "$ROOT_DIR/scripts/check_network.py"; then
  echo "[WARN] fewer than 3 data sources reachable; dashboard will still update with source-state diagnostics"
fi

if [[ -n "${ALPHA_VANTAGE_API_KEY:-}" ]]; then
  echo "[CHECK] Alpha Vantage quote fallback"
  if ! "$PY_BIN" "$ROOT_DIR/scripts/check_alpha_vantage.py"; then
    echo "[WARN] Alpha Vantage fallback is configured but not sufficiently usable"
  fi
else
  echo "[INFO] ALPHA_VANTAGE_API_KEY is not set; ETF quote fallback will be skipped"
fi

echo "[RUN] generating report + dashboard data"
ENV_FILE="$ENV_FILE" VENV_DIR="$VENV_DIR" "$ROOT_DIR/scripts/run_daily.sh" | tee "$LOG_FILE"

echo "[DONE] dashboard file:"
echo "$DASHBOARD_FILE"
echo "[DONE] log:"
echo "$LOG_FILE"

if command -v open >/dev/null 2>&1; then
  open "$DASHBOARD_FILE" >/dev/null 2>&1 || true
fi
