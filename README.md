<p align="center">
  <a href="https://nimiq.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nimiq/nimiq-website/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/nimiq/nimiq-website/HEAD/.github/logo-light.svg">
      <img alt="Nimiq" src="https://raw.githubusercontent.com/nimiq/nimiq-website/HEAD/.github/logo-light.svg" width="350" height="70" style="max-width: 100%;">
    </picture>
  </a>
</p>

<p align="center">
  The source code for the <a href="https://nimiq.com" target="_blank">Nimiq website</a>.
</p>

<p align="center">
    <a href="https://github.com/nimiq/nimiq-website/actions/workflows/deploy-preview.yaml"><img src="https://github.com/nimiq/nimiq-website/actions/workflows/deploy-preview.yaml/badge.svg" alt="Deploy Status"></a>
  <!-- TODO Api deployment -->
</p>

<p align="center">
    <a href="https://nimiq.github.io/nimiq-website/">Preview</a>
    <a href="https://nimiq.com">Production</a>
</p>

---

## Project Overview

### Tech Stack

Our website is built with the following technologies:

- [Nuxt 4](https://nuxt.com): The core framework powering our application
- [UnoCSS](https://unocss.dev): Utility-first CSS engine with enhanced flexibility
- [Prismic](https://prismic.io): Headless CMS for content management
- [Reka UI](https://reka-ui.com): Component library (similar to Radix UI)

### Development Setup

Make sure to install the dependencies:

```bash
pnpm install
pnpm dev
```

### Environment Variables

The project uses environment variables for configuration. You can find an example in `.env.example` file. Copy it to create your own `.env` file:

```bash
cp .env.example .env
```

### Runtime Environments

The website can be built for different runtime environments, each with its own configuration. The environment is set using the `NUXT_ENVIRONMENT` variable:

- `local`: Development environment (default when running `pnpm dev`)
- `production`: Production environment (nimiq.com)
- `github-pages`: GitHub Pages preview environment
- `nuxthub-production`: NuxtHub production environment
- `nuxthub-preview`: NuxtHub preview environment
- `internal-static`: Internal static site that mirrors production (no drafts shown)
- `internal-static-drafts`: Internal static site with draft content visible

The build commands in `package.json` are set up to use these environments:

```bash
# Production build
pnpm build

# GitHub Pages build
pnpm build:github-pages

# NuxtHub builds (uses NUXTHUB_ENV to determine production/preview)
pnpm build:nuxthub

# Internal static builds
pnpm build:internal-static
pnpm build:internal-static-drafts
```

#### Environment-specific Configuration

The runtime configuration includes environment-specific flags that can be accessed in your components:

```typescript
const {
  name, // Typed as EnvironmentName
  isLocal,
  isProduction,
  isGitHubPages,
  isNuxthubProduction,
  isNuxthubPreview,
  isInternalStatic,
  isInternalStaticDrafts,
} = useRuntimeConfig().public.environment

// Draft content visibility: True in local and internal-static-drafts environments
const { showDrafts } = useRuntimeConfig().public
```

### CSS System: UnoCSS

We use UnoCSS instead of TailwindCSS for more flexibility. Key features include:

- [Nimiq UnoCSS](https://onmax.github.io/nimiq-ui/): Custom utilities, reset, typography and base styles
- [Nimiq icons](https://nimiq.com/icons): Custom icon set
- [Attributify mode](https://unocss.dev/features/attributify): Supports both traditional class strings and attribute syntax
- Custom presets (via [`unocss-preset-onmax`](https://github.com/onmax/unocss-preset-onmax)):
  - [Reka preset](https://reka-ui.com): Provides variants like data-open:bg-pink → data-[state:open]:bg-pink
  - [Fluid sizing](https://github.com/onmax/unocss-preset-fluid-sizing): Use `f-pt-md` for responsive padding that scales between breakpoints
  - Scale px: Different from Tailwind, p-4 equals 4px not 16px

### Deployment

- Frontend: Static site generation with nuxi generate, deployed to our servers via internal action
- Backend: Small Node.js server hosted at api.nimiq.dev

### Directory Structure

- `app`: Nuxt application code
- `server`: Backend server code
- `customtypes`: Prismic custom type definitions. Automatically generated from Prismic slicemachine.
- `shared`: Shared utilities and components
- `public`: Static assets

## Prismic + Slicemachine

We use Prismic as our headless CMS. The content is managed through the Prismic dashboard, and the custom types are defined in the `slicemachine`.

In order to modify the slices, you need to run locally the Prismic CLI:

```bash
pnpm slicemachine
```

Then, go to the `http://localhost:9999` URL to see the Prismic Slicemachine interface and edit the slices.

Once you are done making changes you should see the changes in the `./app/slices`:

- If you modified an existing slice, the types will be updated and therefore the linter will complain. You can use `pnpm run lint` to see the errors.
- If you added a new slice, a new folder will be created in `./app/slices`. I recommend you to use this template:

```vue
<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.YourNewSlice>()) // Safely typed

const bgClass = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="bgClass">
    Your new slice content goes here!
  </section>
</template>
```

> [!NOTE]
> It is important that all slices are wrapped in a section tag, so that the css can apply the [correct styles](https://github.com/onmax/nimiq-ui/blob/main/packages/nimiq-css/src/css/static-content.css). The section should have the background color: `bg-neutral-0`, `bg-neutral-100` or `bg-darkblue`.
