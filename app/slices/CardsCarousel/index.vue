<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice, slices } = defineProps(getSliceComponentProps<Content.CardsCarouselSlice>())
// const colors = getColorClass(slice.primary.bgColor)

// const { client } = usePrismic()

const variation = computed(() => slice.variation)

const { data: _items } = useAsyncData(`cards_carousel_${variation.value}`, () => {
  console.warn('Nimiq Events nor Nimiq Apps not implemented')

  if (variation.value === 'events') {
    // TODO
    return [] as any
  }
  return [] as any
})

onNuxtReady(async () => {
  await nextTick()

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

<!-- <template>
  <section :class="colors">
    TODO!
  </section>
</template> -->
