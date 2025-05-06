import { TOTAL_SUPPLY } from '@nimiq/utils/albatross-policy'
import { posSupplyAt } from '@nimiq/utils/supply-calculator'

export function useNimSupply() {
  const currentSupply = posSupplyAt(Date.now())
  const supplyYesterday = posSupplyAt(Date.now() - 24 * 60 * 60 * 1000)

  const currentSupplyFormatted = computed(() => `${formatNim(currentSupply)} NIM`)
  const maxSupply = TOTAL_SUPPLY / 1e5
  const maxSupplyFormatted = computed(() => `${formatNim(maxSupply)} NIM`)

  return {
    currentSupply,
    supplyYesterday,
    currentSupplyFormatted,
    maxSupply,
    maxSupplyFormatted,
  }
}
