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
      <!-- Section 1: Hero -->
      <section v-if="page.hero" class="bg-neutral-100 relative">
        <HeroProduct v-bind="page.hero" />
      </section>

      <!-- Section 2: TiltedMedia (has its own section wrapper) -->
      <TiltedMedia v-if="page.tiltedMedia" v-bind="page.tiltedMedia" />

      <!-- Section 3: Simple headline -->
      <section v-if="page.simpleHeadline" class="nq-section-gap bg-neutral-0 relative">
        <Headline v-bind="page.simpleHeadline" />
      </section>

      <!-- Section 4: Grid -->
      <section v-if="page.grid?.items" class="bg-neutral-0">
        <GridSection v-bind="page.grid" variation="iconGrid" />
      </section>

      <!-- Section 5: Learn it headline -->
      <section v-if="page.learnItHeadline" class="nq-section-gap bg-neutral-100 relative">
        <Headline v-bind="page.learnItHeadline" />
      </section>

      <!-- Section 6: RichTextCards -->
      <section v-if="page.textCards?.items" class="bg-neutral-100">
        <RichTextCards v-bind="page.textCards" />
      </section>

      <!-- Section 7: Stepped slides -->
      <section v-if="page.steppedSlides" class="mx-0 px-0 bg-neutral-0 overflow-x-clip [&>*]:max-w-none">
        <Stepped v-bind="page.steppedSlides" />
      </section>

      <!-- Section 8: Final CTA -->
      <section v-if="page.finalCta" class="nq-section-gap bg-neutral-100 relative">
        <Headline v-bind="page.finalCta" />
      </section>
    </main>
  </NuxtLayout>
</template>
