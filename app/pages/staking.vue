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

    <!-- Section 2: Calculator headline -->
    <section class="staking-calculator-section bg-neutral-100 py-16 md:py-24">
      <Headline v-bind="page.calculator.headline" />
    </section>

    <!-- Section 3: Calculator -->
    <section class="bg-neutral-100 py-16 md:py-24">
      <StakingCalculator :amount-label="page.calculator.amountLabel" :period-label="page.calculator.periodLabel" :rewards-label="page.calculator.rewardsLabel" />
    </section>

    <!-- Section 4: Distribution headline -->
    <section class="bg-neutral-0 py-16 md:py-24">
      <Headline v-bind="page.distribution.headline" />
    </section>

    <!-- Section 5: Distribution charts -->
    <section class="bg-neutral-0 py-16 md:py-24">
      <div class="flex flex-wrap gap-y-18 md:gap-x-24 lg:gap-x-40 justify-center">
        <StakingDistribution :info="page.distribution.stakedDescription" />
        <ValidatorDistribution :info="page.distribution.distributedDescription" />
      </div>
    </section>

    <!-- Section 6: Video headline -->
    <section class="bg-neutral-0 py-16 md:py-24">
      <Headline v-bind="page.video.headline" />
    </section>

    <!-- Section 7: Video content -->
    <section class="bg-neutral-0 py-16 md:py-24">
      <YouTube :embed-url="page.video.embedUrl" :poster="page.video.poster" :title="page.video.title" />
      <div v-if="page.video.description" class="flex flex-col md:items-center mt-6 md:mt-8">
        <div v-if="page.video.title" class="flex items-center gap-3">
          <div class="flex items-center justify-center rounded-full shrink-0 size-8" style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)">
            <Icon class="text-white text-sm" name="nimiq:shield" />
          </div>
          <h3 class="font-semibold text-lg md:text-xl">
            {{ page.video.title }}
          </h3>
        </div>
        <p class="max-w-[32ch] md:text-center mt-2">
          {{ page.video.description }}
        </p>
      </div>
    </section>

    <!-- Section 8: Delegate headline -->
    <section class="bg-neutral-0 py-16 md:py-24">
      <Headline v-bind="page.delegate" />
    </section>

    <!-- Section 9: Validator pools list -->
    <section class="bg-neutral-0 py-16 md:py-24">
      <ValidatorList />
    </section>

    <!-- Section 10: Banner section -->
    <section class="bg-neutral-0 pb-0 py-16 md:py-24">
      <BannerSection :items="page.banner.items" :overlaps-next-section="false" />
    </section>

    <!-- Section 11: FAQ -->
    <section class="bg-neutral-100 py-16 md:py-24">
      <StakingFaq :items="page.faq.items" :forum-link="page.faq.forumLink" :title="page.faq.headline" />
    </section>

    <!-- Section 12: Footer hero -->
    <section class="staking-footer-hero bg-neutral-100 py-16 md:py-24">
      <HeadlineStaking v-bind="page.wallet" />
    </section>
  </NuxtLayout>
</template>

<style>
.staking-calculator-section {
  background: linear-gradient(180deg, rgb(var(--nq-green) / 0.1) 0%, rgb(var(--nq-neutral-100)) 20%);
}
</style>
