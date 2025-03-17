<script setup lang="ts" generic="T extends DonutDatum">
import { Donut } from '@unovis/ts'
import { VisDonut, VisSingleContainer, VisTooltip } from '@unovis/vue'
import { render } from 'vue'

const { startAngle: _startAngle = 15, data } = defineProps<{ data?: T[], startAngle?: number }>()
const slots = defineSlots<{ default?: (props: T) => any }>()
const angleToRadians = (angle: number) => angle * Math.PI / 180
const startAngle = angleToRadians(_startAngle)
const angleRange: [number, number] = [startAngle, 360 - startAngle]

const value = (d: DonutDatum) => d.value
const color = (d: DonutDatum) => d.color

function template(v: { data: T }) {
  const div = document.createElement('div')
  render(h(slots.default!, v.data), div)
  return div.innerHTML
}
</script>

<script lang="ts">
export interface DonutDatum { color: string, value: number }
</script>

<template>
  <div flex="~ col items-center">
    <VisSingleContainer :data :height="280" :width="280" relative size-280 max-w-280>
      <VisDonut :color :value :angle-range :corner-radius="8" :arc-width="64" :pad-angle="0.045" :show-background="false" />
      <VisTooltip v-if="slots.default" :triggers="{ [Donut.selectors.segment]: template }" />
    </VisSingleContainer>
  </div>
</template>

<style scoped>
[data-vis-single-container] {
  --vis-tooltip-padding: 0;
  --vis-tooltip-background-color: transparent;
  --vis-dark-tooltip-background-color: transparent;
  --vis-tooltip-border-color: transparent;
  --vis-dark-tooltip-border-color: transparent;
  --vis-tooltip-shadow-color: none;
  --vis-tooltip-backdrop-filter: none;
  --vis-dark-tooltip-shadow-color: none;

  div:has(> [data-tooltip-container]) {
    --uno: 'shadow';
  }
}
</style>
