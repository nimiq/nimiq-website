import { defineNuxtModule, installModule } from '@nuxt/kit'
import { consola } from 'consola'
import environment from '../lib/env'

export default defineNuxtModule({
  meta: {
    name: 'conditional-nuxthub',
    configKey: 'conditionalNuxthub',
  },
  async setup() {
    // Check if NuxtHub should be enabled based on environment
    if (environment.useNuxtHub) {
      consola.info('Adding @nuxthub/core module (environment requires NuxtHub)')

      // Dynamically install the @nuxthub/core module
      await installModule('@nuxthub/core')
    }
    else {
      consola.info('Skipping @nuxthub/core module (environment does not require NuxtHub)')
    }
  },
})
