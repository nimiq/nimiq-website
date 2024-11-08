<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.WalletPlaygroundSlice>())
</script>

<template>
  <section relative of-hidden nq-pb-32 nq-pt-96>
    <div grid="~ rows-[1fr_0.8fr]" pointer-events-none absolute inset-0 max-w-none>
      <div bg-purple-to-blue />
      <div bg-blue-to-darkerblue />
      <!-- <div bg-neutral-0 /> -->
    </div>
    <WalletPlayground z-1 />
  </section>
</template>

<style scoped>
/* We change the background of the hero */
:global(main > section[data-slice-type='hero_section']) {
  --uno: 'bg-darkerblue-to-purple';
}
</style>
