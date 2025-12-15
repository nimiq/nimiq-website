<p align="center">
  <a href="https://nimiq.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nimiq/nimiq-website/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/nimiq/nimiq-website/HEAD/.github/logo-light.svg">
      <img alt="Nimiq" src="https://raw.githubusercontent.com/nimiq/nimiq-website/HEAD/.github/logo-light.svg" width="401" height="54" style="max-width: 100%;">
    </picture>
  </a>
</p>

<p align="center">
  The source code for the <a href="https://nimiq.com" target="_blank">Nimiq website</a>.
</p>

<p align="center">
    <a href="https://github.com/nimiq/nimiq-website/actions/workflows/github-pages.yaml"><img src="https://github.com/nimiq/nimiq-website/actions/workflows/github-pages.yaml/badge.svg" alt="GitHub pages Status"></a>
    <a href="https://github.com/nimiq/nimiq-website/actions/workflows/nuxthub.yml"><img src="https://github.com/nimiq/nimiq-website/actions/workflows/nuxthub.yml/badge.svg" alt="API Status"></a>
</p>

<p align="center">
    <a href="https://nimiq.github.io/nimiq-website/">GitHub Pages</a>
    <a href="https://nimiq.com">Production</a>
</p>

---

## Table of Contents

- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Development](#development)
- [Content Sync](#content-sync)
- [Scripts](#scripts)
- [CI/CD](#cicd)
- [Contributing](#contributing)

## Quick Start

```bash
git clone https://github.com/nimiq/nimiq-website.git
cd nimiq-website
pnpm install
cp .env.example .env
pnpm dev
```

Optional: Install git hooks with `npx simple-git-hooks`

## Architecture

**Stack:** Nuxt 4 + Vue 3 + UnoCSS + Nuxt Content v3

**Environments:**

- `local` - Development with hot reload
- `production` - Live site (nimiq.com)
- `studio` - NuxtHub/Cloudflare deployment

## Development

### Scripts

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # Check linting
pnpm lint:fix     # Auto-fix linting
pnpm typecheck    # TypeScript check
```

### CSS: UnoCSS

Uses UnoCSS with [Nimiq CSS](https://onmax.github.io/nimiq-ui/) preset. Key differences from Tailwind:

- `p-4` = 4px (not 16px)
- Attributify mode supported
- Fluid sizing: `f-pt-md` for responsive spacing

### Directory Structure

```
app/           # Nuxt application
content/       # Nuxt Content markdown/yaml files
server/        # API routes
lib/           # Build-time utilities
scripts/       # Migration scripts
public/        # Static assets
```

## Content Sync

Content is managed via Nuxt Content v3. To sync content from Prismic CMS:

```bash
PRISMIC_ACCESS_TOKEN=xxx npx tsx scripts/prismic-sync.ts
```

Options:

- `--cache` - Use cached Prismic responses
- `--force` - Force refresh from API
- `--incremental` - Only update changed files

## Scripts

| Command             | Description              |
| ------------------- | ------------------------ |
| `pnpm dev`          | Development server       |
| `pnpm build`        | Production build         |
| `pnpm build:studio` | NuxtHub/Cloudflare build |
| `pnpm generate`     | Static site generation   |
| `pnpm lint:fix`     | Auto-fix linting         |
| `pnpm typecheck`    | TypeScript check         |

## CI/CD

**Workflows:**

- `ci.yml` - Linting + type checking on all branches
- `github-pages.yml` - Preview deployments
- `nuxthub.yml` - Production deployment

**Required secrets:**

- `PRISMIC_ACCESS_TOKEN` - For content sync
- `NUXT_ALBATROSS_NODE_RPC_URL` - Blockchain RPC

## Contributing

1. Fork and create feature branch
2. Make changes
3. Run `pnpm lint` and `pnpm typecheck`
4. Submit PR
