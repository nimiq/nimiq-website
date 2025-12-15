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

      <section v-if="page.new_york" nq-section-gap bg-neutral-0>
        <GridNewYork v-bind="page.new_york" />
      </section>

      <section v-if="page.simple_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.simple_headline.headline" :icon-name="page.simple_headline.iconName" :links="page.simple_headline.links" />
      </section>

      <TokenFlags v-if="page.flags" :flags="page.flags.flags" />

      <section v-if="page.get_in_touch_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.get_in_touch_headline.headline" :subline="page.get_in_touch_headline.subline" />
      </section>

      <section v-if="page.social_media" nq-section-gap bg-neutral-100>
        <GridSocialMedia v-bind="page.social_media" />
      </section>

      <section v-if="page.newsletter" nq-section-gap bg-neutral-100>
        <BannerNewsletter :cta="page.newsletter.cta" />
      </section>

      <section v-if="page.nimiq_community_apps_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.nimiq_community_apps_headline.headline" :subline="page.nimiq_community_apps_headline.subline" :label="page.nimiq_community_apps_headline.label" />
      </section>

      <section v-if="page.app_gallery" nq-section-gap bg-neutral-0>
        <BannerAppGallery v-bind="page.app_gallery" />
      </section>

      <BannerSimple v-if="page.banner" :overlaps-next-section="page.banner.overlapsNextSection" :items="page.banner.items" />

      <section v-if="page.feedback_headline" nq-section-gap dark bg-darkblue>
        <HeadlineSimple :headline="page.feedback_headline.headline" :subline="page.feedback_headline.subline" :links="page.feedback_headline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
