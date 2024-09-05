import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["../base"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-31',

  modules: [
    '@nuxthub/core', '@nuxtjs/prismic'
  ],

  prismic: {
    endpoint: apiEndpoint || repositoryName
  },

  hub: {
    // NuxtHub options. See https://hub.nuxt.com/docs/getting-started/installation
  },

  app: {
    head: {
      title: 'Nimiq Home',
    },
  },
})