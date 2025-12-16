<script setup lang="ts">
const { data: page } = await useAsyncData('contact', () => queryCollection('contact').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.hero?.headline ? `${page.value.hero.headline} | Nimiq` : 'Contact | Nimiq'
const description = page.value.hero?.subline || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/contact' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/contact' }] })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <section v-if="page.hero" nq-section-gap bg-neutral-100>
        <HeroSimple :headline="page.hero.headline" :subline="page.hero.subline" />
      </section>

      <section v-if="page.socialMedia?.items" nq-section-gap bg-neutral-100>
        <GridSocialMedia v-bind="page.socialMedia" />
      </section>

      <section v-if="page.simpleHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.simpleHeadline.headline" :subline="page.simpleHeadline.subline" />
      </section>

      <section v-if="page.contact" nq-section-gap bg-neutral-100>
        <ContactForm :data="page.contact" />
      </section>
    </main>
  </NuxtLayout>
</template>
