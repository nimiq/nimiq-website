import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'
import { array, boolean, object, optional, string } from 'valibot'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'
import { EXCLUDED_PAGES } from './lib/crawler'
import environment, { getSiteUrl } from './lib/env'
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
    'reka-ui/nuxt',
    '@nuxtjs/prismic',
    '@nuxtjs/seo',
    '@nuxtjs/device',
    '@nuxt/fonts',
    '@pinia/colada-nuxt',
    'nuxt-module-feed',
    'nuxt-safe-runtime-config',
    'motion-v/nuxt',
    './modules/prerender-routes',
    environment.useNuxtHub && '@nuxthub/core',
  ].filter(Boolean),

  devtools: { enabled: true },

  components: [
    { path: '~/components/[UI]', pathPrefix: false },
    { path: '~/components/[Backgrounds]', pathPrefix: false },
    '~/components',
  ],

  vite: {
    plugins: [
      wasm(),
      topLevelAwait(),
    ],
    optimizeDeps: {
      exclude: ['@nimiq/core', '*.wasm'],
    },
    worker: {
      plugins: () => [
        wasm(),
        topLevelAwait(),
      ],
    },
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: getSiteUrl(environment.environment.name),
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

  linkChecker: {
    excludeLinks: [...EXCLUDED_PAGES, '/vote#rank-curves', '/vote#change-curve', 'magnet:*'],
    fetchRemoteUrls: true,
  },

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
      clientNetwork: 'main-albatross',
      apiDomain: process.env.NUXT_PUBLIC_API_ENDPOINT || '',
      validatorsApi: process.env.NUXT_PUBLIC_VALIDATORS_API || 'https://validators-api-mainnet.nuxt.dev',
      cryptoMapSupabase: {
        url: process.env.NUXT_PUBLIC_CRYPTO_MAP_SUPABASE_URL,
        key: process.env.NUXT_PUBLIC_CRYPTO_MAP_SUPABASE_KEY,
      },
      environment: environment.environment,
      showDrafts: environment.showDrafts,
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
        clientNetwork: optional(string()),
        apiDomain: string(),
        validatorsApi: optional(string()),
        cryptoMapSupabase: object({
          url: string(),
          key: string(),
        }),
        environment: object({}),
        showDrafts: optional(boolean()),
        wordsChallenge: object({
          publicAddress: string(),
          firstRealWords: string(),
        }),
      }),
      zoho: optional(object({
        requestUrl: string(),
        clientId: string(),
        clientSecret: string(),
        scope: string(),
        code: string(),
        refreshToken: string(),
        listkey: string(),
      })),
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

    // Check ./modules/prerender-routes.ts to see more about this
    // More redirects in nginx/default.conf

    // Path redirects
    '/sp': { redirect: '/siliconparadise' },
    '/sp/freecrypto': { redirect: '/siliconparadise?freecrypto#promo' },
    '/cplink': { redirect: '/cryptopaymentlink' },
    '/exchanges': { redirect: '/buy-and-sell' },
    '/community-funding': { redirect: '/community/funding' },

    // Whitepaper redirects
    '/whitepaper-1': { redirect: '/litepaper?version=1.0' },
    '/whitepaper': { redirect: '/litepaper' },

    // Developer redirects
    '/developers/migration/migration-integrators': { redirect: '/developers/build/integrator-guide' },
    '/developers/llms-full.md': { redirect: '/developers/llms-full.txt' },

    // External redirects
    '/privacy-policy': { redirect: 'https://www.iubenda.com/privacy-policy/78537710' },
    '/cookie-policy': { redirect: 'https://www.iubenda.com/privacy-policy/78537710/cookie-policy' },
    '/podcast': { redirect: 'https://www.youtube.com/watch?v=Z-ypFLS7csU&list=PLuhSf5DE3FFQFSM-Hhb4gXrbcIo3ohVE9&ab_channel=Nimiq' },
    '/tutorials/ledger': { redirect: 'https://nimiq.github.io/tutorials/ledger-guide' },
    '/styleguide': { redirect: 'https://www.figma.com/design/GU6cdS85S2v13QcdzW9v8Tav/NIMIQ-Style-Guide--Oct-18-?node-id=0-1&p=f&t=cJ59Z8kfmhP548bH-0' },
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
    prerender: {
      crawlLinks: false,
      ignore: [
        '/nimiq-website/_ipx/s_1600x900/assets/images/gods-light.webp',
        '/nimiq-website/_ipx/s_3200x1800/assets/images/gods-light.webp',
        '/nimiq-website/_ipx/_/assets/images/apple-store-badge.png',
        '/nimiq-website/_ipx/_/assets/images/google-play-badge.png',
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

  ogImage: {
    fonts: ['Mulish:400', 'Mulish:700'],
  },

  feed: {
    sources: [
      { path: '/feed.xml', type: 'rss2', cacheTime: 0 },
    ],
  },

})
