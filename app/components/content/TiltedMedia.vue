<script setup lang="ts">
import type { ImageField } from '@prismicio/client'

interface TiltedMediaSlice {
  primary: {
    bgColor: string | undefined
    media: { url: string }
    video: { embed_url: string }
    poster: ImageField
  }
  variation?: string
}

const props = defineProps<{ slice: TiltedMediaSlice }>()
const bgClass = getColorClass(props.slice.primary.bgColor)
const url = computed(() => {
  if (props.slice.variation === 'default')
    // @ts-expect-error The URL is always present in this case
    return props.slice.primary.media.url
  if (props.slice.variation === 'withVideo')
    return props.slice.primary.video.embed_url
  return ''
})

const media = ref<HTMLDivElement>()

const { top } = useElementBounding(media)
const { y } = useWindowScroll()

const rotateVar = useCssVar('--rotate-x', media, { initialValue: '30deg' })
const translateY = useCssVar('--translate-y', media, { initialValue: '-100px' })

watch([top, y], () => {
  rotateVar.value = y.value < top.value ? `${(1 - y.value / top.value) * 30}deg` : '0deg'
  translateY.value = y.value < top.value ? `${y.value / top.value * 100 - 100}px` : '0'
}, { immediate: true })

// @unocss-include

const hexagonColor = computed(() => {
  if (bgClass.value.includes('bg-blue-sss'))
    return 'text-white'
  return 'text-neutral-800'
})
</script>

<template>
  <section mx-0 px-0 :class="[bgClass, { 'nq-overlaps': slice.variation === 'default' }]">
    <div max-w-screen w-full relative of-x-clip>
      <div w="320vw md:140vw" i-custom:bg-hexagons h-full h-screen max-w-none inset-0 absolute :class="hexagonColor" />
    </div>
    <div px-32 w-full of-x-clip max-md:max-w-none style="--f-mb-min: 96; --f-mb-max: 128;">
      <div ref="media" style="--rotate-x:30deg;--translate-y:-100px;transform: perspective(1800px) rotateX(var(--rotate-x)) translateY(var(--translate-y))" origin="[center_70%]" transition="transform duration-350 ease-[cubic-bezier(0,0,0.25,1)]" mx-auto h-full min-h-500 children:w-full>
        <NuxtImg v-if="slice.variation === 'default'" :src="url" />
        <NuxtLink v-else-if="slice.variation === 'withVideo'" :to="url" external stack mx-auto children:rounded-8 target="_blank">
          <ProxiedPrismicImage :field="slice.primary.poster" />
          <div bg-gradient="to-b from-neutral/30 to-neutral/60" size-full />
          <div i-nimiq:triangle-right text="56 white" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
