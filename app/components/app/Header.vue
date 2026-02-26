<script setup lang="ts">
import { breakpointsTailwind, useWindowScroll } from '@vueuse/core'
import { Motion } from 'motion-v'

defineProps<{ darkHeader?: boolean, variant?: 'default' | 'home' }>()

// Mobile detection - both are needed, one relies on User Agent and the other on the window size
const { isMobileOrTablet } = useDevice()
const { smaller } = useBreakpoints(breakpointsTailwind)
const showMobileMenu = computed(() => isMobileOrTablet || smaller('lg').value)

const { y } = useWindowScroll()

const scrolled = computed(() => y.value > 0)
const direction = ref<'top' | 'bottom'>('top')
watch(y, (newY, oldY) => {
  if (newY <= 0) {
    direction.value = 'top'
    return
  }

  const previousY = oldY ?? newY
  if (newY < previousY)
    direction.value = 'top'
  else if (newY > previousY)
    direction.value = 'bottom'
})

const hiding = computed(() => scrolled.value && direction.value === 'bottom')

// Animation targets for motion-v
const animateProps = computed(() => ({
  opacity: hiding.value ? 0 : 1,
  y: hiding.value ? '-100%' : '0%',
  backgroundColor: scrolled.value && direction.value === 'top' ? 'white' : 'transparent',
  boxShadow: scrolled.value && direction.value === 'top' ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' : '0 0 0 0 transparent',
}))

const conditionalClasses = computed(() => ({
  'pointer-events-none': hiding.value,
}))

// Transition: enter (scroll-up) is ease-out-quint (snappy), exit is faster with ease-out-cubic
const transitionProps = computed(() => {
  const isEntering = !hiding.value
  const ease = isEntering ? [0.23, 1, 0.32, 1] as const : [0.215, 0.61, 0.355, 1] as const
  const duration = isEntering ? 0.3 : 0.25
  return {
    default: { type: 'tween' as const, duration, ease },
    backgroundColor: { duration: 0.35, ease: [0.25, 0, 0, 1] as const },
    boxShadow: { duration: 0.35, ease: [0.25, 0, 0, 1] as const },
  }
})
</script>

<template>
  <Motion
    class="flex items-center justify-between gap-x-5 p-4 mx-4 mb-8 mt-4 inset-x-4 top-4 sticky z-[100] rounded-lg"
    as="header"
    :class="conditionalClasses"
    :animate="animateProps"
    :transition="transitionProps"
    :data-scrolled="scrolled ? 'true' : 'false'"
    :data-header-variant="(!scrolled && variant === 'home') ? 'home' : undefined"
  >
    <NuxtLink to="/" aria-label="Nimiq homepage" class="flex">
      <Icon class="text-[24px]" :name="darkHeader && !scrolled ? 'nimiq:logos-nimiq-white-horizontal' : 'nimiq:logos-nimiq-horizontal'" />
    </NuxtLink>

    <AppNavigationMobile v-if="showMobileMenu" :dark-header="darkHeader && !scrolled" />
    <AppNavigationDesktop v-else />
  </Motion>
</template>
