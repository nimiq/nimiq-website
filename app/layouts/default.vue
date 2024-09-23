<script setup lang="ts">
defineProps<{ darkHeader: boolean }>()
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <NavigationHeader :dark-header />
  <slot />
  <HexagonsBackground z-1 mb="-130 lg:-180" mt--200 />
  <NavigationFooter />
</template>
