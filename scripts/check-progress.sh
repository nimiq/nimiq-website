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

# Count completed pages
if [ -f "@fix_plan.md" ]; then
  COMPLETED=$(grep -c "| ✓ | ✓ |" @fix_plan.md || echo "0")
  TOTAL=$(grep -c "^| /" @fix_plan.md || echo "0")
  echo "📈 Pages Completed: $COMPLETED / $TOTAL"
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

# Show recent test failures if any
if [ -d "tests/screenshots" ]; then
  RECENT_FAILURES=$(find tests/screenshots -name "report.html" -mtime -1 | wc -l)
  if [ "$RECENT_FAILURES" -gt 0 ]; then
    echo "🔍 Recent test reports (last 24h): $RECENT_FAILURES"
    echo ""
  fi
fi
