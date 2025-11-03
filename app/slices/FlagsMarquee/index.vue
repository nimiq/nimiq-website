<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.FlagsMarqueeSlice>())
</script>

<template>
  <ContentFlagsMarquee :slice="slice as any" />
</template>
