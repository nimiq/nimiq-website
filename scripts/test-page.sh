#!/bin/bash

PAGE=$1

if [ -z "$PAGE" ]; then
  echo "Usage: ./scripts/test-page.sh <page-path>"
  echo ""
  echo "Examples:"
  echo "  ./scripts/test-page.sh /"
  echo "  ./scripts/test-page.sh /about"
  echo "  ./scripts/test-page.sh /staking"
  exit 1
fi

echo "=== Testing Page: $PAGE ==="
echo ""

TEST_PAGE=$PAGE pnpm test:visual

EXIT_CODE=$?

echo ""
if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ $PAGE passed all tests (mobile + desktop)"
else
  PAGE_NAME=$(echo $PAGE | tr '/' '-' | sed 's/^-/home/')
  echo "❌ $PAGE failed tests"
  echo ""
  echo "Check reports:"
  echo "  - tests/screenshots/${PAGE_NAME}/mobile/report.html"
  echo "  - tests/screenshots/${PAGE_NAME}/desktop/report.html"
  echo "  - tests/screenshots/${PAGE_NAME}/mobile/style-diff.json"
  echo "  - tests/screenshots/${PAGE_NAME}/desktop/style-diff.json"
fi

exit $EXIT_CODE
