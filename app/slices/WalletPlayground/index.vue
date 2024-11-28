<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.WalletPlaygroundSlice>())
</script>

<template>
  <section relative nq-pb-32 nq-pt-96 children:max-w-none>
    <!-- <div grid="~ rows-[1fr_0.8fr]" pointer-events-none absolute inset-0>
      <div bg-purple-to-blue />
      <div bg-blue-to-darkerblue />
    </div> -->
    <AnimatedCloudyBg pointer-events-none h="[calc(100%+400px)]" top--400 max-w-screen />
    <WalletPlayground id="wallet-playground" z-1 w-full />
  </section>
</template>

<style scoped>
/* We change the background of the hero */
:global(main > section[data-slice-type='hero_section']) {
  --uno: 'bg-darkerblue-to-purple';
}
</style>
