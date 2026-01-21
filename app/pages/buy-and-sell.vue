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
      <!-- Section 0: Hero -->
      <section class="bg-neutral-0">
        <HeroBuyAndSell :data="page.hero" />
      </section>

      <!-- Section 1: Exchanges (headline + grid) -->
      <section class="nq-section-gap bg-neutral-0">
        <Headline v-bind="page.intro" />
        <GridExchanges class="f-mt-2xl" />
      </section>

      <!-- Section 2: Wallet (headline + showcase) -->
      <section class="nq-section-gap bg-neutral-0">
        <Headline v-bind="page.wallet.headline" />
        <ShowcaseWalletHoverable class="f-mt-2xl" :data="page.wallet.content" />
      </section>

      <!-- Section 3: Distribution (headline + chart + banner) -->
      <section class="nq-section-gap bg-neutral-0">
        <Headline class="pb-0" v-bind="page.distribution.headline" />
        <TokenDistribution :items="page.distribution.items" />
        <BannerBuyAndSell class="mt-8" :data="page.cta" />
      </section>

      <!-- Section 4: No download CTA -->
      <section class="nq-section-gap bg-neutral-100">
        <Headline v-bind="page.noDownload" />
      </section>
    </main>
  </NuxtLayout>
</template>
