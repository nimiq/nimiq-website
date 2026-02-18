#!/usr/bin/env bash
set -euo pipefail

MODE="${1:-run}"
WORKDIR="/workspace"
DEV_URL="${VRT_LOCAL_URL:-http://127.0.0.1:3000}"
NUXT_MODE="${VRT_NUXT_MODE:-dev}"

cd "$WORKDIR"

corepack enable
mkdir -p /pnpm-store
pnpm install --store-dir /pnpm-store --frozen-lockfile

wait_for_dev_server() {
  local attempts=90

  for ((i = 1; i <= attempts; i++)); do
    if curl -fsS "$DEV_URL" > /dev/null 2>&1; then
      return 0
    fi
    sleep 1
  done

  return 1
}

start_dev_server() {
  if [[ "$NUXT_MODE" == "preview" ]]; then
    if ! pnpm build > /tmp/vrt-nuxt-build.log 2>&1; then
      echo "[vrt] Nuxt build failed"
      tail -n 200 /tmp/vrt-nuxt-build.log || true
      exit 1
    fi
    VRT=1 pnpm preview --host 0.0.0.0 --port 3000 > /tmp/vrt-nuxt.log 2>&1 &
  else
    VRT=1 pnpm dev --host 0.0.0.0 --port 3000 > /tmp/vrt-nuxt.log 2>&1 &
  fi
  DEV_PID=$!

  cleanup() {
    if kill -0 "$DEV_PID" > /dev/null 2>&1; then
      kill "$DEV_PID" > /dev/null 2>&1 || true
    fi
  }

  trap cleanup EXIT

  if ! wait_for_dev_server; then
    echo "[vrt] Nuxt dev server did not become ready at $DEV_URL"
    tail -n 200 /tmp/vrt-nuxt.log || true
    exit 1
  fi
}

case "$MODE" in
  run)
    start_dev_server
    pnpm vrt:run
    ;;
  ui)
    start_dev_server
    pnpm vrt:ui
    ;;
  reference)
    pnpm vrt:reference:update
    ;;
  *)
    echo "[vrt] Unknown mode: $MODE"
    echo "[vrt] Supported modes: run | ui | reference"
    exit 1
    ;;
esac
