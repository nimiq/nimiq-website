<script setup lang="ts">
interface GridItem { headline: string, image?: string, subline?: string, icon?: string }
defineProps<{ headline: string, subline?: string, items: GridItem[] }>()
</script>

<template>
  <div>
    <!-- Headline -->
    <div class="flex flex-col md:items-center">
      <h2 class="nq-heading break-keep md:text-center">
        {{ headline }}
      </h2>
      <p v-if="subline" class="text-neutral-600 md:text-center">
        {{ subline }}
      </p>
    </div>

    <!-- Grid -->
    <ul class="flex flex-col lg:flex-row gap-y-6 lg:items-center w-full mt-8 md:mt-12">
      <li v-for="(item, i) in items" :key="i" class="py-6 flex-1 border-b-1 border-lg:b-0 border-lg:r-1 border-last:0 border-white/15 border-solid md:mx-auto md:w-max">
        <NuxtImg v-if="item.image" class="rounded-2 h-20 object-contain md:mx-auto" :src="item.image" />
        <Icon v-else-if="item.icon" class="h-20 md:mx-auto" :name="item.icon" />
        <h3 class="text-green md:text-center text-lg md:text-xl font-bold max-w-20ch mt-2 md:mt-3 lg:mx-auto">
          {{ item.headline }}
        </h3>
        <p v-if="item.subline" class="text-neutral-700 md:text-center max-w-20ch mt-2 md:mt-3 lg:mx-auto">
          {{ item.subline }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pill-gradient {
  background: radial-gradient(
    78.95% 73.1% at 12.5% 14.72%,
    var(--c) 0%,
    color-mix(in oklch, var(--c) 30%, transparent) 100%
  );
}
</style>
