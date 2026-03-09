<script setup lang="ts">
defineProps<{ playgroundUrl: string }>()

const isMobile = useMediaQuery('(max-width: 768px)', { ssrWidth: 1024 })
</script>

<template>
  <div class="w-full max-w-[var(--nq-max-width)] mx-auto">
    <ShowcaseWalletMobile v-if="isMobile" key="mobile" :playground-url="playgroundUrl" />
    <ShowcaseWalletDesktop v-else key="desktop" class="w-full z-1" :playground-url="playgroundUrl" />
  </div>
</template>
