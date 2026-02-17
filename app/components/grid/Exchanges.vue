<script setup lang="ts">
const exchanges = await usePrerenderData('exchanges', () => queryCollection('exchanges').all())
</script>

<template>
  <ul class="grid grid-cols-[repeat(auto-fit,minmax(200px,368px))] gap-4 justify-center bg-neutral-0 !pt-0">
    <li v-for="exchange in exchanges" :key="exchange.slug">
      <NuxtLink class="flex flex-row items-center gap-x-4 nq-hoverable" :to="exchange.link" target="_blank" external>
        <NuxtImg class="h-full w-10 object-contain flex items-center" :src="exchange.logo" :alt="exchange.name" />
        <h3 class="font-semibold text-lg md:text-xl">
          {{ exchange.name }}
        </h3>
      </NuxtLink>
    </li>
  </ul>
</template>
