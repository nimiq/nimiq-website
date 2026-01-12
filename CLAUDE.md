# Nimiq Website - Claude Code Context

## Project Overview
Nimiq website migration from Prismic-based to Nuxt Content v3. Goal: visual parity with nimiq.com production.

## Current Task: Visual Regression Fixes
Run `pnpm test:visual` and fix until all tests pass.

## Key Commands
```bash
pnpm dev              # Dev server (must be running for tests)
pnpm test:visual      # Run visual regression tests
pnpm lint:fix         # Fix linting issues
pnpm typecheck        # TypeScript check
pnpm build            # Production build
```

## Reference Repositories
| Repo | Purpose |
|------|---------|
| `~/nimiq/website-old/` | Old website source - compare components/structure |
| `~/nimiq/ui/packages/nimiq-css/` | CSS framework source |
| `~/nimiq/ui/packages/nimiq-icons/` | Icon system |

## Tech Stack
- **Framework**: Nuxt 4 + Vue 3
- **CSS**: UnoCSS + nimiq-css preset (NOT Tailwind!)
- **Content**: Nuxt Content v3 (markdown files)
- **Deploy**: NuxtHub/Cloudflare

## UnoCSS Notes (NOT Tailwind!)
- `p-4` = 4px (scale is 1:1, not 1:4)
- Attributify mode: `<div p-4 m-2>` instead of `class="p-4 m-2"`
- Fluid sizing: `f-pt-md` for responsive spacing
- Nimiq utilities: `nq-*` prefix

## Directory Structure
```
app/
├── components/     # Vue components
├── pages/          # Route pages
├── composables/    # Vue composables
├── layouts/        # Page layouts
├── assets/         # Styles/assets
└── utils/          # Utility functions
content/            # Markdown content (can restructure)
tests/
└── screenshots/    # Visual test screenshots and reports
```

## Visual Test System
- Compares localhost:3000 vs nimiq.com
- Screenshots each `<section>` in `<main>`
- Merges adjacent sections with same background
- 2% pixel threshold allowed
- Reports at `tests/screenshots/{page}/{viewport}/report.html`

## Common Issues & Fixes
| Issue | Likely Cause | Fix Location |
|-------|--------------|--------------|
| Section count mismatch | Different `<section>` structure | `app/pages/` or `app/components/` |
| Size mismatch | Padding/margin/content difference | CSS or component template |
| Missing content | Content not migrated | `content/` directory |
| Wrong colors | nimiq-css version or overrides | Check nimiq-css version, use patch if needed |

## Patching nimiq-css
If CSS framework needs changes:
```bash
pnpm patch nimiq-css
# Edit files in temp directory
pnpm patch-commit <temp-path>
```
Patches saved in `patches/` directory.

## Code Style
- Vue 3 Composition API with `<script setup lang="ts">`
- Prefer UnoCSS attributify over class strings
- Keep components small and focused
- Use composables for shared logic
- TypeScript strict mode

## Allowed Changes
- Restructure content files
- Rename/refactor composables
- Delete unused code
- Add patches for external packages
- Simplify component structure

## Intentional Changes
If something SHOULD look different from prod, document it:
```bash
echo "Font size updated per new brand guidelines" > tests/screenshots/{page}/INTENTIONAL_CHANGES.md
```

## Success Criteria
```bash
pnpm test:visual  # Exit code 0 = COMPLETE
```
