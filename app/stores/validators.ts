import { calculateStakingRewards } from '~~/lib/staking/rewards'

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
  website: null
  score: { total: number, dominance: number }
  logo?: string
  dominanceRatioViaBalance: number
  dominanceRatioViaSlots: number
  dominance: number
  rewardPerAnnum?: number
}

interface DistributionResponse { staked: number, circulating: number, ratio: number }

export const useValidatorStore = defineStore('validators', () => {
  const { data: distribution } = useAsyncData('network_distribution', () => $fetch<DistributionResponse>(`${useRuntimeConfig().public.validatorsApi}/api/v1/distribution`))

  const { data: validators } = useAsyncData('validators', () => $fetch<Validator[]>(
    `${useRuntimeConfig().public.validatorsApi}/api/v1/validators`,
    {
      query: { 'with-scores': true, 'width-identicons': false },
    },
  ).then((validators) => {
    return validators.map(v => ({
      ...v,
      rewardPerAnnum: v.fee !== null ? calculateStakingRewards({ amount: 1e5 - v.fee, daysStaked: 365, stakedSupplyRatio: distribution.value?.ratio || 0, autoRestake: true }).gainRatio : undefined,
      dominance: v.dominance || v.dominanceRatioViaBalance || v.dominanceRatioViaSlots,
    } satisfies Validator))
  },
  ))

  return {
    distribution,
    validators,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useValidatorStore, import.meta.hot))
}
