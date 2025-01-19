<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { ZigZagContentSliceDefaultItem } from '~~/prismicio-types'
import mediumZoom from 'medium-zoom'

const props = defineProps(getSliceComponentProps<Content.ZigZagContentSlice>())
const colors = getColorClass(props.slice.primary.bgColor)

function mediaType(item: ZigZagContentSliceDefaultItem) {
  if ('url' in item.videoHigh && 'url' in item.videoMedium && 'url' in item.videoLow) {
    return 'video'
  }
  if (item.image?.url) {
    return 'image'
  }
  return 'none'
}

const sectionRef = useTemplateRef<HTMLDivElement>('section')
useIntersectionObserver(sectionRef, () => {
  // TODO Check if the selector works
  mediumZoom(`[data-slice-type="zig-zag-content"] img`, { margin: 24, background: 'rgb(var(--nq-neutral-0) / 1)' })
})
</script>

<template>
  <section ref="section" :class="colors" class="px-0" data-slice-type="zig-zag-content">
    <ul>
      <!-- px-24 xl:pl-112 xl:pr-0  -->
      <li
        v-for="(item, i) in slice.items" :key="i"
        grid="~ cols-1 gap-x-96 md:cols-2 md:items-center" border="b neutral-300 last:none"
        p="first:pb-64 first:md:pb-96 py-64 md:py-96 last:pt-64 last:md:pt-96 odd:r-32 even:l-32" children:even:first:col-start-1 children:even:first:col-start-2
      >
        <!-- <PrismicVideo
          v-if="mediaType(item) === 'video'"
          class="aspect-[1.39] lg:aspect-[initial] md:aspect-[1.48]"
          :class="{
            'col-row-1 md:col-start-2': i % 2 === 0,
            'md:col-start-1': i % 2 !== 0,
          }"
          :high-res="item.videoHigh.url"
          :medium-res="item.videoHigh.url"
          :low-res="item.videoHigh.url"
          :poster="item.image"
        /> -->
        <PrismicImage
          v-if="mediaType(item) === 'image'" :field="item.image"
          ring="1.5 neutral-400" aspect="1.39 md:1.48 lg:initial" rounded-6 object-cover shadow
        />
        <div
          col-start-1 row-start-2 py-32 md:row-start-1 md:flex-1 md:items-center lg:py-96 md:py-80 xl:py-144
          :class="{
            'xl:pl-112 xl:pr-0 ': i % 2 === 0,
            'xl:pr-112 xl:pl-0 md:col-start-2': i % 2 !== 0,
          }"
        >
          <PrismicImage v-if="hasImage(item.logo)" :field="item.logo" max-md:mx-auto />
          <PrismicRichText f-m-sm :field="item.headline" />
          <div text-12 nq-label f-m-2xs>
            {{ item.label }}
          </div>
          <PrismicRichText nq-prose-compact f-m-lg :field="item.description" />
          <div flex="~ gap-24 md:col lg:row" max-w-lg f-m-sm>
            <PrismicLink v-if="hasLink(item.buttonHref)" internal-component="a" :field="item.buttonHref" font-semibold nq-arrow nq-pill-lg nq-pill-blue>
              {{ item.buttonLabel }}
            </PrismicLink>
            <PrismicLink v-if="hasLink(item.secondaryButtonHref)" internal-component="a" :field="item.secondaryButtonHref" un-text-blue font-semibold nq-arrow>
              {{ item.secondaryButtonLabel }}
            </PrismicLink>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
