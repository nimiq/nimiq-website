<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.GridSectionSlice>())
useSlice(props.slice.id, 'grey')
</script>

<template>
  <section :ref="slice.id">
    <template v-if="slice.variation === 'threeColumnsImageText'">
      <ul flex="~ col lg:row gap-24" w-full>
        <li v-for="({ headline, image }, i) in slice.items" :key="i" flex-1>
          <PrismicImage rounded-8 :field="image" />
          <PrismicText wrapper="h3" text="20/26 md:center" mt-24 :field="headline" />
        </li>
      </ul>
    </template>
  </section>
</template>
