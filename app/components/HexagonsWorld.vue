<script setup lang="ts">
import { useHexagonsWorldMap } from '~/composables/useHexagonsWorldMap'

defineProps<{ bgColor: 'grey' | 'white' | 'darkblue' }>()

const container = ref<HTMLDivElement>()
const { canvas } = useHexagonsWorldMap(container, { scrollable: false })
</script>

<template>
  <div ref="container" grid="~ items-center justify-center" relative mx-auto h-700 w-full>
    <canvas ref="canvas" pointer-events-none />
  </div>
</template>
