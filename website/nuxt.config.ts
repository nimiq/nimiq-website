import process from 'node:process'
import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../base'],

  // ssr: false,

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-31',

  modules: ['@nuxthub/core', '@nuxtjs/prismic', '@nuxtjs/supabase'],

  site: {
    url: 'https://nimiq.com',

    // These are just default values and they should be overwritten by the page
    name: 'Nimiq Website',
    description: '',
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

  // TODO this rules should be part of a new nimiq sub lib
  // css: ['~/assets/css/main.css'],

  prismic: {
    endpoint: repositoryName,
    clientConfig: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    },
  },

  runtimeConfig: {
    albatross: {
      nodeRpcUrl: process.env.NUXT_NODE_RPC_URL,
      liveview: {
        privateKey: process.env.NUXT_ALBATROSS_LIVEVIEW_PRIVATE_KEY,
        txRecipient: process.env.NUXT_ALBATROSS_LIVEVIEW_TX_RECIPIENT,
        txValue: process.env.NUXT_ALBATROSS_LIVEVIEW_TX_VALUE,
        txFee: process.env.NUXT_ALBATROSS_LIVEVIEW_TX_FEE,
      },
    },
    public: {
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
    '/api/liveview/policy': { swr: 3600 }, // cache 1 hour
  },

  watch: ['server/**/*'],

  nitro: {
    experimental: {
      wasm: true,
      websocket: true,
    },
  },

  experimental: {
    viewTransition: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Nimiq Home',
    },
  },
})
