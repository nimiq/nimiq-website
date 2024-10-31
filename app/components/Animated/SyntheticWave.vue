<template>
  <div flex="~ col" pointer-events-none size-full>
    <div class="grid-container" flex="~ basis-200" relative perspective-1200 bg-inherit before="absolute inset-0" />
    <div absolute inset-0 class="retro-overlay" />
  </div>
</template>

<style scoped>
.grid-container:before {
  --uno: 'content-empty absolute inset-0';
  --uno: 'rotate-x-50 scale-173 translate-z--200';
  background: linear-gradient(to right, rgb(var(--grid-color, var(--nq-blue)) / 1) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--grid-color, var(--nq-blue)) / 1) 1px, transparent 1px);
  background-size:
    2.5rem 10rem,
    10rem 0.75rem;
  animation: grid 16s linear infinite;
  filter: drop-shadow(0 0 2px rgb(var(--grid-color, var(--nq-blue)) / 1));
}

@keyframes grid {
  from {
    background-position-y: -14rem;
  }
  to {
    background-position-y: 0%;
  }
}

.retro-overlay {
  --bg-color: 25.41% 0.0676 286.74;
  --gradient-height: 128px;
  background: linear-gradient(
    180deg,
    oklch(var(--bg-color)) 0px,
    oklch(var(--bg-color) / 0.991615) calc(0.1179 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.967585) calc(0.2138 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.9296) calc(0.2912 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.879348) calc(0.3534 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.818519) calc(0.4037 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.7488) calc(0.4456 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.671881) calc(0.4824 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.589452) calc(0.5176 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.5032) calc(0.5544 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.414815) calc(0.5963 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.325985) calc(0.6466 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.2384) calc(0.7088 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.153748) calc(0.7862 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.0737185) calc(0.8821 * var(--gradient-height)),
    transparent var(--gradient-height)
  );
}
</style>
