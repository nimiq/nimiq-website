import { defineNuxtModule, installModule } from '@nuxt/kit'
import { consola } from 'consola'
import environment from '../lib/env'

export default defineNuxtModule({
  meta: {
    name: 'conditional-nuxthub',
    configKey: 'conditionalNuxthub',
  },
  async setup() {
    if (!environment.useNuxtHub)
      return

    consola.info(`Adding @nuxthub/core module: Environment "${environment.environment.name}"`)
    await installModule('@nuxthub/core', { kv: true, cache: true })
  },
})
