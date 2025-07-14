<script setup lang="ts">
import { breakpointsTailwind, useScroll } from '@vueuse/core'
import { Motion } from 'motion-v'

defineProps<{ darkHeader?: boolean }>()

const { data: navigation } = await useNavigation()

// Both are needed, one relies on User Agent and the other on the window size
const { isMobileOrTablet } = useDevice()
const { smaller } = useBreakpoints(breakpointsTailwind)
const showMobileMenu = computed(() => isMobileOrTablet || smaller('lg').value)

const { y } = useScroll(window)

const scrolled = computed(() => y.value > 0)
const direction = ref<'top' | 'bottom'>()
watch(y, (newY, oldY) => {
  if (Math.abs(newY - oldY) < 10)
    return
  direction.value = newY < oldY ? 'top' : 'bottom'
})

// Animation targets for motion-v
const animateProps = computed(() => ({
  opacity: scrolled.value && direction.value === 'bottom' ? 0 : 1,
  backgroundColor: scrolled.value && direction.value === 'top' ? 'white' : 'transparent',
  boxShadow: scrolled.value && direction.value === 'top' ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' : '0 0 0 0 transparent',
}))

// Additional styles that need conditional application
const conditionalClasses = computed(() => ({
  'pointer-events-none': scrolled.value && direction.value === 'bottom',
}))

// Transition configuration for motion-v
const transitionProps = computed(() => ({
  default: { type: 'tween', ease: 'easeInOut' } as const,
  opacity: {
    duration: 0.4,
    ease: 'easeInOut' as const,
  },
  backgroundColor: {
    duration: 0.3,
    ease: 'easeInOut' as const,
    delay: direction.value === 'bottom' ? 0.15 : 0,
  },
  boxShadow: {
    duration: 0.1,
    ease: 'easeOut' as const,
    delay: y.value === 0 && direction.value === 'top' ? 0.4 : 0,
  },
}))
</script>

<template>
  <Motion
    as="header"
    flex="~ items-center justify-between gap-x-20" mx-16 mb-32 mt-16 p-16 rounded-8 inset-x-16 top-16 fixed sticky z-100
    :class="{
      dark: !scrolled && darkHeader,
      ...conditionalClasses,
    }"
    :animate="animateProps"
    :transition="transitionProps"
    :data-scrolled="scrolled ? '' : undefined"
  >
    <NuxtLink to="/">
      <div class="dark:i-nimiq:logos-nimiq-white-horizontal" text-24 i-nimiq:logos-nimiq-horizontal />
    </NuxtLink>
    <NuxtLink v-if="navigation!.hotCtaLink" :to="navigation!.hotCtaLink" bg="neutral/15 hocus:neutral/20" :class="{ 'children:delay-200': direction === 'bottom' }" external text-neutral mr-auto gap-x-9 truncate nq-pill children:transition-colors>
      <div shrink-0 i-nimiq:flame />
      <span text-neutral truncate>{{ navigation!.hottext }}</span>
    </NuxtLink>

    <NavigationMobile v-if="showMobileMenu" />
    <NavigationDesktop v-else />
  </Motion>
</template>
