import { FiatCurrency } from '@nimiq/utils/fiat-api'

export function useSyncAmountInputs() {
  const { price } = useNimPrice()

  const _cryptoAmount = ref(1)
  const _fiatAmount = ref(_cryptoAmount.value * (price.value ?? 0))

  const fiatCurrency = ref(FiatCurrency.USD)
  const cryptoCurrency = ref('NIM')

  const fiatAmount = computed({
    get() {
      return _fiatAmount.value
    },
    set(value) {
      _fiatAmount.value = value
      _cryptoAmount.value = value / (price.value ?? 1)
    },
  })

  const cryptoAmount = computed({
    get() {
      return _cryptoAmount.value
    },
    set(value) {
      _cryptoAmount.value = value
      _fiatAmount.value = value * (price.value ?? 0)
    },
  })

  return { fiatAmount, cryptoAmount, fiatCurrency, cryptoCurrency }
}
