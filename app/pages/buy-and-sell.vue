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
      <section bg-neutral-0>
        <HeroBuyAndSell :data="page.hero" />
      </section>

      <!-- Section 1: Exchanges (headline + grid) -->
      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.intro" />
        <GridExchanges f-mt-2xl />
      </section>

      <!-- Section 2: Wallet (headline + showcase) -->
      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.wallet.headline" />
        <ShowcaseWalletHoverable :data="page.wallet.content" f-mt-2xl />
      </section>

      <!-- Section 3: Distribution (headline + chart + banner) -->
      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.distribution.headline" pb-0 />
        <TokenDistribution :items="page.distribution.items" />
        <BannerBuyAndSell :data="page.cta" mt-32 />
      </section>

      <!-- Section 4: No download CTA -->
      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.noDownload" />
      </section>
    </main>
  </NuxtLayout>
</template>
