<script setup lang="ts">
import type { LinkField } from '@prismicio/client'
import type { StakingFaqSliceDefaultPrimaryQuestionsItem } from '~~/prismicio-types'

defineProps<{ questions: StakingFaqSliceDefaultPrimaryQuestionsItem[], title: string, moreInsightfulLabel: string, cta: LinkField }>()
</script>

<template>
  <div flex="~ col md:items-center">
    <h2 w-max nq-label text-lg>
      {{ title }}
    </h2>
    <ul grid="~ cols-1 md:cols-2 lg:cols-3 gap-24" nq-mt-32>
      <li v-for="(q, i) in questions" :key="i" rounded-6 bg-neutral-300 p-16>
        <PrismicRichText :field="q.question" nq-mt-12 />
        <PrismicRichText :field="q.answer!" nq-mt-16 nq-prose-compact />
      </li>
    </ul>
    <p v-if="moreInsightfulLabel" text="left md:center neutral-800 lg" nq-mt-72>
      {{ moreInsightfulLabel }}
    </p>
    <PrismicLink v-if="hasLink(cta)" :field="cta" nq-mt-24 nq-arrow nq-pill-lg nq-pill-secondary />
  </div>
</template>

<style scoped>
:deep(h3) {
  --uno: 'text-16 font-bold';
}
</style>
