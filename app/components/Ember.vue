<script lang="ts" setup>
const delay = Math.floor(Math.random() * 6000)
</script>

<template>
  <div :style="`--delay: ${delay}ms`" i-nimiq:logos-shiny-nim absolute size-28 before="absolute rounded-full content-empty size-[150%] top--7 left--7 blur-64 mix-blend-screen" after="content-empty size-[250%] top--21 left--21 blur-12 mix-blend-overlay" />
</template>

<style scoped>
div {
  --animation-play-state: running;
  animation: float 6s ease-in-out infinite;
  animation-play-state: var(--animation-play-state);
  animation-delay: var(--delay, 0);
  transition:
    filter 0.3s ease,
    transform 0.5s ease;

  &:hover {
    --animation-play-state: paused;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.05);
  }
}

@keyframes jump-flip {
  0%,
  100% {
    transform: translateY(0) rotateY(0deg);
  }
  50% {
    transform: translateY(-20px) rotateY(180deg);
  }
  100% {
    transform: translateY(0) rotateY(360deg);
  }
}
</style>
