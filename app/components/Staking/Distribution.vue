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
    { color: `rgb(var(--nq-green))`, value: distribution.ratio, label: `${formatter.format(distribution.ratio * 100)} staked`, anotation: { bottom: '40px', right: '-72px' } },
    { color: `rgb(var(--nq-gold))`, value: 1 - distribution.ratio, label: 'Circulating', anotation: { top: '40px', left: '-42px' } },
  ] satisfies (DonutDatum & { label: string, anotation: StyleValue })[]
})

// Center the donut chart so the staked amount center points to the right
const startAngle = computed(() => (90 - 180 * datum.value[0]!.value))
</script>

<template>
  <div flex="~ col items-center">
    {{ startAngle }}
    <Donut :data="datum" :start-angle />
    <PrismicRichText :field="info" max-w-42ch text-center nq-mt-48 />
  </div>
</template>
