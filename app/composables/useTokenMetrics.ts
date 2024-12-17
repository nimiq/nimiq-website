import { posSupplyAt } from 'nimiq-supply-calculator'

export function useTokenMetrics() {
  const { currencyUsdRatio } = useUserCurrency()

  const locale = useLocale()
  // 21B NIM or 12.5B NIM
  const nimFormatter = new Intl.NumberFormat(locale.value, { notation: 'compact', compactDisplay: 'short', minimumFractionDigits: 0, maximumFractionDigits: 2 })

  const marketCapUsd = ref(16_000_000_000) // TODO
  const marketCapUserCurrency = computed(() => marketCapUsd.value * currencyUsdRatio.value)
  const { formattedFiat: marketCapUserCurrencyFormatted } = useFiatAmount(marketCapUserCurrency)
  const marketCapChange = ref(0.074) // TODO

  const volumeUsd = ref(1_000_000_000) // TODO
  const volumeUserCurrency = computed(() => volumeUsd.value * currencyUsdRatio.value)
  const { formattedFiat: volumeUserCurrencyFormatted } = useFiatAmount(volumeUserCurrency)
  const volumeChange = ref(0.074) // TODO

  const totalSupply = posSupplyAt(Date.now())
  const totalSupplyFormatted = computed(() => `${nimFormatter.format(totalSupply)} NIM`)

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
    totalSupply,
    totalSupplyFormatted,
    maxSupply,
    maxSupplyFormatted,
  }
}
