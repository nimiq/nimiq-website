export function useNimPrice() {
  // Get currency value, defaulting to USD during SSR
  const currency = computed(() => {
    if (import.meta.server)
      return 'USD'
    const { currency: userCurrency } = useUserCurrency()
    return userCurrency.value
  })

  const { data: price, status: priceStatus, error: priceError, refresh: refreshPrice } = useFetch<number>('/api/nim-price', {
    query: computed(() => ({ currency: currency.value })),
    watch: [currency],
  })

  const { data: price1DayAgo, status: price1DayAgoStatus, error: price1DayAgoError } = useFetch<number>('/api/nim-price', {
    query: computed(() => ({ currency: currency.value, type: '1d-ago' })),
    watch: [currency],
  })

  return {
    price: readonly(price),
    priceStatus: readonly(priceStatus),
    priceLoading: computed(() => priceStatus.value === 'pending'),
    priceError: readonly(priceError),
    price1DayAgo: readonly(price1DayAgo),
    price1DayAgoStatus: readonly(price1DayAgoStatus),
    price1DayAgoLoading: computed(() => price1DayAgoStatus.value === 'pending'),
    price1DayAgoError: readonly(price1DayAgoError),
    deltaPrice: computed(() => {
      if (!price.value || !price1DayAgo.value)
        return 0
      return price.value - price1DayAgo.value
    }),
    refreshPrice,
  }
}
