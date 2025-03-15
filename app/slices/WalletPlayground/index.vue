<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { breakpointsTailwind } from '@vueuse/core'

defineProps(getSliceComponentProps<Content.WalletPlaygroundSlice>())

const { isMobileOrTablet } = useDevice()
const { smaller } = useBreakpoints(breakpointsTailwind)
const isMobile = computed(() => isMobileOrTablet || smaller('md').value)
</script>

<template>
  <section relative of-x-clip md:f-pt-md children:max-w-none>
    <AnimatedCloudyBg h="[calc(100%+400px)]" max-w-screen pointer-events-none top--400 />
    <WalletPlaygroundMobile v-if="isMobile" />
    <WalletPlaygroundDesktop v-else w-full z-1 />
  </section>
</template>

<style scoped>
/* We change the background of the hero */
:global(main > section[data-slice-type='hero_section']) {
  --uno: 'bg-darkerblue-to-purple';
}
</style>
