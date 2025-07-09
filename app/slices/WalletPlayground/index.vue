<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { breakpointsTailwind } from '@vueuse/core'

const { slice } = defineProps(getSliceComponentProps<Content.WalletPlaygroundSlice>())

const { isMobileOrTablet } = useDevice()
const { smaller } = useBreakpoints(breakpointsTailwind)
const isMobile = computed(() => isMobileOrTablet || smaller('md').value)

const playgroundUrl = getUrl(slice.primary.playgroundUrl)
// eslint-disable-next-line no-console
console.log('WalletPlayground slice: extracted playground URL:', playgroundUrl)
if (!playgroundUrl)
  throw new Error('Playground URL is required in WalletPlayground slice')
</script>

<template>
  <section data-slice-type="wallet-playground" bg-darkerblue scheme-dark relative of-x-clip md:f-pt-3xl children:max-w-none>
    <AnimatedCloudyBg h="[calc(100%+400px)]" max-w-screen pointer-events-none top--400 />
    <WalletPlaygroundMobile v-if="isMobile" :playground-url="playgroundUrl" />
    <WalletPlaygroundDesktop v-else w-full z-1 :playground-url="playgroundUrl" />
  </section>
</template>

<style>
main > section[data-slice-type='hero_section']:has(+ [data-slice-type='wallet-playground']) {
  background-image: linear-gradient(to bottom, rgba(var(--nq-darkerblue)), #3d4383);

  p {
    color: rgb(var(--nq-white) / 0.7);
  }
}
</style>
