<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" text-0>
    <path d="M70 22h0a48 48 0 0148 48v0a48 48 0 01-48 48h0a48 48 0 01-48-48v0a48 48 0 0148-48z" fill="none" stroke-width="3" stroke-opacity="0.8" style="--delay:200ms" stroke="green inverted:white" op-0 class="ripple" />
    <path d="M70 12h0a58 58 0 0158 58h0a58 58 0 01-58 58h0a58 58 0 01-58-58h0a58 58 0 0158-58z" fill="none" stroke-width="3" stroke-opacity="0.6" style="--delay:400ms" stroke="green inverted:white" op-0 class="ripple" />
    <radialGradient id="a" cx="70" cy="70" r="70" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#41a38e" />
      <stop offset="1" stop-color="#21bca5" />
    </radialGradient>

    <path d="M70 2.25h0A67.75 67.75 0 01137.75 70v0A67.75 67.75 0 0170 137.75h0A67.75 67.75 0 012.25 70v0A67.75 67.75 0 0170 2.25z" fill="none" stroke="[url(#a)] inverted:neutral-0" style="--delay:600ms" stroke-width="3" stroke-opacity="0.4" class="ripple" animate-delay-600 op-0 />
    <radialGradient id="b" cx="-791" cy="458" r="1" gradientTransform="matrix(-83 0 0 83.5341 -66014 -38208)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#41a38e" />
      <stop offset="1" stop-color="#21bca5" />
    </radialGradient>
    <path d="M70 28.23a41.76 41.76 0 110 83.52 41.76 41.76 0 110-83.52z" fill="url(#b)" inverted:fill-neutral-0 />
    <path d="M70.71 69.1v21.56m18.71-26.11c0 12.4-6.31 18.89-18.71 18.89 0-17.56 5.28-18.89 18.71-18.89zM54.18 53.98c0 13.33 4.13 20.07 16.53 20.07 0-13.43-1.03-20.07-16.53-20.07z" fill="none" stroke="inverted:!green neutral-0" stroke-width="4.0316" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<style scoped>
svg {
  .ripple {
    animation: fastwave 1s ease alternate infinite;
    animation-delay: var(--delay);
  }
}

@keyframes fastwave {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.15;
  }
  100% {
    opacity: 0;
  }
}
</style>
