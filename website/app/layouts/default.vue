<script setup lang="ts">
const { navigation } = storeToRefs(useNavigation())

const el = ref<HTMLElement | null>(null)
const { arrivedState, directions } = useScroll(window)
const isHeaderVisible = ref(true)
watch([arrivedState, directions], () => {
  if (arrivedState.top)
    isHeaderVisible.value = true
  if (directions.bottom)
    isHeaderVisible.value = false
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
    will-change-shadow sticky top-16 z-50 mx-16 mb-32 mt-0 flex items-center justify-between rounded-8 bg-white p-16 opacity-100 shadow-xl transition-opacity transition-shadow duration-250 will-change-opacity
    :class="{ '!opacity-0': !isHeaderVisible, '!shadow-none': arrivedState.top }"
  >
    <NuxtLink to="/">
      <div class="i-nimiq:logos-nimiq-horizontal dark:i-nimiq:logos-nimiq-white-horizontal" text-24 transition-opacity duration-400 hocus:opacity-70 />
    </NuxtLink>
    <NuxtLink
      v-if="showHotCta"
      :to="ctaHref"
      mx-16 flex items-center gap-x-8 rounded-full bg-neutral-200 px-12 py-4 text-neutral font-bold transition-colors md:mx-20 hocus:bg-neutral-400 md:px-16
    >
      <div class="i-nimiq:flame aspect-[10/14] text-14 md:text-16" />
      <span truncate text-14 max-md:pt-1 md:text-16>{{ navigation?.data.hottext }}</span>
    </NuxtLink>
    <HeaderNavigation :navigation="navigation?.data" />
  </header>
  <main>
    <!-- <slot /> -->
    <div h-200dvh w-full bg-pink />
  </main>

  <footer />
</template>
