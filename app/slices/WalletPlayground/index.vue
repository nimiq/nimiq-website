<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { breakpointsTailwind } from '@vueuse/core'

defineProps(getSliceComponentProps<Content.WalletPlaygroundSlice>())

const { isMobileOrTablet } = useDevice()
const { smaller } = useBreakpoints(breakpointsTailwind)
const isMobile = computed(() => isMobileOrTablet || smaller('md').value)
</script>

<template>
  <section md:nq-pb-32 md:nq-pt-96 relative of-x-clip children:max-w-none>
    <AnimatedCloudyBg pointer-events-none h="[calc(100%+400px)]" top--400 max-w-screen />
    <WalletPlaygroundMobile v-if="isMobile" />
    <WalletPlaygroundDesktop v-else z-1 w-full />
  </section>
</template>

<style scoped>
/* We change the background of the hero */
:global(main > section[data-slice-type='hero_section']) {
  --uno: 'bg-darkerblue-to-purple';
}
</style>
