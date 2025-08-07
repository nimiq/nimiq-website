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

- [Quick Start Guide](#quick-start-guide)
- [Architecture Overview](#architecture-overview)
- [Custom Modules & Extensions](#custom-modules--extensions)
- [Analytics: Matomo Tracking](#analytics-matomo-tracking)
- [Component Architecture](#component-architecture)
- [Prismic + Slicemachine](#prismic--slicemachine)
- [Code Style Guide](#code-style-guide)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Development Setup](#development-setup)
- [Dynamic Page Generation](#dynamic-page-generation)
- [API Endpoints](#api-endpoints)
- [CI/CD Workflow](#cicd-workflow)
- [Debugging & Troubleshooting](#debugging--troubleshooting)
- [Security & Best Practices](#security--best-practices)
- [Contributing Guidelines](#contributing-guidelines)

## Quick Start Guide

### Prerequisites

- Node.js (version 18 or higher)
- pnpm package manager
- Access to Prismic CMS (for content management)

### Setup Steps

1. **Clone and install dependencies**

   ```bash
   git clone https://github.com/nimiq/nimiq-website.git
   cd nimiq-website
   pnpm install
   ```

2. **Environment configuration**

   ```bash
   cp .env.example .env
   # Edit .env with your PRISMIC_ACCESS_TOKEN (required)
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Optional: Install git hooks**
   ```bash
   npx simple-git-hooks
   ```

### Common Issues

- **Build fails**: Ensure `PRISMIC_ACCESS_TOKEN` is set in your `.env` file
- **Components not rendering**: Check if you're connected to the internet (required for Prismic)
- **Linting errors**: Run `pnpm lint` to see all issues, `pnpm lint:fix` to auto-fix

## Architecture Overview

### Core Stack

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Nuxt 4 App    │    │   Prismic CMS   │    │   UnoCSS        │
│                 │◄───┤                 │    │                 │
│ - SSG/SPA       │    │ - Content Mgmt  │    │ - Atomic CSS    │
│ - Vue Components│    │ - Slices        │    │ - Nimiq Preset  │
│ - Composables   │    │ - API/CDN       │    │ - Responsive    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                        │                        │
         └────────────────────────┼────────────────────────┘
                                  │
                    ┌─────────────────┐
                    │   Static Build  │
                    │                 │
                    │ - Pre-rendered  │
                    │ - CDN Ready     │
                    │ - Multi-env     │
                    └─────────────────┘
```

### Data Flow

1. **Build Time**: Prismic content is fetched and pre-rendered into static pages
2. **Runtime**: Interactive components hydrate on client-side
3. **Content**: Managed through Prismic Slicemachine, deployed via Git

### Environment System

The project supports multiple deployment environments:

- **Local**: Development with hot reload and draft content
- **Production**: Live site (nimiq.com)
- **GitHub Pages**: PR previews and testing
- **NuxtHub**: Serverless deployment with edge functions
- **Internal Static**: Internal previews with/without drafts

## Custom Modules & Extensions

### Nuxt Modules

The project includes custom Nuxt modules for enhanced functionality:

- **`prerender-routes.ts`** - Automatically generates dynamic routes for static prerendering
- **`robots-generator.ts`** - Generates SEO-optimized robots.txt files per environment

### Dependency Management

The project uses a **catalog-based dependency system** via `pnpm-workspace.yaml`:

```yaml
catalog:
  frontend: # Frontend dependencies with shared versions
  nuxt: # Nuxt ecosystem packages
  nimiq: # Nimiq blockchain packages
  prismic: # Prismic CMS packages
  # ... other catalogs
```

**Benefits:**

- Consistent versions across all packages
- Easier dependency updates
- Reduced bundle size through deduplication
- Centralized package management

### WASM & Performance

The project leverages WebAssembly for performance:

- **`@nimiq/core`** - Core blockchain functionality in WASM
- **`vite-plugin-wasm`** - WASM support in Vite
- **`vite-plugin-top-level-await`** - Modern async/await support

## Analytics: Dual Tracking (Matomo + GTM)

### Setup

**Libraries**: `@nuxt/scripts` with Matomo + Google Tag Manager (production only)

**Configuration**:

- `nuxt.config.ts` - Dual analytics registry with hardcoded production values
- `ConsentBanner.vue` - Privacy-compliant consent management using Reka UI AlertDialog (SSR-safe)
- `useMatomo.ts` - Enhanced composable for both analytics systems
- Uses custom environment system from `lib/env.ts` for production detection

**Environment Behavior**:

- **Production/NuxtHub-Production**: Uses production analytics IDs (GTM-NQ9RN8W, Matomo Site ID: 1)
- **Local/Development**: Analytics enabled for testing (controlled via `enableDevAnalytics: true`)
- **All environments**: Use the same production analytics configuration

### Usage

**Automatic Tracking**: Page views, downloads (.deb|rpm|msi|sha256|asc|pub), and route changes tracked automatically after consent.

**Custom Events**: Track events in both systems automatically:

```vue
<script setup>
const { trackEvent } = useMatomo()

// Track in both Matomo and GTM simultaneously
function trackDownload(filename: string) {
  trackEvent('download', 'File', 'Download', filename)
}

function trackButtonClick(section: string) {
  trackEvent('interaction', 'Click', 'Button', section)
}
</script>
```

## Component Architecture

### Component Organization

```
app/
├── components/
│   ├── [UI]/           # UI components (no prefix)
│   ├── [Backgrounds]/  # Background components
│   └── Feature/        # Feature-specific components
├── slices/             # Prismic slices (auto-generated)
│   ├── HeroSection/
│   ├── RichText/
│   └── ...
└── composables/        # Shared logic
```

## Code Style Guide

### Rules

- **Linting**: All code must pass `pnpm lint` (ESLint + stylistic rules)
- **Type checking**: All code must pass `pnpm typecheck` (TypeScript strict mode)
- **Formatting**: Follow ESLint configuration (runs automatically on save)

### Key Patterns

- **Composables**: Use VueUse first, then create custom composables
- **Props**: Always use typed props with Vue's `defineProps`
- **State**: Use Pinia for complex state, `useState` for simple reactive data
- **Imports**: Use auto-imports for Vue APIs and composables

### Quick Commands

```bash
pnpm lint          # Check all linting issues
pnpm lint:fix      # Auto-fix linting issues
pnpm typecheck     # Check TypeScript types
```

### Git Hooks & Pre-commit

The project uses `simple-git-hooks` with `lint-staged` for automatic code quality:

- **Pre-commit hook**: Automatically runs `pnpm lint:fix` on staged files
- **ESLint config**: Uses `@antfu/eslint-config` with UnoCSS and Vue support
- **Install hooks**: Run `npx simple-git-hooks` after cloning

## Available Scripts

### Build Commands

```bash
pnpm build                        # Production build
pnpm build:github-pages          # GitHub Pages build with prerendering
pnpm build:nuxthub               # NuxtHub build (uses NUXTHUB_ENV)
pnpm build:internal-static       # Internal static build (no drafts)
pnpm build:internal-static-drafts # Internal static build (with drafts)
pnpm generate                    # Generate static site
pnpm preview                     # Preview built site locally
```

### Development Commands

```bash
pnpm dev                         # Start development server
pnpm slicemachine               # Start Prismic Slicemachine interface
pnpm cryptomap:types            # Generate Supabase types from schema
```

### Quality Assurance

```bash
pnpm lint                       # Check linting issues
pnpm lint:fix                   # Auto-fix linting issues
pnpm typecheck                  # TypeScript type checking
```

## Testing

**Note**: This project currently has no testing setup. All quality assurance is done through:

- TypeScript type checking
- ESLint static analysis
- Manual testing in different environments
- PR reviews and staging deployments

## Development Setup

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
  - [Reka preset](https://reka-ui.com): Provides variants like reka-open:bg-pink → data-[state:open]:bg-pink
  - [Fluid sizing](https://github.com/onmax/unocss-preset-fluid-sizing): Use `f-pt-md` for responsive padding that scales between breakpoints
  - Scale px: Different from Tailwind, p-4 equals 4px not 16px

### Directory Structure

- `app`: Nuxt application code
- `server`: Backend server code
- `customtypes`: Prismic custom type definitions. Automatically generated from Prismic slicemachine.
- `shared`: Shared utilities and components
- `public`: Static assets

## Prismic + Slicemachine

We use Prismic as our headless CMS with Slicemachine for content-driven components. The content is managed through the Prismic dashboard, and the custom types are defined in the `slicemachine`.

### Slicemachine Workflow

1. **Start Slicemachine**: Run `pnpm slicemachine` and go to `http://localhost:9999`
2. **Create/Edit slices**: Define fields and variations in the Slicemachine interface
3. **Implement component**: Use the template below in `app/slices/YourSlice/index.vue`
4. **Check linting**: Run `pnpm lint` to see any type errors from changes

### Slice Component Pattern

All slices follow this standardized pattern:

```vue
<script setup lang="ts">
import type { Content } from '@prismicio/client'

// Always use typed props for slices
const { slice } = defineProps(getSliceComponentProps<Content.YourSliceSlice>())

// Handle background colors consistently
const bgClass = getColorClass(slice.primary.bgColor)
</script>

<template>
  <!-- All slices must be wrapped in a section -->
  <section :class="bgClass">
    <!-- Slice content here -->
  </section>
</template>
```

> [!NOTE]
> It is important that all slices are wrapped in a section tag, so that the css can apply the [correct styles](https://github.com/onmax/nimiq-ui/blob/main/packages/nimiq-css/src/css/static-content.css). The section should have the background color: `bg-neutral-0`, `bg-neutral-100` or `bg-darkblue`.

## Prismic Documents

When you work with Prismic, you will create "documents" in your Prismic repository. We have multiple types of documents, each with its own purpose. Here are the main ones:

- "Pages": These are the main pages of our website. The `uid` field is used to create the URL for the page. For example, if you create a page with the `uid` "about", it will be accessible at `https://nimiq.com/about`.
- "Posts": These are blog posts. They are created in the same way as pages, but they are displayed in a different section of the website. The `uid` field is also used to create the URL for the post.
- "Exchanges": These are the exchanges where Nimiq is listed. They are created in the same way as pages, but they are fetched from the Prismic API and displayed in a grid on the website inside the `Exchanges` component.
- "Apps": In the past "Apps" were the same as "Exchanges", but now they have been migrated to the [nimiq-awesome repo](https://github.com/onmax/nimiq-awesome) for easier management.

### `draft` field

The `draft` field is a boolean field that indicates whether the document is a draft or not. If the `draft` field is set to `true`, the document will be visible only in the local and internal-static-drafts environments. In all other environments, the document will be hidden.

### Special Page Styling

Some pages require special CSS that is only loaded when those specific routes are accessed. This is handled through route middleware in the `[...uid].vue` page component:

```typescript
// Example from [...uid].vue
definePageMeta({
  middleware: [
    async function (to) {
      // Special styling for specific pages
      if (to.path === '/onepager')
        await import('~/assets/css/onepager.css')
      // Other conditionally loaded stylesheets can be added here
    },
  ],
})
```

Additionally, certain pages may have special header styling (dark vs light) based on page data or specific route conditions:

```typescript
// Logic for dark header styling
const darkHeader = computed(() => page.value?.data.darkHeader || isHome || uid === 'supersimpleswap')
```

When creating new pages that need special styling:

1. Add the CSS file in `assets/css/`
2. Import it conditionally in the middleware function
3. Consider if it needs special header/footer treatment
4. Document any unique styling requirements

## Dynamic Page Generation

The website uses a dynamic page generation system powered by our crawler utility to pre-render routes for better performance.

### Crawler Utility

The `crawler.ts` utility is responsible for:

- Fetching all page and blog documents from Prismic
- Generating URL paths for static site generation
- Filtering draft content based on environment settings
- Supporting pagination for large content sets

This utility is integrated with Nuxt's prerendering system and is called during the build process to ensure all dynamic routes are generated properly.

## API Endpoints

### Available Endpoints

The project includes several API endpoints for data fetching:

- **`/api/exchanges`** - Fetch exchange data from Prismic
- **`/api/albatross/*`** - Blockchain data endpoints for Nimiq network
- **`/api/newsletter/*`** - Newsletter subscription management

### Usage Example

```typescript
// Fetch exchange data
const exchanges = await $fetch('/api/exchanges')

// Use in composables
const { data } = await useFetch('/api/exchanges')
```

## API Structure

The project includes both frontend and backend components:

### Frontend API Consumption

- API endpoints can be configured per environment via environment variables
- The `useRuntimeConfig()` composable provides access to API configuration in components
- Prismic API is used for content retrieval with authentication

### Backend API (Server)

- Server routes are defined in the `server/` directory
- API endpoints follow RESTful conventions
- Server middleware handles CORS and authentication
- NuxtHub integration provides serverless functions when enabled

## State Management

The project uses Pinia for state management with additional features:

- Stores are located in `app/stores/`
- The Pinia Colada plugin provides persistence capabilities
- Use the `useSyncedState` composable for reactive state that syncs across components
- Environment-specific configuration is available via `useRuntimeConfig()`

### Static Generation vs Client-side Data

We build the website statically. We don't have SSR in production. This influences how we should fetch and manage data:

- **`await useFetch`/`useAsyncData`**: Use for data that's only needed at build time and will be included in the static build
- **Pinia Colada (`useQuery`)**: Use when we need to fetch new data on every client visit
- **Pinia stores**: Used primarily for legacy reasons; prefer the approaches above for new code

### Composable-First Approach

> [!IMPORTANT]
> Before proceeding with a new composable, make sure to check if it already exists in `VueUse`.

It is preferable that all logic is wrapped in a composable, even if that composable is not shared. You can create inline composables within components:

```vue
<script setup>
// Inline composable example
function useMyFeature() {
  const data = ref<string>()
  const loading = ref(false)

  const fetchData = async () => {
    loading.value = true
    try {
      data.value = await $fetch('/api/some-endpoint')
    }
    finally {
      loading.value = false
    }
  }

  return { data, loading, fetchData }
}

// Use the composable within the component
const { data, loading, fetchData } = useMyFeature()
</script>
```

This approach helps maintain cleaner, more testable code by:

- Separating concerns
- Making logic reusable
- Improving testability
- Creating clearer component structure

## CI/CD Workflow

The project uses three GitHub Actions workflows for comprehensive CI/CD:

### 1. CI Workflow (`ci.yml`)

- **Trigger**: All pushes to any branch
- **Actions**: Linting, type checking, dependency installation
- **Environment**: Uses `preview` environment with secrets
- **Node**: Version 22 with pnpm caching

### 2. GitHub Pages Workflow (`github-pages.yml`)

- **Trigger**: Pull requests and main branch changes
- **Purpose**: Deploy preview builds to GitHub Pages
- **URL**: `https://nimiq.github.io/nimiq-website/`
- **Environment**: `github-pages` with prerendering enabled

### 3. NuxtHub Workflow (`nuxthub.yml`)

- **Trigger**: Main branch changes (production) and manual dispatch
- **Purpose**: Deploy to NuxtHub serverless infrastructure
- **Environments**: Both production and preview
- **Features**: Edge functions, KV storage, caching

### Required Secrets & Variables

**Secrets:**

- `PRISMIC_ACCESS_TOKEN` - Prismic CMS access
- `NUXT_ALBATROSS_NODE_RPC_URL` - Blockchain RPC endpoint
- `NUXT_PUBLIC_CRYPTO_MAP_SUPABASE_KEY` - Supabase authentication
- `NUXT_ZOHO_*` - Zoho CRM integration (optional)

**Variables:**

- `NUXT_HUB_ENV` - NuxtHub environment
- `NUXT_HUB_PROJECT_KEY` - NuxtHub project identifier
- `NUXT_PUBLIC_CRYPTO_MAP_SUPABASE_URL` - Supabase URL
- `NUXT_PUBLIC_VALIDATORS_API` - Validators API endpoint

## Debugging & Troubleshooting

### Common Issues

**Build Failures:**

```bash
# Check environment variables
echo $PRISMIC_ACCESS_TOKEN  # Should not be empty

# Clear cache and reinstall
rm -rf node_modules .nuxt .output
pnpm install

# Check internet connection (required for Prismic)
curl -I https://nimiq.cdn.prismic.io/api/v2
```

**Type Errors:**

```bash
# Regenerate Prismic types
# This happens automatically when slicemachine updates
pnpm typecheck

# Regenerate Supabase types
pnpm cryptomap:types
```

**Linting Issues:**

```bash
# See all issues
pnpm lint

# Auto-fix most issues
pnpm lint:fix

# Check specific files
pnpm lint path/to/file.vue
```

**Development Server Issues:**

```bash
# Clear Nuxt cache
rm -rf .nuxt

# Restart with fresh state
pnpm dev --force
```

### Performance Debugging

**Bundle Analysis:**

```bash
# Build and analyze bundle
pnpm build
# Check .output/public for generated files

# Monitor build sizes
ls -la .output/public/_nuxt/
```

**Network Issues:**

- Check browser Network tab for failed requests
- Verify API endpoints are responding
- Ensure Prismic access token is valid

### IDE Setup

**Recommended VS Code Extensions:**

- Vue Language Features (Volar)
- TypeScript Vue Plugin
- ESLint
- UnoCSS
- Prismic

**Settings:**

```json
{
  "typescript.preferences.preferTypeOnlyAutoImports": true,
  "vue.server.hybridMode": true
}
```

## Security & Best Practices

### Environment Variables

- **Never commit secrets** - Use `.env` files (gitignored)
- **Use different tokens** for different environments
- **Rotate tokens regularly** - Especially for production

### API Security

- **CORS configuration** - Defined in `nuxt.config.ts`
- **Rate limiting** - Handled by deployment platforms
- **Input validation** - Use Valibot schemas for runtime validation

### Content Security Policy (CSP)

The project uses [`nuxt-security`](https://nuxt-security.vercel.app/) for OWASP-compliant security headers and Content Security Policy protection:

- **CSP Configuration** - Defined in `nuxt.config.ts` security section
- **Prismic Integration** - Allows Prismic CMS domains and inline scripts
- **Analytics Support** - Permits Google Analytics and Matomo tracking
- **Data URLs** - Enables inline SVG images (`data:` protocol)
- **WebSocket Connections** - Configured for real-time blockchain data

**Key CSP Directives:**

```json
{
  "contentSecurityPolicy": {
    "img-src": ["'self'", "data:", "https://nimiq.prismic.io", "..."],
    "script-src": ["'self'", "https://stats.nimiq-network.com", "..."],
    "connect-src": ["'self'", "wss://nimiq-website.je-cf9.workers.dev", "..."]
  }
}
```

See the [Nuxt Security Module](https://nuxt-security.vercel.app/) for more details.

### Content Security

- **Draft content** - Only visible in local/internal-static-drafts environments
- **Prismic access** - Controlled via access tokens
- **Static builds** - No server-side secrets exposed

### Performance & Monitoring

- **Bundle optimization** - Automatic code splitting
- **Image optimization** - `@nuxt/image` with multiple providers
- **Caching strategy** - Static assets with long-term caching

## Contributing Guidelines

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linters (automatic on PR)
5. Submit a PR with a clear description. Link to any relevant issues.

### Code Style

- Follow the ESLint configuration
- Use TypeScript for all new code
- Document complex functions and components
- Follow the existing project structure
