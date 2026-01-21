<script setup lang="ts">
const page = await usePage('cryptopaymentlink')

const title = page.seo?.title || page.hero?.title || 'Crypto Payment Link'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/cryptopaymentlink' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/cryptopaymentlink' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section v-if="page.hero" class="nq-section-gap bg-neutral-100">
        <HeroProduct v-bind="page.hero" />
        <TiltedMedia v-if="page.tiltedMedia" v-bind="page.tiltedMedia" />
      </section>

      <section v-if="page.simpleHeadline || page.grid?.items" class="nq-section-gap bg-neutral-0">
        <Headline v-if="page.simpleHeadline" v-bind="page.simpleHeadline" />
        <GridSection v-if="page.grid?.items" v-bind="page.grid" variation="iconGrid" />
      </section>

      <section v-if="page.learnItHeadline || page.textCards?.items" class="nq-section-gap bg-neutral-100">
        <Headline v-if="page.learnItHeadline" v-bind="page.learnItHeadline" />
        <RichTextCards v-if="page.textCards?.items" v-bind="page.textCards" />
      </section>

      <section v-if="page.steppedSlides" class="mx-0 px-0 bg-neutral-0 of-x-clip" children:max-w-none>
        <Stepped v-bind="page.steppedSlides" />
      </section>

      <section v-if="page.finalCta" class="nq-section-gap bg-neutral-100">
        <Headline v-bind="page.finalCta" />
      </section>
    </main>
  </NuxtLayout>
</template>
