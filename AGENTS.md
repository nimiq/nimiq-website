# Nimiq Website - Agent Instructions (Source Of Truth)

## Visual Regression Testing

Compares local pages against committed production reference screenshots. Supports any page via `--page` flag.

- Desktop: `1280x800`, Mobile: `375x667`
- Default diff threshold: **3%** (hero: 0.1%). Per-page overrides in `VRT_PAGES`.
- Pixelmatch per-pixel threshold: **0.15**

### Commands

```bash
pnpm vrt:reference:update              # refresh homepage baseline
pnpm vrt:reference:update --page /wallet  # refresh specific page
pnpm vrt:run                           # run VRT once
pnpm vrt:ui                            # Vitest UI (local)

pnpm vrt:docker:reference:update       # refresh baseline in Docker
pnpm vrt:docker:run                    # run VRT in Docker
pnpm vrt:docker:ui                     # Vitest UI on :51204
```

### Adding Pages

1. Add entry to `VRT_PAGES` in `tests/vrt/pages.vrt.test.ts`
2. Run `pnpm vrt:reference:update --page /new-page`
3. Commit reference images from `tests/vrt/reference/`

### Covered Pages

`/`, `/wallet`, `/staking`, `/nimiq-pay`, `/about`, `/community`, `/apps`, `/blog`, `/buy-and-sell`

### Baseline Files (Committed)

`tests/vrt/reference/{slug}-{desktop,mobile}.png` for each page above.

### Outputs (Ignored)

- `tests/vrt/output/*`
- `.vitest-attachments/*`

### Environment Variables

- `VRT_LOCAL_URL` default `http://127.0.0.1:3000`
- `VRT_PROD_URL` default `https://nimiq.com`
- `VRT_DIFF_THRESHOLD` default `0.03` (3%)

### Troubleshooting

- Port already allocated (Docker UI):
  - `docker ps | rg website-vrt-run`
  - `docker stop <id>`
- If `pnpm install`/`nuxt prepare` fails in a clean environment:
  - Check `nuxt.config.ts` IPX cache hooks; they must be best-effort (never hard fail).
