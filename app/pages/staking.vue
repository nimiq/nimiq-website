<script setup lang="ts">
const page = await queryCollection('staking').first()!

const title = page.seo?.title || page.hero?.title || 'Nimiq Staking'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/staking' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/staking' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section class="staking-gradient" pt-80>
        <HeadlineStaking :headline="page.hero.title" :subline="page.hero.description" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <Quote :text="page.quote.text" :author="page.quote.author" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.calculator.headline" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <StakingCalculator :amount-label="page.calculator.amountLabel" :period-label="page.calculator.periodLabel" :rewards-label="page.calculator.rewardsLabel" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.distribution.headline" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <StakingDistribution />
      </section>

      <section v-if="page.distribution.stakedHeadline || page.distribution.distributedHeadline" nq-section-gap bg-neutral-0>
        <div flex="~ col md:row gap-32">
          <div v-if="page.distribution.stakedHeadline" flex="~ col" flex-1>
            <h3 nq-h3>{{ page.distribution.stakedHeadline }}</h3>
            <p>{{ page.distribution.stakedDescription }}</p>
          </div>
          <div v-if="page.distribution.distributedHeadline" flex="~ col" flex-1>
            <h3 nq-h3>{{ page.distribution.distributedHeadline }}</h3>
            <p>{{ page.distribution.distributedDescription }}</p>
          </div>
        </div>
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.video.headline" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <ContentYouTube :embed-url="page.video.embedUrl" :poster="page.video.poster" :title="page.video.title" />
      </section>

      <section v-if="page.video.description" nq-section-gap bg-neutral-100>
        <div flex="~ col md:items-center">
          <h3 v-if="page.video.title" nq-h3 md:text-center>{{ page.video.title }}</h3>
          <p max-w-prose md:text-center>{{ page.video.description }}</p>
        </div>
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.delegate" />
      </section>

      <BannerSection :items="page.banner.items" :overlaps-next-section="page.banner.overlapsNextSection" />

      <section nq-section-gap bg-neutral-100>
        <h2 v-if="page.faq.headline" nq-h2>{{ page.faq.headline }}</h2>
        <StakingFaq :items="page.faq.items" :forum-link="page.faq.forumLink" />
      </section>

      <section class="staking-gradient">
        <HeadlineStaking v-bind="page.wallet" />
      </section>
    </main>
  </NuxtLayout>
</template>
