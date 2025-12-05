<script setup lang="ts">
const isVisible = ref(false)
onMounted(() => setTimeout(() => isVisible.value = true, 100))
</script>

<template>
  <div :class="{ visible: isVisible }" class="map">
    <NuxtImg class="base-map" src="/assets/images/home-hero/map.svg" alt="World map" />
  </div>
</template>

<style scoped>
.base-map {
  opacity: 0;
  transition: opacity 0.3s var(--nq-ease);
}

.visible .base-map {
  opacity: 1;
}
</style>
