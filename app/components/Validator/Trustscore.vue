<script setup lang="ts">
defineProps<{ score: number, showBorder?: boolean }>()

const ScoreThresholds = { EXCELLENT: 0.9, GOOD: 0.75, FAIR: 0.5 }

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

function getIcon(score: number) {
  return score > ScoreThresholds.EXCELLENT ? 'nimiq:starburst' : 'nimiq:star'
}
</script>

<template>
  <div class="flex items-center gap-1 py-1.5 rounded-full h-max w-max nq-raw" :class="{ 'ring-1.5 ring-[color:var(--ring-c)] px-2.5': showBorder }" :style="`--c: var(--color-${getScoreColor(score)}); --ring-c: var(--color-${getScoreColor(score)}) / 0.5; color: var(--c)`">
    <Icon class="text-1.125em" :name="getIcon(score)" />
    <span class="text-1.5em font-semibold leading-none">{{ formatter.format(score * 5) }}</span>
  </div>
</template>
