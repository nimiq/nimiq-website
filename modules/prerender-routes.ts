import process from 'node:process'
import { defineNuxtModule } from '@nuxt/kit'
import { getDynamicPages } from '../lib/crawler'
import environment from '../lib/env'

const prismicAccessToken = process.env.PRISMIC_ACCESS_TOKEN!

export default defineNuxtModule({
  meta: {
    name: 'nuxt-prerender-routes',
    configKey: 'prerenderRoutes',
  },
  hooks: {
    'nitro:build:before': async (nitro) => {
      if (environment.useNuxtHub) {
        nitro.options.prerender.routes = ['/']
        return
      }

      let pages = await getDynamicPages({
        prismicAccessToken,
        showDrafts: environment.showDrafts,
      })

      // Skip blog index for dynamic builds
      if (environment.environment.isInternalDynamic)
        pages = pages.filter(page => !page.startsWith('/blog?') && page !== '/blog')

      nitro.options.prerender.routes = pages
    },
  },
})
