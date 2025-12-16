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

      <section v-if="page.simpleHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.simpleHeadline.headline" :subline="page.simpleHeadline.subline" />
      </section>

      <section v-if="page.stakingCalculator" nq-section-gap bg-neutral-100>
        <StakingCalculator :data="page.stakingCalculator" />
      </section>

      <section v-if="page.activeAndDecentralHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.activeAndDecentralHeadline.headline" :subline="page.activeAndDecentralHeadline.subline" />
      </section>

      <section v-if="page.stakingDistribution" nq-section-gap bg-neutral-0>
        <StakingDistribution :data="page.stakingDistribution" />
      </section>

      <section v-if="page.soEasyEveryoneCanHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.soEasyEveryoneCanHeadline.headline" :subline="page.soEasyEveryoneCanHeadline.subline" />
      </section>

      <section v-if="page.video" nq-section-gap bg-neutral-100>
        <ContentYouTube :embed-url="page.video.embedUrl" :poster="page.video.poster" :title="page.video.title" />
      </section>

      <section v-if="page.letOthersDoTheWoHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.letOthersDoTheWoHeadline.headline" :subline="page.letOthersDoTheWoHeadline.subline" />
      </section>

      <BannerSection v-if="page.banner?.items" :items="page.banner.items" :overlaps-next-section="page.banner.overlapsNextSection" />

      <section v-if="page.stakingFaq?.items" nq-section-gap bg-neutral-100>
        <StakingFaq :items="page.stakingFaq.items" />
      </section>

      <section v-if="page.stakeInTheNimiqWHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.stakeInTheNimiqWHeadline.headline" :subline="page.stakeInTheNimiqWHeadline.subline" :links="page.stakeInTheNimiqWHeadline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
