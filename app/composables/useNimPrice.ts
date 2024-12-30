export function useNimPrice() {
  const { data: _price } = useFetch('https://prices.nim.sh/prices/nim/now', { transform: res => (res as { price: number }).price })

  const price = computed(() => _price.value || 0)

  type HistoricPricesPeriod = '1y' | '2y' | '5y'
  const selectedHistoricPricePeriod = useLocalStorage<HistoricPricesPeriod>('use_nim_price_period', '1y')
  const historicPriceRangeOptions: HistoricPricesPeriod[] = ['1y', '2y', '5y']
  const { data: historicPrices } = useFetch<[number, number][]>(`/api/nim-price/${selectedHistoricPricePeriod.value}`, { watch: [selectedHistoricPricePeriod] })

  return {
    price,
    selectedHistoricPricePeriod,
    historicPriceRangeOptions,
    historicPrices,
  }
}
