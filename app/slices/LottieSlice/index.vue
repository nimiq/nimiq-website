<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { Vue3Lottie } from 'vue3-lottie'

const { slice } = defineProps(getSliceComponentProps<Content.LottieSliceSlice>())
const colors = getColorClass(slice.primary.bgColor)
const pauseAnimation = ref(false)

const section = useTemplateRef<HTMLDivElement>('section')

const { data: animationData } = useFetch(getUrl(slice.primary.source))

useIntersectionObserver(section, ([entry]) => pauseAnimation.value = !entry?.isIntersecting || true)
</script>

<template>
  <section ref="section" pt-0 bg-neutral-0 :class="colors">
    <ClientOnly>
      <Vue3Lottie :animation-data pause-animation :height="168" :width="712" />
    </ClientOnly>
  </section>
</template>
