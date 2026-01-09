<script setup lang="ts">
import { breakpointsTailwind, refDebounced, useScroll } from '@vueuse/core'
import { Motion } from 'motion-v'

defineProps<{ darkHeader?: boolean }>()

// Mobile detection - both are needed, one relies on User Agent and the other on the window size
const { isMobileOrTablet } = useDevice()
const { smaller } = useBreakpoints(breakpointsTailwind)
const showMobileMenu = computed(() => isMobileOrTablet || smaller('lg').value)

const site = await useSite()
const announcement = computed(() => {
  const a = site.announcement
  if (!a)
    return null
  const now = new Date()
  if (new Date(a.since) > now || new Date(a.until) < now)
    return null
  return a
})

const { y } = useScroll(window)

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

// Transition configuration for motion-v - optimized for performance
const transitionProps = computed(() => ({
  default: { type: 'tween', ease: 'easeInOut' } as const,
  opacity: {
    duration: 0.2,
    ease: 'easeInOut' as const,
  },
  backgroundColor: {
    duration: 0.2,
    ease: 'easeInOut' as const,
    delay: direction.value === 'bottom' ? 0.05 : 0,
  },
  boxShadow: {
    duration: 0.1,
    ease: 'easeOut' as const,
    delay: y.value === 0 && direction.value === 'top' ? 0.2 : 0,
  },
}))
</script>

<template>
  <Motion
    as="header"
    flex="~ items-center justify-between gap-x-20" mx-16 mb-32 mt-16 p-16 rounded-8 inset-x-16 top-16 fixed sticky z-100
    :dark="!scrolled && darkHeader ? '' : undefined"
    :class="conditionalClasses"
    :animate="animateProps"
    :transition="transitionProps"
    :data-scrolled="scrolled ? 'true' : 'false'"
  >
    <NuxtLink to="/" aria-label="Nimiq homepage">
      <Icon name="nimiq:logos-nimiq-horizontal" text-24 class="dark:hidden" />
      <Icon name="nimiq:logos-nimiq-white-horizontal" text-24 class="hidden dark:block" />
    </NuxtLink>
    <NuxtLink v-if="announcement" :to="announcement.href" bg="neutral/15 hocus:neutral/20" :class="{ 'children:delay-200': direction === 'bottom' }" external text-neutral mr-auto gap-x-9 truncate nq-pill children:transition-colors>
      <Icon name="nimiq:flame" shrink-0 />
      <span text-neutral truncate>{{ announcement.text }}</span>
    </NuxtLink>

    <AppNavigationMobile v-if="showMobileMenu" />
    <AppNavigationDesktop v-else />
  </Motion>
</template>
