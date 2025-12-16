<script setup lang="ts">
const { data } = await useAsyncData('buy-and-sell', () => queryCollection('buyAndSell').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const title = `${page.hero.headline} | Nimiq`
const description = page.hero.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <NuxtLayout>
    <main>
      <section bg-neutral-0>
        <HeroBuyAndSell :data="page.hero" />
      </section>

      <section bg-neutral-0>
        <Headline v-bind="page.intro" />
      </section>

      <section bg-neutral-0>
        <GridExchanges />
      </section>

      <section bg-neutral-0>
        <Headline v-bind="page.wallet.headline" />
      </section>

      <section bg-neutral-0>
        <ShowcaseWalletHoverable :data="page.wallet.content" />
      </section>

      <section bg-neutral-0>
        <Headline v-bind="page.distribution.headline" />
      </section>

      <section bg-neutral-0>
        <TokenDistribution :items="page.distribution.items" />
      </section>

      <section bg-neutral-0>
        <BannerBuyAndSell :data="page.cta" />
      </section>

      <section bg-neutral-100>
        <Headline v-bind="page.noDownload" />
      </section>
    </main>
  </NuxtLayout>
</template>
