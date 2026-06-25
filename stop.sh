#!/usr/bin/env bash
set -e

PORT="${PORT:-3000}"

echo "Stopping dev server on port $PORT ..."

# Find and kill the serve process
PID=$(lsof -ti :"$PORT" 2>/dev/null || true)
if [ -n "$PID" ]; then
  kill "$PID" 2>/dev/null || true
  echo "Server stopped (PID: $PID)."
else
  echo "No server found running on port $PORT."
fi
