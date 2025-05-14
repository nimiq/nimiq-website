import process from 'node:process'
import { defineNuxtModule } from '@nuxt/kit'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'
import { getDynamicPages } from './lib/crawler'
import environment from './lib/env'
import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-05',

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
    environment.useNuxtHub as true ? '@nuxthub/core' : null,
    '@nuxtjs/prismic',
    'nuxt-og-image',
    '@nuxtjs/device',
    '@nuxt/fonts',
    '@pinia/colada-nuxt',
    '@nuxtjs/sitemap',
    'nuxt-module-feed',

    defineNuxtModule({
      meta: { name: 'nuxt-prerender-routes' },
      hooks: {
        'nitro:build:before': async (nitro) => {
          let pages = await getDynamicPages({ prismicAccessToken: environment.prismicAccessToken, showDrafts: environment.showDrafts })
          console.log(pages.filter(f => !f.startsWith('/blog')))

          // for nuxthub, we only pre-render the first 95 pages because the prerendering process is limited to 100 pages
          if (environment.environment.isNuxthubPreview || environment.environment.isNuxthubProduction)
            pages = pages.slice(0, 95)
          nitro.options.prerender.routes = pages
        },
      },
    }),
  ],

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
    url: 'https://nimiq.com',

    // These are just default values and they should be overwritten by the page
    name: 'Nimiq',
    description: 'The most accepted cryptocurrency in the world',
  },

  sitemap: {
    urls: async () => getDynamicPages({ prismicAccessToken: environment.prismicAccessToken, showDrafts: false }),
  },

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
      accessToken: environment.prismicAccessToken,
    },
  },

  runtimeConfig: {
    prismicAccessToken: environment.prismicAccessToken,
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
      environment: environment.environment,
      showDrafts: environment.showDrafts,
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

  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-ignore Hub is dynamic
  hub: {
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

  ogImage: {
    // will fetch the fonts from google at build time
    fonts: ['Mulish:400', 'Mulish:700'],
  },

  // robots: {
  //   // https://nuxtseo.com/robots/api/config
  //   disallow: ['/iframes'],
  // }

  feed: {
    sources: [
      { path: '/feed.xml', type: 'rss2', cacheTime: 0 },
    ],
  },
})
