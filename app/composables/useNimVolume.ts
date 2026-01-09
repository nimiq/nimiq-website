import { FiatCurrency } from '@nimiq/utils/fiat-api'

interface VolumeResponse {
  volume: number
  volumeChange: number
  currency: FiatCurrency
}

const histohourSupportedCurrencies = [FiatCurrency.USD, FiatCurrency.EUR, FiatCurrency.GBP] as const
type HistohourSupportedCurrency = typeof histohourSupportedCurrencies[number]
function isHistohourSupportedCurrency(currency: FiatCurrency): currency is HistohourSupportedCurrency {
  return histohourSupportedCurrencies.includes(currency as HistohourSupportedCurrency)
}

export function useNimVolume() {
  // Skip during SSR - volume data is client-side only
  if (import.meta.server) {
    return {
      volumeUsd: computed(() => 0),
      volumeFormatted: computed(() => '0'),
      volumeChange: computed(() => 0),
      volumeStatus: readonly(ref('pending')),
      error: readonly(ref(null)),
      volumeIsLoading: computed(() => true),
      refreshVolume: () => {},
    }
  }

  const { currencyInfo } = useUserCurrency()
  const { price } = useNimPrice()

  const requestCurrency = computed(() => {
    const userCurrency = currencyInfo.value.code as FiatCurrency
    return isHistohourSupportedCurrency(userCurrency) ? userCurrency : FiatCurrency.USD
  })

  const needsCurrencyConversion = computed(() => requestCurrency.value !== currencyInfo.value.code)

  const { data: volumeData, status, error, refresh } = useFetch<VolumeResponse>('/api/nim-volume', {
    query: computed(() => ({ currency: requestCurrency.value })),
    watch: [requestCurrency],
    server: false, // Client-side only - needs price for conversion
  })

  const volumeUsd = computed(() => volumeData.value?.volume || 0)
  const volumeChange = computed(() => volumeData.value?.volumeChange || 0)

  const volumeFormatted = computed(() => {
    if (!volumeData.value)
      return '0'
    let volumeInUserCurrency = volumeData.value.volume
    if (needsCurrencyConversion.value)
      volumeInUserCurrency = volumeData.value.volume * (price.value || 0)
    const locale = useLocale()
    return formatFiat(volumeInUserCurrency, currencyInfo.value, locale.value)
  })

  // Refresh every 5 minutes
  if (import.meta.client) {
    const refreshInterval = setInterval(() => refresh(), 5 * 60 * 1000)
    onBeforeUnmount(() => clearInterval(refreshInterval))
  }

  return {
    volumeUsd,
    volumeFormatted,
    volumeChange,
    volumeStatus: readonly(status),
    error: readonly(error),
    volumeIsLoading: computed(() => status.value === 'pending'),
    refreshVolume: refresh,
  }
}
