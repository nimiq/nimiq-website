# Home Page VRT Plan

## Scope

- Single page: `/`
- Viewports:
  - desktop `1280x800`
  - mobile `375x667`

## Baseline

- `tests/vrt/reference/home-desktop.png`
- `tests/vrt/reference/home-mobile.png`

Update manually with:

```bash
pnpm vrt:reference:update
```

## Validation

Run visual regression:

```bash
pnpm vrt:run
```

Open UI review:

```bash
pnpm vrt:ui
```

Docker equivalents:

```bash
pnpm vrt:docker:reference:update
pnpm vrt:docker:run
pnpm vrt:docker:ui
```
