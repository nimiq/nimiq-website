<script setup lang="ts">
import type { Content } from '@prismicio/client'

// TODO GridSectionSlice has a link and link label. Is that being used?

const props = defineProps(getSliceComponentProps<Content.GridSectionSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="colors" data-slice-type="grid-section">
    <template v-if="slice.variation === 'default'">
      <ul nq-grid-330>
        <li
          v-for="(item, i) in slice.items"
          :key="i"
          grid="~ cols-[auto_1fr] rows-[auto_1fr] gap-x-20 gap-y12 lg:gap-y-16 items-center"
        >
          <PrismicImage :field="item.icon" size="48 lg:56 xl:64" />
          <PrismicRichText wrapper="div" :field="item.headline" children:text-left />
          <PrismicRichText v-if="item.subline.length" wrapper="div" :field="item.subline" col-span-2 />
        </li>
      </ul>
      <PrismicLink v-if="hasLink(slice.primary.cta)" :field="slice.primary.cta" nq-arrow nq-pill-white f-m-xl />
    </template>
    <template v-else-if="slice.variation === 'withBackground'">
      <div grid="~ cols-1 lg:cols-3 gap-8 md:gap-16" data-slice-variation="withBackground">
        <PrismicLink
          v-for="({ color, headline, iconName, linkHref }, i) in slice.items"
          :key="i"
          internal-component="a"
          flex="~ row gap-20 items-center" :style="`--c: ${color}`"
          :field="linkHref" group p-20 nq-hoverable
        >
          <div :class="iconName" text="32 md:48 $c group-hocus:!white" transition-colors />
          <PrismicRichText wrapper="div" :field="headline" whitespace-nowrap flex="~ items-center" class="raw" text="group-hocus:children:!white" />
        </PrismicLink>
      </div>
    </template>
    <template v-else-if="slice.variation === 'threeColumnsImageText'">
      <ul flex="~ col lg:row gap-x-24 gap-y-40 items-center" w-full>
        <li v-for="({ headline, image }, i) in slice.items" :key="i" flex-1>
          <ResponsiveImage :image w="initial md:w-max lg:initial" max-h-229 flex rounded object-contain lg:mx-auto dark:bg-neutral-200 />
          <PrismicText wrapper="h3" text="20/26 md:center" mt-24 max-w-24ch lg:mx-auto :field="headline" />
        </li>
      </ul>
    </template>
    <template v-else-if="slice.variation === 'threeColumnsIconsText'">
      <ul flex="~ col lg:row gap-y-24 lg:items-center" w-full>
        <li v-for="({ headline, image }, i) in slice.items" :key="i" flex-1 py-24 border="b-1 lg:b-0 lg:r-1 last:0 white/15 solid">
          <NuxtImg :src="$prismic.asImageSrc(image)" h-80 rounded-8 object-contain lg:mx-auto />
          <PrismicText wrapper="h3" text="green md:center f-xl" max-w-20ch font-bold f-m-xs lg:mx-auto :field="headline" />
        </li>
      </ul>
    </template>
    <template v-else-if="slice.variation === 'threeColumnsIconsInline'">
      <ul flex="~ col lg:row gap-y-24 lg:items-center" w-full>
        <li v-for="({ content, icon }, i) in slice.primary.items" :key="i" flex-1 pb="24 last:0 lg:0" lg:p="x-32 first:l-0 last:r-0" border="b-1 lg:b-0 lg:r-1 last:0 neutral/15 solid" flex="~ gap-x-12 items-center">
          <div style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)" size-32 shrink-0 rounded-full stack>
            <div :class="icon" text="16 white" />
          </div>
          <PrismicRichText wrapper="div" text="lg neutral-900" :field="content" />
        </li>
      </ul>
    </template>
  </section>
</template>

<style scoped>
[data-slice-variation='withBackground'] {
  [nq-hoverable]:hover,
  [nq-hoverable]:focus-visible {
    &::before {
      background-image: none;
      background: var(--c);
    }
  }
}
</style>
