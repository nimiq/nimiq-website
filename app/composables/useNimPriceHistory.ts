import type { FiatCurrency } from '@nimiq/utils/fiat-api'
import { CryptoCurrency, getHistoricExchangeRatesByRange, Provider } from '@nimiq/utils/fiat-api'
import { useQuery } from '@pinia/colada'
import { useLocalStorage } from '@vueuse/core'

export type HistoricNimPricePeriod = '1y' | '2y' | '5y'
export type NimPrice = [number, number]

const ONE_DAY = 24 * 60 * 60 * 1000 // ms

// Hardcoded aggregation values (in days) for each period - fetch weekly data for all periods
// Use literal types that match the expected values for aggregate
const PRICE_TIME_FRAMES: Record<HistoricNimPricePeriod, 7> = { '1y': 7, '2y': 7, '5y': 7 }
const periods: Record<HistoricNimPricePeriod, number> = { '1y': 365, '2y': 730, '5y': 1825 }

export function useNimPriceHistory(currency: MaybeRef<FiatCurrency>) {
  // Store the selected period in local storage - use localStorage key for consistent persistence
  const period = useLocalStorage<HistoricNimPricePeriod>('nim_price_period', '1y')

  // Create a cache key structure that contains both currency and period
  // This will store data in a format that allows retrieving by currency+period combination
  const cacheStorageKey = computed(() => `nimiq_price_history_cache`)
  const dataCache = useLocalStorage<Record<string, Record<HistoricNimPricePeriod, NimPrice[]>>>(cacheStorageKey.value, {})

  // Compute the current cache key based on current currency and period
  const currentCacheKey = computed(() => `${toValue(currency)}`)

  // The full expected period range for the current selection
  const fullTo = Date.now()
  const fullFrom = computed(() => fullTo - periods[period.value] * ONE_DAY)

  // Get data from cache if available for current currency+period combination
  const getCachedData = computed(() => {
    const currencyCache = dataCache.value[currentCacheKey.value]
    if (!currencyCache)
      return []
    return currencyCache[period.value] || []
  })

  // Check if we need to fetch new data
  const needsFetch = computed(() => {
    const cachedData = getCachedData.value

    // If no data exists for this currency+period, we need to fetch
    if (!cachedData || cachedData.length === 0)
      return true

    // If last data point is older than a day, we need to refresh
    const lastTimestamp = cachedData.at(-1)?.[0] || 0
    const oneDayAgo = Date.now() - ONE_DAY
    if (lastTimestamp < oneDayAgo)
      return true

    // If the first timestamp is newer than our requested start date, we need more history
    const firstTimestamp = cachedData.at(0)?.[0] || Infinity
    if (firstTimestamp > fullFrom.value)
      return true

    return false
  })

  // Define query ranges for new data fetch if needed
  const effectiveFrom = computed(() => {
    const cachedData = getCachedData.value
    if (!cachedData.length)
      return fullFrom.value

    // If we need to fetch more history, use the full required date range
    const firstTimestamp = cachedData.at(0)?.[0] || Infinity
    if (firstTimestamp > fullFrom.value)
      return fullFrom.value

    // Otherwise just get data since our latest data point to keep things fresh
    return Math.max(cachedData.at(-1)?.[0] || 0, fullFrom.value)
  })

  // The query key includes all parameters that might affect the query result
  const queryKey = computed(() => [
    'nimPriceHistory',
    toValue(currency),
    period.value,
    PRICE_TIME_FRAMES[period.value],
    effectiveFrom.value,
    fullTo,
    // Add a timestamp component to force refresh when switching back to a period
    Date.now(),
  ])

  // Store and return the latest data fetched from the API
  const { data, refetch, error, state, isLoading } = useQuery({
    key: queryKey,
    query: async () => {
      try {
        // Only fetch if we need new data
        if (needsFetch.value) {
          const result = await getHistoricExchangeRatesByRange(
            CryptoCurrency.NIM,
            toValue(currency),
            effectiveFrom.value,
            fullTo,
            Provider.CryptoCompare,
            {
              interval: 'days',
              // Use type assertion as the aggregate value is a valid literal
              aggregate: PRICE_TIME_FRAMES[period.value],
            },
          )

          // Merge new data with existing cached data
          const currentCurrency = currentCacheKey.value
          const currentPeriod = period.value
          const existingData = dataCache.value[currentCurrency]?.[currentPeriod] || []
          const mergedData = mergePriceHistory(existingData, result)

          // Update cache with the new data
          if (!dataCache.value[currentCurrency]) {
            // Initialize with all required properties
            dataCache.value[currentCurrency] = {
              '1y': [],
              '2y': [],
              '5y': [],
            }
          }

          // Now we're sure the object exists and has the right structure
          dataCache.value[currentCurrency][currentPeriod] = mergedData

          return mergedData
        }

        // Return cached data if no fetch needed
        return getCachedData.value
      }
      catch (error) {
        console.error('Error fetching price history:', error)
        return getCachedData.value
      }
    },
    // Use cached data for this currency+period as placeholder
    placeholderData: getCachedData.value,
    staleTime: 5 * 60 * 1000, // 5 minutes stale time
  })

  // Ensure data is fetched on component mount
  onMounted(() => {
    refetch()
  })

  // When period or currency changes, ensure we have the right data
  watch([() => toValue(currency), period], () => {
    // Force a refetch to ensure we display the right data for the new period/currency
    refetch()
  })

  // List of available period options
  const periodOptions = Object.keys(PRICE_TIME_FRAMES) as HistoricNimPricePeriod[]

  const lastUpdated = computed(() => {
    const currentData = data.value || []
    if (!currentData || !currentData.length)
      return null
    return currentData.at(-1)?.[0] || 0
  })

  return { data, error, state, refetch, period, periodOptions, lastUpdated, isLoading }
}

/**
 * Merge two arrays of [timestamp, price] pairs.
 * If the same timestamp exists in both, newData overwrites old.
 */
function mergePriceHistory(oldData: NimPrice[], newData: NimPrice[]): NimPrice[] {
  const map = new Map<number, number>()

  // Add all existing data to the map
  for (const [t, price] of oldData) {
    map.set(t, price)
  }

  // Add/overwrite with new data
  for (const [t, price] of newData) {
    map.set(t, price)
  }

  // Convert back to array and sort by timestamp
  const merged = Array.from(map.entries())
  merged.sort((a, b) => a[0] - b[0])

  return merged
}
