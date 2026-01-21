<script setup lang="ts">
import type { StyleValue } from 'vue'
import type { DonutDatum } from '../chart/Donut.client.vue'

// No props needed - all data comes from useStakingInfo composable

const target = useTemplateRef<HTMLDivElement>('target')
const isVisible = useElementVisibility(target)
const { stakingRatio } = useStakingInfo({ enabled: isVisible })
const locale = useLocale()
const formatter = new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })
const datum = computed(() => {
  if (!stakingRatio.value)
    return []
  return [
    { color: `var(--colors-green)`, value: stakingRatio.value || 0, label: `${formatter.format(stakingRatio.value * 100)} staked`, annotation: { bottom: '40px', right: '-72px' } },
    { color: `var(--colors-neutral-200)`, value: 1 - stakingRatio.value || 1, label: 'Circulating', annotation: { top: '40px', left: '-42px' } },
  ] satisfies (DonutDatum & { label: string, annotation: StyleValue })[]
})

// Center the donut chart so the staked amount center points to the right
const startAngle = computed(() => (90 - 180 * (datum.value.at(0)?.value || 0)))
</script>

<template>
  <div ref="target" class="relative flex flex-col flex-items-center">
    <ChartDonut :data="datum" :start-angle />
    <div class="ring-1.5 ring-green text-neutral font-semibold px-12 py-6 rounded-full bg-neutral-0 right-8 top-196 absolute">
      {{ formatter.format(stakingRatio ?? 0) }} staked
    </div>
  </div>
</template>
