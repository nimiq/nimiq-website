<script setup lang="ts">
import type { ImageField, LinkField } from '@prismicio/client'

defineProps<{ items: ({ color?: string, icon: ImageField | string, link: LinkField, classes: string, name: string })[] }>()
</script>

<template>
  <PrismicLink v-for="({ classes, color, icon, link, name }, i) in items" :key="i" :aria-label="name" flex="~ items-center justify-center" :field="link" tabindex="-1" :style="{ backgroundColor: color }" :class="[classes]" pointer-cursor absolute size-104 rounded-full text-white>
    <div v-if="typeof icon === 'string'" :class="icon" pointer-events-none />
    <PrismicImage v-else :field="icon" pointer-events-none />
    <div :style="{ borderColor: color }" top="50%" left="50%" border="2 solid" translate-x="-50%" translate-y="-50%" pointer-events-none absolute size-full scale-100 rounded-full op-0 />
  </PrismicLink>
  <div class="curtain" pointer-events-none absolute inset-0 />
</template>

<style scoped>
.curtain {
  background: linear-gradient(180deg, rgb(var(--nq-neutral-0) / 0.1) 50%, rgb(var(--nq-neutral-0) / 0.5) 100%);
  box-shadow: inset 0px 0px 101.171px rgba(var(--nq-neutral-0) / 0.75);
}

a:hover div:last-child {
  animation: radar-pulse 1.2s ease-out infinite;
}

@keyframes radar-pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.95);
    border-width: 2px;
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    border-width: 0;
    opacity: 0;
  }
}
</style>
