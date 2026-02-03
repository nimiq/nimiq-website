<template>
  <div class="flex items-center justify-center gap-x-2 border-b-1 border-neutral-0/15 py-2 w-full relative z-2 backdrop-blur-4 px-4 md:px-6" role="banner" aria-label="Announcement" style="background-color: rgba(3, 7, 25, 0.92);">
    <NuxtLink class="text-xs md:text-sm nq-arrow text-center text-neutral-0/90" to="https://nimiq.fm" external target="_blank">
      Tune in to the soundtrack of the Nimiq Blockchain<br class="md:hidden"> at <img class="mx-1 h-4 inline-block -translate-y-0.5 align-middle" src="/img/nimiq-fm-logo.svg" alt="Nimiq FM">
    </NuxtLink>
  </div>
</template>

<style>
main {
  margin-top: -108px;
}
@media (min-width: 768px) {
  main {
    margin-top: -114px;
  }
}
</style>
