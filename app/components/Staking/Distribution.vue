<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'
import type { StyleValue } from 'vue'
import type { DonutDatum } from '../Chart/Donut.client.vue'

defineProps<{ info: RichTextField }>()

const { stakedSupplyRatio } = storeToRefs(useStakingStore())
const locale = useLocale()
const formatter = new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })
const datum = computed(() => {
  if (!stakedSupplyRatio.value)
    return []
  return [
    { color: `rgb(var(--nq-green))`, value: stakedSupplyRatio.value || 0, label: `${formatter.format(stakedSupplyRatio.value * 100)} staked`, anotation: { bottom: '40px', right: '-72px' } },
    { color: `rgb(var(--nq-neutral-200))`, value: 1 - stakedSupplyRatio.value || 1, label: 'Circulating', anotation: { top: '40px', left: '-42px' } },
  ] satisfies (DonutDatum & { label: string, anotation: StyleValue })[]
})

// Center the donut chart so the staked amount center points to the right
const startAngle = computed(() => (90 - 180 * (datum.value.at(0)?.value || 0)))
</script>

<template>
  <div relative flex="~ col items-center">
    <ChartDonut :data="datum" :start-angle />
    <div ring="1.5 green" absolute right-8 top-196 rounded-full bg-neutral-0 px-12 py-6 text-neutral font-semibold>
      {{ formatter.format(stakedSupplyRatio) }} staked
    </div>
    <PrismicRichText wrapper="div" :field="info" max-w-42ch text-center f-m-lg />
  </div>
</template>
