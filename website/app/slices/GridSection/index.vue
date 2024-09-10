<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.GridSectionSlice>())
</script>

<template>
  <section class="sgap-96 white">
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
