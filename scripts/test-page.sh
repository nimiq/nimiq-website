#!/bin/bash

PAGE=$1

if [ -z "$PAGE" ]; then
  echo "Usage: ./scripts/test-page.sh <page-path>"
  echo ""
  echo "Examples:"
  echo "  ./scripts/test-page.sh /"
  echo "  ./scripts/test-page.sh /about"
  echo "  ./scripts/test-page.sh /staking"
  echo ""
  echo "Tips:"
  echo "  VISUAL_VIEWPORTS=desktop ./scripts/test-page.sh /about   # default"
  echo "  VISUAL_VIEWPORTS=mobile  ./scripts/test-page.sh /about"
  echo "  VISUAL_VIEWPORTS=desktop,mobile ./scripts/test-page.sh /about"
  exit 1
fi

echo "=== Testing Page: $PAGE ==="
echo ""

VISUAL_VIEWPORTS=${VISUAL_VIEWPORTS:-desktop} TEST_PAGE=$PAGE pnpm test:visual

EXIT_CODE=$?

echo ""
if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ $PAGE passed all tests (mobile + desktop)"
else
  PAGE_NAME=${PAGE#/}
  if [ -z "$PAGE_NAME" ]; then PAGE_NAME=home; fi
  echo "❌ $PAGE failed tests"
  echo ""
  echo "Check reports:"
  echo "  - tests/screenshots/report.html"
  echo "  - tests/screenshots/${PAGE_NAME}/desktop/full-local.png"
  echo "  - tests/screenshots/${PAGE_NAME}/desktop/full-prod.png"
  echo "  - tests/screenshots/${PAGE_NAME}/desktop/block-*-diff.png"
fi

exit $EXIT_CODE
