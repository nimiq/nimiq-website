<template>
  <div flex="~ col" pointer-events-none>
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
    oklch(var(--bg-color) / 0.991) calc(0.117 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.967) calc(0.213 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.929) calc(0.291 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.879) calc(0.353 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.818) calc(0.403 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.748) calc(0.445 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.671) calc(0.482 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.589) calc(0.517 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.503) calc(0.554 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.414) calc(0.596 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.325) calc(0.646 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.238) calc(0.708 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.153) calc(0.786 * var(--gradient-height)),
    oklch(var(--bg-color) / 0.073) calc(0.882 * var(--gradient-height)),
    transparent var(--gradient-height)
  );
}
</style>
