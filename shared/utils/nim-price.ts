import { CryptoCurrency, getHistoricExchangeRatesByRange, Provider } from '@nimiq/utils'
import consola from 'consola'

type PriceRecord = [number, number] // [timestampInMs, price]

export const msInADay = 24 * 60 * 60 * 1000
const fiveYearsAgoDate = new Date(Date.now() - (5 * 365 * msInADay))
fiveYearsAgoDate.setHours(0, 0, 0, 0)
export const fiveYearsAgo = fiveYearsAgoDate.getTime()

export async function fetchPricesLast5Years(period: '1y' | '2y' | '5y'): Promise<PriceRecord[]> {
  // const folderPath = resolve(nuxt.options.srcDir, nuxt.options.dir.public, 'nim-prices')

  const prices5yRaw = await hubKV().get<string>('nim-prices-5y')
  const prices5y = prices5yRaw ? JSON.parse(prices5yRaw) : []

  const now = Date.now()
  let fromMs = fiveYearsAgo

  if (prices5y.length > 0) {
    const firstStoredMs = prices5y[0]![0]
    const lastTimeMs = prices5y.at(-1)?.[0]

    if (firstStoredMs > fiveYearsAgo) {
      throw new Error('[NIM-Price-Fetcher]: The existing prices-5y.json file starts after the expected range.')
    }
    else if (firstStoredMs < fiveYearsAgo) {
      consola.info('[NIM-Price-Fetcher] The file contains extra data before the 5-year range. This will be trimmed automatically.')
      fromMs = lastTimeMs + msInADay // Continue fetching from the last stored timestamp
    }
    else {
      consola.info('[NIM-Price-Fetcher] The existing file is valid and up to date.')
      fromMs = lastTimeMs + msInADay // Proceed from the last timestamp
    }
  }

  // If no new data to fetch, do nothing
  if (isSameDay(fromMs, now) || fromMs > now)
    return await hubKV().get<string>(`nim-prices-${period}`)!.then(prices => JSON.parse(prices || '[]'))

  const daysAmount = Math.floor((now - fromMs) / msInADay)
  consola.warn(`[NIM-Price-Fetcher] Fetching price data for ${daysAmount} days... This might take a while...`)

  // Fetch new data (the library expects timestamps in ms)
  const newAllRates: PriceRecord[] = await getHistoricExchangeRatesByRange(
    CryptoCurrency.NIM,
    CryptoCurrency.USDC,
    fromMs,
    now,
    Provider.CryptoCompare,
  )

  // Keep one price per day
  const newRates = getOnePricePerDay(newAllRates)

  // Merge and sort
  const combinedPrices = [...prices5y, ...newRates].sort((a, b) => a[0] - b[0])

  await hubKV().set('nim-prices-5y', JSON.stringify(combinedPrices))

  const prices1y = combinedPrices.filter(([ts]) => ts >= now - (1 * 365 * msInADay))
  const prices2y = combinedPrices.filter(([ts]) => ts >= now - (2 * 365 * msInADay))

  await hubKV().set('nim-prices-1y', JSON.stringify(prices1y))
  await hubKV().set('nim-prices-2y', JSON.stringify(prices2y))

  if (period === '1y')
    return prices1y
  if (period === '2y')
    return prices2y
  return combinedPrices
}

// Checks if two timestamps (in ms) fall on the same calendar day
function isSameDay(ms1: number, ms2: number): boolean {
  const date1 = new Date(ms1)
  const date2 = new Date(ms2)
  return (
    date1.getFullYear() === date2.getFullYear()
    && date1.getMonth() === date2.getMonth()
    && date1.getDate() === date2.getDate()
  )
}

// Keeps one price record per calendar day, ensuring timestamps are at 00:00
function getOnePricePerDay(rates: PriceRecord[]): PriceRecord[] {
  const dailyMap = new Map<string, PriceRecord>()
  for (const [ts, price] of rates) {
    const date = new Date(ts)
    date.setHours(0, 0, 0, 0) // Ensure timestamp is at 00:00
    const dateKey = date.toISOString().split('T')[0]!
    if (!dailyMap.has(dateKey)) {
      dailyMap.set(dateKey, [date.getTime(), price])
    }
  }
  return Array.from(dailyMap.values())
}
