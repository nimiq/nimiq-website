<script setup lang="ts">
import type { StakingFaqSliceDefaultPrimaryQuestionsItem } from '~~/prismicio-types'

defineProps<{ questions: StakingFaqSliceDefaultPrimaryQuestionsItem[], title: string }>()

const questionTypeColor: Record<Exclude<StakingFaqSliceDefaultPrimaryQuestionsItem['type'], null>, string> = {
  'General questions about staking': 'purple',
  'Migration': 'blue',
  'Validators and Network': 'gold',
  'Prestaking': 'orange',
}
</script>

<template>
  <div flex="~ col md:items-center">
    <h2 w-max text-lg nq-label>
      {{ title }}
    </h2>
    <ul grid="~ cols-1 md:cols-2 lg:cols-3 gap-24" nq-mt-32>
      <li v-for="(q, i) in questions" :key="i" rounded-6 bg-neutral-300 p-16>
        <span :style="`color: rgb(var(--nq-${questionTypeColor[q.type!]})`" text-12 nq-label>{{ q.type }}</span>
        <PrismicRichText :field="q.question" nq-mt-12 />
        <PrismicRichText :field="q.answer!" nq-mt-16 nq-prose-compact />
      </li>
    </ul>
  </div>
</template>

<style scoped>
:global(h3) {
  --uno: 'text-16 font-bold';
}
</style>
