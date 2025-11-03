<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.AppGallerySlice>())
</script>

<template>
  <ContentAppGalleryCta :slice="slice as any" />
</template>
