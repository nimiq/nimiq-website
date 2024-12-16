import { FiatCurrency } from '@nimiq/utils'

export function useSyncAmountInputs() {
  const { price } = useNimPrice()

  const _cryptoAmount = ref(1)
  const _fiatAmount = ref(_cryptoAmount.value * price.value)

  const fiatCurrency = ref(FiatCurrency.USD)
  const cryptoCurrency = ref('NIM')

  const fiatAmount = computed({
    get() {
      return _fiatAmount.value
    },
    set(value) {
      _fiatAmount.value = value
      _cryptoAmount.value = value / price.value
    },
  })

  const cryptoAmount = computed({
    get() {
      return _cryptoAmount.value
    },
    set(value) {
      _cryptoAmount.value = value
      _fiatAmount.value = value * price.value
    },
  })

  return { fiatAmount, cryptoAmount, fiatCurrency, cryptoCurrency }
}
