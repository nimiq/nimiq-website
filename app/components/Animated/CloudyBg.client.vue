<template>
  <div relative z-2 size-full>
    <div size-full of-x-hidden of-y-visible>
      <div class="cloud-parallax" i-custom:cloud absolute left--32 top--100 hidden h-64 w-120 scale-x--100 md:block style="--to:300px;" />
      <div class="cloud-parallax" i-custom:cloud absolute right--33 top--180 h-46 w-90 scale-x--100 of-hidden style="--to: 220px" />
      <div i-custom:cloud absolute right-25vw top-200 h-32 w-60 class="cloud-parallax" style="--to: 100px" />
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
