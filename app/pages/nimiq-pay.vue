<script setup lang="ts">
const { data: page } = await useAsyncData('nimiq-pay', () => queryCollection('nimiqPay').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.meta?.title || 'Nimiq Pay'
const description = page.value.meta?.description || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogImage: page.value.meta?.image, ogUrl: 'https://nimiq.com/nimiq-pay' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/nimiq-pay' }] })
</script>

<template>
  <NuxtLayout v-if="page">
    <main>
      <section v-if="page.hero" nq-section-gap bg-neutral-100 relative>
        <HeroPay :headline="page.hero.headline" :subline="page.hero.subline" :play-store="page.hero.playStore" :app-store="page.hero.appStore" :items="page.hero.items" />
      </section>

      <ContentTiltedMedia v-if="page.tiltedMedia" :media="page.tiltedMedia.media" :video="page.tiltedMedia.video" :headline="page.tiltedMedia.headline" :poster="page.tiltedMedia.poster" :overlaps-next-section="page.tiltedMedia.overlapsNextSection" />

      <section v-if="page.logos" nq-section-gap bg-neutral-100>
        <GridLogos :label="page.logos.label" :items="page.logos.items" />
      </section>

      <section v-if="page.simpleHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.simpleHeadline.headline" :subline="page.simpleHeadline.subline" />
      </section>

      <section v-if="page.grid?.items" nq-section-gap bg-neutral-0>
        <GridSection :items="page.grid.items" />
      </section>

      <section v-if="page.whatIsTheNimiqPaHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.whatIsTheNimiqPaHeadline.headline" :subline="page.whatIsTheNimiqPaHeadline.subline" />
      </section>

      <section v-if="page.textCards?.items" nq-section-gap bg-neutral-0>
        <ContentRichTextCards :items="page.textCards.items" />
      </section>

      <section v-if="page.textCarousel" nq-section-gap bg-neutral-100>
        <ContentRichTextCarousel :content="page.textCarousel.content" :items="page.textCarousel.items" variation="default" />
      </section>

      <section v-if="page.oneAppToPoolThemHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.oneAppToPoolThemHeadline.headline" :subline="page.oneAppToPoolThemHeadline.subline" />
      </section>

      <section v-if="page.textCarousel2" nq-section-gap bg-neutral-0>
        <ContentRichTextCarousel :items="page.textCarousel2.items" variation="withTabs" />
      </section>

      <section v-if="page.discoverAWholeEcoHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.discoverAWholeEcoHeadline.headline" :subline="page.discoverAWholeEcoHeadline.subline" :label="page.discoverAWholeEcoHeadline.label" />
      </section>

      <section v-if="page.zigzag?.items" nq-section-gap bg-neutral-0>
        <ContentZigZag :items="page.zigzag.items" />
      </section>
    </main>
  </NuxtLayout>
</template>
