<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.PrestakingGridSlice>())
</script>

<template>
  <ContentPrestakingGrid :slice="slice as any" />
</template>

<style scoped>
.glass {
  background: radial-gradient(83.64% 49.88% at 50% 0, #ffffff1a 0, #fff0 50%), #ffffff0d;
  background-blend-mode: normal, color-dodge, normal;
}
</style>
