import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["../base"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-31',

  modules: [
    '@nuxthub/core',
  ],

  hub: {
    // NuxtHub options. See https://hub.nuxt.com/docs/getting-started/installation
  },

  runtimeConfig: {
    rpcUrl: process.env.NUXT_RPC_URL,
    albatrossLiveview: {
      privateKey: process.env.NUXT_ALBATROSS_LIVEVIEW_PRIVATE_KEY,
      txRecipient: process.env.NUXT_ALBATROSS_LIVEVIEW_TX_RECIPIENT,
      txValue: process.env.NUXT_ALBATROSS_LIVEVIEW_TX_VALUE,
      txFee: process.env.NUXT_ALBATROSS_LIVEVIEW_TX_FEE,
    },
    public: {
      nimiqNetwork: process.env.NUXT_PUBLIC_NIMIQ_NETWORK,
    },
  },

  routeRules: {
    '/api/policy': { swr: 3600 }, // cache 1 hour
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
      title: 'Nimiq Albatross Liveview',
    },
  },
})
