<script setup lang="ts">
const link = 'https://nimiq.fm'
</script>

<template>
  <div role="banner" aria-label="Announcement" w-full relative z-2 of-hidden flex="~ items-center justify-end" p="y-12 x-16 md:y-16 md:x-32" border="b-2 neutral-0/20 ~" style="background-color: #030719;">
    <!-- Background image on left -->
    <img src="/img/nimiq-fm-bg.png" alt="" op-80 h="150%" max-w-70vw w-auto pointer-events-none select-none left-0 top="50%" translate-y="-50%" absolute object-cover object-right aria-hidden="true">

    <!-- Content right -->
    <div flex="~ items-center gap-x-12 md:gap-x-16" z-1>
      <p text-white font-semibold f-text-sm max-sm:hidden>
        Listen to the Nimiq blockchain
      </p>
      <NuxtLink :to="link" external flex="~ items-center gap-x-8" bg="neutral-0/15 hocus:neutral-0/25" text-neutral-0 rounded-full p="x-16 y-8" transition-colors>
        <span f-text-sm>Tune in at</span>
        <img src="/img/nimiq-fm-logo.svg" alt="Nimiq FM" h-14>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
main {
  --uno: 'mt--104';
}
</style>
