import { fetchFiatApi, Provider } from '@nimiq/utils/fiat-api'
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

export function useNimMetrics() {
  const { currencyUsdRatio, currencyInfo } = useUserCurrency()
  const { price, price1DayAgo } = useNimPrice()

  const currentSupply = posSupplyAt(Date.now())
  const supplyYesterday = posSupplyAt(Date.now() - 24 * 60 * 60 * 1000)

  const marketCapUsd = computed(() => currentSupply * (price.value || 0))
  const marketCapUserCurrency = computed(() => marketCapUsd.value * currencyUsdRatio.value)
  const marketCapUserCurrencyFormatted = formatFiat(marketCapUserCurrency, currencyInfo)
  const marketCapChange = computed(() => {
    if (!price.value || !price1DayAgo.value)
      return
    const marketCapYesterdayUsd = supplyYesterday * price1DayAgo.value
    return (marketCapUsd.value - marketCapYesterdayUsd) / marketCapYesterdayUsd
  })

  const { data: volumeData, state: volumeState } = useQuery({
    key: computed(() => ['trading_volume', currencyInfo.value.code]),
    query: async () => {
      type CoingeckoResponse = [{ total_volume: number, price_change_percentage_24h: number }]
      const params = new URLSearchParams({
        vs_currency: currencyInfo.value.code,
        ids: 'nimiq-2',
        price_change_percentage: '24h',
      })
      const url = new URL('https://api.coingecko.com/api/v3/coins/markets')
      url.search = params.toString()
      const res = await fetchFiatApi<CoingeckoResponse>(url.toString(), Provider.CoinGecko)
      if (!res || !res[0])
        throw new Error('Failed to fetch trading volume')
      return {
        volume: res[0].total_volume,
        volumeChange: res[0].price_change_percentage_24h,
      }
    },
    staleTime: 60 * 5 * 1e3,
  })
  const volume = computed(() => volumeData.value?.volume || 0)
  const volumeFormatted = formatFiat(volume.value, currencyInfo)
  const volumeChange = computed(() => volumeData.value?.volumeChange || 0)

  const currentSupplyFormatted = computed(() => `${formatNim(currentSupply)} NIM`)

  const maxSupply = 21_000_000_000
  const maxSupplyFormatted = computed(() => `${formatNim(maxSupply)} NIM`)

  return {
    marketCapUsd,
    marketCapUserCurrency,
    marketCapUserCurrencyFormatted,
    marketCapChange,
    volume,
    volumeState,
    volumeFormatted,
    volumeChange,
    currentSupply,
    currentSupplyFormatted,
    maxSupply,
    maxSupplyFormatted,
  }
}
