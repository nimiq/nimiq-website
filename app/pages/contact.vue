<script setup lang="ts">
const page = await usePage('contact')

const title = page.seo?.title || page.hero?.title || 'Contact Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/contact' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/contact' }] })
</script>

<template>
  <NuxtLayout footer-bg-color="white">
    <section class="bg-neutral-0">
      <HeroProduct :title="page.hero.title" :description="page.hero.description" />
    </section>

    <section class="bg-neutral-0">
      <Headline v-if="page.social.gridHeadline" v-bind="page.social.gridHeadline" />
      <GridSocialMedia v-bind="page.social.grid" />
    </section>

    <section class="bg-neutral-0">
      <Headline v-bind="page.social.headline" />
    </section>

    <section class="bg-neutral-0">
      <iframe class="mx-auto rounded-md h-[651px] max-w-[392px] w-full border-0" src="https://notionforms.io/forms/nim-prospect-contact-form" title="Nimiq contact form" />
    </section>
  </NuxtLayout>
</template>
