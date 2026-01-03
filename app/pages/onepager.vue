<script setup lang="ts">
import '~/assets/css/onepager.css'

const page = await queryCollection('onepager').first()!
const content = await parseMarkdown(page.content.richText)

const title = page.seo?.title || page.hero?.title || 'Nimiq in a Nutshell | Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/onepager' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/onepager' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section nq-section-gap bg-neutral-100>
        <Hero v-bind="page.hero" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <ContentRenderer :value="content" tag="article" nq-prose text-neutral-900 children:mx-auto children:max-w-prose />
      </section>
    </main>
  </NuxtLayout>
</template>
