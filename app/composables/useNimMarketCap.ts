export function useNimMarketCap() {
  const { price, price1DayAgo } = useNimPrice()
  const { currencyUsdRatio, currencyInfo } = useUserCurrency()
  const { currentSupply, supplyYesterday } = useNimSupply()

  const marketCapUsd = computed(() => currentSupply * (price.value || 0))
  const marketCapUserCurrency = computed(() => marketCapUsd.value * currencyUsdRatio.value)
  const marketCapUserCurrencyFormatted = formatFiat(marketCapUserCurrency, currencyInfo)

  const marketCapChange = computed(() => {
    if (!price.value || !price1DayAgo.value)
      return
    const marketCapYesterdayUsd = supplyYesterday * price1DayAgo.value
    return (marketCapUsd.value - marketCapYesterdayUsd) / marketCapYesterdayUsd
  })

  return {
    marketCapUsd,
    marketCapUserCurrency,
    marketCapUserCurrencyFormatted,
    marketCapChange,
  }
}
