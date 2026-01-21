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
    <ul class="nq-grid-330">
      <li v-for="(item, i) in items" :key="i" class="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] grid-gap-x-20 grid-gap-y12 grid-lg:gap-y-16 grid-items-center">
        <Icon v-if="item.icon" class="size-48 lg:size-56 xl:size-64" :name="item.icon" />
        <NuxtImg v-else-if="item.image" class="size-48 size-lg:56 size-xl:64" :src="item.image" />
        <h3 class="text-left">
          {{ item.headline }}
        </h3>
        <p v-if="item.subline" class="col-span-2">
          {{ item.subline }}
        </p>
      </li>
    </ul>
  </template>

  <template v-else-if="variation === 'threeColumnsImageText'">
    <ul class="flex flex-col flex-lg:row flex-gap-x-24 flex-gap-y-40 flex-items-center w-full">
      <li v-for="(item, i) in items" :key="i" class="flex-1 w-full">
        <NuxtImg v-if="item.image" class="w-full w-md:w-max w-lg:full flex max-h-229 object-contain object-md:cover object-lg:contain lg:mx-auto dark:bg-neutral-200" :src="item.image" rounded />
        <h3 class="text-20/26 text-md:center mt-24 min-h-2lh lg:mx-auto lg:max-w-24ch">
          {{ item.headline }}
        </h3>
      </li>
    </ul>
  </template>

  <template v-else-if="variation === 'threeColumnsIconsText'">
    <ul class="flex flex-col flex-lg:row flex-gap-y-24 flex-lg:items-center w-full">
      <li v-for="(item, i) in items" :key="i" class="py-24 flex-1 border-b-1 border-lg:b-0 border-lg:r-1 border-last:0 border-white/15 border-solid md:mx-auto md:w-max">
        <NuxtImg v-if="i === 0" class="rounded-8 h-80 object-contain md:mx-auto" src="/assets/images/home/email.svg" />
        <NuxtImg v-if="i === 1" class="rounded-8 h-80 object-contain md:mx-auto" src="/assets/images/home/card.svg" />
        <NuxtImg v-if="i === 2" class="rounded-8 h-80 object-contain md:mx-auto" src="/assets/images/home/stats.svg" />
        <h3 class="text-green text-md:center text-f-xl font-bold max-w-20ch f-mt-xs lg:mx-auto">
          {{ item.headline }}
        </h3>
      </li>
    </ul>
  </template>

  <template v-else-if="variation === 'threeColumnsIconsInline'">
    <ul class="flex flex-col flex-lg:row flex-gap-y-24 flex-md:items-center w-full">
      <li v-for="(item, i) in items" :key="i" class="flex-1 flex flex-gap-x-12 flex-items-center">
        <div class="rounded-full shrink-0 size-32" style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)" stack>
          <Icon v-if="item.icon" class="text-16 text-white" :name="item.icon" />
        </div>
        <div class="text-f-lg text-neutral-900">
          {{ item.content }}
        </div>
      </li>
    </ul>
  </template>
</template>
