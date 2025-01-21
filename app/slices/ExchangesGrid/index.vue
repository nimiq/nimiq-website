<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.ExchangesGridSlice>())

const { client } = usePrismic()
const { data: exchanges } = await useAsyncData('exchange', () => client.getByType('exchange'))
</script>

<template>
  <section bg-neutral-0>
    <ul grid="~ cols-[repeat(auto-fit,minmax(200px,368px))] gap-16 justify-center">
      <li v-for="({ data: { link, logo, name } }, i) in exchanges?.results" :key="i">
        <PrismicLink :field="link" flex="~ row items-center gap-x-16" nq-hoverable>
          <PrismicImage :field="logo" h-full w-40 object-contain flex="~ items-center" />
          <h3 font-semibold text-xl>
            {{ name }}
          </h3>
        </PrismicLink>
      </li>
    </ul>
  </section>
</template>
