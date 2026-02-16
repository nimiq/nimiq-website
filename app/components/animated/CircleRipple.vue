<script setup lang="ts">
const circleRippleElement = ref<HTMLElement | null>(null)
const isComponentVisible = ref(false)

useIntersectionObserver(
  circleRippleElement,
  ([entry]) => {
    isComponentVisible.value = entry?.isIntersecting || false
  },
  { threshold: 0.1, rootMargin: '50px' },
)
</script>

<template>
  <svg ref="circleRippleElement" class="pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1800 1800">
    <circle class="ripple" cx="900" cy="900" r="900" :class="[{ 'ripple-active': isComponentVisible }]" style="--i: 5; fill: rgb(33, 188, 165); opacity: 0.1" />
    <circle class="ripple" cx="900" cy="900" r="757" :class="[{ 'ripple-active': isComponentVisible }]" style="--i: 3; fill: rgb(33, 188, 165); opacity: 0.4" />
    <circle class="ripple" cx="900" cy="900" r="651" :class="[{ 'ripple-active': isComponentVisible }]" style="--i: 2; fill: rgb(255, 255, 255); opacity: 0.4" />
    <circle class="ripple" cx="900" cy="900" r="547" :class="[{ 'ripple-active': isComponentVisible }]" style="--i: 1; fill: rgb(33, 188, 165); opacity: 0.2" />
    <circle class="ripple" cx="900" cy="900" r="489" :class="[{ 'ripple-active': isComponentVisible }]" style="--i:0; fill: rgb(255, 255, 255)" />
  </svg>
</template>

<style scoped>
@keyframes ripple {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.ripple {
  --delay: calc(var(--i) * 0.25s);
  transform-origin: center;
  animation: ripple 10s ease-in-out infinite;
  animation-delay: var(--delay);
  animation-play-state: paused;
  transition: opacity 300ms ease-out;
}

.ripple-active {
  animation-play-state: running;
}

@media (prefers-reduced-motion: reduce) {
  .ripple {
    animation: none !important;
    animation-play-state: paused !important;
  }
  .ripple-active {
    opacity: 0.8;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .ripple-active {
    transition:
      opacity 300ms ease-out,
      transform 300ms ease-out;
  }
}
</style>
