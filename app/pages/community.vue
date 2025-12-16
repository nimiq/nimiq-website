<script setup lang="ts">
const { data: page } = await useAsyncData('community', () => queryCollection('community').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.hero?.headline ? `${page.value.hero.headline} | Nimiq` : 'Community | Nimiq'
const description = page.value.hero?.subline || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/community' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/community' }] })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <section v-if="page.hero" nq-section-gap bg-neutral-0>
        <HeroSimple :headline="page.hero.headline" :subline="page.hero.subline" />
      </section>

      <section v-if="page.newYork" nq-section-gap bg-neutral-0>
        <GridNewYork v-bind="page.newYork" />
      </section>

      <section v-if="page.simpleHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.simpleHeadline.headline" :icon-name="page.simpleHeadline.iconName" :links="page.simpleHeadline.links" />
      </section>

      <TokenFlags v-if="page.flags" :flags="page.flags.flags" />

      <section v-if="page.getInTouchHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.getInTouchHeadline.headline" :subline="page.getInTouchHeadline.subline" />
      </section>

      <section v-if="page.socialMedia" nq-section-gap bg-neutral-100>
        <GridSocialMedia v-bind="page.socialMedia" />
      </section>

      <section v-if="page.newsletter" nq-section-gap bg-neutral-100>
        <BannerNewsletter :cta="page.newsletter.cta" />
      </section>

      <section v-if="page.nimiqCommunityAppsHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.nimiqCommunityAppsHeadline.headline" :subline="page.nimiqCommunityAppsHeadline.subline" :label="page.nimiqCommunityAppsHeadline.label" />
      </section>

      <section v-if="page.appGallery" nq-section-gap bg-neutral-0>
        <BannerAppGallery v-bind="page.appGallery" />
      </section>

      <BannerSimple v-if="page.banner" :overlaps-next-section="page.banner.overlapsNextSection" :items="page.banner.items" />

      <section v-if="page.feedbackHeadline" nq-section-gap dark bg-darkblue>
        <HeadlineSimple :headline="page.feedbackHeadline.headline" :subline="page.feedbackHeadline.subline" :links="page.feedbackHeadline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
