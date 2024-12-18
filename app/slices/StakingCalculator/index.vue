<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.StakingCalculatorSlice>())
</script>

<template>
  <section bg-neutral-100>
    <StakingCalculator
      :title="slice.primary.title!"
      :auto-restake-info="slice.primary.autoRestakeInfo"
      :auto-restake-label="slice.primary.autoRestakeLabel!"
      :initial-staking-amount="slice.primary.initialStakingAmount!"
      :staking-amount-label="slice.primary.stakingAmountLabel!"
      :staking-period-info="slice.primary.stakingPeriodInfo"
      :staking-period-label="slice.primary.stakingPeriodLabel!"
      :staking-rewards-label="slice.primary.stakingRewardsLabel!"
      :staked-supply-info="slice.primary.stakedSupplyInfo"
      :staked-supply-label="slice.primary.stakedSupplyLabel!"
      :note="slice.primary.note!"
    />
  </section>
</template>
