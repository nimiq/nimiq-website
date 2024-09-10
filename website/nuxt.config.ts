import process from 'node:process'
import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../base'],

  ssr: false,

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-31',

  modules: ['@nuxthub/core', '@nuxtjs/prismic', '@nuxtjs/supabase'],

  unocss: {
    nuxtLayers: true,
  },

  // TODO this rules should be part of a new nimiq sub lib
  css: ['~/assets/css/main.css'],

  prismic: {
    endpoint: repositoryName,
    clientConfig: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    },
  },

  supabase: {
    redirect: false,
    types: './app/types/database.types.ts',
  },

  hub: {
    // NuxtHub options. See https://hub.nuxt.com/docs/getting-started/installation
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
