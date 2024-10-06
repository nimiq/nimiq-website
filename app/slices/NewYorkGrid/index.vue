<script setup lang="ts">
import type { Content, KeyTextField } from '@prismicio/client'

// TODO Replace CtaSectionSlice with your slice
defineProps(getSliceComponentProps<Content.NewYorkGridSlice>())
const [DefineStats, ReuseStat] = createReusableTemplate<{ label: KeyTextField, value: KeyTextField }>()
</script>

<template>
  <DefineStats v-slot="{ label, value }">
    <div flex="~ col" p="16 sm:24" rounded-6 bg-neutral-0 shadow ring="1.5 neutral-200">
      <span nq-label text="neutral-700 12">{{ label }}</span>
      <span mt="12 sm:16" font-bold text="green 21 sm:22">{{ value }}</span>
    </div>
  </DefineStats>

  <section class="white mx-0 bg-neutral-0 children:max-w-none">
    <div
      class="grid grid-flow-row gap-8 lg:grid-rows-[auto,1fr,auto] lg:gap-24 children:rounded-6 children:shadow"
      :class="slice.variation === 'default' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 one-image' : 'multiple-images grid-cols-1 md:grid-cols-2'"
    >
      <prismic-image v-if="slice.variation === 'default'" :field="slice.primary.firstBlockFirstImage" size-full max-h-278 object-cover lg:row-span-2 md:col-span-2 style="grid-area: block1-image" />
      <ul v-else style="grid-area: block1-image" ring="1.5 neutral-200" h="128 lg:192 md:240" children:h="[calc(100%+32px)]" children:w="[calc((2*(100%-24px*2))/5)]" flex="~ gap-12 md:gap-24" overflow-hidden bg-white children:shrink-0 pl="12 md:24" pt="12 md:24">
        <li><PrismicImage :field="slice.primary.firstBlockFirstImage" size-full object-cover /></li>
        <li><PrismicImage :field="slice.primary.firstBlockSecondImage" size-full object-cover /></li>
        <li><PrismicImage :field="slice.primary.firstBlockThirdImage" size-full object-cover /></li>
      </ul>

      <ReuseStat :label="slice.primary.firstBlockFirstLabel" :value="slice.primary.firstBlockFirstStat" style="grid-area: block1-stat1" />
      <ReuseStat v-if="slice.variation === 'default'" :label="slice.primary.firstBlockSecondLabel" :value="slice.primary.firstBlockSecondStat" style="grid-area: block1-stat2" />

      <PrismicImage v-if="slice.variation === 'default'" :field="slice.primary.secondBlockFirstImage" size-full max-h-278 object-cover lg:row-span-2 md:col-span-2 style="grid-area: block2-image" />

      <ul v-else style="grid-area: block2-image" ring="1.5 neutral-200" h="128 lg:192 md:240" children:h="[calc(100%+32px)]" children:w="[calc((2*(100%-24px*2))/5)]" flex="~ gap-12 md:gap-24" overflow-hidden bg-white children:shrink-0 pl="12 md:24" pt="12 md:24">
        <li><PrismicImage :field="slice.primary.secondBlockFirstImage" size-full object-cover /></li>
        <li><PrismicImage :field="slice.primary.secondBlockSecondImage" size-full object-cover /></li>
        <li><PrismicImage :field="slice.primary.secondBlockThirdImage" size-full object-cover /></li>
      </ul>

      <ReuseStat :label="slice.primary.secondBlockFirstLabel" :value="slice.primary.secondBlockFirstStat" style="grid-area: block2-stat1" />
      <ReuseStat v-if="slice.variation === 'default'" :label="slice.primary.secondBlockSecondLabel" :value="slice.primary.secondBlockSecondStat" style="grid-area: block2-stat2" />
    </div>
  </section>
</template>

<style scoped>
.one-image {
  grid-template-areas:
    'block1-image' 'block1-stat1' 'block1-stat2' 'block2-image' 'block2-stat1'
    'block2-stat2';

  @screen md {
    grid-template-areas: 'block1-image block1-image' 'block1-stat1 block1-stat2' 'block2-image block2-image' 'block2-stat1 block2-stat2';
  }

  @screen lg {
    grid-template-areas: 'block1-image block1-image block2-stat1 block2-stat2' 'block1-image block1-image block2-image block2-image' 'block1-stat1 block1-stat2 block2-image block2-image';
  }
}

.multiple-images {
  grid-template-areas: 'block1-image' 'block1-stat1' 'block2-image' 'block2-stat1';

  @screen lg {
    grid-template-areas: 'block1-image block2-stat1' 'block1-image block2-image' 'block1-stat1 block2-image';
  }
}
</style>
