<script setup lang="ts">
defineProps<{ score: number, showBorder?: boolean }>()

const formatter = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })

function getScoreColor(score: number) {
  if (score >= 0.75)
    return 'green'
  if (score >= 0.6)
    return 'gold'
  if (score >= 0.5)
    return 'neutral-700'
  return 'red'
}

// @unocss-include

function getIcon(score: number) {
  if (score >= 0.75)
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
