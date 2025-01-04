import { posSupplyAt } from 'nimiq-supply-calculator'

export function useNimMetrics() {
  const { currencyUsdRatio, currencyInfo } = useUserCurrency()
  const { price, price1DayAgo } = useNimPrice()

  const locale = useLocale()
  // 21B NIM or 12.5B NIM
  const nimFormatter = new Intl.NumberFormat(locale.value, { notation: 'compact', compactDisplay: 'short', minimumFractionDigits: 0, maximumFractionDigits: 2 })

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

  const volumeUsd = ref(1_000_000_000) // TODO
  const volumeUserCurrency = computed(() => volumeUsd.value * currencyUsdRatio.value)
  const volumeUserCurrencyFormatted = formatFiat(volumeUserCurrency, currencyInfo)
  const volumeChange = ref(0.074) // TODO

  const currentSupplyFormatted = computed(() => `${nimFormatter.format(currentSupply)} NIM`)

  const maxSupply = 21_000_000_000
  const maxSupplyFormatted = computed(() => `${nimFormatter.format(maxSupply)} NIM`)

  return {
    marketCapUsd,
    marketCapUserCurrency,
    marketCapUserCurrencyFormatted,
    marketCapChange,
    volumeUsd,
    volumeUserCurrency,
    volumeUserCurrencyFormatted,
    volumeChange,
    currentSupply,
    currentSupplyFormatted,
    maxSupply,
    maxSupplyFormatted,
  }
}
