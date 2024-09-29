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

  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    'radix-vue/nuxt',
    '@nuxtjs/seo',
    '@nuxthub/core',
    '@nuxtjs/prismic',
    '@nuxtjs/supabase',
  ],

  devtools: { enabled: true },

  vite: {
    plugins: [
      wasm(),
      topLevelAwait(),
    ],
    optimizeDeps: {
      exclude: ['@nimiq/core', '*.wasm'],
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
    // Read more in ./modules/prerender-routes.ts
  },

  ogImage: {
    fonts: ['Mulish:700'],
  },

  unocss: {
    nuxtLayers: true,
  },

  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  // css: ['~/assets/css/main.css'],

  prismic: {
    endpoint: repositoryName,
    clientConfig: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    },
    linkResolver: '~/prismic/link-resolver.ts',
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
    public: {
      apiDomain: process.env.NUXT_PUBLIC_API_ENDPOINT || '',
    },
    zoho: {
      requestUrl: process.env.NUXT_ZOHO_REQUEST_URL,
      clientId: process.env.NUXT_ZOHO_CLIENT_ID,
      clientSecret: process.env.NUXT_ZOHO_CLIENT_SECRET,
      scope: process.env.NUXT_ZOHO_SCOPE,
    },
  },

  supabase: {
    redirect: false,
    types: './app/types/database.types.ts',
  },

  hub: {
    // NuxtHub options. See https://hub.nuxt.com/docs/getting-started/installation
  },

  routeRules: {
    // Check ./modules/prerender-routes.ts to see more about this

    '/api/liveview/policy': { swr: 3600 }, // cache 1 hour

    '/privacy-policy': { redirect: 'https://www.iubenda.com/privacy-policy/78537710' },
    '/cookie-policy': { redirect: 'https://www.iubenda.com/privacy-policy/78537710/cookie-policy' },
  },

  watch: ['server/**/*'],

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
      routes: ['/sitemap.xml', '/iframes/albatross-liveview'],
    },
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
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
        { name: 'description', content: 'Your Nimiq-Nuxt Template' },
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

  robots: {
    // https://nuxtseo.com/robots/api/config
    disallow: ['/iframes'],
    sitemap: '/sitemap.xml',
  },

})
