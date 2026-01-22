<script setup lang="ts">
interface RawItem { slide?: string, key?: string, buttonLogo?: string, content?: string, comingSoon?: boolean, comingSoonLabel?: string }
interface Item { images: string[], buttonLogo: string, comingSoon: boolean, comingSoonLabel?: string, content: string, key: string }

const { items: rawItems } = defineProps<{ items: RawItem[] }>()

const keys = computed(() => [...new Set(rawItems.map(i => i.key!))])
const selectedKey = ref<string>(keys.value[0]!)

const items = computed<Item[]>(() => {
  const result: Item[] = []
  rawItems.forEach((i) => {
    const existing = result.find(ii => ii.key === i.key)
    if (!existing)
      result.push({ images: i.slide ? [i.slide] : [], buttonLogo: i.buttonLogo || '', comingSoon: i.comingSoon || false, comingSoonLabel: i.comingSoonLabel, content: i.content || '', key: i.key! })
    else if (i.slide)
      existing.images.push(i.slide)
  })
  return result
})
const selectedItem = computed(() => items.value.find(i => i.key === selectedKey.value))
</script>

<template>
  <div>
    <ul class="w-[calc(100%+64px)] flex gap-6 flex-xl:gap-8 flex-xl:justify-center -mx-8 pt-[18px] of-x-auto nq-scrollbar-hide lg:pr-0" snap="x normal">
      <li v-for="({ buttonLogo, comingSoon, comingSoonLabel, key }) in items" :key class="scroll-mx-8 xl:64 shrink-0 relative first:pl-8 last:pr-8" :data-selected="selectedKey === key ? '' : undefined">
        <p v-if="comingSoon" class="ring-1 ring-neutral-500 text-10 font-bold px-2 py-1 rounded-1 bg-neutral-400 whitespace-nowrap left-2 -top-3.5 absolute z-1 nq-label">
          {{ comingSoonLabel }}
        </p>
        <button class="flex flex-items-center gap-1.5 rounded-2 bg-gradient-blue h-full whitespace-nowrap px-3 md:px-4 py-2 md:py-3 op-50 op-selected:100 op-hocus:not-disabled:100" :disabled="comingSoon" @click="selectedKey = key">
          <NuxtImg v-if="key === 'Naka'" class="h-[18px] w-full" :src="buttonLogo" />
          <template v-else>
            <NuxtImg class="h-full w-6" :src="buttonLogo" />
            <span class="text-white text-lg md:text-xl font-semibold">{{ key }}</span>
          </template>
        </button>
      </li>
    </ul>
    <RichTextCarouselDefault v-if="selectedItem" class="mt-12 md:mt-16" :images="selectedItem.images" :content="selectedItem.content" />
  </div>
</template>
