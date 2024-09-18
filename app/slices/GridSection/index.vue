<script setup lang="ts">
import type { Content } from '@prismicio/client'

// TODO GridSectionSlice ahas a link and link label. Is that being used?

const props = defineProps(getSliceComponentProps<Content.GridSectionSlice>())
const { sectionRef } = useSection(props.slice.id, 'white')
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
          <PrismicRichText :field="item.headline" />
          <PrismicRichText v-if="item.subline.length" :field="item.subline" col-span-2 />
        </li>
      </ul>
    </template>
    <template v-else-if="slice.variation === 'threeColumnsImageText'">
      <ul flex="~ col lg:row gap-x-24 gap-y-40" w-full>
        <li v-for="({ headline, image }, i) in slice.items" :key="i" flex-1>
          <PrismicImage :field="image" mx-auto max-h-229 w-full rounded-8 object-contain />
          <PrismicText wrapper="h3" text="20/26 md:center" mt-24 :field="headline" />
        </li>
      </ul>
    </template>
  </section>
</template>
