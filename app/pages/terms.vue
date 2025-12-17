<script setup lang="ts">
const page = await queryCollection('terms').first()!
const content = await parseMarkdown(page.content)

const title = page.seo?.title || page.hero?.title || 'Terms | Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/terms' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/terms' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section nq-section-gap bg-neutral-100>
        <Hero v-bind="page.hero" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <ContentRenderer :value="content" tag="article" f-prose text-neutral-900 children:mx-auto children:max-w-prose />
      </section>
    </main>
  </NuxtLayout>
</template>
