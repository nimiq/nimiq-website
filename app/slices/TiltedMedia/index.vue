<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.TiltedMediaSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
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
</script>

<template>
  <section mx-0 px-0 pb-0 children:max-w-none :class="[colors, { 'nq-overlaps': slice.variation === 'default' }]">
    <TiltedMedia v-if="slice.variation === 'default'">
      <NuxtImg :src="url" />
    </TiltedMedia>
    <TiltedMedia v-else-if="slice.variation === 'withVideo'">
      <NuxtLink :to="url" external mx-auto w-max stack children:rounded-8 target="_blank">
        <PrismicImage :field="slice.primary.poster" />
        <div bg-gradient="to-b from-neutral/30 to-neutral/60" h="[calc(100%-96px)]" absolute inset-0 size-full />
        <div i-nimiq:triangle-right text="56 white" />
      </NuxtLink>
    </TiltedMedia>
  </section>
</template>
