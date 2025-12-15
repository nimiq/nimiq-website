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
  const { validatorsApi } = useRuntimeConfig().public

  const { data: stakingRatio, state: stakingRatioState } = useQuery({
    key: ['staking_distribution'],
    query: async () => {
      const { circulating, staking } = await $fetch<SupplyResponse>(`${validatorsApi}/api/v1/supply`)
      const stakedRatio = staking / circulating
      return stakedRatio
    },
    staleTime: 60 * 5 * 1e3,
    placeholderData: previousData => previousData,
    enabled: computed(() => toValue(options.enabled) ?? true),
  })

  const locale = useLocale()
  const annualRewardPercentage = computed(() => {
    if (!stakingRatio.value)
      return '0%'
    const reward = calculateStakingRewards({ stakedSupplyRatio: stakingRatio.value })
    return formatPercentage(reward.gainRatio, locale.value)
  })

  return { stakingRatio, stakingRatioState, annualRewardPercentage }
}
