<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.ExchangesGridSlice>())

const { data: exchanges } = await useExchanges()
</script>

<template>
  <section bg-neutral-0>
    <ul grid="~ cols-[repeat(auto-fit,minmax(200px,368px))] gap-16 justify-center">
      <li v-for="({ url, logo, name }, i) in exchanges" :key="i">
        <NuxtLink external :to="url" flex="~ row items-center gap-x-16" nq-hoverable target="_blank">
          <NuxtImg :src="logo!" h-full w-40 object-contain flex="~ items-center" />
          <h3 font-semibold f-text-xl>
            {{ name }}
          </h3>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
