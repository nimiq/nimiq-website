import process from 'node:process'
import { defineNuxtModule } from '@nuxt/kit'
import { consola } from 'consola'
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
      let pages = await getDynamicPages({
        prismicAccessToken,
        showDrafts: environment.showDrafts,
      })

      consola.info('Non-blog pages to prerender:', pages.filter(f => !f.startsWith('/blog')).sort())

      // For nuxthub, we only pre-render the first 95 pages because the prerendering process is limited to 100 pages
      if (environment.useNuxtHub)
        pages = pages.slice(0, 95)

      nitro.options.prerender.routes = pages
    },
  },
})
