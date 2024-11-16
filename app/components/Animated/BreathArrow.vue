<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 41" w-30 of-visible text-white>
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
      <path d="M2.3 2 17 13 31.8 2" class="breath-arrow" style="--op: 1" />
      <path d="M2.3 15 17 26l14.8-11" class="breath-arrow" style="--op: 0.7; --delay: 0.6s" />
      <path d="M2.3 28 17 39l14.8-11" class="breath-arrow" style="--op: 0.4; --delay: 1.2s" />
    </g>
  </svg>
</template>

<style scoped>
@keyframes breath {
  0% {
    opacity: var(--op);
    transform: translateY(0);
  }
  50% {
    opacity: calc(var(--op) - 0.2);
    transform: translateY(3px);
  }
  100% {
    opacity: var(--op);
    transform: translateY(0);
  }
}

.breath-arrow {
  animation: breath 3s ease-in-out infinite;
  animation-delay: var(--delay, 0);
}
</style>
