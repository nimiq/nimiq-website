<script setup lang="ts">
const page = await usePage('wallet')

const title = page.seo?.title || page.hero?.title || 'Nimiq Wallet'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/wallet' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/wallet' }] })
</script>

<template>
  <NuxtLayout dark-header>
    <main>
      <section class="wallet-hero-section bg-darkerblue relative" dark scheme-dark>
        <HeroWallet v-bind="page.hero" />
      </section>

      <section class="bg-darkerblue relative overflow-x-clip md:pt-4 md:pt-6 wallet-showcase" scheme-dark children:max-w-none>
        <ShowcaseWallet :playground-url="page.playground.url" />
      </section>

      <section class="bg-darkerblue relative" style="--pt:160px;--pb:0px;--nq-max-width:none;padding-left:0;padding-right:0" dark scheme-dark>
        <ShowcaseConsensus v-bind="page.consensus" />
      </section>

      <section class="nq-section-gap bg-neutral-0">
        <Headline v-bind="page.intro" />
      </section>

      <section class="bg-neutral-0 items-stretch">
        <ShowcaseCurrency v-bind="page.currencies" />
      </section>

      <section class="gradient-transparent-green-transparent bg-neutral-100 relative" scheme-dark>
        <HeadlineStaking v-bind="page.staking" />
      </section>

      <section class="nq-section-gap bg-neutral-0">
        <Headline v-bind="page.seed.headline" />
      </section>

      <section class="bg-neutral-0 items-stretch">
        <GridSection :items="page.seed.items" variation="threeColumnsIconsInline" />
      </section>

      <section class="px-2 bg-neutral-0 relative overflow-x-clip items-stretch">
        <ShowcaseWalletWords v-bind="page.challenge" />
      </section>

      <section class="nq-section-gap bg-neutral-100">
        <Headline v-bind="page.noEmail" />
      </section>
    </main>
  </NuxtLayout>
</template>

<style>
.wallet-hero-section {
  background-image: linear-gradient(to bottom, var(--color-darkerblue), #3d4383);
}
.wallet-hero-section p {
  color: rgba(255, 255, 255, 0.7);
}

@media (min-width: 768px) {
  .wallet-hero-section {
    --f-pt-max: 189.3 !important;
    --f-pb-max: 44.8 !important;
  }
}
</style>
