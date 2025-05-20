<template>
  <div size-full relative z-2>
    <div size-full of-x-hidden of-y-visible>
      <div class="cloud-parallax" i-custom:cloud h-64 w-120 hidden scale-x--100 left--32 top--100 absolute md:block style="--to:300px;" />
      <div class="cloud-parallax" i-custom:cloud h-46 w-90 scale-x--100 right--33 top--180 absolute of-hidden style="--to: 220px" />
      <div i-custom:cloud h-32 w-60 right-25vw top-200 absolute class="cloud-parallax" style="--to: 100px" />
    </div>
  </div>
</template>

<style scoped>
.cloud-parallax {
  animation: moveUp linear forwards;
  animation-timeline: view(y);
}

@keyframes moveUp {
  from {
    translate: 0 var(--from);
  }
  to {
    translate: 0 var(--to);
  }
}
</style>
