<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.StakingFaqSlice>())
</script>

<template>
  <section bg-neutral-100 data-slice-type="staking-faq">
    <StakingFaq :questions="slice.primary.questions" :title="slice.primary.title!" :cta="slice.primary.cta" :more-insightful-label="slice.primary.moreInsightfulLabel!" />
  </section>
</template>
