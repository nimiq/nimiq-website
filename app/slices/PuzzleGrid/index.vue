<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.PuzzleGridSlice>())
</script>

<template>
  <ContentPuzzleGrid :slice="slice as any" />
</template>
