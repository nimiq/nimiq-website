import { CryptoCurrency, getExchangeRates, getHistoricExchangeRates } from '@nimiq/utils/fiat-api'

/**
 * Composable for fetching and managing NIM cryptocurrency price data.
 *
 * Provides current NIM price and price from 24 hours ago in the user's preferred currency.
 * Automatically refreshes price data and calculates price delta.
 */
export function useNimPrice() {
  const { currency } = useUserCurrency()
  const priceQuery = useQuery({
    key: computed(() => ['nim-price', 'now', currency.value]),
    query: async () => {
      const rates = await getExchangeRates([CryptoCurrency.NIM], [currency.value])
      return rates.nim[currency.value?.toLowerCase() as keyof typeof rates.nim] || 0
    },
    staleTime: 60 * 1000,
  })

  const price1DayAgoQuery = useQuery({
    key: computed(() => ['nim-price', '1d-ago', currency.value]),
    query: async () => {
      const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000
      const res = await getHistoricExchangeRates(CryptoCurrency.NIM, currency.value, [oneDayAgo])
      return res.get(oneDayAgo) || 0
    },
    staleTime: 24 * 60 * 60 * 1000, // stale for a day
  })

  return {
    price: priceQuery.data,
    priceState: priceQuery.state,
    priceLoading: priceQuery.isLoading,
    priceError: priceQuery.error,

    price1DayAgo: price1DayAgoQuery.data,
    price1DayAgoState: price1DayAgoQuery.state,
    price1DayAgoLoading: price1DayAgoQuery.isLoading,
    price1DayAgoError: price1DayAgoQuery.error,

    deltaPrice: computed(() => {
      if (!priceQuery.data.value || !price1DayAgoQuery.data.value)
        return 0
      return priceQuery.data.value - price1DayAgoQuery.data.value
    }),
  }
}
