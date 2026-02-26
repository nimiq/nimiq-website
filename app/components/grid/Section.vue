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
    <ul class="grid grid-cols-[repeat(auto-fit,min(calc(100vw-64px),330px))] gap-8 md:gap-10 lg:gap-12 xl:gap-16">
      <li v-for="(item, i) in items" :key="i" class="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-5 gap-y-3 lg:gap-y-4 items-center">
        <Icon v-if="item.icon" class="text-[48px] lg:text-[56px] xl:text-[64px]" :name="item.icon" />
        <NuxtImg v-else-if="item.image" class="size-12 lg:size-14 xl:size-16" :src="item.image" width="64" height="64" />
        <div class="[&>*]:text-left">
          <h3>{{ item.headline }}</h3>
        </div>
        <div v-if="item.subline" class="col-span-2">
          <p>{{ item.subline }}</p>
        </div>
      </li>
    </ul>
  </template>

  <template v-else-if="variation === 'threeColumnsImageText'">
    <ul class="flex flex-col lg:flex-row gap-x-6 gap-y-10 items-center w-full">
      <li v-for="(item, i) in items" :key="i" class="flex-1 w-full">
        <NuxtImg v-if="item.image" class="w-full w-md:w-max w-lg:full flex max-h-[229px] object-contain object-md:cover object-lg:contain lg:mx-auto dark:bg-neutral-200" :src="item.image" rounded />
        <h3 class="text-20/26 md:text-center mt-6 min-h-2lh lg:mx-auto lg:max-w-24ch">
          {{ item.headline }}
        </h3>
      </li>
    </ul>
  </template>

  <template v-else-if="variation === 'threeColumnsIconsText'">
    <ul class="flex flex-col lg:flex-row gap-y-6 lg:items-center w-full">
      <li v-for="(item, i) in items" :key="i" class="py-6 flex-1 border-b-1 border-lg:b-0 border-lg:r-1 border-last:0 border-white/15 border-solid md:mx-auto md:w-max">
        <NuxtImg v-if="i === 0" class="rounded-2 h-20 object-contain md:mx-auto" src="/assets/images/home/email.svg" />
        <NuxtImg v-if="i === 1" class="rounded-2 h-20 object-contain md:mx-auto" src="/assets/images/home/card.svg" />
        <NuxtImg v-if="i === 2" class="rounded-2 h-20 object-contain md:mx-auto" src="/assets/images/home/stats.svg" />
        <h3 class="text-green md:text-center text-lg md:text-xl font-bold max-w-20ch mt-2 md:mt-3 lg:mx-auto">
          {{ item.headline }}
        </h3>
      </li>
    </ul>
  </template>

  <template v-else-if="variation === 'threeColumnsIconsInline'">
    <ul class="flex flex-col lg:flex-row gap-y-6 md:items-center w-full">
      <li v-for="(item, i) in items" :key="i" class="flex-1 flex gap-x-3 items-center">
        <div class="rounded-full shrink-0 size-8" style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)" stack>
          <Icon v-if="item.icon" class="text-16 text-white" :name="item.icon" />
        </div>
        <div class="text-base md:text-lg text-neutral-900">
          {{ item.content }}
        </div>
      </li>
    </ul>
  </template>
</template>
