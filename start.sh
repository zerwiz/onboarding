#!/usr/bin/env bash
set -e

PORT="${PORT:-3000}"

cleanup() {
  echo ""
  echo "Shutting down dev server..."
  kill "$SERVER_PID" 2>/dev/null || true
  exit 0
}
trap cleanup SIGINT SIGTERM

echo "Starting dev server on http://localhost:$PORT ..."
npx serve . -l "$PORT" --no-clipboard &
SERVER_PID=$!

sleep 1.5

URL="http://localhost:$PORT"
echo "Opening $URL in browser..."
if command -v termux-open-url &>/dev/null; then
  termux-open-url "$URL"
elif command -v xdg-open &>/dev/null; then
  xdg-open "$URL"
elif command -v open &>/dev/null; then
  open "$URL"
else
  echo "No browser-opener found. Open $URL manually."
fi

wait "$SERVER_PID"
