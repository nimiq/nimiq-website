<script setup lang="ts">
const { data: page } = await useAsyncData('home', () => queryCollection('pages').path('/index').first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const route = useRoute()

// SEO meta from content
const title = page.value.meta?.title || 'Nimiq'
const description = page.value.meta?.description || ''

const url = 'https://nimiq.com'
const canonicalUrl = `${url}${route.path}`

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: canonicalUrl,
  ogType: 'website',
  ogSiteName: 'Nimiq',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterSite: '@nimiq',
  twitterCreator: '@nimiq',
  author: 'Nimiq Team',
  publisher: 'Nimiq',
})

setOgImage({
  title,
  subline: description,
  type: 'home',
})

// Footer bg color from last section
const footerBgColor = computed(() => page.value?.grid?.bgColor || 'darkblue')
</script>

<template>
  <NuxtLayout :footer-bg-color show-socials-hexagon-bg dark-header>
    <main v-if="page">
      <HeroHome
        v-if="page.hero"
        :headline="page.hero.headline"
        :subline="page.hero.subheadline"
        :link="page.hero.link"
        :logos="page.hero.organizations"
      />

      <PillLink
        v-if="page.pill_link"
        :item="page.pill_link.item"
        :label="page.pill_link.label"
        :bg-color="page.pill_link.bgColor"
      />

      <SimpleHeadline
        v-if="page.simple_headline"
        :headline="page.simple_headline.headline"
        :subline="page.simple_headline.subline"
        :bg-color="page.simple_headline.bgColor"
      />

      <AppsShowcaseNimiq
        v-if="page.apps"
        :apps="page.apps.apps"
      />

      <BannerSlice
        v-if="page.banner"
        :items="page.banner.items"
        :overlaps-next-section="page.banner.overlapsNextSection"
      />

      <PillLink
        v-if="page.pill_link_2"
        :item="page.pill_link_2.item"
        :label="page.pill_link_2.label"
        :bg-color="page.pill_link_2.bgColor"
      />

      <SimpleHeadline
        v-if="page.an_instant_zero_fee__headline"
        :headline="page.an_instant_zero_fee__headline.headline"
        :subline="page.an_instant_zero_fee__headline.subline"
        :bg-color="page.an_instant_zero_fee__headline.bgColor"
      />

      <GridSection
        v-if="page.grid"
        :items="page.grid.items"
        :bg-color="page.grid.bgColor"
      />
    </main>
  </NuxtLayout>
</template>
