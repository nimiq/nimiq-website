export function useNimPrice() {
  const { data: _price } = useFetch('https://prices.nim.sh/prices/nim/now', { transform: res => (res as { price: number }).price })

  const price = computed(() => _price.value || 0)

  return {
    price,
  }
}
