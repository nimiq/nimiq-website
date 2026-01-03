<script setup lang="ts">
const page = await queryCollection('staking').first()!

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
    <section nq-section-gap class="staking-calculator-section" bg-neutral-100 f-py-3xl>
      <Headline v-bind="page.calculator.headline" />
      <StakingCalculator :amount-label="page.calculator.amountLabel" :period-label="page.calculator.periodLabel" :rewards-label="page.calculator.rewardsLabel" f-mt-2xl />
    </section>

    <!-- Section 3: Distribution with charts -->
    <section bg-neutral-0 f-py-3xl>
      <Headline v-bind="page.distribution.headline" />
      <StakingDistribution f-mt-2xl />
    </section>

    <!-- Section 4: Video section (staking in wallet) -->
    <section nq-section-gap bg-neutral-0 f-py-3xl>
      <Headline v-bind="page.video.headline" />
      <YouTube :embed-url="page.video.embedUrl" :poster="page.video.poster" :title="page.video.title" f-mt-2xl />
      <div v-if="page.video.description" flex="~ col md:items-center" f-mt-lg>
        <h3 v-if="page.video.title" nq-h3 md:text-center>
          {{ page.video.title }}
        </h3>
        <p max-w-prose md:text-center>
          {{ page.video.description }}
        </p>
      </div>
    </section>

    <!-- Section 5: Validator pools + banner -->
    <section nq-section-gap bg-neutral-0 f-py-3xl>
      <Headline v-bind="page.delegate" />
      <ValidatorList f-mt-2xl />
      <BannerSection :items="page.banner.items" :overlaps-next-section="false" f-mt-3xl />
    </section>

    <!-- Section 6: FAQ + footer hero -->
    <section bg-neutral-100 f-py-3xl>
      <h2 v-if="page.faq.headline" nq-h2>
        {{ page.faq.headline }}
      </h2>
      <StakingFaq :items="page.faq.items" :forum-link="page.faq.forumLink" />
      <div class="staking-footer-hero" f-mt-3xl>
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
