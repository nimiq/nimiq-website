<script setup lang="ts" generic="T extends [number, number]">
import { VisArea, VisAxis, VisCrosshair, VisLine, VisTooltip, VisXYContainer } from '@unovis/vue'
import { createApp } from 'vue'

const { data: _data } = defineProps<{ data?: T[] }>()
const slots = defineSlots<{ default?: (props: { data: T }) => any }>()

const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

const x = (d: T) => d[0]
const y = (d: T) => d[1]

const tickFormat = (d: number) => dateFormatter.format(new Date(d))

function tooltip(v: T) {
  if (!slots.default)
    return ''
  const TooltipContent = { setup: () => () => slots.default?.({ data: v }) }
  const div = document.createElement('div')
  createApp(TooltipContent).mount(div)
  return div.innerHTML
}
</script>

<template>
  <VisXYContainer :data :padding="{ top: 128 }">
    <VisArea color="url('/assets/vertical-stripes.svg#vertical-stripes')" :x :y />
    <VisLine :x :y color="var(--colors-green)" />
    <VisTooltip :vertical-shift="1000" />
    <VisAxis type="x" :grid-line="false" :tick-format />
    <VisCrosshair data-crosshair color="var(--colors-blue)" :template="tooltip" />
  </VisXYContainer>
</template>

<style scoped>
[data-vis-xy-container] {
  background:
    repeating-linear-gradient(
      0deg,
      var(--colors-neutral-300) 0,
      var(--colors-neutral-300) 1.5px,
      transparent 1.5px,
      transparent 64px
    ),
    linear-gradient(0deg, var(--colors-neutral-0), var(--colors-neutral-0));
  background-size:
    100% 64px,
    100% 100%;
  background-position: 0 -20px;

  --vis-crosshair-line-stroke-color: var(--colors-blue);
  --vis-crosshair-line-stroke-width: 1.5px;
  --vis-crosshair-circle-stroke-color: var(--colors-blue);

  --vis-tooltip-padding: 0;
  --vis-tooltip-background-color: transparent;
  --vis-tooltip-border-color: transparent;

  --vis-axis-font-family: var(--nq-font-family);
  --vis-axis-tick-color: var(--colors-neutral-500);
  --vis-axis-domain-color: var(--colors-neutral-500);
  --vis-axis-tick-label-color: var(--colors-neutral-700);
  --vis-axis-tick-label-font-size: 11px;

  @screen md {
    --vis-axis-tick-label-font-size: 12px;
  }
}
</style>
