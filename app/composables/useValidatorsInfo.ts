import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

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

export function useValidatorsInfo() {
  const config = useRuntimeConfig()
  const validatorsApiBaseUrl = config.public.validatorsApi
  const { stakingRatio } = useStakingInfo()
  const { data: validators, state: validatorsRequestState } = useQuery({
    key: ['validators', stakingRatio.value ?? 0] as const,
    query: async () => {
      const validators = await $fetch<Validator[]>(`${validatorsApiBaseUrl}/api/v1/validators`)
      // Add reward calculation based on current staked ratio
      return validators.map(validator => ({
        ...validator,
        rewardGainRatio: calculateStakingRewards({
          stakedSupplyRatio: stakingRatio.value ?? 0,
          fee: validator.fee,
        }).gainRatio,
      })).sort((a, b) => {
        // no score goes to the end of the list
        if (!a.score?.total)
          return 1
        if (!b.score?.total)
          return -1
        // sort by score
        return b.score.total - a.score.total
      })
    },
    staleTime: 60 * 5 * 1e3, // 5 min freshness
  })
  return {
    validators,
    validatorsRequestState,
  }
}
