export function useNimMarketCap() {
  const { price, price1DayAgo } = useNimPrice()
  const { currentSupply, supplyYesterday } = useNimSupply()
  const { currencyInfo } = useUserCurrency()
  const locale = useLocale()

  const marketCap = computed(() => currentSupply.value * (price.value || 0))

  const marketCapFormatted = computed(() => {
    if (import.meta.server || !currencyInfo.value)
      return '0'
    return formatFiat(marketCap.value, currencyInfo.value, locale.value)
  })

  const marketCapChange = computed(() => {
    if (!price.value || !price1DayAgo.value)
      return
    const marketCapYesterdayUsd = supplyYesterday.value * price1DayAgo.value
    return (marketCap.value - marketCapYesterdayUsd) / marketCapYesterdayUsd
  })

  return { marketCap, marketCapFormatted, marketCapChange }
}
