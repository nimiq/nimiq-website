import { CryptoCurrency, getHistoricExchangeRatesByRange, Provider } from '@nimiq/utils'
import { object, picklist, safeParse } from 'valibot'

const PeriodParamsSchema = object({
  period: picklist(['1y', '2y', '5y']),
})

export default defineCachedEventHandler(async (event) => {
  const { output: body, issues: bodyIssues } = await getValidatedRouterParams(event, body => safeParse(PeriodParamsSchema, body))
  if (bodyIssues)
    throw createError({ statusCode: 400, statusMessage: 'Invalid period', message: JSON.stringify(bodyIssues) })

  const prices = await getPrices(body.period)
  return prices
}, {
  maxAge: import.meta.dev ? 0 : 60 * 60 * 24, // 1 day
})

type PriceRecord = [number, number] // [timestampInMs, price]

const msInADay = 24 * 60 * 60 * 1000

async function getPrices(period: '1y' | '2y' | '5y'): Promise<PriceRecord[] | null> {
  // Always start from 5-year data
  let allPrices = await hubKV().get<PriceRecord[]>('nim-prices-5y')

  const now = Date.now()
  const lastCachedTimestamp = allPrices?.at(-1)?.[0]

  // If there is no data or we don't have today's data, fetch missing portion
  if (!allPrices || !lastCachedTimestamp || !isSameDay(lastCachedTimestamp, now)) {
    const fromMs = lastCachedTimestamp ? (lastCachedTimestamp + msInADay) : fiveYearsAgo()
    const fetchedPrices = await getHistoricExchangeRatesByRange(
      CryptoCurrency.NIM,
      CryptoCurrency.USDC,
      fromMs,
      now,
      Provider.CryptoCompare,
    )
    const dailyNew = getOnePricePerDay(fetchedPrices)
    allPrices = mergeAndSort(allPrices!, dailyNew)

    // Store the full 5-year set
    await hubKV().set('nim-prices-5y', allPrices)

    // Create and store 1-year and 2-year sets
    const prices1y = allPrices.filter(([ts]) => ts >= now - (365 * msInADay))
    const prices2y = allPrices.filter(([ts]) => ts >= now - (2 * 365 * msInADay))

    await hubKV().set('nim-prices-1y', prices1y)
    await hubKV().set('nim-prices-2y', prices2y)
  }

  // Return the requested period subset
  switch (period) {
    case '1y': {
      return await hubKV().get<PriceRecord[]>('nim-prices-1y')!
    }
    case '2y': {
      return await hubKV().get<PriceRecord[]>('nim-prices-2y')!
    }
    default:
      // If period is 5y
      return allPrices
  }
}

function fiveYearsAgo(): number {
  const date = new Date(Date.now() - 5 * 365 * msInADay)
  date.setHours(0, 0, 0, 0)
  return date.getTime()
}

function mergeAndSort(oldData: PriceRecord[], newData: PriceRecord[]): PriceRecord[] {
  const combined = [...oldData, ...newData]
  combined.sort((a, b) => a[0] - b[0])
  return combined
}

function isSameDay(ms1: number, ms2: number): boolean {
  const date1 = new Date(ms1)
  const date2 = new Date(ms2)
  return (
    date1.getFullYear() === date2.getFullYear()
    && date1.getMonth() === date2.getMonth()
    && date1.getDate() === date2.getDate()
  )
}

function getOnePricePerDay(rates: PriceRecord[]): PriceRecord[] {
  const dailyMap = new Map<string, PriceRecord>()
  for (const [ts, price] of rates) {
    const date = new Date(ts)
    date.setHours(0, 0, 0, 0)
    const dateKey = date.toISOString().split('T')[0]!
    if (!dailyMap.has(dateKey)) {
      dailyMap.set(dateKey, [date.getTime(), price])
    }
  }
  return Array.from(dailyMap.values())
}
