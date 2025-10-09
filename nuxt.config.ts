import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'
import { array, boolean, object, optional, string } from 'valibot'
import wasm from 'vite-plugin-wasm'
import { EXCLUDED_PAGES } from './lib/crawler'
import environment from './lib/env'
import { repositoryName } from './slicemachine.config.json'

const prismicAccessToken = process.env.PRISMIC_ACCESS_TOKEN!

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-07',

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    'reka-ui/nuxt',
    !environment.useNuxtHub && '@nuxtjs/prismic',
    '@nuxtjs/device',
    '@nuxt/fonts',
    '@pinia/colada-nuxt',
    !environment.useNuxtHub && 'nuxt-module-feed', // Skip feed for NuxtHub builds
    !environment.useNuxtHub && 'nuxt-og-image', // Enable og-image only when not on NuxtHub
    !environment.useNuxtHub && '@nuxtjs/seo',
    'nuxt-safe-runtime-config',
    'motion-v/nuxt',
    './modules/prerender-routes',
    !environment.useNuxtHub && './modules/prismic-images',
    !environment.useNuxtHub && './modules/link-validation', // Enhanced link validation with whitelist
    environment.useNuxtHub && '@nuxthub/core',
  ].filter(Boolean),

  // Analytics scripts - loaded in all environments, but behavior controlled by composables
  scripts: {
    registry: {
      matomoAnalytics: {
        matomoUrl: 'https://stats.nimiq-network.com',
        siteId: 2,
        trackPageView: true,
        enableLinkTracking: true,
      },
      googleTagManager: {
        id: 'GTM-NQ9RN8W',
      },
    },
  },

  devtools: { enabled: true },

  components: [
    { path: '~/components/[UI]', pathPrefix: false },
    { path: '~/components/[Backgrounds]', pathPrefix: false },
    '~/components',
  ],

  vite: {
    plugins: [
      wasm(),
    ],
    optimizeDeps: {
      exclude: ['@nimiq/core', '*.wasm'],
    },
    worker: {
      plugins: () => [
        wasm(),
      ],
    },

    build: {
      rollupOptions: {
        external: [
          /^.*\.node$/,
        ],
      },
    },
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  css: ['~/assets/css/main.css'],

  // SEO configuration - skip for NuxtHub builds
  ...(!environment.useNuxtHub && {
    site: {
      url: process.env.NUXT_PUBLIC_SITE_URL || 'https://nimiq.com',
      indexable: environment.environment.isProduction,
    },

    robots: {
      // Only generate robots.txt for production and GitHub Pages
      robotsTxt: !environment.environment.isProduction && !environment.environment.isGitHubPages,
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

  // Disable link inspections for NuxtHub builds to avoid failures on non-HTTP links (e.g., magnet:)
  ...(!environment.useNuxtHub && {
    linkChecker: {
      excludeLinks: [
        ...EXCLUDED_PAGES,
        '/vote#rank-curves',
        '/vote#change-curve',
        'magnet:*',
        // Nginx redirects - these paths are handled by nginx and redirect to external URLs but we don't want to check them
        '/privacy-policy',
        '/privacy',
        '/cookie-policy',
        '/styleguide',
        '/cards',
        '/activation/privacy',
        '/vote',
      ],
      fetchRemoteUrls: true,
    },
  }),

  // // TODO Remove this option
  // unocss: {
  //   nuxtLayers: true,
  // },

  prismic: {
    preview: false,
    toolbar: false,
    endpoint: repositoryName,
    clientConfig: {
      accessToken: prismicAccessToken,
      routes: [
        { type: 'page', path: '/:uid' },
        { type: 'blog_page', path: '/blog/:uid' },
      ],
    },
  },

  runtimeConfig: {
    prismicAccessToken,
    albatross: {
      nodeRpcUrl: process.env.NUXT_ALBATROSS_NODE_RPC_URL,
    },
    cors: {
      allowedOrigins: ['https://www.nimiq.com', 'https://prestaking.nimiq.network', process.env.NIMIQ_STATIC_PREVIEW].filter(Boolean) as string[],
    },
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || '/',
      clientNetwork: 'MainAlbatross',
      apiDomain: process.env.NUXT_PUBLIC_API_ENDPOINT || '',
      validatorsApi: process.env.NUXT_PUBLIC_VALIDATORS_API || 'https://validators-api-mainnet.nuxt.dev',
      cryptoMapSupabase: {
        url: process.env.NUXT_PUBLIC_CRYPTO_MAP_SUPABASE_URL,
        key: process.env.NUXT_PUBLIC_CRYPTO_MAP_SUPABASE_KEY,
      },
      environment: environment.environment,
      showDrafts: environment.showDrafts,
      useNuxtHub: environment.useNuxtHub,
      enablePrismicSSR: environment.enablePrismicSSR,
      enableDevAnalytics: true,
      wordsChallenge: {
        publicAddress: process.env.NUXT_PUBLIC_WORDS_CHALLENGE_PUBLIC_ADDRESS,
        firstRealWords: process.env.NUXT_PUBLIC_WORDS_CHALLENGE_FIRST_REAL_WORDS,
      },
    },
    zoho: {
      requestUrl: process.env.NUXT_ZOHO_REQUEST_URL,
      clientId: process.env.NUXT_ZOHO_CLIENT_ID,
      clientSecret: process.env.NUXT_ZOHO_CLIENT_SECRET,
      scope: process.env.NUXT_ZOHO_SCOPE,
      code: process.env.NUXT_ZOHO_CODE,
      refreshToken: process.env.NUXT_ZOHO_REFRESH_TOKEN,
      listkey: process.env.NUXT_ZOHO_LISTKEY,
    },
  },

  safeRuntimeConfig: {
    $schema: object({
      prismicAccessToken: string(),
      albatross: object({
        nodeRpcUrl: string(),
      }),
      cors: object({
        allowedOrigins: array(string()),
      }),
      public: object({
        baseUrl: string(),
        clientNetwork: optional(string()),
        apiDomain: string(),
        validatorsApi: optional(string()),
        cryptoMapSupabase: object({
          url: string(),
          key: string(),
        }),
        environment: object({
          name: string(),
          isLocal: boolean(),
          isGitHubPages: boolean(),
          isNuxthubPreview: boolean(),
          isNuxthubProduction: boolean(),
          isInternalStatic: boolean(),
          isInternalDrafts: boolean(),
          isProduction: boolean(),
          isInternalDynamic: boolean(),
        }),
        showDrafts: boolean(),
        useNuxtHub: boolean(),
        enablePrismicSSR: boolean(),
        enableDevAnalytics: boolean(),
        wordsChallenge: object({
          publicAddress: string(),
          firstRealWords: string(),
        }),
      }),
      zoho: object({
        requestUrl: string(),
        clientId: string(),
        clientSecret: string(),
        scope: string(),
        code: string(),
        refreshToken: string(),
        listkey: string(),
      }),
    }),
  },

  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-ignore Hub is dynamic
  hub: {
    // NuxtHub options. See https://hub.nuxt.com/docs/getting-started/installation
    kv: true,
    cache: true,
    workers: true,
    bindings: {
      observability: {
        logs: true,
      },
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  routeRules: {
    '/api/**': { cors: true },
  },

  nitro: {
    experimental: {
      wasm: true,
      websocket: true,
    },
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    rollupConfig: {
      external: [
      ],
    },
    prerender: {
      crawlLinks: false,
      ignore: [
        '/nimiq-website/_ipx/s_1600x900/assets/images/gods-light.webp',
        '/nimiq-website/_ipx/s_3200x1800/assets/images/gods-light.webp',
        '/nimiq-website/_ipx/_/assets/images/apple-store-badge.png',
        '/nimiq-website/_ipx/_/assets/images/google-play-badge.png',
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

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    viewTransition: true,
    typedPages: true,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      titleTemplate: '%s',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/icon', href: '/favicon.ico' },
        // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#1f2348' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
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
      sources: [
        { path: '/feed.xml', type: 'rss2', cacheTime: 0 },
      ],
    },
  }),

})
