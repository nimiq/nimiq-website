<script setup lang="ts">
import type { Content } from '@prismicio/client'

// TODO GridSectionSlice has a link and link label. Is that being used?

const props = defineProps(getSliceComponentProps<Content.GridSectionSlice>())
const bgClass = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="bgClass" data-slice-type="grid-section">
    <template v-if="slice.variation === 'default'">
      <ul nq-grid-330>
        <li
          v-for="(item, i) in slice.items"
          :key="i"
          grid="~ cols-[auto_1fr] rows-[auto_1fr] gap-x-20 gap-y12 lg:gap-y-16 items-center"
        >
          <PrismicImage :field="item.icon" size="48 lg:56 xl:64" />
          <RichText wrapper="div" :field="item.headline" children:text-left />
          <RichText v-if="item.subline.length" wrapper="div" :field="item.subline" col-span-2 />
        </li>
      </ul>
      <PrismicLink v-if="hasLink(slice.primary.cta)" :field="slice.primary.cta" f-mt-xl nq-arrow nq-pill-white />
    </template>
    <template v-else-if="slice.variation === 'withBackground'">
      <div grid="~ cols-1 lg:cols-3 gap-8 md:gap-16" data-slice-variation="withBackground">
        <PrismicLink
          v-for="({ color, headline, iconName, linkHref }, i) in slice.items"
          :key="i"

          flex="~ row gap-20 items-center" :style="`--c: ${color}`"
          :field="linkHref" group p-20 nq-hoverable class="hocus:var:nq-gradient-from:$c hocus:var:nq-gradient-to:$c"
        >
          <div :class="iconName" text="32 md:48 $c group-hocus:!white" transition-colors />
          <RichText wrapper="div" :field="headline" whitespace-nowrap flex="~ items-center" class="raw" text="group-hocus:children:!white" />
        </PrismicLink>
      </div>
    </template>
    <template v-else-if="slice.variation === 'threeColumnsImageText'">
      <ul flex="~ col lg:row gap-x-24 gap-y-40 items-center" w-full>
        <li v-for="({ headline, image }, i) in slice.items" :key="i" flex-1 w-full>
          <PrismicImage :field="image" w="full md:w-max lg:initial" rounded flex max-h-229 object="contain md:cover lg:contain" lg:mx-auto dark:bg-neutral-200 />
          <PrismicText wrapper="h3" text="20/26 md:center" mt-24 lg:mx-auto lg:max-w-24ch :field="headline" />
        </li>
      </ul>
    </template>
    <template v-else-if="slice.variation === 'threeColumnsIconsText'">
      <ul flex="~ col lg:row gap-y-24 lg:items-center" w-full>
        <li v-for="({ headline, image }, i) in slice.items" :key="i" py-24 flex-1 border="b-1 lg:b-0 lg:r-1 last:0 white/15 solid" md:mx-auto md:w-max>
          <PrismicImage :field="image" rounded-8 h-80 object-contain md:mx-auto />          <PrismicText wrapper="h3" text="green md:center f-xl" font-bold max-w-20ch f-mt-xs lg:mx-auto :field="headline" />
        </li>
      </ul>
    </template>
    <template v-else-if="slice.variation === 'threeColumnsIconsInline'">
      <ul flex="~ col lg:row gap-y-24 lg:items-center" w-full>
        <li v-for="({ content, icon }, i) in slice.primary.items" :key="i" flex-1 pb="24 last:0 lg:0" lg:p="x-32 first:l-0 last:r-0" border="b-1 lg:b-0 lg:r-1 last:0 neutral/15 solid" flex="~ gap-x-12 items-center">
          <div style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)" stack rounded-full shrink-0 size-32>
            <div :class="icon" text="16 white" />
          </div>
          <RichText wrapper="div" text="f-lg neutral-900" :field="content" />
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
