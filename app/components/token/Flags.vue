<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const { flags } = defineProps<{ flags: string }>()

const { smaller } = useBreakpoints(breakpointsTailwind)
const isMobile = computed(() => smaller('md'))
const duration = computed(() => isMobile.value ? '60s' : '40s')
</script>

<template>
  <div class="flags-marquee mx-0 px-0 bg-neutral-0 w-full overflow-x-hidden h-16 md:h-20" :style="{ 'backgroundImage': `url(${flags})`, 'backgroundSize': 'auto 100%', 'backgroundRepeat': 'repeat-x', '--duration': duration }" />
</template>

<style scoped>
.flags-marquee {
  animation: scroll var(--duration, 40s) linear infinite;
}

@keyframes scroll {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .flags-marquee {
    animation: none;
  }
}
</style>
