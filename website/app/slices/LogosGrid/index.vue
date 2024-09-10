<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.LogosGridSlice>())
</script>

<template>
  <section v-if="slice.variation === 'default'" class="white pt-200" flex="~ col lg:row items-center justify-center gap-x-40 gap-y-16">
    <PrismicText text="14/16.8 neutral-700" m-0 nq-label :field="slice.primary.title" />
    <ul flex="~ wrap gap-x-32 gap-y-16 justify-center" m-0>
      <li v-for="({ logo, link }, i) in slice.items" :key="i">
        <PrismicLink :field="link">
          <PrismicImage :field="logo" max-h-36 op-40 />
        </PrismicLink>
      </li>
    </ul>
  </section>
</template>
