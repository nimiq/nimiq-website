#!/bin/bash
set -e

echo "=== Nimiq Website VPS Setup ==="
echo ""

# Check current directory
if [ ! -f "package.json" ]; then
  echo "❌ Error: Must run from website root directory"
  exit 1
fi

cd ~/nimiq || { echo "❌ ~/nimiq directory not found"; exit 1; }

# Clone website-old (main branch)
echo "📦 Cloning website-old repo..."
if [ -d "website-old" ]; then
  echo "  ↳ website-old already exists, pulling latest..."
  cd website-old && git checkout main && git pull && cd ..
else
  git clone https://github.com/nimiq/nimiq-website website-old
  cd website-old && git checkout main && cd ..
fi

# Clone nimiq-ui (main branch)
echo "📦 Cloning nimiq-ui repo..."
if [ -d "ui" ]; then
  echo "  ↳ ui already exists, pulling latest..."
  cd ui && git checkout main && git pull && cd ..
else
  git clone https://github.com/onmax/nimiq-ui ui
  cd ui && git checkout main && cd ..
fi

# Return to website directory
cd website || { echo "❌ website directory not found"; exit 1; }

# Setup Node environment
echo ""
echo "🔧 Setting up Node environment..."
fnm use 24 || { echo "❌ fnm use 24 failed - is fnm installed?"; exit 1; }

# Install dependencies
echo ""
echo "📥 Installing dependencies..."
pnpm install

# Install Playwright browsers
echo ""
echo "🎭 Installing Playwright browsers..."
pnpm exec playwright install chromium

# Create necessary directories
echo ""
echo "📁 Creating directories..."
mkdir -p logs tests/lib scripts

# Test dev server
echo ""
echo "🧪 Testing dev server..."
echo "  ↳ Starting dev server..."
pnpm dev > /tmp/dev-test.log 2>&1 &
DEV_PID=$!
echo $DEV_PID > .dev-server-test.pid

echo "  ↳ Waiting for server to start..."
sleep 15

echo "  ↳ Testing health check..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
  echo "  ✓ Dev server is responding"
else
  echo "  ❌ Dev server health check failed"
  cat /tmp/dev-test.log
  kill $DEV_PID 2>/dev/null || true
  exit 1
fi

echo "  ↳ Stopping test server..."
kill $DEV_PID
rm .dev-server-test.pid
sleep 2

# Summary
echo ""
echo "✅ VPS Setup Complete!"
echo ""
echo "Cloned repos:"
echo "  - ~/nimiq/website-old (main branch)"
echo "  - ~/nimiq/ui (main branch)"
echo ""
echo "Ready for Ralph loop execution."
echo ""
echo "Next steps:"
echo "  1. Ensure PROMPT.md, @fix_plan.md, @AGENT.md are configured"
echo "  2. Start dev server: nohup pnpm dev > logs/dev-server.log 2>&1 &"
echo "  3. Start Ralph: ralph --monitor --calls 100 --verbose"
