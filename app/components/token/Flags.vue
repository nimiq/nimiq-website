<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const { flags } = defineProps<{ flags: string }>()

const { smaller } = useBreakpoints(breakpointsTailwind)
const isMobile = computed(() => smaller('md'))
const duration = computed(() => isMobile.value ? '60s' : '40s')
</script>

<template>
  <div

    mx-0 px-0 bg-neutral-0 max-w-full max-w-screen of-x-hidden h="64 md:80" bg="repeat-x" class="flags-marquee"
    :style="{ 'backgroundImage': `url(${flags})`, 'backgroundSize': 'auto 100%', '--duration': duration }"
  />
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
