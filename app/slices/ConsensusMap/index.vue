<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.ConsensusMapSlice>())
</script>

<template>
  <ContentConsensusMap :slice="slice as any" />
</template>

<style scoped>
section :deep(h2 + p) {
  --uno: 'xl:max-w-40ch';
}
</style>
