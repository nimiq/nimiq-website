import { TOTAL_SUPPLY } from '@nimiq/utils/albatross-policy'
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

export function useNimSupply() {
  const locale = useLocale()
  // Use computed so values update if called at different times
  const currentSupply = computed(() => posSupplyAt(Date.now()))
  const supplyYesterday = computed(() => posSupplyAt(Date.now() - 24 * 60 * 60 * 1000))

  const currentSupplyFormatted = computed(() => `${formatNim(currentSupply.value, locale.value)} NIM`)
  const maxSupply = TOTAL_SUPPLY / 1e5
  const maxSupplyFormatted = computed(() => `${formatNim(maxSupply, locale.value)} NIM`)

  return { currentSupply, supplyYesterday, currentSupplyFormatted, maxSupply, maxSupplyFormatted }
}
