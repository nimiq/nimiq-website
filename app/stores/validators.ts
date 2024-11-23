import { calculateStakingRewards } from 'nimiq-rewards-calculator'

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
  const stakedSupplyRatio = computed(() => distribution?.value?.ratio || 0)

  const { data: validators } = useAsyncData('validators', () => $fetch<Validator[]>(`${useRuntimeConfig().public.validatorsApi}/api/v1/validators`).then((validators) => {
    return validators.map((v) => {
      const fee = v.fee || 0
      const { gainRatio: rewardPerAnnum } = calculateStakingRewards({ fee, stakedSupplyRatio: stakedSupplyRatio.value })
      const dominance = v.dominance || v.dominanceRatioViaBalance || v.dominanceRatioViaSlots
      return { ...v, rewardPerAnnum, dominance } satisfies Validator
    })
  },
  ))

  return {
    distribution,
    validators,
    stakedSupplyRatio,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useValidatorStore, import.meta.hot))
}
