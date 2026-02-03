<script setup lang="ts">
interface BannerData {
  headline: string
  cta: string
  features?: { icon: string, description: string }[]
}

defineProps<{ data: BannerData }>()
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[1fr_max-content] lg:grid-flow-col ring-[1.5px] ring-neutral-300 py-64 px-32 md:px-64 lg:p-72 rounded-2 bg-neutral-0 gap-x-6 w-full relative shadow">
    <h3 class="text-44 text-neutral font-bold max-w-[24ch]">
      {{ data.headline }}
    </h3>
    <NuxtLink class="mt-4 md:mt-6 nq-arrow nq-pill-lg nq-pill-blue" :to="data.cta" />
    <ul v-if="data.features?.length" class="flex flex-col gap-3 md:gap-4 lg:gap-6 mt-10 lg:mt-0 lg:row-span-2">
      <li v-for="({ description, icon }, i) in data.features" :key="i" class="flex gap-3 items-center">
        <div class="rounded-full bg-gold size-8 flex items-center justify-center">
          <Icon class="text-18 text-white relative" :name="icon" :class="{ '-bottom-0.5 right-px translate-x-px': icon === 'nimiq:document-filled' }" />
        </div>
        <p>{{ description }}</p>
      </li>
    </ul>
  </div>
</template>
