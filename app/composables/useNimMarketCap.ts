export function useNimMarketCap() {
  const { price, price1DayAgo } = useNimPrice()
  const { currencyInfo } = useUserCurrency()
  const { currentSupply, supplyYesterday } = useNimSupply()
  const locale = useLocale()

  const marketCap = computed(() => currentSupply * (price.value || 0))
  const marketCapFormatted = computed(() => formatFiat(marketCap.value, currencyInfo.value, locale.value))

  const marketCapChange = computed(() => {
    if (!price.value || !price1DayAgo.value)
      return
    const marketCapYesterdayUsd = supplyYesterday * price1DayAgo.value
    return (marketCap.value - marketCapYesterdayUsd) / marketCapYesterdayUsd
  })

  return {
    marketCap,
    marketCapFormatted,
    marketCapChange,
  }
}
