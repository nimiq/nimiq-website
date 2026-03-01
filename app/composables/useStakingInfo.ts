import type { StakingDistributionResponse } from '~/utils/staking-rewards'
import { calculateWalletAlignedRewardRatio } from '~/utils/staking-rewards'

export function useStakingInfo(options: { enabled?: MaybeRef<boolean> } = {}) {
  const enabled = computed(() => toValue(options.enabled) ?? true)

  const { data, status, error, refresh } = useFetch<StakingDistributionResponse>('/api/staking-info', {
    immediate: enabled.value,
    watch: false,
  })

  // Trigger fetch when enabled changes to true
  watch(enabled, (isEnabled) => {
    if (isEnabled && !data.value)
      refresh()
  })

  const stakingRatio = computed(() => data.value?.stakedRatio)

  const locale = useLocale()
  const annualRewardPercentage = computed(() => {
    const currentlyStakedNim = data.value?.staked
    if (!currentlyStakedNim)
      return null

    const rewardRatio = calculateWalletAlignedRewardRatio({ currentlyStakedNim })
    return formatPercentage(rewardRatio, locale.value)
  })

  return {
    stakingRatio,
    stakingRatioState: readonly(status),
    annualRewardPercentage,
    error: readonly(error),
    refresh,
  }
}
