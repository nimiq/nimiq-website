<script setup lang="ts">
import '~/assets/css/onepager.css'

const page = await queryCollection('onepager').first()!
const content = await parseMarkdown(page.content?.richText || '')

const title = page.seo?.title || page.hero?.headline || 'Nimiq in a Nutshell | Nimiq'
const description = page.seo?.description || page.hero?.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/onepager' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/onepager' }] })
</script>

<template>
  <NuxtLayout>
    <section bg-neutral-100 f-py-lg>
      <div mx-auto max-w-prose px-24>
        <h1 nq-heading font-bold>{{ page.hero?.headline }}</h1>
        <p v-if="page.hero?.subline" text-neutral-700 mt-16>{{ page.hero.subline }}</p>
      </div>
    </section>

    <section nq-section-gap bg-neutral-100>
      <ContentRenderer :value="content" tag="article" nq-prose mx-auto max-w-prose />
    </section>
  </NuxtLayout>
</template>
