<script setup lang="ts">
interface LatestBlogpostSlice {
  primary: Record<string, never>
}

defineProps<{ slice: LatestBlogpostSlice, slices?: any[] }>()
</script>

<template>
  <!-- TODO Remove this component once new layout is done -->
  <div sr-only />
</template>
