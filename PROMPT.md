# Ralph Loop: Nimiq Website Visual Regression Fix

## Objective
Fix visual differences between local dev (localhost:3000) and production (nimiq.com) until all visual regression tests pass.

## Success Criteria
```bash
pnpm test:visual  # Must exit 0 (all tests pass)
```

## Reference Repositories
- `~/nimiq/website-old/` - Old website source (Prismic-based, reference for content/structure)
- `~/nimiq/ui/packages/nimiq-css/` - Nimiq CSS framework source
- `~/nimiq/ui/packages/nimiq-icons/` - Icon system

## Test Reports
After each `pnpm test:visual` run, check HTML reports at:
`tests/screenshots/{page}/{viewport}/report.html`

## CRITICAL: Page-by-Page Workflow

**Work on ONE page at a time. Check @fix_plan.md for first unchecked page.**

### Per-Page Workflow:
1. Check @fix_plan.md - find first page without ✓ in both Mobile & Desktop
2. Run: `TEST_PAGE=/page pnpm test:visual` (e.g., TEST_PAGE=/about)
3. If PASSES: Mark ✓ in @fix_plan.md for both viewports, move to next page
4. If FAILS:
   - Open `tests/screenshots/{page}/{viewport}/report.html`
   - Analyze pixel diffs (red overlay images)
   - Analyze style diffs (typography, colors, spacing, hoverable)
   - Check `style-diff.json` for computed style differences
   - Fix issues (primary focus: typography - font sizes changed in nimiq-css update)
   - Re-run SAME page: `TEST_PAGE=/page pnpm test:visual`
   - Repeat until PASSES
5. Only after page passes BOTH viewports (mobile + desktop), move to next

### Style Diff Priority:
- **Typography** (PRIMARY): Exact match - font-size, weight, family, line-height
- **Colors**: Major diffs - avoid white→dark-blue mistakes (oklch vs rgb)
- **Spacing**: Inner content padding/margin (not section-level)
- **Hoverable**: nq-hoverable elements (simple check)

### Fix Strategy:
- Typography issues: Check nimiq-css version, use pnpm patch if needed
- Missing content: Migrate from `~/nimiq/website-old/`
- Structure diffs: Ensure same `<section>` count in `<main>`
- Component mismatches: Compare with `~/nimiq/website-old/components/`

## What Can Be Changed
- `app/components/**` - Vue components
- `app/pages/**` - Page layouts
- `app/composables/**` - Can rename/restructure for clarity
- `content/**` - Can restructure completely (keep same content)
- `app/assets/**` - Styles and assets
- Use `pnpm patch nimiq-css` if CSS framework needs fixes

## What to Preserve
- Same visual output as nimiq.com
- Same content (text, images)
- Functionality and links

## Allowed Actions
- Restructure files and folders for maintainability
- Rename composables for clarity
- Clean up noisy/redundant code
- Add pnpm patches for external packages
- Delete unused components

## Flagging Intentional Changes
If a visual difference is INTENTIONAL (new design, updated fonts), create a note:
```
tests/screenshots/{page}/INTENTIONAL_CHANGES.md
```
Explaining what changed and why.

## Pages to Test (priority order)
1. `/` - Homepage (most important)
2. `/about`
3. `/apps`
4. `/wallet`
5. `/staking`
6. `/nimiq-pay`
7. `/buy-and-sell`
8. `/community`
9. `/blog` and blog posts
10. Remaining pages

## Commands
```bash
# Test single page (both viewports)
TEST_PAGE=/about pnpm test:visual

# Test single page + viewport
pnpm vitest run tests/visual.test.ts -t "/about - mobile"

# Run all visual tests (DO NOT use during page-by-page workflow)
pnpm test:visual

# Dev server (must be running)
pnpm dev

# Serve screenshot reports
pnpm test:visual:serve

# Lint and typecheck after changes
pnpm lint:fix && pnpm typecheck
```

## Debugging Tips
- Section count mismatch = different `<section>` structure in `<main>`
- Size mismatch = different padding/margin/content height
- Check `nq-section-gap` attribute for section merging logic
- Compare old vs new component implementations

## Exit Criteria
COMPLETE when:
1. All pages in @fix_plan.md marked ✓ for Mobile AND Desktop
2. `pnpm test:visual` (full test) exits code 0
3. No ERROR in logs
