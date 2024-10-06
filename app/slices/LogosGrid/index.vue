<script setup lang="ts">
import type { Content, LinkField } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.LogosGridSlice>())

// @unocss-include
function getCssClasses(link: LinkField) {
  // @ts-expect-error - we know that link.url is a string
  switch (link.url) {
    case 'https://naka.com/':
      return 'max-h-24'
    default:
      return 'max-h-36'
  }
}
</script>

<template>
  <section v-if="slice.variation === 'default'" bg-neutral-0 pb="124 lg:160" pt-0>
    <ul flex="~ wrap gap-x-32 gap-y-16 justify-center items-center" m-0 mb-1.5>
      <li>
        <PrismicText text="14/16.8 neutral-700" mr-8 whitespace-nowrap nq-label :field="slice.primary.title" />
      </li>
      <li v-for="({ logo, link }, i) in slice.items" :key="i">
        <PrismicLink internal-component="a" :field="link" op="40 hocus:80" transition-opacity>
          <PrismicImage :field="logo" :class="getCssClasses(link)" />
        </PrismicLink>
      </li>
    </ul>
  </section>
</template>
