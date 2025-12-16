<script setup lang="ts">
interface CryptopaymentPage {
  hero?: { headline: string, subline?: string, linkHref?: string, linkLabel?: string, link?: string, items?: { highlight: string }[] }
  tiltedMedia?: { overlapsNextSection?: boolean, media?: string, video?: { embed_url: string }, poster?: string }
  simpleHeadline?: { headline: string, subline?: string }
  grid?: { items: { icon?: string, headline: string, subline?: string }[] }
  whatIsCryptopaymenHeadline?: { headline: string, subline?: string, links?: string[] }
  textCards?: { items: { content: string, bgColor?: string }[] }
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
        <HeroProduct :headline="page.hero.headline" :subline="page.hero.subline" :link="page.hero.linkHref || page.hero.link" :link-label="page.hero.linkLabel" :items="page.hero.items" />
      </section>

      <ContentTiltedMedia v-if="page.tiltedMedia" :media="page.tiltedMedia.media" :video="page.tiltedMedia.video" :overlaps-next-section="page.tiltedMedia.overlapsNextSection" />

      <section v-if="page.simpleHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.simpleHeadline.headline" :subline="page.simpleHeadline.subline" />
      </section>

      <section v-if="page.grid?.items" nq-section-gap bg-neutral-0>
        <GridSection :items="page.grid.items" variation="iconGrid" />
      </section>

      <section v-if="page.whatIsCryptopaymenHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.whatIsCryptopaymenHeadline.headline" :subline="page.whatIsCryptopaymenHeadline.subline" :links="page.whatIsCryptopaymenHeadline.links" />
      </section>

      <section v-if="page.textCards?.items" nq-section-gap bg-neutral-100>
        <ContentRichTextCards :items="page.textCards.items" />
      </section>

      <section v-if="page.steppedSlides" nq-section-gap bg-neutral-0>
        <ContentStepped :headline="page.steppedSlides.headline" :description="page.steppedSlides.description" :items="page.steppedSlides.items" />
      </section>

      <!-- Reuses whatIsCryptopaymenHeadline data as final CTA -->
      <section v-if="page.whatIsCryptopaymenHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.whatIsCryptopaymenHeadline.headline" :subline="page.whatIsCryptopaymenHeadline.subline" :links="page.whatIsCryptopaymenHeadline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
