<script setup lang="ts">
interface CryptopaymentPage {
  hero?: { headline: string, subline?: string, linkHref?: string, linkLabel?: string, link?: string, items?: { highlight: string }[] }
  tiltedMedia?: { src: string, poster?: string }
  features?: { headline: { headline: string, subline?: string }, content: { items: { icon?: string, headline: string, subline?: string }[] } }
  whatIs?: { headline: { headline: string, subline?: string, links?: string[] }, content: { items: { content: string, bgColor?: string }[] } }
  steppedSlides?: { headline: string, description?: string, items: { image: string, label: string, description: string }[] }
}

const { data: page } = await useAsyncData('cryptopaymentlink', () => queryCollection('cryptopaymentlink').first() as Promise<CryptopaymentPage | null>)
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = 'Cryptopayment.link | Nimiq'
const description = page.value.hero?.subline || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/cryptopaymentlink' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/cryptopaymentlink' }] })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <section v-if="page.hero" nq-section-gap bg-neutral-100>
        <HeroProduct v-bind="page.hero" :link="page.hero.linkHref || page.hero.link" />
      </section>

      <ContentTiltedMedia v-if="page.tiltedMedia" v-bind="page.tiltedMedia" :overlaps-next-section="true" />

      <section v-if="page.features" nq-section-gap bg-neutral-0>
        <Headline v-bind="page.features.headline" />
      </section>

      <section v-if="page.features?.content?.items" nq-section-gap bg-neutral-0>
        <GridSection v-bind="page.features.content" variation="iconGrid" />
      </section>

      <section v-if="page.whatIs" nq-section-gap bg-neutral-100>
        <Headline v-bind="page.whatIs.headline" />
      </section>

      <section v-if="page.whatIs?.content?.items" nq-section-gap bg-neutral-100>
        <ContentRichTextCards v-bind="page.whatIs.content" />
      </section>

      <section v-if="page.steppedSlides" nq-section-gap bg-neutral-0>
        <ContentStepped v-bind="page.steppedSlides" />
      </section>

      <!-- Reuses whatIs data as final CTA -->
      <section v-if="page.whatIs" nq-section-gap bg-neutral-100>
        <Headline v-bind="page.whatIs.headline" />
      </section>
    </main>
  </NuxtLayout>
</template>
