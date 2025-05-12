import type { PiniaColadaOptions } from '@pinia/colada'
import { PiniaColadaDelay } from '@pinia/colada-plugin-delay'

export default {
  plugins: [
    PiniaColadaDelay(),
  ],
} satisfies PiniaColadaOptions
