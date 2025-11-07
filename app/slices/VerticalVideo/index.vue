<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.VerticalVideoSlice>())
</script>

<template>
  <ContentVerticalVideo :slice="slice as any" />
</template>
