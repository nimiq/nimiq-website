<script setup lang="ts">
import type { LinkField } from '@prismicio/client'
import type { StakingFaqSliceDefaultPrimaryQuestionsItem } from '~~/prismicio-types'

defineProps<{ questions: StakingFaqSliceDefaultPrimaryQuestionsItem[], title: string, moreInsightfulLabel: string, cta: LinkField }>()
</script>

<template>
  <div flex="~ col md:items-center">
    <h2 w-max f-text-lg nq-label>
      {{ title }}
    </h2>
    <ul grid="~ cols-1 md:cols-2 lg:cols-3 gap-24" f-mt-md>
      <li v-for="(q, i) in questions" :key="i" p-16 rounded-6 bg-neutral-300>
        <RichText wrapper="div" :field="q.question" f-mt-2xs />
        <RichText wrapper="div" :field="q.answer!" nq-prose-compact f-mt-xs />
      </li>
    </ul>
    <p v-if="moreInsightfulLabel" text="left md:center neutral-800 f-lg" f-mt-xl>
      {{ moreInsightfulLabel }}
    </p>
    <PrismicLink v-if="hasLink(cta)" :field="cta" f-mt-sm nq-arrow nq-pill-lg nq-pill-secondary />
  </div>
</template>

<style scoped>
:deep(h3) {
  --uno: 'text-16 font-bold';
}
</style>
