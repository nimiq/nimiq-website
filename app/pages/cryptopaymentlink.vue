<script setup lang="ts">
interface CryptopaymentPage {
  hero?: { headline: string, subline?: string, linkHref?: string, linkLabel?: string, link?: string, items?: { highlight: string }[] }
  tilted_media?: { overlapsNextSection?: boolean, media?: string, video?: { embed_url: string }, poster?: string }
  simple_headline?: { headline: string, subline?: string }
  grid?: { items: { icon?: string, headline: string, subline?: string }[] }
  what_is_cryptopaymen_headline?: { headline: string, subline?: string, links?: string[] }
  text_cards?: { items: { content: string, bgColor?: string }[] }
  stepped_slides?: { headline: string, description?: string, items: { image: string, label: string, description: string }[] }
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

      <ContentTiltedMedia v-if="page.tilted_media" :media="page.tilted_media.media" :video="page.tilted_media.video" :overlaps-next-section="page.tilted_media.overlapsNextSection" />

      <section v-if="page.simple_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.simple_headline.headline" :subline="page.simple_headline.subline" />
      </section>

      <section v-if="page.grid?.items" nq-section-gap bg-neutral-0>
        <GridSection :items="page.grid.items" variation="iconGrid" />
      </section>

      <section v-if="page.what_is_cryptopaymen_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.what_is_cryptopaymen_headline.headline" :subline="page.what_is_cryptopaymen_headline.subline" :links="page.what_is_cryptopaymen_headline.links" />
      </section>

      <section v-if="page.text_cards?.items" nq-section-gap bg-neutral-100>
        <ContentRichTextCards :items="page.text_cards.items" />
      </section>

      <section v-if="page.stepped_slides" nq-section-gap bg-neutral-0>
        <ContentStepped :headline="page.stepped_slides.headline" :description="page.stepped_slides.description" :items="page.stepped_slides.items" />
      </section>

      <!-- Reuses what_is_cryptopaymen_headline data as final CTA -->
      <section v-if="page.what_is_cryptopaymen_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.what_is_cryptopaymen_headline.headline" :subline="page.what_is_cryptopaymen_headline.subline" :links="page.what_is_cryptopaymen_headline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
