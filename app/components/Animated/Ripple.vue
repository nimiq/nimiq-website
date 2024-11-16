<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1800 1800" pointer-events-none>
    <circle cx="900" cy="900" r="900" fill-green opacity=".1" class="ripple" style="--i: 5" />
    <circle cx="900" cy="900" r="870" fill-white opacity=".6" class="ripple" style="--i: 4" />
    <circle cx="900" cy="900" r="757" fill-green opacity=".4" class="ripple" style="--i: 3" />
    <circle cx="900" cy="900" r="651" fill-white opacity=".4" class="ripple" style="--i: 2" />
    <circle cx="900" cy="900" r="547" fill-green opacity=".2" class="ripple" style="--i: 1" />
    <circle cx="900" cy="900" r="489" fill-white class="ripple" style="--i:0" />
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
  animation: ripple 10s ease-in-out infinite;
  --delay: calc(var(--i) * 0.25s);
  animation-delay: var(--delay);
  transform-origin: center;
}
</style>
