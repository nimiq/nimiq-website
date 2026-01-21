<script setup lang="ts">
const { data: exchanges } = await useAsyncData('exchanges', () => queryCollection('exchanges').all())
</script>

<template>
  <ul class="grid grid-cols-[repeat(auto-fit,minmax(200px,368px))] gap-4 grid-justify-center bg-neutral-0 pt-0-!">
    <li v-for="exchange in exchanges" :key="exchange.slug">
      <NuxtLink class="flex flex-row flex-items-center gap-x-4 nq-hoverable" :to="exchange.link" target="_blank" external>
        <NuxtImg class="h-full w-10 object-contain flex flex-items-center" :src="exchange.logo" :alt="exchange.name" />
        <h3 class="font-semibold f-text-xl">
          {{ exchange.name }}
        </h3>
      </NuxtLink>
    </li>
  </ul>
</template>
