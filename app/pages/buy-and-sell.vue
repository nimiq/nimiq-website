<script setup lang="ts">
const page = await queryCollection('buyAndSell').first()!

const title = page.seo?.title || page.hero?.title || 'Buy and Sell NIM'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/buy-and-sell' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/buy-and-sell' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section bg-neutral-0>
        <HeroBuyAndSell :data="page.hero" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.intro" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <GridExchanges />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.wallet.headline" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <ShowcaseWalletHoverable :data="page.wallet.content" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.distribution.headline" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <TokenDistribution :items="page.distribution.items" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <BannerBuyAndSell :data="page.cta" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.noDownload" />
      </section>
    </main>
  </NuxtLayout>
</template>
