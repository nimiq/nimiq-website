import { defineNuxtModule } from '@nuxt/kit'
import { fetchPricesLast5Years } from '~~/shared/utils/nim-price'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-generate-nim-prices',
  },
  async setup(_options) {
    await fetchPricesLast5Years('5y')
  },
})
