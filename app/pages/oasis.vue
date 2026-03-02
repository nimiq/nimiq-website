<script setup lang="ts">
const page = await usePage('oasis')

const title = page.seo?.title || page.hero?.headline || 'Nimiq OASIS'
const description = page.seo?.description || page.hero?.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/oasis' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/oasis' }] })
</script>

<template>
  <NuxtLayout dark-header footer-bg-color="white">
    <main>
      <!-- Section 0: Hero with globe + carousel -->
      <HeroOasisWorld
        v-if="page.oasisWorld"
        :headline="page.hero?.headline"
        :subline="page.hero?.subline"
        :link-href="page.hero?.linkHref"
        :link-label="page.hero?.linkLabel"
        :secondary-link-href="page.hero?.secondaryLinkHref"
        :secondary-link-label="page.hero?.secondaryLinkLabel"
        :items="page.oasisWorld.items"
        :be-the-first-to-know-label="page.oasisWorld.beTheFirstToKnowLabel"
      />

      <!-- Section 1: Try It - LargeGrid -->
      <section class="nq-section-gap bg-neutral-100">
        <Headline v-if="page.tryIt" :label="page.tryIt.label" :headline="page.tryIt.headline" />
        <GridLarge v-if="page.largeGrid" class="mt-16" :items="page.largeGrid" />
      </section>

      <!-- Section 2: How does it work + YouTube -->
      <section class="nq-section-gap nq-overlaps bg-neutral-100">
        <Headline v-if="page.howDoesItWork" :label="page.howDoesItWork.label" :headline="page.howDoesItWork.headline" :subline="page.howDoesItWork.subline" />
        <YouTube v-if="page.youtube" class="f-mt-lg" :embed-url="page.youtube.embedUrl" :poster="page.youtube.poster" :title="page.youtube.title" />
        <h2 v-if="page.youtube?.title" class="text-xl md:text-2xl text-center mt-6">
          {{ page.youtube.title }}
        </h2>
      </section>

      <!-- Section 3: Integrate - Open Tech + Cards -->
      <section id="integrate" class="nq-section-gap bg-darkblue text-white" scheme-dark>
        <Headline v-if="page.openTech" class="dark" :label="page.openTech.label" :headline="page.openTech.headline" :subline="page.openTech.subline" />
        <div v-if="page.integrations" class="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-16">
          <div v-for="(integration, i) in page.integrations" :key="i" class="p-8 lg:p-10 rounded-2 ring-1 ring-white/10 bg-darkerblue">
            <h3 class="nq-h3 text-white mb-3">
              {{ integration.title }}
            </h3>
            <p class="text-white/70 text-sm md:text-base mb-6">
              {{ integration.description }}
            </p>
            <div class="flex gap-3 flex-wrap">
              <a v-for="link in integration.links" :key="link.href" class="nq-pill-sm nq-arrow" :href="link.href" target="_blank" rel="noopener noreferrer" :class="link.variant === 'secondary' ? 'nq-pill-secondary' : 'nq-pill-blue'">{{ link.label }}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Collaborate + Contact Form -->
      <section class="nq-section-gap bg-neutral-0">
        <Headline v-if="page.collaborate" :label="page.collaborate.label" :headline="page.collaborate.headline" :subline="page.collaborate.subline" />
        <iframe class="mx-auto mt-16 rounded-1.5 h-[800px] max-w-[392px] w-full" src="https://notionforms.io/forms/nim-prospect-contact-form" frameborder="0" />
      </section>
    </main>
  </NuxtLayout>
</template>
