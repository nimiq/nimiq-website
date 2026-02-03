<script setup lang="ts">
const page = await usePage('buyAndSell')

const title = page.seo?.title || page.hero?.title || 'Buy and Sell NIM'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/buy-and-sell' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/buy-and-sell' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <!-- Section 0: Hero -->
      <section>
        <HeroBuyAndSell :data="page.hero" />
      </section>

      <!-- Section 1: Exchanges (headline + video tutorial + grid) -->
      <section class="nq-section-gap bg-neutral-0">
        <Headline v-bind="page.intro" />

        <!-- Mini video tutorial button -->
        <button v-if="page.intro.videoTutorial" class="flex items-center gap-3 mx-auto mt-6 text-blue hover:text-blue-dark transition-colors">
          <span class="flex items-center justify-center size-8 rounded-full bg-blue/10">
            <Icon name="nimiq:triangle-right" class="size-4 text-blue" />
          </span>
          <span class="font-semibold">{{ page.intro.videoTutorial.label }}</span>
        </button>

        <GridExchanges class="mt-12 md:mt-16" />
      </section>

      <!-- Section 2: Wallet (headline + showcase) -->
      <section class="nq-section-gap bg-neutral-0">
        <Headline v-bind="page.wallet.headline" />
        <ShowcaseWalletHoverable class="mt-12 md:mt-16" :data="page.wallet.content" />
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
