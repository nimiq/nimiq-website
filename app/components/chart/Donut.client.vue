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
const tooltipContentCache = new WeakMap<object, HTMLElement>()
const tooltipContentFallbackCache = new Map<string, HTMLElement>()

function template(v: { data: T }) {
  if (!slots.default)
    return ''

  const datum = v.data as unknown
  if (datum && typeof datum === 'object') {
    const cached = tooltipContentCache.get(datum as object)
    if (cached)
      return cached
  }

  const fallbackKey = JSON.stringify(datum)
  if (fallbackKey) {
    const cached = tooltipContentFallbackCache.get(fallbackKey)
    if (cached)
      return cached
  }

  const container = document.createElement('div')
  render(h(slots.default!, v.data), container)
  const tooltipElement = container.firstElementChild as HTMLElement | null
  if (!tooltipElement)
    return ''

  if (datum && typeof datum === 'object') {
    tooltipContentCache.set(datum as object, tooltipElement)
  }
  else if (fallbackKey) {
    tooltipContentFallbackCache.set(fallbackKey, tooltipElement)
  }
  return tooltipElement
}
</script>

<script lang="ts">
export interface DonutDatum { color: string, value: number }
</script>

<template>
  <div class="flex flex-col items-center">
    <VisSingleContainer class="size-[280px] max-w-[280px] relative" :data :height="280" :width="280">
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
    box-shadow:
      0 1px 3px 0 rgb(0 0 0 / 0.1),
      0 1px 2px -1px rgb(0 0 0 / 0.1);
  }
}
</style>
