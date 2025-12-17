export function useNimMarketCap() {
  const { price, price1DayAgo } = useNimPrice()
  const { currentSupply, supplyYesterday } = useNimSupply()

  const marketCap = computed(() => currentSupply * (price.value || 0))

  // SSR-safe formatting - only access currencyInfo on client
  const marketCapFormatted = computed(() => {
    if (import.meta.server)
      return '0'
    const { currencyInfo } = useUserCurrency()
    const locale = useLocale()
    return formatFiat(marketCap.value, currencyInfo.value, locale.value)
  })

  const marketCapChange = computed(() => {
    if (!price.value || !price1DayAgo.value)
      return
    const marketCapYesterdayUsd = supplyYesterday * price1DayAgo.value
    return (marketCap.value - marketCapYesterdayUsd) / marketCapYesterdayUsd
  })

  return { marketCap, marketCapFormatted, marketCapChange }
}
