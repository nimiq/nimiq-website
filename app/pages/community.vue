<script setup lang="ts">
const { data } = await useAsyncData('community', () => queryCollection('community').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const title = `${page.hero.headline} | Nimiq`
const description = page.hero.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/community' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/community' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section bg-neutral-0>
        <Hero v-bind="page.hero" />
      </section>

      <section bg-neutral-0>
        <GridNewYork v-bind="page.stats" />
      </section>

      <section bg-neutral-0>
        <Headline v-bind="page.countries.headline" />
      </section>

      <section bg-neutral-0>
        <TokenFlags :flags="page.countries.flags" />
      </section>

      <section bg-neutral-100>
        <Headline v-bind="page.social.headline" />
      </section>

      <section bg-neutral-100>
        <GridSocialMedia v-bind="page.social.grid" />
      </section>

      <section bg-neutral-100>
        <BannerNewsletter v-bind="page.newsletter" />
      </section>

      <section bg-neutral-0>
        <Headline v-bind="page.apps.headline" />
      </section>

      <section bg-neutral-0>
        <BannerAppGallery v-bind="page.apps.gallery" />
      </section>

      <section bg-neutral-0>
        <Banner v-bind="page.banner" />
      </section>

      <section dark bg-darkblue>
        <Headline v-bind="page.feedback" />
      </section>
    </main>
  </NuxtLayout>
</template>
