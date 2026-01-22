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
      <section class="bg-darkerblue relative" dark scheme-dark>
        <HeroWallet v-bind="page.hero" />
      </section>

      <section class="bg-darkerblue relative of-x-clip md:pt-16 md:pt-24" scheme-dark children:max-w-none>
        <ShowcaseWallet :playground-url="page.playground.url" />
      </section>

      <section class="px-0 pb-0 pt-40 bg-darkerblue relative" dark scheme-dark>
        <ShowcaseConsensus v-bind="page.consensus" />
      </section>

      <section class="nq-section-gap bg-neutral-0">
        <Headline v-bind="page.intro" />
      </section>

      <section class="bg-neutral-0">
        <ShowcaseCurrency v-bind="page.currencies" />
      </section>

      <section class="gradient-transparent-green-transparent bg-neutral-100 relative">
        <HeadlineStaking v-bind="page.staking" />
      </section>

      <section class="nq-section-gap bg-neutral-0">
        <Headline v-bind="page.seed.headline" />
      </section>

      <section class="bg-neutral-0">
        <GridSection :items="page.seed.items" />
      </section>

      <section class="px-2 bg-neutral-0 relative of-x-clip">
        <ShowcaseWalletWords v-bind="page.challenge" />
      </section>

      <section class="nq-section-gap bg-neutral-100">
        <Headline v-bind="page.noEmail" />
      </section>
    </main>
  </NuxtLayout>
</template>
