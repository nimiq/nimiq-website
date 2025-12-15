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

      <ContentTiltedMedia v-if="page.tilted_media" :media="page.tilted_media.media" :video="page.tilted_media.video" :headline="page.tilted_media.headline" :poster="page.tilted_media.poster" :overlaps-next-section="page.tilted_media.overlapsNextSection" />

      <section v-if="page.logos" nq-section-gap bg-neutral-100>
        <GridLogos :label="page.logos.label" :items="page.logos.items" />
      </section>

      <section v-if="page.simple_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.simple_headline.headline" :subline="page.simple_headline.subline" />
      </section>

      <section v-if="page.grid?.items" nq-section-gap bg-neutral-0>
        <GridSection :items="page.grid.items" />
      </section>

      <section v-if="page.what_is_the_nimiq_pa_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.what_is_the_nimiq_pa_headline.headline" :subline="page.what_is_the_nimiq_pa_headline.subline" />
      </section>

      <section v-if="page.text_cards?.items" nq-section-gap bg-neutral-0>
        <ContentRichTextCards :items="page.text_cards.items" />
      </section>

      <section v-if="page.text_carousel" nq-section-gap bg-neutral-100>
        <ContentRichTextCarousel :content="page.text_carousel.content" :items="page.text_carousel.items" variation="default" />
      </section>

      <section v-if="page.one_app_to_pool_them_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.one_app_to_pool_them_headline.headline" :subline="page.one_app_to_pool_them_headline.subline" />
      </section>

      <section v-if="page.text_carousel_2" nq-section-gap bg-neutral-0>
        <ContentRichTextCarousel :items="page.text_carousel_2.items" variation="withTabs" />
      </section>

      <section v-if="page.discover_a_whole_eco_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.discover_a_whole_eco_headline.headline" :subline="page.discover_a_whole_eco_headline.subline" :label="page.discover_a_whole_eco_headline.label" />
      </section>

      <section v-if="page.zigzag?.items" nq-section-gap bg-neutral-0>
        <ContentZigZag :items="page.zigzag.items" />
      </section>
    </main>
  </NuxtLayout>
</template>
