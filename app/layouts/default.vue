<script setup lang="ts">
defineProps<{ darkHeader: boolean }>()
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <NavigationHeader :dark-header />
  <slot />
  <HexagonsBackground />
  <NavigationFooter />
</template>
