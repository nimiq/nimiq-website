import { defineNuxtModule, installModule } from '@nuxt/kit'
import { consola } from 'consola'
import environment from '../lib/env'

export default defineNuxtModule({
  meta: {
    name: 'conditional-nuxthub',
    configKey: 'conditionalNuxthub',
  },
  async setup(_, nuxt) {
    if (!environment.useNuxtHub)
      return

    consola.info(`Adding @nuxthub/core module: Environment "${environment.environment.name}"`)

    // Pass through the hub configuration from nuxt.config.ts
    const hubConfig = (nuxt.options as any).hub || { kv: true, cache: true, workers: true }

    await installModule('@nuxthub/core', hubConfig)
  },
})
