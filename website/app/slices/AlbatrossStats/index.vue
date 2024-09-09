<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.AlbatrossStatsSlice>())
</script>

<template>
  {{ slice.primary.avg_rewards_label }}
</template>
