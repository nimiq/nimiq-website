<script setup lang="ts">
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
      <StakingDistribution :info="slice.primary.marketCapDistributionInfo" />
      <ValidatorDistribution :info="slice.primary.stakedDistributionInfo" />
    </div>
  </section>
</template>
