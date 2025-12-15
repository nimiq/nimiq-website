import { fetchFiatApi, FiatCurrency, Provider } from '@nimiq/utils/fiat-api'
import { getCachedData } from '../utils/cache'

interface HistohourResponse {
  Message: string
  Data: { Data: Array<{ time: number, volumefrom: number, volumeto: number }>, TimeFrom: number, TimeTo: number }
  Err: unknown
}

const histohourSupportedCurrencies = [FiatCurrency.USD, FiatCurrency.EUR, FiatCurrency.GBP] as const
type HistohourSupportedCurrency = typeof histohourSupportedCurrencies[number]

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const requestedCurrency = (query.currency as FiatCurrency) || FiatCurrency.USD

  // Only USD, EUR, GBP supported by CryptoCompare for NIM
  const currency: HistohourSupportedCurrency = histohourSupportedCurrencies.includes(requestedCurrency as HistohourSupportedCurrency)
    ? requestedCurrency as HistohourSupportedCurrency
    : FiatCurrency.USD

  const cacheKey = `nim-volume-${currency}`

  return getCachedData(cacheKey, async () => {
    const nowTs = Math.floor(Date.now() / 1000)
    const lastFullHourTs = nowTs - (nowTs % 3600)

    const apiUrl = new URL('https://min-api.cryptocompare.com/data/v2/histohour')
    apiUrl.searchParams.set('fsym', 'NIM')
    apiUrl.searchParams.set('tsym', currency)
    apiUrl.searchParams.set('limit', '48')
    apiUrl.searchParams.set('aggregate', '1')
    apiUrl.searchParams.set('e', 'CCCAGG')
    apiUrl.searchParams.set('to_ts', String(lastFullHourTs))

    const res = await fetchFiatApi<HistohourResponse>(apiUrl.toString(), Provider.CryptoCompare)

    if (res.Message.includes('CCCAGG market does not exist'))
      throw createError({ statusCode: 400, message: 'CCCAGG market does not exist for this coin pair' })

    if (!res?.Data?.Data?.length)
      throw createError({ statusCode: 500, message: 'Failed to fetch hourly volume data' })

    const points = res.Data.Data
    const recentFirst = [...points].reverse()
    const currentDayPoints = recentFirst.slice(0, 24)
    const previousDayPoints = recentFirst.slice(24, 48)

    const currentVolume = currentDayPoints.reduce((sum, p) => sum + p.volumeto, 0)
    const previousVolume = previousDayPoints.reduce((sum, p) => sum + p.volumeto, 0)

    const volumeChange = previousVolume > 0
      ? (currentVolume - previousVolume) / previousVolume
      : 0

    return { volume: currentVolume, volumeChange, currency }
  }, 300) // 5 minutes
})
