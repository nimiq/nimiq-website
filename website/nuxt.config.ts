import process from 'node:process'
import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../base'],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-31',

  modules: ['@nuxthub/core', '@nuxtjs/prismic', '@nuxtjs/supabase'],

  unocss: {
    nuxtLayers: true,
  },

  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  // TODO this rules should be part of a new nimiq sub lib
  css: ['~/assets/css/main.css'],

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
    '/iframes/albatross-liveview': { ssr: false },
  },

  watch: ['server/**/*'],

  nitro: {
    experimental: {
      wasm: true,
      websocket: true,
    },
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
