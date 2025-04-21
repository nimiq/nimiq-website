import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

interface DistributionResponse {
  stakedRatio: number
}

export function useStakingInfo() {
  const config = useRuntimeConfig()
  const validatorsApiBaseUrl = config.public.validatorsApi

  const { data: stakingRatio, state: stakingRatioState } = useQuery({
    key: ['staking_distribution'],
    query: async () => {
      const { stakedRatio } = await $fetch<DistributionResponse>(`${validatorsApiBaseUrl}/api/v1/distribution`)
      if (stakedRatio == null || stakedRatio > 1 || stakedRatio < 0) {
        console.warn(`Staked ratio from API suspicious (${stakedRatio}). Defaulting to 0.55.`)
        return undefined
      }
      return stakedRatio
    },
    staleTime: 60 * 5 * 1e3, // 5 min freshness
    placeholderData: previousData => previousData,
  })

  const annualRewardPercentage = computed(() => {
    if (!stakingRatio.value)
      return 0
    const reward = calculateStakingRewards({ stakedSupplyRatio: stakingRatio.value })
    return formatPercentage(reward.gainRatio)
  })

  return {
    stakingRatio,
    stakingRatioState,
    annualRewardPercentage,
  }
}
