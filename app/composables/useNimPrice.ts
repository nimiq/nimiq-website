import { CryptoCurrency, FiatCurrency, getExchangeRates, getHistoricExchangeRates } from '@nimiq/utils'

export function useNimPrice() {
  const { data: price } = useAsyncData<number>('price_now', async () => {
    const { nim } = await getExchangeRates([CryptoCurrency.NIM], [FiatCurrency.USD])
    return nim.usd! || 0
  })

  const { data: price1DayAgo } = useAsyncData<number>('price_1d', async () => {
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000
    const res = await getHistoricExchangeRates(CryptoCurrency.NIM, FiatCurrency.USD, [oneDayAgo])
    return res.get(oneDayAgo) || 0
  })

  return {
    price: price as Ref<number>,
    price1DayAgo,
  }
}
