<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { filter } from '@prismicio/client'

const { slice, slices } = defineProps(getSliceComponentProps<Content.CardsCarouselSlice>())
const sectionColor = getColorClass(slice.primary.bgColor)

const { client } = usePrismic()

const variation = computed(() => slice.variation)

const { data: items } = await useAsyncData(`cards_carousel_${variation.value}`, async () => {
  if (variation.value === 'apps' && (slice.primary as Content.CardsCarouselSliceAppsPrimary).appsMadeBy === 'Community') {
    const communityApps = await client.getAllByType('nimiq_app', {
      filters: [filter.at('my.nimiq_app.isOfficial', false)],
    })
    return communityApps.sort(() => Math.random() - 0.5).map(d => d.data)
  }
  console.warn('Nimiq Events nor Nimiq Apps not implemented')
  return []
})

onNuxtReady(async () => {
  await nextTick()

  if (slice.variation === 'apps')
    return

  // We want to show the list of apps and events in the carousel. But if there are no items to show we
  // remove the previous slice which is a simple_headline and we show a warning in the console

  const selfIndex = slices.findIndex(s => s.slice_type === 'cards_carousel')

  // Get the index of the previous slice if it is a simple_headline
  const simpleHeadlineIndex = slices.findIndex((s, i) => s.slice_type === 'simple_headline' && i === selfIndex - 1)
  if (simpleHeadlineIndex === -1)
    return

  // remove it from the dom
  document.querySelector(`section:nth-of-type(${simpleHeadlineIndex + 1})`)?.remove()
  console.warn(`We have removed the section with the simple_headline slice since the CardsCarousel slice is present but not implemented`)
})
</script>

<template>
  <section v-if="items && items.length > 0" :class="sectionColor" px-0 pb-0>
    <template v-if="slice.variation === 'apps'">
      <Carousel :items>
        <template #default="{ item }">
          <CardApp v-bind="item" />
        </template>
      </Carousel>
    </template>
  </section>
</template>
