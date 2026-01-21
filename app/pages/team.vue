<script setup lang="ts">
const page = await queryCollection('team').first()!

const title = page.seo?.title || page.hero?.title || 'Team'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/team' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/team' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section class="nq-section-gap bg-neutral-0">
        <Hero v-bind="page.hero" />
      </section>

      <section class="bg-neutral-0">
        <TeamMembers v-bind="page.members" />
      </section>

      <section class="nq-section-gap bg-neutral-100">
        <Headline v-bind="page.cta" />
      </section>
    </main>
  </NuxtLayout>
</template>
