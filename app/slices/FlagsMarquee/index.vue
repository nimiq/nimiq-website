<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { breakpointsTailwind } from '@vueuse/core'

const props = defineProps(getSliceComponentProps<Content.FlagsMarqueeSlice>())

const position = ref(0)
const { smaller } = useBreakpoints(breakpointsTailwind)
const isMobile = computed(() => smaller('md'))
const speed = computed(() => isMobile.value ? 3 : 5) // pixels per second

useRafFn(() => position.value = (position.value + speed.value / 60), { immediate: true })

const image = computed(() => props.slice.primary.flags)
</script>

<template>
  <section mx-0 px-0 bg-neutral-0 max-w-full of-x-hidden children:max-w-none>
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
