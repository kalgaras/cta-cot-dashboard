#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

ENV_FILE="${ENV_FILE:-$ROOT_DIR/.env}"

if [[ $# -lt 1 || -z "${1:-}" ]]; then
  echo "Usage: ./scripts/set_alpha_vantage_key.sh <ALPHA_VANTAGE_API_KEY>" >&2
  exit 2
fi

KEY="$1"
if [[ "$KEY" == "YOUR_KEY_HERE" || "$KEY" == "demo" || "$KEY" == "..." ]]; then
  echo "[ERROR] replace '$KEY' with your real Alpha Vantage API key." >&2
  exit 2
fi
TMP_FILE="$(mktemp)"

if [[ -f "$ENV_FILE" ]]; then
  grep -v '^ALPHA_VANTAGE_API_KEY=' "$ENV_FILE" > "$TMP_FILE" || true
else
  touch "$TMP_FILE"
fi

printf 'ALPHA_VANTAGE_API_KEY=%s\n' "$KEY" >> "$TMP_FILE"
mv "$TMP_FILE" "$ENV_FILE"
chmod 600 "$ENV_FILE" || true

echo "[OK] wrote ALPHA_VANTAGE_API_KEY to $ENV_FILE"
echo "[NEXT] ./scripts/run_local_dashboard.sh"
