import { defineNuxtModule, installModule } from '@nuxt/kit'
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
      consola.warn('nuxthub/core module WILL NOT be installed')
      return
    }

    // Use modules:done hook to ensure NuxtHub is configured after all modules are loaded
    nuxt.hook('modules:done', async () => {
      consola.info('Configuring @nuxthub/core module via modules:done hook')

      // Pass through the hub configuration from nuxt.config.ts
      const hubConfig = (nuxt.options as any).hub || { kv: true, cache: true, workers: true }

      try {
        await installModule('@nuxthub/core', hubConfig)
        consola.info('Successfully configured @nuxthub/core module')
      }
      catch (error) {
        consola.error('Failed to configure @nuxthub/core module:', error)
        throw error
      }
    })
  },
})
