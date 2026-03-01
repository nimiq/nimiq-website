import { calculateProtocolStakingRewards } from '~/utils/staking-rewards'

export interface Validator {
  id: number
  name: string
  address: string
  fee: number
  payoutType: string
  payoutSchedule: string
  description: null | string
  accentColor: string
  isMaintainedByNimiq: boolean
  hasDefaultLogo: boolean
  website: string | null
  score: { total: number, dominance: number, reliability: number, availability: number }
  logo?: string
  dominanceRatio: number
  balance: number
  rewardGainRatio: number
}

interface RawValidator {
  id: number
  name: string
  address: string
  fee: number
  payoutType: string
  payoutSchedule: string
  description: null | string
  accentColor: string
  isMaintainedByNimiq: boolean
  hasDefaultLogo: boolean
  website: string | null
  score: { total: number, dominance: number, reliability: number, availability: number }
  logo?: string
  dominanceRatio: number
  balance: number
}

export function useValidatorsInfo() {
  const { stakingRatio } = useStakingInfo()

  const { data: rawValidators, status: validatorsRequestState, refresh } = useFetch<RawValidator[]>('/api/validators')

  // Compute validators with rewardGainRatio reactively - updates when stakingRatio changes
  const validators = computed<Validator[] | null>(() => {
    if (!rawValidators.value)
      return null
    const ratio = stakingRatio.value ?? 0
    return rawValidators.value.map(validator => ({
      ...validator,
      rewardGainRatio: calculateProtocolStakingRewards({
        stakedSupplyRatio: ratio,
        fee: validator.fee,
      }).gainRatio,
    })).sort((a, b) => {
      if (!a.score?.total)
        return 1
      if (!b.score?.total)
        return -1
      return b.score.total - a.score.total
    })
  })

  return { validators, validatorsRequestState, refresh }
}
