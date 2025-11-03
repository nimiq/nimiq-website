<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.ZigZagContentSlice>())
</script>

<template>
  <ContentZigZagContent :slice="slice as any" />
</template>
