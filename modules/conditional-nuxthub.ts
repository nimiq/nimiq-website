import { defineNuxtModule, installModule } from '@nuxt/kit'
import { consola } from 'consola'
import environment from '../lib/env'

export default defineNuxtModule({
  meta: {
    name: 'conditional-nuxthub',
    configKey: 'conditionalNuxthub',
  },
  async setup(_, nuxt) {
    consola.info(`Conditional Nuxthub module for environment: ${environment.environment.name}`)

    if (!environment.useNuxtHub) {
      consola.warn('nuxthub/core module WILL NOT be installed')
      return
    }

    consola.info('Adding @nuxthub/core module')

    // Pass through the hub configuration from nuxt.config.ts
    const hubConfig = (nuxt.options as any).hub || { kv: true, cache: true, workers: true }

    await installModule('@nuxthub/core', hubConfig)
  },
})
