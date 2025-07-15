<template>
  <div max-w-none inset-0 absolute z-2 of-hidden>
    <div inset-0 absolute class="bg-gradient" />
    <div i-custom:buy-and-sell-bg h-auto w="140vw md:110vw" aspect-1.2620087336 bottom="64 md:-256" left="-64 md:0" absolute />
  </div>
  <div z-3 v-bind="$attrs">
    <slot />
  </div>
</template>

<style scoped>
:global(:root) {
  --orange: #ec991c;
}
.bg-gradient {
  background: linear-gradient(
    to bottom in oklab,
    rgb(var(--nq-neutral-0) / 1) 0,
    var(--colors-neutral-0) 35%,
    color-mix(in oklch, var(--colors-neutral-0), var(--orange) 25%) 50%,
    var(--orange) 75%,
    color-mix(in oklch, var(--colors-neutral-0) 65%, var(--orange)) 90%,
    rgb(var(--nq-neutral-0) / 1) 100%
  );
}
</style>
