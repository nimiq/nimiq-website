# App Logos Build-Time Download & Optimization

## Overview

Download and optimize app logos/screenshots at build time from nimiq-awesome repo. Convert single-color SVGs to use `currentColor` for theming. Store in `/public/apps/` and reference locally in runtime.

## Architecture

### Build Hook
Nitro plugin (`server/plugins/downloadApps.ts`) runs on `build:before`:

1. **Clean**: Remove `public/apps/` directory
2. **Fetch**: Get JSON from `https://raw.githubusercontent.com/onmax/nimiq-awesome/main/src/data/dist/nimiq-apps.json`
3. **Process each app**:
   - Download logo & screenshot
   - Optimize SVGs (single-color → `currentColor`, run svgo)
   - Write to `public/apps/{slug}-{type}.{ext}`
   - Update app object paths to local references
4. **Error handling**: Fail build if any download fails

### File Naming
Use `slug` from JSON: `{app.slug}-logo.svg`, `{app.slug}-screenshot.png`

Example: `crypto-map-logo.svg`, `nimiq-wallet-screenshot.png`

### SVG Optimization
1. Parse SVG for all `fill` attributes
2. Collect unique colors (ignore `none`, `transparent`)
3. If exactly 1 unique color (regardless of usage count):
   - Replace all instances with `currentColor`
4. If 0 or 2+ colors: skip color replacement
5. Run `svgo` optimization on all SVGs
6. Non-SVG formats (PNG/JPG): copy as-is

### Runtime
- `useApps` composable unchanged
- `useFetch` automatically handled by Nuxt payload system
- App objects now reference `/apps/{slug}-logo.svg` instead of external URLs

## Dependencies
- `svgo` for SVG optimization
- Native Node.js `fs`, `path`, `buffer` modules

## Error Handling
Build fails immediately if:
- JSON fetch fails
- Any logo/screenshot download fails
- File write operations fail

## Benefits
- No external requests at runtime
- Optimized SVG file sizes
- Themeable single-color logos via `currentColor`
- Automatic cleanup of removed apps
- Nuxt payload optimization built-in
