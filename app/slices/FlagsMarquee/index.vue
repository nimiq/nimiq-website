<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { breakpointsTailwind } from '@vueuse/core'

const props = defineProps(getSliceComponentProps<Content.FlagsMarqueeSlice>())
const { sectionRef } = useSection(props.slice.id, 'white', { limitWidth: false, paddingX: false })

const position = ref(0)
const { smaller } = useBreakpoints(breakpointsTailwind)
const isMobile = computed(() => smaller('md'))
const speed = computed(() => isMobile.value ? 3 : 5) // pixels per second

useRafFn(() => position.value = (position.value + speed.value / 60), { immediate: true })

const image = computed(() => props.slice.primary.flags)
</script>

<template>
  <section ref="sectionRef" max-w-full of-x-hidden>
    <div
      max-w-screen h="64 md:80" bg="repeat-x"
      :style="{
        backgroundImage: `url(${image.url})`,
        backgroundPosition: `${position}% center`,
        backgroundSize: 'auto 100%',
        width: `${image.dimensions!.width}px`,
      }"
    />
  </section>
</template>
