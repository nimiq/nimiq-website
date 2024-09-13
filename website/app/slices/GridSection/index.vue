<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.GridSectionSlice>())
useSlice(props.slice.id, 'white')
</script>

<template>
  <section :ref="slice.id">
    <template v-if="slice.variation === 'threeColumnsImageText'">
      <ul flex="~ col lg:row gap-x-24 gap-y-40" w-full>
        <li v-for="({ headline, image }, i) in slice.items" :key="i" flex-1>
          <PrismicImage :field="image" mx-auto max-h-229 w-full rounded-8 object-contain />
          <PrismicText wrapper="h3" text="20/26 md:center" mt-24 :field="headline" />
        </li>
      </ul>
    </template>
  </section>
</template>
