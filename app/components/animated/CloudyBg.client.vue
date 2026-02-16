<template>
  <div class="size-full relative z-2">
    <div class="size-full overflow-x-hidden overflow-y-visible">
      <div class="cloud-parallax cloud-icon hidden md:block h-64 w-[30rem] -scale-x-100 -left-32 -top-[25rem] absolute" style="--to:300px;" />
      <div class="cloud-parallax cloud-icon h-[11.5rem] w-[22.5rem] -scale-x-100 -right-[8.25rem] -top-[45rem] absolute overflow-hidden" style="--to: 220px" />
      <div class="cloud-parallax cloud-icon h-32 w-60 right-[25vw] top-[50rem] absolute" style="--to: 100px" />
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
