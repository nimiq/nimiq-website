<script setup lang="ts">
import type { Content, ImageField, KeyTextField, RichTextField } from '@prismicio/client'

const { items: rawItems } = defineProps<{ items: Content.RichTextCarouselSliceWithTabsItem[] }>()

const keys = computed(() => rawItems.map(i => i.key!))
const selectedKey = ref<string>(keys.value[0]!)

interface Item { images: ImageField[], buttonLogo: ImageField, comingSoon: boolean, comingSoonLabel: KeyTextField, content: RichTextField, key: string }

const items = computed<Item[]>(() => {
  const items: Item[] = []
  rawItems.forEach((i) => {
    if (!items.some(ii => ii.key === i.key))
      items.push({ images: [i.slide], ...i, key: i.key! })
    else
      items.find(ii => ii.key === i.key)!.images.push(i.slide)
  })
  return items
})
const selectedItem = computed(() => items.value.find(i => i.key === selectedKey.value))
</script>

<template>
  <div>
    <ul w="[calc(100%+64px)]" flex="~ gap-24 xl:gap-32 xl:justify-center " snap="x normal" mx--32 of-x-auto pt-18 nq-scrollbar-hide lg:pr-0>
      <li v-for="({ buttonLogo, comingSoon, comingSoonLabel, key }) in items" :key scroll-mx="32 xl:64" relative shrink-0 first:pl-32 last:pr-32 :data-selected="selectedKey === key ? '' : undefined">
        <p v-if="comingSoon" ring="1 neutral-500" absolute left-8 top--14 z-1 whitespace-nowrap rounded-4 bg-neutral-400 px-8 py-4 text-10 font-bold nq-label>
          {{ comingSoonLabel }}
        </p>
        <button
          :disabled="comingSoon" flex="~ items-center gap-6" h-full whitespace-nowrap rounded-8 bg-gradient-blue f-px-sm f-py-xs op="50 selected:100 hocus:not-disabled:100" @click="selectedKey = key"
        >
          <template v-if="key !== 'Naka'">
            <NuxtImg :src="$prismic.asImageSrc(buttonLogo)!" h-full w-24 />
            <span text="white f-xl" font-semibold>{{ key }}</span>
          </template>
          <PrismicImage v-else :field="buttonLogo" h-18 />
        </button>
      </li>
    </ul>
    <RichTextCarouselDefault v-if="selectedItem" f-mt-2xl :images="selectedItem.images" :content="selectedItem.content" />
  </div>
</template>
