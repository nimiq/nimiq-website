import type { FiatCurrency } from '@nimiq/utils/fiat-api'
import { CryptoCurrency, getHistoricExchangeRatesByRange, Provider } from '@nimiq/utils/fiat-api'
import { useQuery } from '@pinia/colada'
import { useLocalStorage } from '@vueuse/core'

export type HistoricNimPricePeriod = '1y' | '2y' | '5y'
export type NimPrice = [number, number]

const ONE_DAY = 24 * 60 * 60 * 1000 // ms

// Hardcoded aggregation values (in days) for each period.
const PRICE_TIME_FRAMES: Record<string, 7 | 14 | 30> = { '1y': 7, '2y': 14, '5y': 30 }
const periods: Record<HistoricNimPricePeriod, number> = { '1y': 365, '2y': 730, '5y': 1825 }

export function useNimPriceHistory(currency: MaybeRef<FiatCurrency>) {
  const period = useLocalStorage<HistoricNimPricePeriod>('use_nim_price_period', '1y')

  // The full expected period range.
  const fullTo = Date.now()
  const fullFrom = fullTo - periods[period.value] * ONE_DAY

  const intervalDuration = computed(() => PRICE_TIME_FRAMES[period.value] || 7)

  // Unique storage key per currency/period.
  const storageKey = computed(() => `nimPriceHistory-${toValue(currency)}-${period.value}`)
  // Persist the history data locally. Default is an empty array.
  const persistedData = useLocalStorage<[number, number][]>(storageKey, [])

  // If we already have data, adjust the query range to fetch only missing segments.
  // For the lower bound, if stored data exists and its first timestamp is later than fullFrom,
  // we need to fetch from fullFrom; otherwise, use the persisted start.
  const effectiveFrom = computed(() =>
    persistedData.value.length && (persistedData.value.at(0)?.at(0) || 0) > fullFrom
      ? fullFrom
      : persistedData.value.length
        ? persistedData.value.at(0)?.at(0) || fullFrom
        : fullFrom,
  )
  // For the upper bound, if stored data exists and its last timestamp is less than fullTo,
  // then we fetch up to fullTo; otherwise, use the persisted end.
  const effectiveTo = computed(() =>
    persistedData.value.length && (persistedData.value.at(-1)?.at(0) || 0) < fullTo
      ? fullTo
      : persistedData.value.length
        ? persistedData.value.at(-1)?.at(0) || fullTo
        : fullTo,
  )

  // The query key includes the currency, period, interval and the effective time range.
  const queryKey = computed(() => ['nimPriceHistory', toValue(currency), period.value, intervalDuration.value, effectiveFrom.value, effectiveTo.value])

  const { data, refetch, error, state } = useQuery({
    key: queryKey,
    query: () =>
      getHistoricExchangeRatesByRange(CryptoCurrency.NIM, toValue(currency), effectiveFrom.value, effectiveTo.value, Provider.CryptoCompare, { interval: 'days', aggregate: intervalDuration.value }),
    // Use persisted data as initial placeholder.
    placeholderData: persistedData.value,
  })

  watch(data, (newVal) => {
    if (!newVal)
      return
    persistedData.value = mergePriceHistory(persistedData.value, newVal)
  })

  // On mount, trigger refetch if no data is available.
  onMounted(() => {
    if (!data.value)
      refetch()
  })

  const periodOptions = Object.keys(PRICE_TIME_FRAMES) as HistoricNimPricePeriod[]

  const lastUpdated = computed(() => {
    if (!data.value || !data.value.length || !data.value.at(-1)?.length)
      return null
    return data.value.at(-1)?.[0] || 0
  })

  return { data, error, state, refetch, period, periodOptions, lastUpdated }
}

/**
 * Merge two arrays of [timestamp, price] pairs.
 * If the same timestamp exists in both, newData overwrites old.
 */
function mergePriceHistory(oldData: NimPrice[], newData: NimPrice[]): NimPrice[] {
  const map = new Map<number, number>()
  for (const [t, price] of oldData)
    map.set(t, price)
  for (const [t, price] of newData)
    map.set(t, price)

  const merged = Array.from(map.entries())
  merged.sort((a, b) => a[0] - b[0])
  return merged
}
