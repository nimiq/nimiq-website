<script setup lang="ts">
interface GridItem {
  icon?: string
  iconName?: string
  headline?: string
  subline?: string
  content?: string
  image?: string
  color?: string
  linkHref?: string
}

interface Props {
  items: GridItem[]
  variation?: 'default' | 'threeColumnsImageText' | 'threeColumnsIconsText' | 'threeColumnsIconsInline' | 'iconGrid'
}

withDefaults(defineProps<Props>(), { variation: 'default' })
</script>

<template>
  <template v-if="variation === 'default' || variation === 'iconGrid'">
    <ul nq-grid-330>
      <li v-for="(item, i) in items" :key="i" grid="~ cols-[auto_1fr] rows-[auto_1fr] gap-x-20 gap-y12 lg:gap-y-16 items-center">
        <Icon v-if="item.icon" :name="item.icon" class="size-48 lg:size-56 xl:size-64" />
        <NuxtImg v-else-if="item.image" :src="item.image" size="48 lg:56 xl:64" />
        <h3 text-left>
          {{ item.headline }}
        </h3>
        <p v-if="item.subline" col-span-2>
          {{ item.subline }}
        </p>
      </li>
    </ul>
  </template>

  <template v-else-if="variation === 'threeColumnsImageText'">
    <ul flex="~ col lg:row gap-x-24 gap-y-40 items-center" w-full>
      <li v-for="(item, i) in items" :key="i" flex-1 w-full>
        <NuxtImg v-if="item.image" :src="item.image" w="full md:w-max lg:full" rounded flex max-h-229 object="contain md:cover lg:contain" lg:mx-auto dark:bg-neutral-200 />
        <h3 text="20/26 md:center" mt-24 min-h-2lh lg:mx-auto lg:max-w-24ch>
          {{ item.headline }}
        </h3>
      </li>
    </ul>
  </template>

  <template v-else-if="variation === 'threeColumnsIconsText'">
    <ul flex="~ col lg:row gap-y-24 lg:items-center" w-full>
      <li v-for="(item, i) in items" :key="i" py-24 flex-1 border="b-1 lg:b-0 lg:r-1 last:0 white/15 solid" md:mx-auto md:w-max>
        <NuxtImg v-if="i === 0" src="/assets/images/home/email.svg" rounded-8 h-80 object-contain md:mx-auto />
        <NuxtImg v-if="i === 1" src="/assets/images/home/card.svg" rounded-8 h-80 object-contain md:mx-auto />
        <NuxtImg v-if="i === 2" src="/assets/images/home/stats.svg" rounded-8 h-80 object-contain md:mx-auto />
        <h3 text="green md:center f-xl" font-bold max-w-20ch f-mt-xs lg:mx-auto>
          {{ item.headline }}
        </h3>
      </li>
    </ul>
  </template>

  <template v-else-if="variation === 'threeColumnsIconsInline'">
    <ul flex="~ col lg:row gap-y-24 md:items-center" w-full>
      <li v-for="(item, i) in items" :key="i" flex-1 flex="~ gap-x-12 items-center">
        <div style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)" stack rounded-full shrink-0 size-32>
          <Icon v-if="item.icon" :name="item.icon" class="text-16 text-white" />
        </div>
        <div text="f-lg neutral-900">
          {{ item.content }}
        </div>
      </li>
    </ul>
  </template>
</template>
