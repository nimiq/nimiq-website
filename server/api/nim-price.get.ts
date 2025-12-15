import type { FiatCurrency } from '@nimiq/utils/fiat-api'
import { CryptoCurrency, getExchangeRates, getHistoricExchangeRates } from '@nimiq/utils/fiat-api'
import { getCachedData } from '../utils/cache'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const currency = (query.currency as FiatCurrency) || 'USD'
  const type = query.type as 'now' | '1d-ago' | undefined

  if (type === '1d-ago') {
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000
    const cacheKey = `nim-price-1d-ago-${currency}`

    return getCachedData(cacheKey, async () => {
      const res = await getHistoricExchangeRates(CryptoCurrency.NIM, currency, [oneDayAgo])
      return res.get(oneDayAgo) || 0
    }, 3600) // Cache for 1 hour
  }

  const cacheKey = `nim-price-now-${currency}`
  return getCachedData(cacheKey, async () => {
    const rates = await getExchangeRates([CryptoCurrency.NIM], [currency])
    return rates.nim[currency?.toLowerCase() as keyof typeof rates.nim] || 0
  }, 60) // Cache for 1 minute
})
