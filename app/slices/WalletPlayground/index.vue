<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.WalletPlaygroundSlice>())

const isMobile = useMediaQuery('(max-width: 768px)', { ssrWidth: 768 })

const playgroundUrl = getUrl(slice.primary.playgroundUrl)
// eslint-disable-next-line no-console
console.log('WalletPlayground slice: extracted playground URL:', playgroundUrl)
if (!playgroundUrl)
  throw new Error('Playground URL is required in WalletPlayground slice')
</script>

<template>
  <section data-slice-type="wallet-playground" bg-darkerblue scheme-dark relative of-x-clip md:f-pt-3xl children:max-w-none>
    <AnimatedCloudyBg h="[calc(100%+400px)]" max-w-screen pointer-events-none top--400 />
    <WalletPlaygroundMobile v-if="isMobile" key="mobile" :playground-url />
    <WalletPlaygroundDesktop v-else key="desktop" w-full z-1 :playground-url />
  </section>
</template>

<style>
main > section[data-slice-type='hero_section']:has(+ [data-slice-type='wallet-playground']) {
  background-image: linear-gradient(to bottom, rgba(var(--nq-darkerblue)), #3d4383);

  p {
    color: rgb(var(--nq-white) / 0.7);
  }
}

@media (max-width: 48rem) {
  main > [data-slice-type='wallet-playground'] {
    background-image: linear-gradient(to bottom in oklab, #3d4381, rgb(var(--nq-darkerblue) / 0.8));
  }
}
</style>
