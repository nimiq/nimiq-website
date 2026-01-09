# Agent Build/Run Instructions

## Prerequisites
- Dev server must be running: `pnpm dev`
- Playwright installed: `pnpm exec playwright install chromium`

## Test Command
```bash
pnpm test:visual
```

## Page-by-Page Testing (RECOMMENDED)
```bash
# Test single page (both mobile + desktop)
TEST_PAGE=/about pnpm test:visual

# Test single viewport
pnpm vitest run tests/visual.test.ts -t "/about - desktop"
pnpm vitest run tests/visual.test.ts -t "/about - mobile"
```

**Always use TEST_PAGE for page-by-page workflow!**

## After Making Changes
```bash
pnpm lint:fix
pnpm typecheck
```

## Style Diff Analysis (NEW!)
When tests fail, enhanced reports include computed style comparison:

**Report locations:**
- `tests/screenshots/{page}/{viewport}/report.html` - Visual + style diffs
- `tests/screenshots/{page}/{viewport}/style-diff.json` - Detailed style data

**style-diff.json structure:**
```json
{
  "typography": [
    {
      "section": 0,
      "element": "H1 \"Welcome to Nimiq\"",
      "differences": [
        "fontSize: 32px → 36px",
        "fontWeight: 400 → 500"
      ]
    }
  ],
  "colors": [...],
  "spacing": [...],
  "hoverable": [...]
}
```

**Focus areas:**
- **Typography** (PRIMARY): font-size, weight, family, line-height - exact match
- **Colors**: Major diffs only (oklch→rgb conversion)
- **Spacing**: Inner content padding/margin
- **Hoverable**: nq-hoverable elements

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
