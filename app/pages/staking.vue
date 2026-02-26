<script setup lang="ts">
const page = await usePage('staking')

const title = page.seo?.title || page.hero?.title || 'Nimiq Staking'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/staking' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/staking' }] })
</script>

<template>
  <NuxtLayout>
    <HeroStaking :headline="page.hero.title" :link="page.hero.link" :description="page.hero.description" />

    <StakingQuote :text="page.quote.text" :learn-more-link="page.quote.learnMoreLink" />

    <section class="staking-calculator-section bg-neutral-100">
      <Headline v-bind="page.calculator.headline" />
    </section>

    <section class="bg-neutral-100">
      <StakingCalculator :amount-label="page.calculator.amountLabel" :period-label="page.calculator.periodLabel" :rewards-label="page.calculator.rewardsLabel" />
    </section>

    <section class="bg-neutral-0">
      <Headline v-bind="page.distribution.headline" />
    </section>

    <!-- Prod: pt=177.6, pb=194.3 (full, not same-bg reduced) -->
    <section class="bg-neutral-0" style="--f-pt-min: 144; --f-pt-max: 200; --f-pb-min: 158; --f-pb-max: 200">
      <div class="flex flex-wrap gap-y-18 md:gap-x-24 lg:gap-x-40 justify-center">
        <StakingDistribution :headline="page.distribution.stakedHeadline" :info="page.distribution.stakedDescription" />
        <ValidatorDistribution :headline="page.distribution.distributedHeadline" :info="page.distribution.distributedDescription" />
      </div>
    </section>

    <section class="bg-neutral-0">
      <Headline v-bind="page.video.headline" />
      <YouTube class="f-mt-lg" :embed-url="page.video.embedUrl" :poster="page.video.poster" :poster-mobile="page.video.posterMobile" :title="page.video.title">
        <img class="absolute inset-0 m-auto max-h-[85%] w-auto z-10 pointer-events-none rounded-lg shadow-xl max-md:hidden" :src="page.video.posterMobile" alt="" loading="lazy">
      </YouTube>
      <div v-if="page.video.description" class="flex flex-col md:items-center mt-6 md:mt-8">
        <div v-if="page.video.title" class="flex items-center gap-3">
          <div class="flex items-center justify-center rounded-full shrink-0 size-8" style="background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)">
            <Icon class="text-white text-sm" name="nimiq:shield" />
          </div>
          <h3 class="font-semibold text-neutral text-[22px]">
            {{ page.video.title }}
          </h3>
        </div>
        <p class="max-w-[368px] md:text-center mt-4 text-lg text-neutral/60">
          {{ page.video.description }}
        </p>
      </div>
    </section>

    <section class="bg-neutral-0" style="--f-pt-min: 144; --f-pt-max: 200">
      <Headline v-bind="page.delegate" />
    </section>

    <section class="bg-neutral-0">
      <ValidatorList />
    </section>

    <section class="bg-neutral-0 nq-wide relative overflow-x-clip" style="--pt: 0px; --pb: 0px">
      <StakingBanner :items="page.banner.items" />
    </section>

    <section class="bg-neutral-100">
      <StakingFaq :items="page.faq.items" :forum-link="page.faq.forumLink" :title="page.faq.headline" />
    </section>

    <section class="gradient-transparent-green-transparent">
      <HeadlineStaking v-bind="page.wallet" />
    </section>
  </NuxtLayout>
</template>

<style>
.staking-calculator-section {
  background: linear-gradient(180deg, rgba(33, 188, 165, 0.1) 0%, rgb(247, 247, 249) 20%);
}
</style>
