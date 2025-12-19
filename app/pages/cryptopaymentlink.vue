<script setup lang="ts">
const page = await queryCollection('cryptopaymentlink').first()!

const title = page.seo?.title || page.hero?.title || 'Crypto Payment Link'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/cryptopaymentlink' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/cryptopaymentlink' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section v-if="page.hero" nq-section-gap bg-neutral-100>
        <HeroProduct v-bind="page.hero" />
        <TiltedMedia v-if="page.tiltedMedia" v-bind="page.tiltedMedia" />
      </section>

      <section v-if="page.simpleHeadline" nq-section-gap bg-neutral-0>
        <Headline v-bind="page.simpleHeadline" />
      </section>

      <section v-if="page.grid?.items" nq-section-gap bg-neutral-0>
        <GridSection v-bind="page.grid" variation="iconGrid" />
      </section>

      <section v-if="page.whatIsCryptopaymentlinkHeadline" nq-section-gap bg-neutral-100>
        <Headline v-bind="page.whatIsCryptopaymentlinkHeadline" />
      </section>

      <section v-if="page.textCards?.items" nq-section-gap bg-neutral-100>
        <RichTextCards v-bind="page.textCards" />
      </section>

      <section v-if="page.steppedSlides" nq-section-gap bg-neutral-0>
        <Stepped v-bind="page.steppedSlides" />
      </section>

      <!-- Final CTA -->
      <section v-if="page.finalCta" nq-section-gap bg-neutral-100>
        <Headline v-bind="page.finalCta" />
      </section>
    </main>
  </NuxtLayout>
</template>
