<script setup lang="ts">
import type { StyleValue } from 'vue'
import type { DonutDatum } from '../chart/Donut.client.vue'

defineProps<{ headline?: string, info?: string }>()

const target = useTemplateRef<HTMLDivElement>('target')
const isVisible = useElementVisibility(target)
const { stakingRatio } = useStakingInfo({ enabled: isVisible })
const locale = useLocale()
const formatter = computed(() => new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }))
const datum = computed(() => {
  if (stakingRatio.value === undefined)
    return []

  const ratio = stakingRatio.value
  return [
    { color: `var(--color-green)`, value: ratio, label: `${formatter.value.format(ratio)} staked`, annotation: { bottom: '40px', right: '-72px' } },
    { color: `var(--color-neutral-200)`, value: 1 - ratio, label: 'Circulating', annotation: { top: '40px', left: '-42px' } },
  ] satisfies (DonutDatum & { label: string, annotation: StyleValue })[]
})

// Center the donut chart so the staked amount center points to the right
const startAngle = computed(() => (90 - 180 * (datum.value.at(0)?.value || 0)))
const formattedStakingRatio = computed(() => stakingRatio.value === undefined ? '--' : formatter.value.format(stakingRatio.value))
</script>

<template>
  <div ref="target" class="relative flex flex-col items-center">
    <ChartDonut :data="datum" :start-angle />
    <div class="ring-1.5 ring-green text-neutral font-semibold px-3 py-1.5 rounded-full bg-neutral-0 right-2 top-[196px] absolute">
      {{ formattedStakingRatio }} staked
    </div>
    <h3 v-if="headline" class="text-center font-semibold text-22 mt-4 text-neutral">
      {{ headline }}
    </h3>
    <p v-if="info" class="text-center max-w-[42ch] mt-2">
      {{ info }}
    </p>
  </div>
</template>
