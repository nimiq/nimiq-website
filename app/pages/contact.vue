<script setup lang="ts">
const { data } = await useAsyncData('contact', () => queryCollection('contact').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const title = `${page.hero.headline} | Nimiq`
const description = page.hero.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/contact' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/contact' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section nq-section-gap bg-neutral-100>
        <Hero v-bind="page.hero" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <GridSocialMedia v-bind="page.social.grid" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.social.headline" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <ContactForm :data="page.form" />
      </section>
    </main>
  </NuxtLayout>
</template>
