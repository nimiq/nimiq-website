<script setup lang="ts">
const page = await queryCollection('nimiqPay').first()!

const title = page.seo?.title || page.hero?.title || 'Nimiq Pay'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/nimiq-pay' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/nimiq-pay' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section nq-section-gap bg-neutral-100 relative>
        <HeroPay v-bind="page.hero" />
        <TiltedMedia v-bind="page.media" />
      </section>

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
        <RichTextCards :items="page.about.items" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <RichTextCarousel v-bind="page.textCarousel" variation="default" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.pooling.headline" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <RichTextCarousel v-bind="page.pooling.carousel" variation="withTabs" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.discover.headline" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <ZigZag :items="page.discover.items" />
      </section>
    </main>
  </NuxtLayout>
</template>
