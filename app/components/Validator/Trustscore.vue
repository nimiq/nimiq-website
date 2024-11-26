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
  <div :class="{ 'ring-1.5 ring-$c px-10': showBorder }" flex="~ items-center gap-4" nq-raw h-max w-max rounded-full py-6 text="$c" :style="`--c: rgb(var(--nq-${getScoreColor(score)}))`">
    <div :class="getIcon(score)" text-1.125em />
    <span text-1.5em font-semibold lh-none>{{ formatter.format(score * 5) }}</span>
  </div>
</template>
