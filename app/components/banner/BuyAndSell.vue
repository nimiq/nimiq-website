<script setup lang="ts">
interface BannerData {
  headline: string
  cta: string
  features?: { icon: string, description: string }[]
}

defineProps<{ data: BannerData }>()
</script>

<template>
  <div class="grid grid-cols-1 grid-lg:cols-[1fr_max-content] grid-gap-x-32 grid-lg:flow-col ring-1.5 ring-neutral-300 p-y-64 p-x-32 p-md:x-64 p-lg:72 rounded-8 bg-neutral-0 gap-x-24 w-full relative" shadow>
    <h3 class="text-44 text-neutral nq-raw font-bold max-w-24ch">
      {{ data.headline }}
    </h3>
    <NuxtLink class="f-mt-md nq-arrow nq-pill-lg nq-pill-blue" :to="data.cta" />
    <ul v-if="data.features?.length" class="flex flex-col flex-gap-12 flex-md:gap-16 flex-lg:gap-24 mt-40 lg:mt-0 lg:row-span-2">
      <li v-for="({ description, icon }, i) in data.features" :key="i" class="flex flex-gap-12 flex-items-center">
        <div class="rounded-full bg-gold size-32" stack>
          <Icon class="text-18 text-white relative" :name="icon" :class="{ 'bottom--2 right-1 translate-x-1': icon === 'nimiq:document-filled' }" />
        </div>
        <p>{{ description }}</p>
      </li>
    </ul>
  </div>
</template>
