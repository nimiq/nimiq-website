<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import type { StyleValue } from 'vue'
import type { DonutDatum } from '../Donut.vue'

defineProps<{ info: RichTextField }>()

const { distribution } = useGlobalContent()
const locale = useLocale()
const formatter = new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })
const datum = computed(() => {
  if (!distribution)
    return []
  return [
    { color: `rgb(var(--nq-gold)/1)`, value: 1 - distribution.ratio, label: 'Circulating', anotation: { top: '40px', left: '-42px' } },
    { color: `rgb(var(--nq-green)/1)`, value: distribution.ratio, label: `${formatter.format(distribution.ratio * 100)} staked`, anotation: { bottom: '40px', right: '-72px' } },
  ] satisfies (DonutDatum & { label: string, anotation: StyleValue })[]
})
</script>

<template>
  <div flex="~ col items-center">
    <Donut :data="datum" />
    <PrismicRichText :field="info" max-w-42ch text-center nq-mt-48 />
  </div>
</template>
