<script setup lang="ts">
const { data: page } = await useAsyncData('onepager', () => queryCollection('onepager').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.hero?.headline ? `${page.value.hero.headline} | Nimiq` : 'Nimiq in a Nutshell'
const description = page.value.hero?.subline || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/onepager' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/onepager' }] })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <section v-if="page.hero" nq-section-gap bg-neutral-0>
        <HeroSimple :headline="page.hero.headline" :subline="page.hero.subline" />
      </section>

      <ContentRichText v-if="page.content" :rich-text="page.content.richText" :center-heading="page.content.centerHeading" />
    </main>
  </NuxtLayout>
</template>
