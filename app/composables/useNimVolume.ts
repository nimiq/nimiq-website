import { fetchFiatApi, FiatCurrency, Provider } from '@nimiq/utils/fiat-api'

interface HistohourResponse {
  Message: string
  Data: { Data: Array<{ time: number, volumefrom: number, volumeto: number }>, TimeFrom: number, TimeTo: number }
  Err: any
}

const histohourSupportedCurrencies = [FiatCurrency.USD, FiatCurrency.EUR, FiatCurrency.GBP] as const
type HistohourSupportedCurrency = typeof histohourSupportedCurrencies[number]
function isHistohourSupportedCurrency(currency: FiatCurrency): currency is HistohourSupportedCurrency {
  return histohourSupportedCurrencies.includes(currency as HistohourSupportedCurrency)
}

const volumeApi = new URL('https://min-api.cryptocompare.com/data/v2/histohour')
volumeApi.search = new URLSearchParams({ fsym: 'NIM', limit: '48', aggregate: '1', e: 'CCCAGG' }).toString()

export function useNimVolume() {
  const { currencyInfo } = useUserCurrency()
  const { price } = useNimPrice()

  const requestCurrency = computed(() => {
    const userCurrency = currencyInfo.value.code as FiatCurrency
    return isHistohourSupportedCurrency(userCurrency) ? userCurrency : FiatCurrency.USD
  })

  const needsCurrencyConversion = computed(() => requestCurrency.value !== currencyInfo.value.code)

  const { data: volumeData, state: volumeState, error, isLoading, refetch } = useQuery({
    key: computed(() => ['trading_volume', requestCurrency.value]),
    query: async () => {
      if (import.meta.server)
        return { volumeUsd: 0, volumeFormatted: '0', volumeChange: 0 }

      const nowTs = Math.floor(Date.now() / 1000)
      const lastFullHourTs = nowTs - (nowTs % 3600)

      const apiUrl = new URL(volumeApi.toString())
      apiUrl.searchParams.set('to_ts', String(lastFullHourTs))
      apiUrl.searchParams.set('tsym', requestCurrency.value)

      const res = await fetchFiatApi<HistohourResponse>(apiUrl.toString(), Provider.CryptoCompare)
      if (res.Message.includes('CCCAGG market does not exist'))
        throw new Error(`CCCAGG market does not exist for this coin pair`)

      if (!res || !res.Data?.Data?.length)
        throw new Error('Failed to fetch hourly volume data')

      const points = res.Data.Data
      const recentFirst = [...points].reverse()
      const currentDayPoints = recentFirst.slice(0, 24)
      const previousDayPoints = recentFirst.slice(24, 48)

      const currentVolumeInRequestCurrency = currentDayPoints.reduce((sum, p) => sum + p.volumeto, 0)
      const previousVolumeInRequestCurrency = previousDayPoints.reduce((sum, p) => sum + p.volumeto, 0)

      let volumeInUserCurrency = currentVolumeInRequestCurrency
      if (needsCurrencyConversion.value) {
        volumeInUserCurrency = currentVolumeInRequestCurrency * (price.value || 0)
      }

      const locale = useLocale()
      const volumeFormatted = formatFiat(volumeInUserCurrency, currencyInfo.value, locale.value)

      const volumeChange = previousVolumeInRequestCurrency > 0
        ? (currentVolumeInRequestCurrency - previousVolumeInRequestCurrency) / previousVolumeInRequestCurrency
        : 0

      return { volumeUsd: currentVolumeInRequestCurrency, volumeFormatted, volumeChange }
    },
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3,
    placeholderData: previousData => previousData,
  })

  const volumeUsd = computed(() => volumeData.value?.volumeUsd || 0)
  const volumeFormatted = computed(() => volumeData.value?.volumeFormatted || '0')
  const volumeChange = computed(() => volumeData.value?.volumeChange || 0)

  if (import.meta.client) {
    const refreshInterval = setInterval(() => refetch(), 5 * 60 * 1000)
    onBeforeUnmount(() => clearInterval(refreshInterval))
  }

  return { volumeUsd, volumeFormatted, volumeChange, volumeState, error, volumeIsLoading: isLoading, refreshVolume: refetch }
}
