import { calculateStakingRewards } from '@nimiq/utils/rewards-calculator'

interface StakingInfoResponse {
  circulating: number
  staking: number
  stakingRatio: number
}

export function useStakingInfo(options: { enabled?: MaybeRef<boolean> } = {}) {
  const enabled = computed(() => toValue(options.enabled) ?? true)

  const { data, status, error, refresh } = useFetch<StakingInfoResponse>('/api/staking-info', {
    immediate: enabled.value,
    watch: false,
  })

  // Trigger fetch when enabled changes to true
  watch(enabled, (isEnabled) => {
    if (isEnabled && !data.value)
      refresh()
  })

  const stakingRatio = computed(() => data.value?.stakingRatio ?? null)

  const locale = useLocale()
  const annualRewardPercentage = computed(() => {
    if (!stakingRatio.value)
      return '0%'
    const reward = calculateStakingRewards({ stakedSupplyRatio: stakingRatio.value })
    return formatPercentage(reward.gainRatio, locale.value)
  })

  return {
    stakingRatio,
    stakingRatioState: readonly(status),
    annualRewardPercentage,
    error: readonly(error),
    refresh,
  }
}
