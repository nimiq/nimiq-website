<script setup lang="ts">
const { data: exchanges } = await useAsyncData('exchanges', () => queryCollection('exchanges').all())
</script>

<template>
  <section bg-neutral-0 pt-0="!">
    <ul grid="~ cols-[repeat(auto-fit,minmax(200px,368px))] gap-16 justify-center">
      <li v-for="exchange in exchanges" :key="exchange.slug">
        <NuxtLink :to="exchange.link" flex="~ row items-center gap-x-16" target="_blank" external nq-hoverable>
          <img :src="exchange.logo" :alt="exchange.name" h-full w-40 object-contain flex="~ items-center">
          <h3 font-semibold f-text-xl>
            {{ exchange.name }}
          </h3>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
