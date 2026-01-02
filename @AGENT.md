# Agent Build/Run Instructions

## Prerequisites
- Dev server must be running: `pnpm dev`
- Playwright installed: `pnpm exec playwright install chromium`

## Test Command
```bash
pnpm test:visual
```

## Quick Test Single Page
```bash
pnpm vitest run tests/visual.test.ts -t "/ - desktop"
pnpm vitest run tests/visual.test.ts -t "/about - mobile"
```

## After Making Changes
```bash
pnpm lint:fix
pnpm typecheck
```

## View Reports
```bash
pnpm test:visual:serve
# Then open http://localhost:8080
```

## Reference Code Locations
- Old website: `~/nimiq/website-old/app/`
- Nimiq CSS: `~/nimiq/ui/packages/nimiq-css/src/`
- Current components: `./app/components/`
- Current pages: `./app/pages/`
- Content: `./content/`

## Patching External Packages
```bash
# If nimiq-css needs fixes:
pnpm patch nimiq-css
# Edit files in temp directory
pnpm patch-commit <temp-path>
```

## Success = Exit Code 0
```bash
pnpm test:visual && echo "COMPLETE"
```
