import { powi, SUPPLY_AT_PROOF_OF_STAKE_FORK_DATE, TOTAL_SUPPLY } from './utils'

// Supply decay per millisecond
const SUPPLY_DECAY = 0.9999999999960264

/**
 * Calculate the PoS supply at a given time.
 * @returns {number} The total supply of the cryptocurrency at the given time, in NIM.
 */
export function posSupplyAt(duration: number): number {
  if (duration < 0) {
    throw new Error('currentTime must be greater or equal to genesisTime')
  }

  return (TOTAL_SUPPLY - ((TOTAL_SUPPLY - SUPPLY_AT_PROOF_OF_STAKE_FORK_DATE * 1e5) * powi(SUPPLY_DECAY, duration))) / 1e5 // Luna >> NIM
}
