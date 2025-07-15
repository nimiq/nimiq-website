import { fetchFiatApi, FiatCurrency, Provider } from '@nimiq/utils/fiat-api'

interface HistohourResponse {
  Message: string
  Data: {
    Data: Array<{
      time: number // UNIX timestamp (seconds)
      volumefrom: number // base‐currency volume
      volumeto: number // quote‐currency volume (USD)
    }>
    TimeFrom: number
    TimeTo: number
  }
  Err: any
}

// Supported currencies by CryptoCompare histohour endpoint
// Currencies not supported by the API will be converted to USD
export const histohourSupportedCurrencies = [
  FiatCurrency.USD,
  FiatCurrency.EUR,
  FiatCurrency.GBP,
] as const

// Type for the supported currencies
export type HistohourSupportedCurrency = typeof histohourSupportedCurrencies[number]

// Check if a currency is supported by the histohour endpoint
function isHistohourSupportedCurrency(currency: FiatCurrency): currency is HistohourSupportedCurrency {
  return histohourSupportedCurrencies.includes(currency as HistohourSupportedCurrency)
}

const volumeApi = new URL('https://min-api.cryptocompare.com/data/v2/histohour')
volumeApi.search = new URLSearchParams({
  fsym: 'NIM',
  // tsym: '', to be set dynamically
  limit: '48', // 48 data points = 48 hours - we need two complete 24h periods for proper day-over-day comparison
  aggregate: '1', // 1-hour buckets
  e: 'CCCAGG', // aggregate across exchanges
  // to_ts: added dynamically in the query
}).toString()

export function useNimVolume() {
  const { currencyInfo } = useUserCurrency()
  const { price } = useNimPrice()

  // Resolve the request currency outside the query function
  const requestCurrency = computed(() => {
    const userCurrency = currencyInfo.value.code as FiatCurrency
    return isHistohourSupportedCurrency(userCurrency) ? userCurrency : FiatCurrency.USD
  })

  // Track if we need to convert the result (when user currency differs from request currency)
  const needsCurrencyConversion = computed(() =>
    requestCurrency.value !== currencyInfo.value.code,
  )

  const { data: volumeData, state: volumeState, error, isLoading, refetch } = useQuery({
    // Use the resolved request currency in the query key for proper caching
    key: computed(() => ['trading_volume', requestCurrency.value]),
    query: async () => {
      if (import.meta.server)
        return { volumeUsd: 0, volumeFormatted: '0', volumeChange: 0 }

      // Build the histohour request: last 48 *full* hours
      const nowTs = Math.floor(Date.now() / 1000)

      // Align to the previous full hour boundary
      const lastFullHourTs = nowTs - (nowTs % 3600)

      // Clone the base URL to avoid parameter pollution between requests
      const apiUrl = new URL(volumeApi.toString())
      apiUrl.searchParams.set('to_ts', String(lastFullHourTs))
      apiUrl.searchParams.set('tsym', requestCurrency.value)

      const res = await fetchFiatApi<HistohourResponse>(apiUrl.toString(), Provider.CryptoCompare)
      if (res.Message.includes('CCCAGG market does not exist'))
        throw new Error(`CCCAGG market does not exist for this coin pair (${requestCurrency.value}-NIM). Url: ${apiUrl.toString()}`)

      if (!res || !res.Data?.Data?.length)
        throw new Error('Failed to fetch hourly volume data')

      const points = res.Data.Data
      // CryptoCompare returns oldest first; reverse so index 0 is most recent full hour
      const recentFirst = [...points].reverse()

      // Split into two 24-hour windows
      // Why 48 hours instead of just yesterday vs now:
      // - Using full hours eliminates partial-hour skew at current time
      // - Complete 24-hour windows provide fair comparison (same time span)
      // - Reduces impact of time-of-day volatility in trading patterns
      // - Protects against temporary spikes/drops at single point measurements
      const currentDayPoints = recentFirst.slice(0, 24)
      const previousDayPoints = recentFirst.slice(24, 48)

      // Sum the quote currency volumes (volumeto = QUOTE_VOLUME in request currency)
      // We aggregate to provide a meaningful daily volume rather than hourly spikes
      const currentVolumeInRequestCurrency = currentDayPoints.reduce((sum, p) => sum + p.volumeto, 0)
      const previousVolumeInRequestCurrency = previousDayPoints.reduce((sum, p) => sum + p.volumeto, 0)

      // Convert to user's currency if necessary
      let volumeInUserCurrency = currentVolumeInRequestCurrency
      if (needsCurrencyConversion.value) {
        // When request currency is USD but user wants EUR/GBP, we need USD->target rate
        // For now, we'll use NIM price as a proxy, but ideally this should use proper forex rates
        // TODO: Replace with proper forex conversion rates
        volumeInUserCurrency = currentVolumeInRequestCurrency * (price.value || 0)
      }

      const volumeFormatted = formatFiat(volumeInUserCurrency, currencyInfo.value)

      // Calculate volume change using consistent currency (request currency)
      // Daily change percentage helps users track momentum and market activity
      const volumeChange = previousVolumeInRequestCurrency > 0
        ? (currentVolumeInRequestCurrency - previousVolumeInRequestCurrency) / previousVolumeInRequestCurrency
        : 0

      // Return volume in original request currency for consistency with change calculation
      return {
        volumeUsd: currentVolumeInRequestCurrency,
        volumeFormatted,
        volumeChange,
      }
    },
    // Performance optimizations:
    staleTime: 10 * 60 * 1e3, // 10 minutes - volume doesn't change rapidly
    gcTime: 30 * 60 * 1e3, // Keep in cache for 30 minutes
    placeholderData: previousData => previousData, // Use previous data while fetching
  })

  const volumeUsd = computed(() => volumeData.value?.volumeUsd || 0)
  const volumeFormatted = computed(() => volumeData.value?.volumeFormatted || '0')
  const volumeChange = computed(() => volumeData.value?.volumeChange || 0)

  // Auto-refresh every 5 minutes in the background using a timer
  if (import.meta.client) {
    const refreshInterval = setInterval(() => {
      // Refresh data in the background
      refetch()
    }, 5 * 60 * 1000) // Refresh every 5 minutes

    // Cleanup interval on unmount
    onBeforeUnmount(() => {
      clearInterval(refreshInterval)
    })
  }

  return {
    volumeUsd,
    volumeFormatted,
    volumeChange,
    volumeState,
    error,
    volumeIsLoading: isLoading,
    refreshVolume: refetch, // Expose manual refresh function
  }
}
