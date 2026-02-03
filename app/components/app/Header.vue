<script setup lang="ts">
import { breakpointsTailwind, refDebounced, useWindowScroll } from '@vueuse/core'
import { Motion } from 'motion-v'

defineProps<{ darkHeader?: boolean }>()

// Mobile detection - both are needed, one relies on User Agent and the other on the window size
const { isMobileOrTablet } = useDevice()
const { smaller } = useBreakpoints(breakpointsTailwind)
const showMobileMenu = computed(() => isMobileOrTablet || smaller('lg').value)

const { y } = useWindowScroll()

const scrolled = computed(() => y.value > 0)
const rawDirection = ref<'top' | 'bottom'>()
const direction = refDebounced(rawDirection, 100)
watch(y, (newY, oldY) => {
  if (Math.abs(newY - oldY) < 10)
    return
  rawDirection.value = newY < oldY ? 'top' : 'bottom'
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

// Transition configuration for motion-v - smooth transitions
const transitionProps = computed(() => ({
  default: { type: 'tween', ease: [0.25, 0, 0, 1] } as const, // Nimiq ease
  opacity: {
    duration: 0.3,
    ease: [0.25, 0, 0, 1] as const,
  },
  backgroundColor: {
    duration: 0.35,
    ease: [0.25, 0, 0, 1] as const,
  },
  boxShadow: {
    duration: 0.35,
    ease: [0.25, 0, 0, 1] as const,
  },
}))
</script>

<template>
  <Motion class="flex items-center justify-between gap-x-5 p-4 mx-4 mb-8 mt-4 inset-x-4 top-4 sticky z-[100] rounded-lg" as="header" :dark="!scrolled && darkHeader ? '' : undefined" :class="conditionalClasses" :animate="animateProps" :transition="transitionProps" :data-scrolled="scrolled ? 'true' : 'false'">
    <NuxtLink to="/" aria-label="Nimiq homepage" class="flex">
      <Icon class="text-[24px]" :name="darkHeader && !scrolled ? 'nimiq:logos-nimiq-white-horizontal' : 'nimiq:logos-nimiq-horizontal'" />
    </NuxtLink>

    <AppNavigationMobile v-if="showMobileMenu" :dark-header="darkHeader && !scrolled" />
    <AppNavigationDesktop v-else />
  </Motion>
</template>
