<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import StakingCalculatorComponent from '~/components/Staking/Calculator.vue'

interface StakingCalculatorSlice {
  primary: {
    autoRestakeInfo: RichTextField
    autoRestakeLabel: string | undefined
    initialStakingAmount: string | undefined
    note: string | undefined
    stakedSupplyInfo: string | undefined
    stakedSupplyLabel: string | undefined
    stakingAmountLabel: string | undefined
    stakingPeriodInfo: string | undefined
    stakingPeriodLabel: string | undefined
    stakingRewardsLabel: string | undefined
    title: RichTextField
  }
}

const { slice } = defineProps<{ slice: StakingCalculatorSlice, slices?: any[] }>()
</script>

<template>
  <section bg-neutral-100>
    <StakingCalculatorComponent
      :title="slice.primary.title! as any"
      :auto-restake-info="slice.primary.autoRestakeInfo"
      :auto-restake-label="slice.primary.autoRestakeLabel!"
      :initial-staking-amount="slice.primary.initialStakingAmount! as any"
      :staking-amount-label="slice.primary.stakingAmountLabel!"
      :staking-period-info="slice.primary.stakingPeriodInfo as any"
      :staking-period-label="slice.primary.stakingPeriodLabel!"
      :staking-rewards-label="slice.primary.stakingRewardsLabel!"
      :staked-supply-info="slice.primary.stakedSupplyInfo as any"
      :staked-supply-label="slice.primary.stakedSupplyLabel!"
      :note="slice.primary.note!"
    />
  </section>
</template>
