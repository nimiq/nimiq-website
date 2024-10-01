<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

defineProps<{ darkHeader?: boolean }>()

const { navigation, hotCtaLink } = storeToRefs(useGlobalContent())

const { smaller } = useBreakpoints(breakpointsTailwind)
const showMobileMenu = smaller('lg')

const { y } = useScroll(window)

const scrolled = computed(() => y.value > 0)
const direction = ref<'top' | 'bottom'>()
watch(y, (newY, oldY) => {
  if (Math.abs(newY - oldY) < 10)
    return
  direction.value = newY < oldY ? 'top' : 'bottom'
})
const transition = computed(() => {
  if (y.value === 0 && direction.value === 'top')
    return 'shadow 100ms ease-out 400ms, opacity 400ms var(--nq-ease), background-color 300ms var(--nq-ease)'
  if (direction.value === 'bottom') // We just add a delay to the background-color transition to avoid flashing
    return 'shadow 100ms ease-out, opacity 400ms var(--nq-ease), background-color 300ms var(--nq-ease) 150ms'
  return 'shadow 100ms ease-out, opacity 400ms var(--nq-ease), background-color 300ms var(--nq-ease)'
})
</script>

<template>
  <header
    v-if="navigation"
    flex="~ items-center justify-between gap-x-20" fixed sticky inset-x-16 top-16 z-100 mx-16 mb-32 mt-16 rounded-8 p-16
    :class="{
      'bg-white shadow-xl': scrolled && direction === 'top',
      'op-100': scrolled && direction === 'top',
      'op-0 pointer-events-none': scrolled && direction === 'bottom',
      'dark': !scrolled && darkHeader,
    }"
    :style="{ transition }"
    :data-scrolled="!scrolled ? '' : undefined"
  >
    <NuxtLink to="/">
      <div i-nimiq:logos-nimiq-horizontal class="dark:i-nimiq:logos-nimiq-white-horizontal" text-24 />
    </NuxtLink>
    <NuxtLink v-if="hotCtaLink" :to="hotCtaLink" bg="neutral/15 hocus:neutral/20" :class="{ 'children:delay-200': direction === 'bottom' }" mr-auto gap-x-9 truncate text-neutral nq-pill children:transition-colors external>
      <div i-nimiq:flame />
      <span truncate text-neutral>{{ navigation.hottext }}</span>
    </NuxtLink>

    <NavigationMobile v-if="showMobileMenu" />
    <NavigationDesktop v-else />
  </header>
</template>
