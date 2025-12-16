<script setup lang="ts">
const { data } = await useAsyncData('nimiq-pay', () => queryCollection('nimiqPay').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const title = page.meta?.title || 'Nimiq Pay'
const description = page.meta?.description || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogImage: page.meta?.image, ogUrl: 'https://nimiq.com/nimiq-pay' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/nimiq-pay' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section nq-section-gap bg-neutral-100 relative>
        <HeroPay v-bind="page.hero" />
      </section>

      <ContentTiltedMedia v-bind="page.media" :overlaps-next-section="false" />

      <section nq-section-gap bg-neutral-100>
        <GridLogos v-bind="page.logos" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.intro" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <GridSection v-bind="page.grid" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.about.headline" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <ContentRichTextCards :items="page.about.items" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <ContentRichTextCarousel v-bind="page.textCarousel" variation="default" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.pooling.headline" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <ContentRichTextCarousel v-bind="page.pooling.carousel" variation="withTabs" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.discover.headline" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <ContentZigZag :items="page.discover.items" />
      </section>
    </main>
  </NuxtLayout>
</template>
