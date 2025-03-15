<script setup lang="ts">
defineProps<{ score: number, showBorder?: boolean }>()

const ScoreThresholds = {
  EXCELLENT: 0.9,
  GOOD: 0.75,
  FAIR: 0.5,
}

const formatter = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })

function getScoreColor(score: number) {
  if (score > ScoreThresholds.EXCELLENT)
    return 'green'
  if (score > ScoreThresholds.GOOD)
    return 'neutral-700'
  if (score > ScoreThresholds.FAIR)
    return 'orange'
  return 'red'
}

// @unocss-include

function getIcon(score: number) {
  if (score > ScoreThresholds.EXCELLENT)
    return 'i-nimiq:starburst'
  return 'i-nimiq:star'
}
</script>

<template>
  <div :class="{ 'ring-1.5 ring-$ring-c px-10': showBorder }" flex="~ items-center gap-4" nq-raw py-6 rounded-full h-max w-max text="$c" :style="`--c: rgb(var(--nq-${getScoreColor(score)})); --ring-c: rgb(var(--nq-${getScoreColor(score)}) / 0.5)`">
    <div :class="getIcon(score)" text-1.125em />
    <span lh-none text-1.5em font-semibold>{{ formatter.format(score * 5) }}</span>
  </div>
</template>
