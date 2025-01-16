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
  website: string | null
  score: { total: number, dominance: number, reliability: number, availability: number }
  logo?: string
  dominanceRatio: number
  rewardPerAnnum?: number
  balance: number
}

interface DistributionResponse { staked: number, circulating: number, stakedRatio: number }

const formatter = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 1 })

export const useStakingStore = defineStore('staking', () => {
  const { data: distribution } = useAsyncData('network_distribution', () => $fetch<DistributionResponse>(`${useRuntimeConfig().public.validatorsApi}/api/v1/distribution`))
  const stakedSupplyRatio = computed(() => {
    const value = distribution?.value?.stakedRatio || 0
    if (value < 0.005) { // Just in case we get a value below 0.005
      console.warn('Staked supply ratio is greater than 5%. Defaulting to 0.55. Please check network distribution API.')
      return 0.55
    }
    return value
  })

  const { data: validatorsApi } = useAsyncData('validators', () => $fetch<Validator[]>(`${useRuntimeConfig().public.validatorsApi}/api/v1/validators?payout-type=restake`))

  const validators = computed(() => validatorsApi.value?.map((v) => {
    v.rewardPerAnnum = calculateStakingRewards({ fee: v.fee, stakedSupplyRatio: stakedSupplyRatio.value }).gainRatio
    return v
  }))

  const { client } = usePrismic()
  const { data: stakingValues } = useAsyncData('stakingValues', () => client.getByType('stakingValues'), { transform: data => data.results.at(0)?.data })
  const stakingRewardPerAnnum = computed(() => calculateStakingRewards({ stakedSupplyRatio: stakedSupplyRatio.value }).gainRatio)
  const rewardPerAnnumPercentage = computed(() => formatter.format(stakingRewardPerAnnum.value))

  return {
    distribution,
    validators,
    stakedSupplyRatio,
    stakingValues,
    rewardPerAnnumPercentage,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStakingStore, import.meta.hot))
}
