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
    <ul grid="~ cols-1 md:cols-2 lg:cols-3 gap-24" f-m-md>
      <li v-for="(q, i) in questions" :key="i" rounded-6 bg-neutral-300 p-16>
        <PrismicRichText :field="q.question" f-m-2xs />
        <PrismicRichText :field="q.answer!" nq-prose-compact f-m-xs />
      </li>
    </ul>
    <p v-if="moreInsightfulLabel" text="left md:center neutral-800 lg" f-m-xl>
      {{ moreInsightfulLabel }}
    </p>
    <PrismicLink v-if="hasLink(cta)" :field="cta" nq-arrow nq-pill-lg nq-pill-secondary f-m-sm />
  </div>
</template>

<style scoped>
:deep(h3) {
  --uno: 'text-16 font-bold';
}
</style>
