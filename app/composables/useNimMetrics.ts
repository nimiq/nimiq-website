import { fetchFiatApi, Provider } from '@nimiq/utils/fiat-api'
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

// Type definition for CoinDesk API response
// Official docs: https://developers.coindesk.com/documentation/data-api/index_cc_v1_historical_days
interface CoinDeskApiResponse {
  Data: { 'NIM-USD': Array<{ TIMESTAMP: number, VALUE: number }> }
  Err: Record<string, unknown>
}

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
      try {
        // Using CoinDesk Data API to fetch volume data
        const url = new URL('https://data-api.cryptocompare.com/index/cc/v1/historical/days')
        const params = new URLSearchParams({
          instrument: 'NIM-USD',
          limit: '1',
          response_format: 'JSON',
        })

        url.search = params.toString()
        const res = await fetchFiatApi<CoinDeskApiResponse>(url.toString(), Provider.CryptoCompare)

        if (!res || !res.Data || !res.Data['NIM-USD'].length)
          throw new Error('Failed to fetch trading volume')
        const nimUsd = res.Data['NIM-USD']!

        const { VALUE: volumeUsd } = nimUsd.at(0)!
        const volumeUserCurrency = volumeUsd * currencyUsdRatio.value

        let volumeChange = 0
        if (nimUsd.length > 1) {
          const { VALUE: yesterdayVolume } = nimUsd.at(1)!
          volumeChange = (volumeUsd - yesterdayVolume) / yesterdayVolume
        }
        const volumeTimestamps = nimUsd.map(data => data.TIMESTAMP)
        const volumeFormatted = formatFiat(volumeUserCurrency, currencyInfo)
        return { volumeUsd, volumeFormatted, volumeChange, volumeTimestamps }
      }
      catch (error) {
        console.error('Error fetching volume data:', error)
        return {
          volume: 0,
          volumeFormatted: '0',
          volumeChange: 0,
          volumeTimestamps: [],
        }
      }
    },
    staleTime: 60 * 5 * 1e3, // 5 minutes
  })

  const volume = computed(() => volumeData.value?.volume || 0)
  const volumeFormatted = formatFiat(volume, currencyInfo)
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
