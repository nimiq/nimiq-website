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
    <VisArea color="url('assets/vertical-stripes.svg#vertical-stripes')" :x :y />
    <VisLine :x :y color="rgb(var(--nq-green))" />
    <VisTooltip :vertical-shift="1000" />
    <VisAxis type="x" :grid-line="false" :tick-format />
    <VisCrosshair data-crosshair color="rgb(var(--nq-blue))" :template="tooltip" />
  </VisXYContainer>
</template>

<style scoped>
[data-vis-xy-container] {
  background:
    repeating-linear-gradient(
      0deg,
      rgb(var(--nq-neutral-300) / 1) 0,
      rgb(var(--nq-neutral-300) / 1) 1.5px,
      transparent 1.5px,
      transparent 64px
    ),
    linear-gradient(0deg, rgb(var(--nq-neutral-0) / 1), rgb(var(--nq-neutral-0) / 1));
  background-size:
    100% 64px,
    100% 100%;
  /* avoid 20 px in the bottom for background */
  background-position: 0 -20px;

  --vis-crosshair-line-stroke-color: rgb(var(--nq-blue) / 1);
  --vis-crosshair-line-stroke-width: 1.5px;
  --vis-crosshair-circle-stroke-color: rgb(var(--nq-blue) / 1);

  --vis-tooltip-padding: 0;
  --vis-tooltip-background-color: transparent;
  --vis-tooltip-border-color: transparent;

  --vis-axis-font-family: var(--nq-font-family);
  --vis-axis-tick-color: rgb(var(--nq-neutral-500) / 1);
  --vis-axis-domain-color: rgb(var(--nq-neutral-500) / 1);
  --vis-axis-tick-label-color: rgb(var(--nq-neutral-700) / 1);
  --vis-axis-tick-label-font-size: 11px;

  @screen md {
    --vis-axis-tick-label-font-size: 12px;
  }
}
</style>
