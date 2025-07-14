import { defineNuxtModule } from '@nuxt/kit'
import { consola } from 'consola'
import environment from '../lib/env'

export default defineNuxtModule({
  meta: {
    name: 'conditional-nuxthub',
    configKey: 'conditionalNuxthub',
  },
  setup(_, nuxt) {
    consola.info(`Conditional Nuxthub module for environment: ${environment.environment.name}`)

    if (!environment.useNuxtHub) {
      consola.warn('@nuxthub/core module WILL NOT be installed')
      return
    }

    nuxt.hook('modules:done', async () => {
      consola.info('Configuring @nuxthub/core module via modules:done hook')
      const hubConfig = (nuxt.options as any).hub || { kv: true, cache: true, workers: true }

      try {
        nuxt.options.modules.push('@nuxthub/core')
        // @ts-expect-error hub is ok
        nuxt.options.hub = hubConfig
        consola.info('Successfully configured @nuxthub/core module')
      }
      catch (error) {
        consola.error('Failed to configure @nuxthub/core module:', error)
        throw error
      }
    })
  },
})
