<script setup lang="ts">
import type { LinkField } from '@prismicio/client'
import StakingFaqComponent from '~/components/Staking/Faq.vue'

interface StakingFaqSlice {
  primary: {
    questions: any[]
    title: string
    cta: LinkField
    moreInsightfulLabel: string
  }
}

defineProps<{ slice: StakingFaqSlice }>()
</script>

<template>
  <section bg-neutral-100 data-slice-type="staking-faq">
    <StakingFaqComponent :questions="slice.primary.questions" :title="slice.primary.title" :cta="slice.primary.cta" :more-insightful-label="slice.primary.moreInsightfulLabel" />
  </section>
</template>
