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
  <section v-if="slice.variation === 'default'" bg-neutral-0 py-0 data-slice-type="logos-grid">
    <ul flex="~ wrap gap-x-32 gap-y-16 justify-center items-center" m-0 mb-1.5>
      <li>
        <p text="14/16.8 neutral-700" mr-8 whitespace-nowrap nq-label>
          {{ slice.primary.label }}
        </p>
      </li>
      <li v-for="({ logo, link }, i) in slice.items" :key="i">
        <PrismicLink internal-component="a" :field="link" transition-opacity>
          <PrismicImage :field="logo" :class="getCssClasses(link)" op="40 hocus:80" />
        </PrismicLink>
      </li>
    </ul>
  </section>
  <section v-else-if="slice.variation === 'centered'" bg-neutral-0 pt-354 data-slice-type="logos-grid">
    <ul flex="~ wrap gap-x-32 gap-y-16 justify-center items-center" m-0 mb-1.5>
      <li>
        <p text="14/16.8 neutral-700" mr-8 whitespace-nowrap nq-label>
          {{ slice.primary.label }}
        </p>
      </li>
      <li v-for="({ logo, link }, i) in slice.items" :key="i">
        <PrismicLink internal-component="a" :field="link" transition-opacity>
          <PrismicImage :field="logo" :class="getCssClasses(link)" op="40 hocus:80" />
        </PrismicLink>
      </li>
    </ul>
  </section>
</template>
