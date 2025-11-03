<script setup lang="ts">
interface CardsCarouselSlice {
  primary: {
    bgColor: string | undefined
  }
  variation?: string
}

const { slice, slices = [] } = defineProps<{ slice: CardsCarouselSlice, slices?: any[] }>()
const bgClass = getColorClass(slice.primary.bgColor as any)

const variation = computed(() => slice.variation)

const { data } = await useApps()
const items = computed(() => {
  if (variation.value === 'apps') {
    return data.value?.communityApps.toSorted(() => Math.random() - 0.5)
  }
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
  <section v-if="items && items.length > 0" :class="bgClass" px-0 pb-0>
    <template v-if="slice.variation === 'apps'">
      <Carousel :items="items">
        <template #default="{ item }">
          <CardApp v-bind="item" />
        </template>
      </Carousel>
    </template>
  </section>
</template>
