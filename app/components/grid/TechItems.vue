<script setup lang="ts">
interface GridItem { headline: string, image?: string, subline?: string, icon?: string }
defineProps<{ items: GridItem[] }>()
</script>

<template>
  <ul class="flex flex-col flex-lg:row gap-y-6 flex-lg:items-center w-full">
    <li v-for="(item, i) in items" :key="i" class="py-6 flex-1 border-b-1 border-lg:b-0 border-lg:r-1 border-last:0 border-white/15 border-solid md:mx-auto md:w-max">
      <NuxtImg v-if="item.image" class="rounded-2 h-20 object-contain md:mx-auto" :src="item.image" />
      <Icon v-else-if="item.icon" class="h-20 md:mx-auto" :name="item.icon" />
      <h3 class="text-green text-md:center text-f-xl font-bold max-w-20ch f-mt-xs lg:mx-auto">
        {{ item.headline }}
      </h3>
      <p v-if="item.subline" class="text-neutral-700 text-md:center max-w-20ch f-mt-xs lg:mx-auto">
        {{ item.subline }}
      </p>
    </li>
  </ul>
</template>
