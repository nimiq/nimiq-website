<script setup lang="ts">
const { darkHeader = false, footerBgColor = 'grey' } = defineProps<{ darkHeader: boolean, footerBgColor: 'white' | 'grey' | 'darkblue' }>()
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <NavigationHeader :dark-header />
  <slot />
  <HexagonsBackground z-1 class="hexagon-bg" :bg-color="footerBgColor" />
  <NavigationFooter :bg-color="footerBgColor" />
</template>

<style scoped>
.hexagon-bg {
  --uno: 'nq-pt-32';
}
</style>
