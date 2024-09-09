import process from 'node:process'
import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../base'],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-31',

  modules: [
    '@nuxthub/core',
    '@nuxtjs/prismic',
  ],

  // TODO this rules should be part of a new nimiq sub lib
  css: ['~/assets/css/main.css'],

  prismic: {
    endpoint: repositoryName,
    clientConfig: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    },
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
