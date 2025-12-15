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

      <section v-if="page.simple_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.simple_headline.headline" :subline="page.simple_headline.subline" :label="page.simple_headline.label" :links="page.simple_headline.links" />
      </section>

      <GridExchanges />

      <section v-if="page.buy_nim_in_the_walle_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.buy_nim_in_the_walle_headline.headline" :subline="page.buy_nim_in_the_walle_headline.subline" :label="page.buy_nim_in_the_walle_headline.label" :links="page.buy_nim_in_the_walle_headline.links" />
      </section>

      <ShowcaseWalletHoverable v-if="page.wallet_hover" :data="page.wallet_hover" />

      <section v-if="page.one_of_the_smallest__headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.one_of_the_smallest__headline.headline" :subline="page.one_of_the_smallest__headline.subline" :label="page.one_of_the_smallest__headline.label" />
      </section>

      <TokenDistribution v-if="page.token_distribution?.item" :items="page.token_distribution.item" />

      <BannerBuyAndSell v-if="page.buy_and_sell_banner" :data="page.buy_and_sell_banner" />

      <section v-if="page.no_download_no_perso_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.no_download_no_perso_headline.headline" :links="page.no_download_no_perso_headline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
