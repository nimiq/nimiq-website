<script setup lang="ts">
const { data: page } = await useAsyncData('buy-and-sell', () => queryCollection('buyAndSell').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.hero?.headline ? `${page.value.hero.headline} | Nimiq` : 'Buy and Sell NIM | Nimiq'
const description = page.value.hero?.subline || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <HeroBuyAndSell v-if="page.hero" :data="page.hero" />

      <section v-if="page.simpleHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.simpleHeadline.headline" :subline="page.simpleHeadline.subline" :label="page.simpleHeadline.label" :links="page.simpleHeadline.links" />
      </section>

      <GridExchanges />

      <section v-if="page.buyNimInTheWalleHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.buyNimInTheWalleHeadline.headline" :subline="page.buyNimInTheWalleHeadline.subline" :label="page.buyNimInTheWalleHeadline.label" :links="page.buyNimInTheWalleHeadline.links" />
      </section>

      <ShowcaseWalletHoverable v-if="page.walletHover" :data="page.walletHover" />

      <section v-if="page.oneOfTheSmallestHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.oneOfTheSmallestHeadline.headline" :subline="page.oneOfTheSmallestHeadline.subline" :label="page.oneOfTheSmallestHeadline.label" />
      </section>

      <TokenDistribution v-if="page.tokenDistribution?.item" :items="page.tokenDistribution.item" />

      <BannerBuyAndSell v-if="page.buyAndSellBanner" :data="page.buyAndSellBanner" />

      <section v-if="page.noDownloadNoPersoHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.noDownloadNoPersoHeadline.headline" :links="page.noDownloadNoPersoHeadline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
