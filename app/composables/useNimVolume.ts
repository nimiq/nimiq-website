import { fetchFiatApi, Provider } from '@nimiq/utils/fiat-api'

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

  const { data: volumeData, state: volumeState, error, isLoading } = useQuery({
    key: computed(() => ['trading_volume', currencyInfo.value.code]),
    query: async () => {
      if (import.meta.server)
        return { volumeUsd: 0, volumeFormatted: '0', volumeChange: 0 }

      // Build the histohour request: last 48 *full* hours
      const nowTs = Math.floor(Date.now() / 1000)

      // Align to the previous full hour boundary
      const lastFullHourTs = nowTs - (nowTs % 3600)
      volumeApi.searchParams.append('to_ts', String(lastFullHourTs))
      volumeApi.searchParams.append('tsym', currencyInfo.value.code)

      const res = await fetchFiatApi<HistohourResponse>(volumeApi.toString(), Provider.CryptoCompare)
      if (res.Message.includes('CCCAGG market does not exist'))
        throw new Error(`CCCAGG market does not exist for this coin pair (${currencyInfo.value.code}-NIM). Url: ${volumeApi.toString()}`)

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

      // Sum the USD volumes (volumeto = QUOTE_VOLUME)
      // We aggregate to provide a meaningful daily volume rather than hourly spikes
      const volume = currentDayPoints.reduce((sum, p) => sum + p.volumeto, 0)
      const prevVolumeUsd = previousDayPoints.reduce((sum, p) => sum + p.volumeto, 0)

      // Convert to user's currency for more personalized and relevant UX
      const volumeUserCurr = volume * (price.value || 0)
      const volumeFormatted = formatFiat(volumeUserCurr, currencyInfo.value)

      // Daily change percentage helps users track momentum and market activity
      const volumeChange = prevVolumeUsd > 0 ? (volume - prevVolumeUsd) / prevVolumeUsd : 0

      return { volumeUsd: volume, volumeFormatted, volumeChange }
    },
    staleTime: 1 * 60 * 1e3, // 1 minute - balance between fresh data and API load
  })

  const volumeUsd = computed(() => volumeData.value?.volumeUsd || 0)
  const volumeFormatted = computed(() => volumeData.value?.volumeFormatted || '0')
  const volumeChange = computed(() => volumeData.value?.volumeChange || 0)

  return {
    volumeUsd,
    volumeFormatted,
    volumeChange,
    volumeState,
    error,
    volumeIsLoading: isLoading,
  }
}
