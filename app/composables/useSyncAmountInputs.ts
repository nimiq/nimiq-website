import { invoke } from '@vueuse/core'

/**
 * Composable for synchronizing cryptocurrency and fiat amount inputs.
 *
 * Manages bidirectional conversion between crypto (NIM) and fiat amounts,
 * tracks which input was last edited, and updates values when price changes.
 */
export function useSyncAmountInputs() {
  if (import.meta.server) {
    return {
      cryptoAmount: ref(0),
      fiatAmount: ref(0),
      lastEdited: ref(),
      fiatKey: ref(''),
      cryptoKey: ref(''),
    }
  }

  const { price } = useNimPrice()

  const cryptoValue = ref(1)
  const fiatValue = ref()

  const lastEdited = ref<'crypto' | 'fiat' | 'loading'>('loading')

  const fiatAmount = computed<number>({
    get: () => fiatValue.value,
    set: (value) => {
      fiatValue.value = value
      lastEdited.value = 'fiat'
      if (!price.value)
        return
      cryptoValue.value = value / price.value
    },
  })

  const cryptoAmount = computed<number>({
    get: () => cryptoValue.value,
    set: (value) => {
      lastEdited.value = 'crypto'
      cryptoValue.value = value
      fiatValue.value = value * (price.value || 0)
    },
  })

  invoke(async () => {
    await until(price).toMatch(v => v !== undefined)
    fiatAmount.value = price.value
  })

  const fiatKey = computed(() => lastEdited.value === 'crypto' || lastEdited.value === 'loading' ? fiatAmount.value : 'fiat')
  const cryptoKey = computed(() => lastEdited.value === 'fiat' || lastEdited.value === 'loading' ? cryptoAmount.value : 'crypto')

  return {
    cryptoAmount,
    fiatAmount,
    lastEdited,
    fiatKey,
    cryptoKey,
  }
}
