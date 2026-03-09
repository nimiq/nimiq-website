<template>
  <div class="size-full relative z-2">
    <div class="size-full overflow-x-hidden overflow-y-visible">
      <div
        class="cloud-parallax cloud-icon hidden md:block h-[64px] w-[120px] -scale-x-100 -left-[32px] -top-[100px] absolute"
        style="--to: 300px"
      />
      <div
        class="cloud-parallax cloud-icon h-[46px] w-[90px] -scale-x-100 -right-[33px] -top-[180px] absolute overflow-hidden"
        style="--to: 220px"
      />
      <div
        class="cloud-parallax cloud-icon h-[32px] w-[60px] right-[25vw] top-[200px] absolute"
        style="--to: 100px"
      />
    </div>
  </div>
</template>

<style scoped>
.cloud-icon {
  background-color: currentColor;
  mask-image: url('/assets/custom-icons/cloud.svg');
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}

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
