<script setup lang="ts">
const page = await usePage('staking')
const { annualRewardPercentage } = useStakingInfo()

const title = page.seo?.title || page.hero?.title || 'Nimiq Staking'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/staking' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/staking' }] })

const walletHeadlineParts = computed(() => page.wallet.headline.split('{{ interestPerAnnum }}'))

function isExternal(url: string) {
  return url.startsWith('http') || url.startsWith('mailto')
}

function getWalletActionClass(variant?: string) {
  if (!variant || variant === 'arrow')
    return 'nq-pill-blue'
  return variant.startsWith('nq-pill-') ? variant : `nq-pill-${variant}`
}
</script>

<template>
  <NuxtLayout footer-bg-color="white">
    <HeroStaking :headline="page.hero.title" :link="page.hero.link" :description="page.hero.description" />

    <StakingQuote :text="page.quote.text" :learn-more-link="page.quote.learnMoreLink" />

    <section class="staking-calculator-section bg-neutral-0">
      <Headline v-bind="page.calculator.headline" />
    </section>

    <section class="bg-neutral-0">
      <StakingCalculator :amount-label="page.calculator.amountLabel" :period-label="page.calculator.periodLabel" :rewards-label="page.calculator.rewardsLabel" />
    </section>

    <!-- Prod: pt=177.6, pb=194.3 (full, not same-bg reduced) -->
    <section class="bg-neutral-0 nq-section-gap" style="--f-pt-min: 144; --f-pt-max: 200; --f-pb-min: 158; --f-pb-max: 200">
      <Headline v-bind="page.distribution.headline" />
      <div class="f-mt-lg flex flex-wrap gap-y-18 md:gap-x-24 lg:gap-x-40 justify-center">
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

    <section
      class="bg-neutral-0 nq-wide relative z-10 overflow-x-clip pb-0 lg:[--pb:0px]"
      style="--f-pt-min: 64; --f-pt-max: 72; --f-pb-min: 64; --f-pb-max: 72; --f-px-min: 32; --f-px-max: 72; --px: var(--f-px)"
    >
      <StakingBanner :items="page.banner.items" :overlaps-next-section="page.banner.overlapsNextSection" />
    </section>

    <section class="bg-neutral-0 nq-section-gap">
      <StakingFaq :items="page.faq.items" :forum-link="page.faq.forumLink" :title="page.faq.headline" />
    </section>

    <section class="bg-neutral-0">
      <BannerNewsletter v-bind="page.newsletter" />
    </section>

    <section class="bg-neutral-0">
      <div class="flex flex-col md:items-center z-1">
        <h2 class="nq-heading break-keep">
          {{ walletHeadlineParts[0] }}
          <span class="bg-green/15 inline-flex items-center text-green px-[10px] py-[3px] rounded whitespace-nowrap">
            <template v-if="annualRewardPercentage">~{{ annualRewardPercentage }}<Icon class="text-[14px] translate-y-[8px]" aria-hidden name="nimiq:asterisk" /></template>
            <span v-else class="h-[1em] w-[120px] rounded-[2px] bg-green/20 animate-pulse" />
          </span>
          {{ walletHeadlineParts[1] }}
        </h2>
        <p class="max-w-prose md:text-center">
          {{ page.wallet.subline }}
        </p>
        <ul v-if="page.wallet.actions?.length" class="flex gap-16 lg:gap-20 flex-wrap f-mt-md">
          <li v-for="action in page.wallet.actions" :key="action.href">
            <NuxtLink
              class="nq-arrow nq-pill-lg md:mx-auto"
              :class="getWalletActionClass(action.variant)"
              :to="action.href"
              :external="isExternal(action.href)"
              :target="isExternal(action.href) ? '_blank' : undefined"
            >
              {{ action.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </NuxtLayout>
</template>

<style>
.staking-calculator-section {
  background: linear-gradient(180deg, rgba(33, 188, 165, 0.1) 0%, rgb(255, 255, 255) 20%);
}
</style>
