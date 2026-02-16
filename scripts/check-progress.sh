#!/bin/bash

echo "=== Ralph Progress Check ==="
echo ""

# Check if Ralph status exists
if [ -f "status.json" ]; then
  echo "📊 Ralph Status:"
  cat status.json | jq '.' 2>/dev/null || cat status.json
  echo ""
else
  echo "⚠️  status.json not found (Ralph not started yet)"
  echo ""
fi

# Check baseline files
if [ -f "@fix_plan.md" ]; then
  echo "📋 Plan:"
  cat @fix_plan.md
  echo ""
else
  echo "⚠️  @fix_plan.md not found"
  echo ""
fi

# Show last activity
if [ -f "logs/ralph.log" ]; then
  echo "📝 Last 10 Ralph Log Entries:"
  tail -10 logs/ralph.log
  echo ""
else
  echo "⚠️  logs/ralph.log not found"
  echo ""
fi

# Check dev server
if [ -f ".dev-server.pid" ]; then
  DEV_PID=$(cat .dev-server.pid)
  if ps -p $DEV_PID > /dev/null 2>&1; then
    echo "✅ Dev server is running (PID: $DEV_PID)"
  else
    echo "❌ Dev server is NOT running (stale PID file)"
  fi
else
  echo "⚠️  Dev server PID file not found"
fi

echo ""

if [ -f "tests/vrt/reference/home-desktop.png" ] && [ -f "tests/vrt/reference/home-mobile.png" ]; then
  echo "✅ Baseline references exist"
else
  echo "⚠️  Baseline references missing - run: pnpm vrt:reference:update"
fi

if [ -d "tests/vrt/output" ]; then
  OUTPUT_COUNT=$(find tests/vrt/output -type f | wc -l)
  echo "🖼️  Current VRT output files: $OUTPUT_COUNT"
fi
