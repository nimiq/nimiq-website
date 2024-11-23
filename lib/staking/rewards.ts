import { posSupplyAt } from './pos'
import { SUPPLY_AT_PROOF_OF_STAKE_FORK_DATE } from './utils'

// = 1 - POS_SUPPLY_DECAY ** (1000 * 60 * 60 * 24)
const DECAY_PER_DAY = 0.0003432600460362

export interface CalculateStakingRewardsParams {
  /**
   * The initial amount of cryptocurrency staked, in NIM.
   */
  amount: number

  /**
   * The fee percentage that the pool charges for staking.
   *  @default 0
   */
  fee: number

  /**
   * The number of days the cryptocurrency is staked.
   */
  daysStaked: number

  /**
   * The ratio of the total staked cryptocurrency to the total supply.
   */
  stakedSupplyRatio: number

  /**
   * Indicates whether the staking rewards are restaked (default is true). Restaked mean that each staking reward is added to the pool of staked cryptocurrency for compound interest.
   */
  autoRestake?: boolean
}

export interface CalculateStakingRewardsResult {
  /**
   * The total amount of cryptocurrency after staking for the specified number of days, in NIM.
   * Considering the decay of rewards and whether the rewards are restaked.
   */
  totalAmount: number

  /**
   * The gain in cryptocurrency after staking for the specified number of days,
   * considering the decay of rewards and whether the rewards are restaked, in NIM.
   */
  gain: number

  /**
   * The gain in percentage after staking for the specified number of days,
   * considering the decay of rewards and whether the rewards are restaked.
   */
  gainRatio: number
}

/**
 * Calculates the potential wealth accumulation based on staking in a cryptocurrency network,
 * considering the effects of reward decay over time. It computes the final amount of cryptocurrency
 * after a specified number of days of staking, taking into account whether the rewards are restaked or not.
 * @param {CalculateStakingRewardsParams} params The parameters for the calculation.
 * @returns {CalculateStakingRewardsResult} The result of the calculation.
 */
export function calculateStakingRewards(params: CalculateStakingRewardsParams): CalculateStakingRewardsResult {
  const { amount, fee = 0, daysStaked, autoRestake = true, stakedSupplyRatio } = params
  const genesisSupply = SUPPLY_AT_PROOF_OF_STAKE_FORK_DATE

  const initialRewardsPerDay = posSupplyAt(24 * 60 * 60 * 1000) - genesisSupply

  const decayFactor = Math.E ** (-DECAY_PER_DAY * daysStaked)
  const rewardFactor = initialRewardsPerDay / (DECAY_PER_DAY * stakedSupplyRatio * genesisSupply)

  let gainRatio = 0
  if (autoRestake) {
    gainRatio = rewardFactor * (1 - decayFactor)
  }
  else {
    gainRatio = (1 / stakedSupplyRatio) * (
      Math.log(
        (DECAY_PER_DAY * genesisSupply * (1 / decayFactor))
        + initialRewardsPerDay * (1 / decayFactor) - initialRewardsPerDay,
      )
      - DECAY_PER_DAY * daysStaked
      - Math.log(DECAY_PER_DAY * genesisSupply)
    )
  }
  gainRatio = gainRatio * (1 - fee) / 1e3 / 100
  const totalAmount = amount * (1 + gainRatio)
  return { totalAmount, gain: totalAmount - amount, gainRatio }
}
