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
      <section dark class="bg-darkerblue" scheme-dark relative>
        <HeroWallet v-bind="page.hero" />
      </section>

      <section bg-darkerblue scheme-dark relative of-x-clip children:max-w-none md:f-pt-3xl>
        <ShowcaseWallet :playground-url="page.playground.url" />
      </section>

      <section dark px-0 pb-0 pt-160 bg-darkerblue scheme-dark relative>
        <ShowcaseConsensus v-bind="page.consensus" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.intro" />
      </section>

      <section bg-neutral-0>
        <ShowcaseCurrency v-bind="page.currencies" />
      </section>

      <section bg-neutral-100 class="gradient-transparent-green-transparent" relative>
        <HeadlineStaking v-bind="page.staking" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.seed.headline" />
      </section>

      <section bg-neutral-0>
        <GridSection :items="page.seed.items" />
      </section>

      <section px-8 bg-neutral-0 relative of-x-clip>
        <ShowcaseWalletWords v-bind="page.challenge" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.noEmail" />
      </section>
    </main>
  </NuxtLayout>
</template>
