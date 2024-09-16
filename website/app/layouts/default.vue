<script setup lang="ts">
const { navigation } = storeToRefs(useGlobalContent())

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

const currentDate = new Date()
const showHotCta = computed(
  () =>
    navigation.value?.data.hothref
    && navigation.value?.data.hottext
    && (navigation.value?.data.hotsince ? new Date(navigation.value?.data.hotsince) <= currentDate : true)
    && (navigation.value?.data.hotuntil ? new Date(navigation.value?.data.hotuntil) >= currentDate : true),
)
// TODO: how to do this?
const ctaHref = computed(() => {
  // @ts-expect-error types are not correct
  if (navigation.value?.data.hothref.type === 'blog_page')
  // @ts-expect-error types are not correct
    return `blog/${navigation.value?.data.hothref.uid}`
  // @ts-expect-error types are not correct
  return navigation.value?.data.hothref.uid
})
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <header
    v-if="navigation"
    fixed top-16 z-50 mx-16 mb-32 mt-0 flex items-center justify-between gap-x-12 rounded-8 bg-white p-16 opacity-100 shadow-xl transition-all duration-250 will-change-opacity
    class="w-[calc(100%-32px)]"
    :class="{ '!opacity-0 pointer-events-none': !isHeaderVisible, '!shadow-none !bg-transparent': arrivedState.top && isHeaderVisible }"
  >
    <NuxtLink to="/">
      <div
        class="i-nimiq:logos-nimiq-horizontal"
        text-24 transition-opacity duration-400 hocus:opacity-70
        :class="{ 'i-nimiq:logos-nimiq-white-horizontal': arrivedState.top }"
      />
    </NuxtLink>
    <div mr-auto>
      <NuxtLink
        v-if="showHotCta"
        :to="ctaHref"
        class="grid grid-cols-[auto_1fr] items-center gap-x-8 rounded-full bg-neutral-200 px-12 py-4 text-14 font-bold transition-colors md:mx-20 hocus:bg-neutral-400 md:px-16 md:text-16"
        :class="{ 'bg-neutral/60 text-neutral-100 hocus:bg-neutral/70': arrivedState.top }"
      >
        <div class="i-nimiq:flame" />
        <span class="truncate max-md:pt-1">{{ navigation.data.hottext }}</span>
      </NuxtLink>
    </div>

    <HeaderNavigation :navigation="navigation.data" :is-trigger-color-inverted="arrivedState.top" class="hidden md:flex" />
    <MobileMenu :navigation="navigation.data" :is-trigger-color-inverted="arrivedState.top" class="block md:hidden" />
  </header>

  <slot />

  <footer v-if="navigation">
    <FooterNavigation :navigation="navigation.data" />
  </footer>
</template>
