<script setup lang="ts">
const { data: page } = await useAsyncData('staking', () => queryCollection('staking').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.hero?.headline ? `${page.value.hero.headline} | Nimiq` : 'Staking | Nimiq'
const description = page.value.hero?.subline || page.value.meta?.description || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/staking' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/staking' }] })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <section v-if="page.hero" nq-section-gap bg-neutral-100>
        <HeroSimple :headline="page.hero.headline" :subline="page.hero.subline" />
      </section>

      <section v-if="page.quote" nq-section-gap bg-neutral-100>
        <ContentQuote :text="page.quote.text" :author="page.quote.author" />
      </section>

      <section v-if="page.simple_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.simple_headline.headline" :subline="page.simple_headline.subline" />
      </section>

      <section v-if="page.staking_calculator" nq-section-gap bg-neutral-100>
        <StakingCalculator :data="page.staking_calculator" />
      </section>

      <section v-if="page.active_and_decentral_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.active_and_decentral_headline.headline" :subline="page.active_and_decentral_headline.subline" />
      </section>

      <section v-if="page.staking_distribution" nq-section-gap bg-neutral-0>
        <StakingDistribution :data="page.staking_distribution" />
      </section>

      <section v-if="page.so_easy_everyone_can_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.so_easy_everyone_can_headline.headline" :subline="page.so_easy_everyone_can_headline.subline" />
      </section>

      <section v-if="page.video" nq-section-gap bg-neutral-100>
        <ContentYouTube :embed-url="page.video.embedUrl" :poster="page.video.poster" :title="page.video.title" />
      </section>

      <section v-if="page.let_others_do_the_wo_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.let_others_do_the_wo_headline.headline" :subline="page.let_others_do_the_wo_headline.subline" />
      </section>

      <BannerSection v-if="page.banner?.items" :items="page.banner.items" :overlaps-next-section="page.banner.overlapsNextSection" />

      <section v-if="page.staking_faq?.items" nq-section-gap bg-neutral-100>
        <StakingFaq :items="page.staking_faq.items" />
      </section>

      <section v-if="page.stake_in_the_nimiq_w_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.stake_in_the_nimiq_w_headline.headline" :subline="page.stake_in_the_nimiq_w_headline.subline" :links="page.stake_in_the_nimiq_w_headline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
