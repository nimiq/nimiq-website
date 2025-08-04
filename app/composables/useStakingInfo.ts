import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

interface SupplyResponse {
  total: number
  vested: number
  burned: number
  max: number
  initial: number
  staking: number
  minted: number
  circulating: number
  mined: number
}

export function useStakingInfo(options: { enabled?: MaybeRef<boolean> } = {}) {
  const validatorsApiBaseUrl = 'https://dev.validators-api-mainnet.pages.dev'

  const { data: stakingRatio, state: stakingRatioState } = useQuery({
    key: ['staking_distribution'],
    query: async () => {
      const { circulating, staking } = await $fetch<SupplyResponse>(`${validatorsApiBaseUrl}/api/v1/supply`)
      const stakedRatio = staking / circulating
      return stakedRatio
    },
    staleTime: 60 * 5 * 1e3,
    placeholderData: previousData => previousData,
    enabled: computed(() => toValue(options.enabled) ?? true),
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
