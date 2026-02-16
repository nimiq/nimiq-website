# Ralph Loop: Home Page Visual Regression

## Objective

Run a deterministic visual regression test for the homepage (`/`) against production references.

## Success Criteria

```bash
pnpm vrt:run
```

Both viewport checks pass:

- desktop `1280x800`
- mobile `375x667`

## Baseline Management

Reference screenshots are committed and updated manually.

```bash
pnpm vrt:reference:update
```

This updates:

- `tests/vrt/reference/home-desktop.png`
- `tests/vrt/reference/home-mobile.png`

## Local Workflow

```bash
pnpm dev
pnpm vrt:run
pnpm vrt:ui
```

## Docker Workflow

```bash
pnpm vrt:docker:reference:update
pnpm vrt:docker:run
pnpm vrt:docker:ui
```

Vitest UI is exposed on port `51204`.

## Notes

- Only visual parity is checked (no semantic or interaction parity tests).
- Diff threshold is strict: `0.1%` (`VRT_DIFF_THRESHOLD=0.001`).
- Generated files are written to `tests/vrt/output/` and ignored.
