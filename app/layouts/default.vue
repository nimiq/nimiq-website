<script setup lang="ts">
const { navigation, hotCtaLink } = storeToRefs(useGlobalContent())

const { arrivedState, directions } = useScroll(window)
const isHeaderVisible = ref(true)
watch([arrivedState, directions], () => {
  if (directions.bottom)
    isHeaderVisible.value = false
  if (arrivedState.top)
    isHeaderVisible.value = true
  if (directions.top)
    isHeaderVisible.value = true
})
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <!-- TODO Improve the header with custom selectors -->
  <header
    v-if="navigation"
    fixed top-16 z-50 mx-16 mb-32 mt-0 flex items-center justify-between gap-x-12 rounded-8 bg-white p-16 opacity-100 shadow-xl transition-all duration-250 will-change-opacity
    class="w-[calc(100%-32px)]"
    :class="{ '!opacity-0 pointer-events-none': !isHeaderVisible, '!shadow-none !bg-transparent': arrivedState.top && isHeaderVisible }"
  >
    <NuxtLink to="/">
      <div i-nimiq:logos-nimiq-horizontal h-24 />
    </NuxtLink>
    <div mr-auto>
      <NuxtLink v-if="hotCtaLink" :to="hotCtaLink" nq-pill-secondary>
        <div i-nimiq:flame />
        <span truncate>{{ navigation.hottext }}</span>
      </NuxtLink>
    </div>

    <HeaderNavigation :is-trigger-color-inverted="arrivedState.top" class="hidden md:flex" />
    <MobileMenu :is-trigger-color-inverted="arrivedState.top" class="block md:hidden" />
  </header>

  <slot />
  <HexagonsBackground />

  <FooterNavigation />
</template>
