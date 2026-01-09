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
    <ul w="[calc(100%+64px)]" flex="~ gap-24 xl:gap-32 xl:justify-center" snap="x normal" mx--32 pt-18 of-x-auto nq-scrollbar-hide lg:pr-0>
      <li v-for="({ buttonLogo, comingSoon, comingSoonLabel, key }) in items" :key scroll-mx="32 xl:64" shrink-0 relative first:pl-32 last:pr-32 :data-selected="selectedKey === key ? '' : undefined">
        <p v-if="comingSoon" ring="1 neutral-500" text-10 font-bold px-8 py-4 rounded-4 bg-neutral-400 whitespace-nowrap left-8 top--14 absolute z-1 nq-label>
          {{ comingSoonLabel }}
        </p>
        <button :disabled="comingSoon" flex="~ items-center gap-6" rounded-8 bg-gradient-blue h-full whitespace-nowrap f-px-sm f-py-xs op="50 selected:100 hocus:not-disabled:100" @click="selectedKey = key">
          <NuxtImg v-if="key === 'Naka'" :src="buttonLogo" h-18 w-full />
          <template v-else>
            <NuxtImg :src="buttonLogo" h-full w-24 />
            <span text="white f-xl" font-semibold>{{ key }}</span>
          </template>
        </button>
      </li>
    </ul>
    <RichTextCarouselDefault v-if="selectedItem" f-mt-2xl :images="selectedItem.images" :content="selectedItem.content" />
  </div>
</template>
