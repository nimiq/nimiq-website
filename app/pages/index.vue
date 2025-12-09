<script setup lang="ts">
const { data: page } = await useAsyncData('home', () => queryCollection('pages').path('/').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

// Page-specific SEO (globals in nuxt.config.ts)
const title = page.value.meta?.title || 'Nimiq'
const description = page.value.meta?.description || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com' }] })
</script>

<template>
  <NuxtLayout show-socials-hexagon-bg dark-header>
    <main v-if="page">
      <!-- Hero section -->
      <section v-if="page.hero" dark text-neutral mx-0 py-0 bg-darkblue relative of-hidden children:max-w-none max-md:min-h-auto pt="148 md:153 lg:160" min-h="auto md:100vh lg:110vh" flex="~ col justify-between">
        <SectionHeroHome :headline="page.hero.headline" :subheadline="page.hero.subheadline" :link="page.hero.link" :organizations="page.hero.organizations" />
      </section>

      <!-- The Apps section -->
      <section v-if="page.simple_headline" nq-section-gap bg-neutral-0 relative>
        <div flex="~ items-center gap-10" py-6 pl-8 pr-20 rounded-full f-mb-lg>
          <div style="--c: var(--nq-blue); color: rgb(var(--c)); background-color: rgb(var(--c) / 0.2);" aria-hidden size="28 lg:40" rounded-full grid="~ place-content-center">
            <div i-nimiq:arrows-to-sides size="18 lg:30" class="pill-gradient" />
          </div>
          <span text="18 neutral-700" nq-label>The Apps</span>
        </div>
        <SectionSimpleHeadline :headline="page.simple_headline.headline" :subline="page.simple_headline.subline" />
      </section>

      <section v-if="page.apps?.apps" nq-section-gap bg-neutral-0>
        <SectionAppsShowcase :apps="page.apps.apps" :banner="page.banner" />
      </section>

      <!-- The Tech section -->
      <section v-if="page.an_instant_zero_fee__headline" nq-section-gap bg-neutral-0 relative>
        <div flex="~ items-center gap-10" py-6 pl-8 pr-20 rounded-full f-mb-lg>
          <div style="--c: var(--nq-green); color: rgb(var(--c)); background-color: rgb(var(--c) / 0.2);" aria-hidden size="28 lg:40" rounded-full grid="~ place-content-center">
            <div i-nimiq:bolt size="18 lg:30" class="pill-gradient" />
          </div>
          <span text="18 neutral-700" nq-label>The Tech</span>
        </div>
        <SectionSimpleHeadline :headline="page.an_instant_zero_fee__headline.headline" :subline="page.an_instant_zero_fee__headline.subline" />
      </section>

      <section v-if="page.grid?.items" dark nq-section-gap bg-darkblue>
        <SectionGridSection :items="page.grid.items" />
      </section>
    </main>
  </NuxtLayout>
</template>

<style>
.pill-gradient {
  background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, rgb(var(--c) / 1) 0%, rgb(var(--c) / 0.3) 100%);
}
</style>
