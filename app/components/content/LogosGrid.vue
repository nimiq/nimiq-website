<script setup lang="ts">
interface LogosGridSlice {
  primary: {
    bgColor: string | undefined
    label: string | undefined
  }
  items?: any[]
  variation?: string
}

const { slice } = defineProps<{ slice: LogosGridSlice, slices?: any[] }>()
const bgClass = getColorClass(slice.primary.bgColor as any)

// @unocss-include
function getCssClasses(link: any) {
  switch (getUrl(link)) {
    case 'https://naka.com/':
      return 'max-h-24'
    default:
      return 'max-h-36'
  }
}
</script>

<template>
  <section v-if="slice.variation === 'default'" :class="bgClass" py-0 data-slice-type="logos-grid">
    <ul flex="~ wrap gap-x-32 gap-y-16 justify-center items-center" m-0 mb-1.5>
      <li>
        <p text="14/16.8 neutral-700" mr-8 whitespace-nowrap nq-label>
          {{ slice.primary.label }}
        </p>
      </li>
      <li v-for="({ logo, link }, i) in slice.items" :key="i">
        <PrismicLink :field="link" transition-opacity :aria-label="logo.alt || `Partner logo ${i + 1}`">
          <ProxiedPrismicImage :field="logo" :class="getCssClasses(link)" w-full op="40 hocus:80" />
        </PrismicLink>
      </li>
    </ul>
  </section>
  <section v-else-if="slice.variation === 'centered'" :class="bgClass" data-slice-type="logos-grid">
    <ul flex="~ wrap gap-x-32 gap-y-16 justify-center items-center" m-0 mb-1.5>
      <li>
        <p text="14/16.8 neutral-700" mr-8 whitespace-nowrap nq-label>
          {{ slice.primary.label }}
        </p>
      </li>
      <li v-for="({ logo, link }, i) in slice.items" :key="i">
        <PrismicLink :field="link" transition-opacity :aria-label="logo.alt || `Partner logo ${i + 1}`">
          <ProxiedPrismicImage :field="logo" :class="getCssClasses(link)" w-full op="40 hocus:80" />
        </PrismicLink>
      </li>
    </ul>
  </section>
</template>

<style>
:where(.nq-overlaps, [nq-overlaps]) + [data-slice-type='logos-grid'] {
  --uno: 'f-pt-2xl';
}
</style>
