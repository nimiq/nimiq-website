import { CryptoCurrency, FiatCurrency, getExchangeRates, getHistoricExchangeRates } from '@nimiq/utils'

export function useNimPrice() {
  const { data: price } = useAsyncData('price_now', async () => {
    const { nim } = await getExchangeRates([CryptoCurrency.NIM], [FiatCurrency.USD])
    return nim.usd
  })

  const { data: price1DayAgo } = useAsyncData('price_1d', async () => {
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000
    const res = await getHistoricExchangeRates(CryptoCurrency.NIM, FiatCurrency.USD, [oneDayAgo])
    return res.get(oneDayAgo) || 0
  })

  type HistoricPricesPeriod = '1y' | '2y' | '5y'
  const selectedHistoricPricePeriod = useLocalStorage<HistoricPricesPeriod>('use_nim_price_period', '1y')
  const historicPriceRangeOptions: HistoricPricesPeriod[] = ['1y', '2y', '5y']
  const { data: historicPrices } = useFetch<[number, number][]>(`/api/nim-price/${selectedHistoricPricePeriod.value}`, { watch: [selectedHistoricPricePeriod] })

  return {
    price,
    price1DayAgo,
    selectedHistoricPricePeriod,
    historicPriceRangeOptions,
    historicPrices,
  }
}
