<script setup lang="ts">
import StakingDistributionComponent from '~/components/Staking/Distribution.vue'
import ValidatorDistributionComponent from '~/components/Validator/Distribution.vue'

interface StakingDistributionSlice {
  primary: {
    marketCapDistributionInfo: any
    stakedDistributionInfo: any
  }
}

defineProps<{ slice: StakingDistributionSlice }>()
</script>

<template>
  <section bg-neutral-0>
    <div flex="~ wrap md:gap-100 gap-y-72 lg:gap-x-160 f-gap-x-12 justify-center">
      <StakingDistributionComponent :info="slice.primary.marketCapDistributionInfo" />
      <ValidatorDistributionComponent :info="slice.primary.stakedDistributionInfo" />
    </div>
  </section>
</template>
