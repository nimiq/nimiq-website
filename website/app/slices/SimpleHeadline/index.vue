<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>(['slice', 'index', 'slices', 'context']))
</script>

<template>
  {{ slice }}
  TODO
</template>
