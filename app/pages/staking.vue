<script setup lang="ts">
const page = await usePage('staking')

const title = page.seo?.title || page.hero?.title || 'Nimiq Staking'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/staking' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/staking' }] })
</script>

<template>
  <NuxtLayout>
    <!-- Section 0: Hero with white bg + radial green gradient -->
    <HeroStaking :headline="page.hero.title" />

    <!-- Section 1: Quote on green gradient -->
    <StakingQuote :text="page.quote.text" />

    <!-- Section 2: Calculator section with headline + calculator -->
    <section class="staking-calculator-section nq-section-gap bg-neutral-100 py-16 md:py-24">
      <Headline v-bind="page.calculator.headline" />
      <StakingCalculator class="mt-12 md:mt-16" :amount-label="page.calculator.amountLabel" :period-label="page.calculator.periodLabel" :rewards-label="page.calculator.rewardsLabel" />
    </section>

    <!-- Section 3: Distribution with charts -->
    <section class="bg-neutral-0 py-16 md:py-24">
      <Headline v-bind="page.distribution.headline" />
      <StakingDistribution class="mt-12 md:mt-16" />
    </section>

    <!-- Section 4: Video section (staking in wallet) -->
    <section class="nq-section-gap bg-neutral-0 py-16 md:py-24">
      <Headline v-bind="page.video.headline" />
      <YouTube class="mt-12 md:mt-16" :embed-url="page.video.embedUrl" :poster="page.video.poster" :title="page.video.title" />
      <div v-if="page.video.description" class="flex flex-col flex-md:items-center mt-6 md:mt-8">
        <h3 v-if="page.video.title" class="nq-h3 md:text-center">
          {{ page.video.title }}
        </h3>
        <p class="max-w-prose md:text-center">
          {{ page.video.description }}
        </p>
      </div>
    </section>

    <!-- Section 5: Validator pools + banner -->
    <section class="nq-section-gap bg-neutral-0 py-16 md:py-24">
      <Headline v-bind="page.delegate" />
      <ValidatorList class="mt-12 md:mt-16" />
      <BannerSection class="mt-16 md:mt-24" :items="page.banner.items" :overlaps-next-section="false" />
    </section>

    <!-- Section 6: FAQ + footer hero -->
    <section class="bg-neutral-100 py-16 md:py-24">
      <h2 v-if="page.faq.headline" class="nq-h2">
        {{ page.faq.headline }}
      </h2>
      <StakingFaq :items="page.faq.items" :forum-link="page.faq.forumLink" />
      <div class="staking-footer-hero mt-16 md:mt-24">
        <HeadlineStaking v-bind="page.wallet" />
      </div>
    </section>
  </NuxtLayout>
</template>

<style>
.staking-calculator-section {
  background: linear-gradient(180deg, rgb(var(--nq-green) / 0.1) 0%, rgb(var(--nq-neutral-100)) 20%);
}

.staking-footer-hero {
  background: linear-gradient(180deg, transparent 0%, rgb(var(--nq-green) / 0.3) 100%);
  border-radius: 16px;
  padding: 48px 24px;
}
</style>
