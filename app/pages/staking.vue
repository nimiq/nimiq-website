<script setup lang="ts">
const { data } = await useAsyncData('staking', () => queryCollection('staking').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const title = `${page.hero.headline} | Nimiq`
const description = page.hero.subline || page.meta?.description || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/staking' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/staking' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section nq-section-gap bg-neutral-100>
        <Hero v-bind="page.hero" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <ContentQuote :text="page.quote.text" :author="page.quote.author" />
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

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.video.headline" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <ContentYouTube :embed-url="page.video.embedUrl" :poster="page.video.poster" :title="page.video.title" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.delegate" />
      </section>

      <BannerSection :items="page.banner.items" :overlaps-next-section="page.banner.overlapsNextSection" />

      <section nq-section-gap bg-neutral-100>
        <StakingFaq :items="page.faq.items" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.wallet" />
      </section>
    </main>
  </NuxtLayout>
</template>
