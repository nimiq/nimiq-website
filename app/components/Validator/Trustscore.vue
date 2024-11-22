<script setup lang="ts">
defineProps<{ score: number }>()

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
</script>

<template>
  <div ring="1.5 $c" flex="~ items-center gap-4" nq-raw mx-1.5 h-max w-max rounded-full px-10 py-6 text="$c" :style="`--c: rgb(var(--nq-${getScoreColor(score)}))`">
    <div i-nimiq:starburst text-16 />
    <span text-24 font-semibold lh-none>{{ formatter.format(score * 5) }}</span>
  </div>
</template>
