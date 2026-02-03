import type { FiatCurrency } from '@nimiq/utils/fiat-api'
import { CryptoCurrency, getExchangeRates, getHistoricExchangeRates } from '@nimiq/utils/fiat-api'
import { getCachedData } from '../utils/cache'

const validCurrencies = ['AED', 'ARS', 'AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CRC', 'CZK', 'DKK', 'EUR', 'GBP', 'GMD', 'GTQ', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NGN', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'UAH', 'USD', 'VND', 'XOF', 'ZAR'] as const

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const currency = (query.currency as FiatCurrency) || 'USD'
  const type = query.type as 'now' | '1d-ago' | undefined

  // Validate currency
  if (!validCurrencies.includes(currency as unknown as typeof validCurrencies[number])) {
    throw createError({ statusCode: 400, message: 'Invalid currency' })
  }

  try {
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
  }
  catch (error) {
    console.error('Failed to fetch NIM price:', error)
    throw createError({ statusCode: 502, message: 'Failed to fetch price from upstream' })
  }
})
