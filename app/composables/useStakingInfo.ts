import type { StakingDistributionResponse } from '~/utils/staking-rewards'
import { calculateWalletAlignedRewardRatio } from '~/utils/staking-rewards'

export function useStakingInfo(options: { enabled?: MaybeRef<boolean> } = {}) {
  const config = useRuntimeConfig()
  const validatorsApiBaseUrl = config.public.validatorsApi

  const { data: stakingDistribution, state: stakingRatioState } = useQuery({
    key: ['staking_distribution', validatorsApiBaseUrl],
    query: async () => {
      return $fetch<StakingDistributionResponse>(`${validatorsApiBaseUrl}/api/v1/distribution`)
    },
    staleTime: 60 * 5 * 1e3,
    placeholderData: previousData => previousData,
    enabled: computed(() => toValue(options.enabled) ?? true),
  })

  const stakingRatio = computed(() => stakingDistribution.value?.stakedRatio)
  const locale = useLocale()
  const annualRewardPercentage = computed(() => {
    const currentlyStakedNim = stakingDistribution.value?.staked
    if (!currentlyStakedNim)
      return null

    const rewardRatio = calculateWalletAlignedRewardRatio({ currentlyStakedNim })
    return formatPercentage(rewardRatio, locale.value)
  })

  return {
    stakingRatio,
    stakingRatioState,
    annualRewardPercentage,
  }
}
