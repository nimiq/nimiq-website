<script setup lang="ts">
import type { Content } from '@prismicio/client'

// TODO GridSectionSlice has a link and link label. Is that being used?

const props = defineProps(getSliceComponentProps<Content.GridSectionSlice>())
const sectionRef = useSection(props.slice.id, props.slice.primary.bgColor)
</script>

<template>
  <section ref="sectionRef">
    <template v-if="slice.variation === 'default'">
      <ul grid="~ cols-3 gap-48 lg:gap-72 2xl:gap-80">
        <li
          v-for="(item, i) in slice.items"
          :key="i"
          grid="~ cols-[auto_1fr] rows-[auto_1fr] gap-x-20 gap-y12 lg:gap-y-16 items-center"
        >
          <PrismicImage :field="item.icon" size="48 lg:56 xl:64" />
          <PrismicRichText :field="item.headline" children:text-left />
          <PrismicRichText v-if="item.subline.length" :field="item.subline" col-span-2 />
        </li>
      </ul>
    </template>
    <template v-else-if="slice.variation === 'withBackground'">
      <div grid="~ cols-1 lg:cols-3 gap-8 md:gap-16">
        <PrismicLink
          v-for="({ color, headline, iconName, linkHref }, i) in slice.items"
          :key="i"
          flex="~ row gap-20 items-center" :style="`--c: ${color}`"
          :field="linkHref" hocus:bg="$c" group p-20 nq-hoverable
        >
          <div :class="iconName" text="32 md:48 $c group-hocus:white" transition-colors />
          <PrismicRichText :field="headline" whitespace-nowrap flex="~ items-center" class="raw" text="neutral group-hocus:!white" />
        </PrismicLink>
      </div>
    </template>
    <template v-else-if="slice.variation === 'threeColumnsImageText'">
      <ul flex="~ col lg:row gap-x-24 gap-y-40 items-center" w-full>
        <li v-for="({ headline, image }, i) in slice.items" :key="i" flex-1>
          <ResponsiveImage :image mx-auto max-h-229 flex rounded object-contain w="initial md:w-max lg:initial" dark:bg-neutral-200 />
          <PrismicText wrapper="h3" text="20/26 md:center" mx-auto mt-24 max-w-24ch :field="headline" />
        </li>
      </ul>
    </template>
  </section>
</template>
