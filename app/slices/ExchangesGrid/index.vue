<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.ExchangesGridSlice>())

const { data: exchanges } = await useFetch('/api/exchanges')
</script>

<template>
  <section bg-neutral-0 pt-0="!">
    <ul grid="~ cols-[repeat(auto-fit,minmax(200px,368px))] gap-16 justify-center">
      <li v-for="({ link, logo, name }, i) in exchanges" :key="i">
        <NuxtLink external :to="link" flex="~ row items-center gap-x-16" nq-hoverable target="_blank">
          <ProxiedPrismicImage :field="logo!" h-full w-40 object-contain flex="~ items-center" />
          <h3 font-semibold f-text-xl>
            {{ name }}
          </h3>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
