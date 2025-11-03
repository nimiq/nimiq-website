<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice, slices, index, context } = defineProps(getSliceComponentProps<Content.HeroSectionSlice>())
</script>

<template>
  <ContentHeroSection :slice="slice as any" :slices="slices as any" :index="index" :context="context" />
</template>
