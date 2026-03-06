<script setup lang="ts">
const page = await usePage('buyAndSell')

const title = page.seo?.title || page.hero?.title || 'Buy and Sell NIM'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/buy-and-sell' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/buy-and-sell' }] })
</script>

<template>
  <NuxtLayout>
    <section class="bg-neutral-0 relative overflow-x-clip" style="--px: 0px">
      <HeroBuyAndSell :data="page.hero" />
    </section>

    <section class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.intro">
        <ul v-if="page.intro.videoTutorial" class="flex gap-4 lg:gap-5 flex-wrap f-mt-md">
          <li>
            <UiVideoTutorialLink :label="page.intro.videoTutorial.label" :href="page.intro.videoTutorial.videoUrl" />
          </li>
        </ul>
      </Headline>
    </section>

    <section class="bg-neutral-0 pt-0">
      <GridExchanges />
    </section>

    <section class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.wallet.headline">
        <ul v-if="page.wallet.videoTutorial" class="flex gap-4 lg:gap-5 flex-wrap f-mt-md">
          <li>
            <UiVideoTutorialLink :label="page.wallet.videoTutorial.label" :href="page.wallet.videoTutorial.videoUrl" />
          </li>
        </ul>
      </Headline>
    </section>

    <section class="bg-neutral-0 pt-0">
      <ShowcaseWalletHoverable :data="page.wallet.content" />
    </section>

    <section class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.distribution.headline" />
    </section>

    <section class="bg-neutral-0">
      <TokenDistribution :items="page.distribution.items" />
    </section>

    <section class="bg-neutral-0 f-px-sm relative z-10 overflow-x-clip" style="--pb: 0px">
      <BannerBuyAndSell :data="page.cta" :overlaps-next-section="page.cta.overlapsNextSection" />
    </section>

    <section class="nq-section-gap bg-neutral-100">
      <Headline v-bind="page.noDownload" />
    </section>
  </NuxtLayout>
</template>
