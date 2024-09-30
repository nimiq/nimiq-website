<script setup lang="ts">
import type { NodeHexagon } from './NetworkMap'
import { computed, onMounted, ref } from 'vue'
import NetworkMap, { HEIGHT, WIDTH } from './NetworkMap'

const container = ref<HTMLDivElement>()
const network = ref<HTMLCanvasElement>()
const nodes = ref<NodeHexagon[]>([])
const overlay = ref<HTMLCanvasElement>()
const networkMap = ref<NetworkMap>()

const { height: containerHeight, width: containerWidth } = useElementSize(container)
const isWidthConstrained = computed(() => containerHeight.value * (WIDTH / HEIGHT) > containerWidth.value)
const width = computed(() => Math.round(isWidthConstrained.value ? containerWidth.value / 2 : containerHeight.value * (WIDTH / HEIGHT) / 2) * 2)
const height = computed(() => Math.round(isWidthConstrained.value ? containerWidth.value / (WIDTH / HEIGHT) / 2 : containerHeight.value / 2) * 2)
// const scale = computed(() => isWidthConstrained.value ? (SCALING_FACTOR * width.value) / (2 * WIDTH) : (SCALING_FACTOR * height.value) / (2 * HEIGHT))

onMounted(() => {
  networkMap.value = new NetworkMap(network.value!, overlay.value!, n => nodes.value = n, [255, 255, 255])
})
</script>

<template>
  <div ref="container" relative mx-auto h-95vh w="[calc(95vh*(1082/502))] sm:full" of-hidden lg:max-w-screen :style="`height: ${height}px`" grid="~ place-content-center">
    <canvas ref="network" pointer-events-none :style="`width: ${width}px; height: ${height}px;`" />
    <!-- <canvas
      ref="overlay"
      class="absolute-center pointer-events-none"
      :style="`width: ${width}px; height: ${height}px;`"
    /> -->
  </div>
</template>
