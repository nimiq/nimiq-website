<script setup lang="ts">
interface ExchangesGridSlice {
  primary: Record<string, never>
}

defineProps<{ slice: ExchangesGridSlice, slices?: any[] }>()

const { client } = usePrismic()
const { data: exchanges } = await useAsyncData(`exchanges`, async () => {
  try {
    return await client.getAllByType('exchange').then(res => res.map(r => r.data))
  }
  catch (error) {
    console.error(`Exchanges not found:`, error)
    throw createError({ statusCode: 404, statusMessage: 'Exchanges not found', fatal: true })
  }
}, {
  server: true,
})
</script>

<template>
  <section bg-neutral-0 pt-0="!">
    <ul grid="~ cols-[repeat(auto-fit,minmax(200px,368px))] gap-16 justify-center">
      <li v-for="({ link, logo, name }, i) in exchanges" :key="i">
        <PrismicLink :field="link" flex="~ row items-center gap-x-16" nq-hoverable target="_blank">
          <ProxiedPrismicImage :field="logo!" h-full w-40 object-contain flex="~ items-center" />
          <h3 font-semibold f-text-xl>
            {{ name }}
          </h3>
        </PrismicLink>
      </li>
    </ul>
  </section>
</template>
