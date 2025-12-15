import type { FiatCurrency } from '@nimiq/utils/fiat-api'

export type HistoricNimPricePeriod = '1y' | '2y' | '5y'
export type NimPrice = [number, number]

interface PriceHistoryResponse {
  data: NimPrice[]
  currency: FiatCurrency
  period: HistoricNimPricePeriod
}

export function useNimPriceHistory(currency: MaybeRef<FiatCurrency>) {
  const period = useLocalStorage<HistoricNimPricePeriod>('nim_price_period', '1y')

  // Local storage cache for offline support
  const cacheStorageKey = `nimiq_price_history_cache`
  const dataCache = useLocalStorage<Record<string, Record<HistoricNimPricePeriod, NimPrice[]>>>(cacheStorageKey, {})
  const currentCacheKey = computed(() => `${toValue(currency)}`)

  const getCachedData = computed(() => {
    const currencyCache = dataCache.value[currentCacheKey.value]
    if (!currencyCache)
      return []
    return currencyCache[period.value] || []
  })

  const { data: fetchedData, status, error, refresh } = useFetch<PriceHistoryResponse>('/api/nim-price-history', {
    query: computed(() => ({ currency: toValue(currency), period: period.value })),
    watch: [() => toValue(currency), period],
    default: () => ({ data: [], currency: toValue(currency), period: period.value }),
  })

  // Merge fetched data with localStorage cache
  watch(fetchedData, (newData) => {
    if (!newData?.data?.length)
      return
    const currencyKey = currentCacheKey.value
    const periodKey = period.value
    const existingData = dataCache.value[currencyKey]?.[periodKey] || []
    const mergedData = mergePriceHistory(existingData, newData.data)
    if (!dataCache.value[currencyKey])
      dataCache.value[currencyKey] = { '1y': [], '2y': [], '5y': [] }
    dataCache.value[currencyKey][periodKey] = mergedData
  }, { immediate: true })

  // Return merged data (localStorage + fetched)
  const data = computed<NimPrice[]>(() => {
    const cached = getCachedData.value
    const fetched = fetchedData.value?.data || []
    if (!fetched.length)
      return cached
    return mergePriceHistory(cached, fetched)
  })

  const periodOptions: HistoricNimPricePeriod[] = ['1y', '2y', '5y']
  const lastUpdated = ref(Date.now())
  watch(fetchedData, () => {
    lastUpdated.value = Date.now()
  })

  return {
    data,
    error: readonly(error),
    state: readonly(status),
    refetch: refresh,
    period,
    periodOptions,
    lastUpdated: readonly(lastUpdated),
    isLoading: computed(() => status.value === 'pending'),
  }
}

function mergePriceHistory(oldData: NimPrice[], newData: NimPrice[] | Map<number, number>): NimPrice[] {
  const map = new Map<number, number>()
  for (const [t, price] of oldData) map.set(t, price)
  const entries = newData instanceof Map ? newData.entries() : newData
  for (const [t, price] of entries) map.set(t, price)
  return Array.from(map.entries()).sort((a, b) => a[0] - b[0])
}
