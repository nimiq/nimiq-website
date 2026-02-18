import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'
import nimiqIcons from 'nimiq-icons/icons.json'
import { defineNuxtConfig } from 'nuxt/config'
import { boolean, object, optional, string } from 'valibot'
import wasm from 'vite-plugin-wasm'
import environment from './lib/env'

const IPX_CACHE_DIR = '.cache/ipx'
const IPX_OUTPUT_DIR = '.output/public/_ipx'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-07',

  future: {
    compatibilityVersion: 5,
  },

  srcDir: 'app',
  dir: {
    app: '.',
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/hints',
    '@nuxt/a11y',
    environment.environment.isLocal && process.env.VRT !== '1' && '@nuxt/devtools',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    'reka-ui/nuxt',
    '@nuxtjs/device',
    !environment.useNuxtHub && 'nuxt-module-feed', // Skip feed for NuxtHub builds
    !environment.useNuxtHub && 'nuxt-og-image', // Enable og-image only when not on NuxtHub
    !environment.useNuxtHub && '@nuxtjs/seo',
    'nuxt-safe-runtime-config',
    'motion-v/nuxt',
    environment.useNuxtHub && '@nuxthub/core',
    '@nuxt/content',
    'nuxt-prerender-kit',
    environment.environment.isStudio && 'nuxt-studio',
    'nuxt-link-checker',
  ].filter(Boolean),

  fonts: {
    experimental: {
      // Our typography is defined via CSS variables (Tailwind theme tokens). Enable parsing those so
      // @nuxt/fonts can correctly resolve and serve the intended webfonts in dev/VRT.
      processCSSVariables: true,
    },
    families: [
      // Match production homepage: only Regular is shipped, bold is synthesized via `font-weight`.
      { name: 'Mulish', provider: 'google', weights: [400], styles: ['normal', 'italic'], global: true },
      { name: 'Fira Code', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Press Start 2P', provider: 'google', weights: [400] },
    ],
    defaults: {
      weights: [400],
      styles: ['normal', 'italic'],
    },
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  image: {
    quality: 80,
    format: ['webp'],
  },

  icon: {
    customCollections: [
      { prefix: 'custom', dir: './public/assets/custom-icons' },
      { prefix: 'oasis-regions', dir: './public/assets/oasis-regions' },
      nimiqIcons,
    ],
    serverBundle: 'local',
    clientBundle: {
      sizeLimitKb: 1024,
    },
  },

  studio: {
    repository: { provider: 'github', owner: 'nimiq', repo: 'website', branch: 'main' },
    // Google OAuth moderators (GitHub uses repo permissions instead)
    // Env: STUDIO_GOOGLE_MODERATORS=maximogarciamtnez@gmail.com
    // Env: STUDIO_GITHUB_CLIENT_ID, STUDIO_GITHUB_CLIENT_SECRET, STUDIO_GITHUB_TOKEN
    // Env: STUDIO_GOOGLE_CLIENT_ID, STUDIO_GOOGLE_CLIENT_SECRET
  },

  // Analytics scripts - deferred until page is ready
  scripts: {
    registry: {
      matomoAnalytics: {
        matomoUrl: 'https://stats.nimiq-network.com',
        siteId: 2,
        trackPageView: true,
        enableLinkTracking: true,
        scriptOptions: { trigger: 'onNuxtReady' },
      },
      googleTagManager: {
        id: 'GTM-NQ9RN8W',
        scriptOptions: { trigger: 'onNuxtReady' },
      },
    },
  },

  devtools: { enabled: environment.environment.isLocal && process.env.VRT !== '1' },

  components: [
    '~/components',
  ],

  a11y: {
    enabled: environment.environment.isLocal,
    report: {
      enabled: environment.environment.isProduction,
      // Write outside Nuxt's buildDir (Nuxt 4 defaults to node_modules/.cache/nuxt/.nuxt)
      // so the report ends up at a stable path.
      output: resolve(process.cwd(), '.nuxt/a11y-report.md'),
      failOnViolation: false,
    },
  },

  vite: {
    plugins: [wasm()],
    optimizeDeps: { exclude: ['@nimiq/core', '*.wasm'] },
    worker: { plugins: () => [wasm()] },
    build: { rollupOptions: { external: [/^.*\.node$/] } },
  },

  css: ['~/assets/css/main.css'],

  // SEO configuration - skip for NuxtHub builds
  ...(!environment.useNuxtHub && {
    site: {
      url: process.env.NUXT_PUBLIC_SITE_URL || 'https://nimiq.com',
      indexable: environment.environment.isProduction,
    },

    robots: {
      robotsTxt: environment.environment.isProduction,
    },

    schemaOrg: {
      // Search engines understand the organization better with structured data
      identity: {
        type: 'Organization',
        name: 'Nimiq',
        url: 'https://nimiq.com',
        logo: 'https://nimiq.com/logo.png',
      },
    },

  }),

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || '/',
      apiDomain: process.env.NUXT_PUBLIC_API_DOMAIN || 'https://nimiq.com',
      redirectAllErrors: process.env.NUXT_PUBLIC_REDIRECT_ALL_ERRORS === 'true',
      clientNetwork: 'MainAlbatross',
      validatorsApi: process.env.NUXT_PUBLIC_VALIDATORS_API || 'https://validators-api-mainnet.nuxt.dev',
      environment: environment.environment,
      useNuxtHub: environment.useNuxtHub,
      enableDevAnalytics: true,
      wordsChallenge: {
        publicAddress: process.env.NUXT_PUBLIC_WORDS_CHALLENGE_PUBLIC_ADDRESS,
        firstRealWords:
          process.env.NUXT_PUBLIC_WORDS_CHALLENGE_FIRST_REAL_WORDS,
      },
    },
    zoho: {
      requestUrl: process.env.NUXT_ZOHO_REQUEST_URL,
      clientId: process.env.NUXT_ZOHO_CLIENT_ID,
      clientSecret: process.env.NUXT_ZOHO_CLIENT_SECRET,
      refreshToken: process.env.NUXT_ZOHO_REFRESH_TOKEN,
      listkey: process.env.NUXT_ZOHO_LISTKEY,
    },
  },

  safeRuntimeConfig: {
    $schema: object({
      public: object({
        baseUrl: string(),
        apiDomain: string(),
        redirectAllErrors: boolean(),
        clientNetwork: optional(string()),
        validatorsApi: optional(string()),
        environment: object({ name: string(), isLocal: boolean(), isStudio: boolean(), isProduction: boolean() }),
        useNuxtHub: boolean(),
        enableDevAnalytics: boolean(),
        wordsChallenge: object({ publicAddress: string(), firstRealWords: string() }),
      }),
      zoho: object({ requestUrl: string(), clientId: string(), clientSecret: string(), refreshToken: string(), listkey: string() }),
    }),
  },

  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-ignore Hub is dynamic
  hub: {
    db: 'sqlite',
    kv: true,
    cache: true,
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  routeRules: {
    '/exchanges': { redirect: '/buy-and-sell' },
  },

  nitro: {
    experimental: { wasm: true },
    esbuild: { options: { target: 'esnext' } },
    compressPublicAssets: { gzip: true, brotli: true },
    minify: true,
    prerender: {
      concurrency: 8, // Parallel prerendering for faster builds
      crawlLinks: true,
      failOnError: false, // TODO: Re-enable once all pages/images are ready
      ignore: [
        // External pages built by other projects - prevent Nuxt from trying to generate them
        '/vote',
        '/cards',
        '/styleguide',
        '/privacy-policy',
        '/cookie-policy',
        '/activation/privacy',
        '/terms',
        // Broken links in draft content
        '/sp',
        // Non-HTTP protocols
        'magnet:*',
      ],
    },
  },

  hooks: {
    // Ensure dev uses the same WOFF2-only Google Fonts as production.
    'fonts:providers': function (providers: any) {
      const base = providers.google as any
      if (typeof base !== 'function')
        return
      providers.google = ((options: any) => {
        const provider = base(options)
        const wrapped = async (ctx: any) => {
          const resolved = await provider(ctx)
          if (!resolved || typeof resolved.resolveFont !== 'function')
            return resolved
          return {
            ...resolved,
            async resolveFont(fontFamily: any, options: any) {
              const result = await resolved.resolveFont(fontFamily, options)
              if (!result?.fonts)
                return result
              const filtered = result.fonts
                .map((font: any) => ({
                  ...font,
                  src: font.src?.filter((source: any) => {
                    if (!('url' in source))
                      return true
                    if (source.format === 'woff')
                      return false
                    return !source.url?.endsWith('.woff')
                  }),
                }))
                .filter((font: any) => font.src && font.src.length > 0)
              return { ...result, fonts: filtered }
            },
          }
        }
        // Preserve provider name for unifont.
        ;(wrapped as any)._name = (provider as any)._name
        return wrapped
      }) as any
    },
    // Restore IPX cache before build
    'build:before': function () {
      // Ensure a stable output dir exists for tools that write build artifacts (e.g. @nuxt/a11y report).
      mkdirSync(resolve(process.cwd(), '.nuxt'), { recursive: true })

      if (existsSync(IPX_CACHE_DIR)) {
        // Best-effort cache restore. In clean environments (e.g. Docker) the output
        // folder might not exist yet; don't fail the whole prepare/build if restore fails.
        try {
          mkdirSync(IPX_OUTPUT_DIR, { recursive: true })
          cpSync(IPX_CACHE_DIR, IPX_OUTPUT_DIR, { recursive: true })
        }
        catch {
          // Ignore cache restore errors.
        }
      }
    },
    // Save IPX cache after build
    'build:done': function () {
      if (existsSync(IPX_OUTPUT_DIR)) {
        // Best-effort cache save. IPX can generate/cleanup files while Nuxt is finishing,
        // so don't fail the overall build/prepare if a path disappears mid-copy.
        try {
          rmSync(IPX_CACHE_DIR, { recursive: true, force: true })
          mkdirSync(IPX_CACHE_DIR, { recursive: true })
          cpSync(IPX_OUTPUT_DIR, IPX_CACHE_DIR, { recursive: true })
        }
        catch {
          // Ignore cache save errors.
        }
      }
    },
  },

  experimental: {
    viewTransition: true,
    typedPages: true,
    buildCache: environment.environment.isLocal,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      titleTemplate: '%s',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://stats.nimiq-network.com' },
        { rel: 'preconnect', href: 'https://wallet.nimiq.com' },
        { rel: 'dns-prefetch', href: 'https://validators-api-mainnet.nuxt.dev' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#1f2348' },
        { name: 'author', content: 'Nimiq Team' },
        { name: 'publisher', content: 'Nimiq' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Nimiq' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@nimiq' },
        { name: 'twitter:creator', content: '@nimiq' },
      ],
      htmlAttrs: { lang: 'en' },
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  // Disable og-image generation on NuxtHub (Cloudflare) due to @resvg/resvg-js native bindings incompatibility
  // Moved into conditional spread below to appease TS/ESLint config typing

  // Feed configuration - skip for NuxtHub builds
  ...(!environment.useNuxtHub && {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-ignore Provided by nuxt-og-image module
    ogImage: {
      fonts: ['Mulish:400', 'Mulish:700'],
    },
    feed: {
      sources: [{ path: '/feed.xml', type: 'rss2', cacheTime: 0 }],
    },
  }),
})
