<script setup lang="ts">
const page = await usePage('contact')

const title = page.seo?.title || page.hero?.title || 'Contact Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/contact' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/contact' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section class="bg-neutral-0">
        <HeroProduct :title="page.hero.title" :description="page.hero.description" />
        <GridSocialMedia v-bind="page.social.grid" />
      </section>

      <section class="nq-section-gap bg-neutral-100">
        <Headline v-bind="page.social.headline" />
        <iframe class="mx-auto rounded-1.5 h-[651px] max-w-[392px] w-full" src="https://notionforms.io/forms/nim-prospect-contact-form" frameborder="0" />
      </section>
    </main>
  </NuxtLayout>
</template>
