<template>
  <div absolute inset-0 bottom-96 z-2 max-w-none of-hidden var:f-mt:40vh var:f-top:150vh lg:var:f-top:80vh>
    <div absolute h-180vh w-screen class="bg-radial" />
    <div absolute inset-0 w-screen bg-neutral-0 h="$f-mt" />
    <div bg-gradient-fn="from-neutral-0 ease-in to-$orange to-b" top="$f-mt" h="$f-top" absolute w-screen />
    <div absolute bottom-0 h="[calc(100%-var(--f-mt)-var(--f-top))]" w-screen bg-gradient-fn="from-$orange ease-out to-neutral-0 to-b" />
    <div i-custom:buy-and-sell-bg absolute bottom--256 left-0 aspect-1.2620087336 h-auto w-110vw />
  </div>
  <div z-3 v-bind="$attrs">
    <slot />
  </div>
</template>

<style scoped>
:global(:root) {
  --orange: #ec991c;
}
.bg-radial {
  background: radial-gradient(
    101.57% 50% at 50% 50%,
    rgba(236, 153, 28, 0) 0%,
    rgba(236, 153, 28, 0.0737185) 11.79%,
    rgba(236, 153, 28, 0.153748) 21.38%,
    rgba(236, 153, 28, 0.2384) 29.12%,
    rgba(236, 153, 28, 0.325985) 35.34%,
    rgba(236, 153, 28, 0.414815) 40.37%,
    rgba(236, 153, 28, 0.5032) 44.56%,
    rgba(236, 153, 28, 0.589452) 48.24%,
    rgba(236, 153, 28, 0.671881) 51.76%,
    rgba(236, 153, 28, 0.7488) 55.44%,
    rgba(236, 153, 28, 0.818519) 59.63%,
    rgba(236, 153, 28, 0.879348) 64.66%,
    rgba(236, 153, 28, 0.9296) 70.88%,
    rgba(236, 153, 28, 0.967585) 78.62%,
    rgba(236, 153, 28, 0.991615) 88.21%,
    #ec991c 100%
  );
  transform: rotate(-180deg);
}
</style>
