import process from 'node:process'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'
import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-31',

  future: {
    compatibilityVersion: 4,
  },

  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@unocss/nuxt', '@nuxt/eslint', '@nuxt/image', 'reka-ui/nuxt', // '@nuxtjs/seo',
    '@nuxthub/core', '@nuxtjs/prismic', // '@nuxtjs/critters',
    '@nuxtjs/device', '@nuxt/fonts', 'hero-motion/nuxt', '@pinia/colada-nuxt', 'nuxt-og-image'],

  devtools: { enabled: true },

  image: {
    prismic: {},
  },

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
      exclude: ['@nimiq/core', '*.wasm', 'hero-motion'],
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

  // site: {
  //   url: 'https://nimiq.com',

  //   // These are just default values and they should be overwritten by the page
  //   name: 'Nimiq',
  //   description: 'The most accepted cryptocurrency in the world',
  // },

  // sitemap: {
  // Read more in ./modules/prerender-routes.ts
  // },

  // ogImage: {
  //   fonts: ['Mulish:700'],
  // },

  // TODO Remove this option
  unocss: {
    nuxtLayers: true,
  },

  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  prismic: {
    preview: false,
    toolbar: false,
    endpoint: repositoryName,
    clientConfig: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      routes: [
        {
          type: 'page',
          path: '/:uid/',
        },
        {
          type: 'blog_page',
          path: '/blog/:uid/',
        },
        {
          type: 'podcast_episode',
          path: '/podcast/:uid/',
        },
        {
          type: 'child_page',
          path: '/:parent/:uid/',
          resolvers: {
            parent: 'parent',
          },
        },
      ],
    },
  },

  runtimeConfig: {
    albatross: {
      nodeRpcUrl: process.env.NUXT_ALBATROSS_NODE_RPC_URL,
      liveview: {
        privateKey: process.env.NUXT_ALBATROSS_LIVEVIEW_PRIVATE_KEY,
        txRecipient: process.env.NUXT_ALBATROSS_LIVEVIEW_TX_RECIPIENT,
        txValue: process.env.NUXT_ALBATROSS_LIVEVIEW_TX_VALUE,
        txFee: process.env.NUXT_ALBATROSS_LIVEVIEW_TX_FEE,
      },
    },
    cors: {
      allowedOrigins: ['https://www.nimiq.com', 'https://prestaking.nimiq.network', process.env.NIMIQ_STATIC_PREVIEW].filter((origin): origin is string => !!origin),
    },
    public: {
      clientNetwork: 'main-albatross',
      apiDomain: process.env.NUXT_PUBLIC_API_ENDPOINT || '',
      validatorsApi: process.env.NUXT_PUBLIC_VALIDATORS_API || 'https://validators-api-mainnet.nuxt.dev',
      supabase: {
        url: process.env.NUXT_PUBLIC_SUPABASE_URL,
        key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
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

  hub: {
    workers: true,

    // NuxtHub options. See https://hub.nuxt.com/docs/getting-started/installation
    kv: true,
    cache: true,
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
      routes: ['/sitemap.xml', '/', '/newsletter', '/staking', '/new-wallet', '/wallet', '/_ipx/s_1600x900/assets/images/gods-light.webp'],
      crawlLinks: false,
      ignore: ['/blog', '/nimiq-pay'], // Temporary until we can deploy more than 100 files in Cloudflare
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
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
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

  // robots: {
  //   // https://nuxtseo.com/robots/api/config
  //   disallow: ['/iframes'],
  //   sitemap: '/sitemap.xml',
  // },

})
