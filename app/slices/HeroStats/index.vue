<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.HeroStatsSlice>())
</script>

<template>
  <ContentHeroStats :slice="slice as any" />
</template>
