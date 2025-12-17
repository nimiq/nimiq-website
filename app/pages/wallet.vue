<script setup lang="ts">
const page = await queryCollection('wallet').first()!

const title = page.seo?.title || page.hero?.title || 'Nimiq Wallet'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/wallet' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/wallet' }] })
</script>

<template>
  <NuxtLayout dark-header>
    <main>
      <section dark text-neutral mx-0 py-0 bg-darkblue scheme-dark relative of-hidden children:max-w-none max-md:min-h-auto pt="148 md:153 lg:160" min-h="auto md:100vh">
        <HeroWallet v-bind="page.hero" />
      </section>

      <section dark nq-section-gap bg-darkblue scheme-dark relative>
        <ShowcaseWallet :playground-url="page.playground.url" />
      </section>

      <section dark nq-section-gap px-0 pb-0 bg-darkerblue scheme-dark relative>
        <ShowcaseConsensus v-bind="page.consensus" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.intro" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <ShowcaseCurrency v-bind="page.currencies" />
      </section>

      <section dark class="staking-gradient" scheme-dark relative>
        <HeadlineStaking v-bind="page.staking" />
      </section>

      <BannerWallet v-bind="page.banner" />

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.seed.headline" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <GridSection :items="page.seed.items" />
      </section>

      <section dark nq-section-gap bg-darkblue scheme-dark relative>
        <ShowcaseWalletWords v-bind="page.challenge" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.noEmail" />
      </section>
    </main>
  </NuxtLayout>
</template>
