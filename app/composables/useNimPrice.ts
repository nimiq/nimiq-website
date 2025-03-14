import { CryptoCurrency, FiatCurrency, getExchangeRates, getHistoricExchangeRates } from '@nimiq/utils/fiat-api'

export function useNimPrice() {
  const priceQuery = useQuery({
    key: ['nim-price', 'now'],
    query: async () => {
      const rates = await getExchangeRates([CryptoCurrency.NIM], [FiatCurrency.USD])
      return rates.nim.usd || 0
    },
    staleTime: 60 * 1000,
  })

  const price1DayAgoQuery = useQuery({
    key: ['nim-price', '1d-ago'],
    query: async () => {
      const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000
      const res = await getHistoricExchangeRates(CryptoCurrency.NIM, FiatCurrency.USD, [oneDayAgo])
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
  }
}
