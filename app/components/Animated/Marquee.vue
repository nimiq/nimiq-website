<script setup lang="ts">
defineProps<{ duration: string }>()
</script>

<template>
  <div flex of-hidden whitespace-nowrap>
    <div class="marquee" inline-flex :style="`--duration: ${duration};`">
      <slot />
      <slot /> <!-- Duplicate slot for seamless animation -->
    </div>
  </div>
</template>

<style scoped>
.marquee {
  animation: marquee var(--duration) linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50%);
  }
}
</style>
