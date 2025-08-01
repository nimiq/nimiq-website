<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import type { StyleValue } from 'vue'
import type { DonutDatum } from '../Chart/Donut.client.vue'

defineProps<{ info: RichTextField }>()

const { stakingRatio } = useStakingInfo()
const locale = useLocale()
const formatter = new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })
const datum = computed(() => {
  if (!stakingRatio.value)
    return []
  return [
    { color: `rgb(var(--nq-green))`, value: stakingRatio.value || 0, label: `${formatter.format(stakingRatio.value * 100)} staked`, annotation: { bottom: '40px', right: '-72px' } },
    { color: `rgb(var(--nq-neutral-200))`, value: 1 - stakingRatio.value || 1, label: 'Circulating', annotation: { top: '40px', left: '-42px' } },
  ] satisfies (DonutDatum & { label: string, annotation: StyleValue })[]
})

// Center the donut chart so the staked amount center points to the right
const startAngle = computed(() => (90 - 180 * (datum.value.at(0)?.value || 0)))
</script>

<template>
  <div relative flex="~ col items-center">
    <ChartDonut :data="datum" :start-angle />
    <div ring="1.5 green" text-neutral font-semibold px-12 py-6 rounded-full bg-neutral-0 right-8 top-196 absolute>
      {{ formatter.format(stakingRatio ?? 0) }} staked
    </div>
    <RichText wrapper="div" :field="info" text-center max-w-42ch f-m-lg />
  </div>
</template>
