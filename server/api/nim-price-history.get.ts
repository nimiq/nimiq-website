import type { FiatCurrency } from '@nimiq/utils/fiat-api'
import { CryptoCurrency, getHistoricExchangeRatesByRange, Provider } from '@nimiq/utils/fiat-api'
import { getCachedData } from '../utils/cache'

type HistoricNimPricePeriod = '1y' | '2y' | '5y'
type NimPrice = [number, number]

const ONE_DAY = 24 * 60 * 60 * 1000
const periods: Record<HistoricNimPricePeriod, number> = { '1y': 365, '2y': 730, '5y': 1825 }

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const currency = (query.currency as FiatCurrency) || 'USD'
  const period = (query.period as HistoricNimPricePeriod) || '1y'

  if (!['1y', '2y', '5y'].includes(period)) {
    throw createError({ statusCode: 400, message: 'Invalid period. Must be 1y, 2y, or 5y' })
  }

  const cacheKey = `nim-price-history-${currency}-${period}`

  return getCachedData(cacheKey, async () => {
    const fullTo = Date.now()
    const fullFrom = fullTo - periods[period] * ONE_DAY

    const result = await getHistoricExchangeRatesByRange(
      CryptoCurrency.NIM,
      currency,
      fullFrom,
      fullTo,
      Provider.CryptoCompare,
      { interval: 'days', aggregate: 7 },
    )

    // Convert Map to array of [timestamp, price] tuples
    // API returns Map<number, [number, number]> where value is [timestamp, rate]
    const data: NimPrice[] = []
    result.forEach((value, ts) => {
      const price = Array.isArray(value) ? value[1] : value
      data.push([ts, price as number])
    })
    data.sort((a, b) => a[0] - b[0])

    return { data, currency, period }
  }, 3600) // 1 hour
})
