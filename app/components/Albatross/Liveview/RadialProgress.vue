<script setup lang="ts">
const props = defineProps<{
  progress: number
  radius: number
  strokeWidth: number
  innerStrokeWidth: number
  innerStroke: string
  stroke: string
}>()

const normalizedRadius = computed(() => props.radius - props.strokeWidth * 2)
const circumference = computed(() => normalizedRadius.value * 2 * Math.PI)
const ringStyle = computed(() => `stroke-dashoffset: ${circumference.value - props.progress * circumference.value}`)
</script>

<template>
  <div relative>
    <svg block rotate--90 :width="radius * 2" :height="radius * 2" fill="none">
      <circle
        style="transition: stroke-dashoffset 0.6s var(--nq-ease)"
        :style="{ 'stroke-width': innerStrokeWidth }" :stroke="innerStroke" :cx="radius" :cy="radius"
        :r="normalizedRadius"
      />
      <circle
        class="stroke" :stroke="stroke" :stroke-width="strokeWidth"
        :stroke-dasharray="`${circumference} ${circumference}`" :style="ringStyle" :cx="radius" :cy="radius"
        :r="normalizedRadius"
      />
    </svg>

    <div absolute left-0 top-0 size-full flex items-center justify-center text-16 font-bold>
      <span v-if="progress < 1">
        {{ Math.round(100 * progress) }}%
      </span>
      <div v-else i-nimiq:check-thin text-24 />
    </div>
  </div>
</template>
