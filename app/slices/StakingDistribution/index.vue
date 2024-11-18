<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.StakingDistributionSlice>())
</script>

<template>
  <section bg-neutral-0>
    <div flex="~ wrap md:gap-100 lg:gap-x-200 justify-center" nq-wide>
      <StakingDistribution :info="slice.primary.marketCapDistributionInfo" />
      <ValidatorDistribution :info="slice.primary.stakedDistributionInfo" />
    </div>
  </section>
</template>
