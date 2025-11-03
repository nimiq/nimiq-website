<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.CardsCarouselSlice>())
</script>

<template>
  <ContentCardsCarousel :slice="slice as any" />
</template>
