<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.LogosGridSlice>())
useSlice(props.slice.id, 'white')
</script>

<template>
  <section v-if="slice.variation === 'default'" :ref="slice.id">
    <ul flex="~ wrap gap-x-32 gap-y-16 justify-center items-center" m-0 mb-1.5>
      <li>
        <PrismicText text="14/16.8 neutral-700" mr-8 whitespace-nowrap nq-label :field="slice.primary.title" />
      </li>
      <li v-for="({ logo, link }, i) in slice.items" :key="i">
        <PrismicLink :field="link">
          <PrismicImage :field="logo" max-h-36 op-40 />
        </PrismicLink>
      </li>
    </ul>
  </section>
</template>
