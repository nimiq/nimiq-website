<script setup lang="ts">
interface GridItem { headline: string, image?: string, subline?: string, icon?: string }
defineProps<{ items: GridItem[] }>()
</script>

<template>
  <ul class="flex flex-col lg:flex-row gap-y-24 lg:items-center w-full" nq-raw>
    <li v-for="(item, i) in items" :key="i" class="py-24 flex-1 border-b lg:border-b-0 lg:border-r last:border-0 border-white/15 border-solid md:mx-auto md:w-max">
      <NuxtImg v-if="item.image" class="rounded-8 h-80 object-contain md:mx-auto" :src="item.image" />
      <Icon v-else-if="item.icon" class="h-80 md:mx-auto" :name="item.icon" />
      <h3 class="text-green md:text-center text-xl font-bold max-w-[20ch] mt-4 lg:mx-auto">
        {{ item.headline }}
      </h3>
      <p v-if="item.subline" class="text-neutral-700 md:text-center max-w-[20ch] mt-2 lg:mx-auto">
        {{ item.subline }}
      </p>
    </li>
  </ul>
</template>
