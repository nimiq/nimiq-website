import type { FiatCurrency } from '@nimiq/utils/fiat-api'
import { CryptoCurrency, getHistoricExchangeRatesByRange, Provider } from '@nimiq/utils/fiat-api'
import { getCachedData } from '../utils/cache'

type HistoricNimPricePeriod = '1y' | '2y' | '5y'
type NimPrice = [number, number]

const ONE_DAY = 24 * 60 * 60 * 1000
const periods: Record<HistoricNimPricePeriod, number> = { '1y': 365, '2y': 730, '5y': 1825 }
const validCurrencies = ['AED', 'ARS', 'AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CRC', 'CZK', 'DKK', 'EUR', 'GBP', 'GMD', 'GTQ', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NGN', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'UAH', 'USD', 'VND', 'XOF', 'ZAR'] as const

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const currency = (query.currency as FiatCurrency) || 'USD'
  const period = (query.period as HistoricNimPricePeriod) || '1y'

  if (!['1y', '2y', '5y'].includes(period)) {
    throw createError({ statusCode: 400, message: 'Invalid period. Must be 1y, 2y, or 5y' })
  }

  // Validate currency
  if (!validCurrencies.includes(currency as unknown as typeof validCurrencies[number])) {
    throw createError({ statusCode: 400, message: 'Invalid currency' })
  }

  const cacheKey = `nim-price-history-${currency}-${period}`

  try {
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

      // Result is already an array of [timestamp, price] tuples
      const data: NimPrice[] = result.map(([ts, price]) => [ts, price])
      data.sort((a, b) => a[0] - b[0])

      return { data, currency, period }
    }, 3600) // 1 hour
  }
  catch (error) {
    console.error('Failed to fetch NIM price history:', error)
    throw createError({ statusCode: 502, message: 'Failed to fetch price history from upstream' })
  }
})
