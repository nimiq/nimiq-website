<script setup lang="ts">
const page = await usePage('oasis')

const title = page.seo?.title || page.hero?.headline || 'Nimiq OASIS'
const description = page.seo?.description || page.hero?.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/oasis' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/oasis' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <!-- Section 0: Hero with globe + carousel -->
      <section class="bg-darkerblue">
        <div class="nq-section-gap text-center">
          <h1 class="nq-h1 text-white">
            {{ page.hero?.headline }}
          </h1>
          <p class="text-white/80 nq-text mx-auto mt-1.5 max-w-40">
            {{ page.hero?.subline }}
          </p>
          <div class="flex gap-4 flex-justify-center flex-wrap mt-2">
            <a v-if="page.hero?.linkHref" class="nq-arrow nq-pill-lg nq-pill-white" :href="page.hero.linkHref" target="_blank" rel="noopener noreferrer">{{ page.hero?.linkLabel }}</a>
            <a v-if="page.hero?.secondaryLinkHref" class="nq-pill-tertiary-white nq-arrow nq-pill-lg" :href="page.hero.secondaryLinkHref">{{ page.hero?.secondaryLinkLabel }}</a>
          </div>
        </div>
        <HeroOasisWorld v-if="page.oasisWorld" :items="page.oasisWorld.items" :be-the-first-to-know-label="page.oasisWorld.beTheFirstToKnowLabel" />
      </section>

      <!-- Section 1: Try It - LargeGrid -->
      <section class="nq-section-gap bg-neutral-100">
        <Headline v-if="page.tryIt" :label="page.tryIt.label" :headline="page.tryIt.headline" />
        <GridLarge v-if="page.largeGrid" class="mt-16" :items="page.largeGrid" />
      </section>

      <!-- Section 2: How does it work + YouTube -->
      <section class="nq-section-gap nq-overlaps bg-neutral-100">
        <Headline v-if="page.howDoesItWork" :label="page.howDoesItWork.label" :headline="page.howDoesItWork.headline" :subline="page.howDoesItWork.subline" />
        <div v-if="page.youtube" class="ring-1 ring-neutral-200 mx-auto mt-16 rounded-2 bg-neutral-0 max-w-60 w-full aspect-video" stack shadow>
          <a class="size-full" :href="page.youtube.url" target="_blank" rel="noopener noreferrer" aria-label="Play video" stack>
            <Icon class="text-48 text-md:96 text-gold" name="nimiq:triangle-right" drop-shadow />
          </a>
        </div>
        <h2 v-if="page.youtube?.title" class="text-center text-xl md:text-2xl mt-3 md:mt-4">
          {{ page.youtube.title }}
        </h2>
      </section>

      <!-- Section 3: Integrate - Open Tech + Cards -->
      <section id="integrate" class="nq-section-gap bg-darkerblue">
        <Headline v-if="page.openTech" class="dark" :label="page.openTech.label" :headline="page.openTech.headline" :subline="page.openTech.subline" />
        <div v-if="page.integrations" class="grid grid-cols-1 gap-8 grid-lg:cols-2 mt-16">
          <div v-for="(integration, i) in page.integrations" :key="i" class="p-8 p-lg:40 rounded-2" style="background: rgb(var(--nq-neutral-900))">
            <h3 class="nq-h3 text-white mb-3">
              {{ integration.title }}
            </h3>
            <p class="text-white/70 text-sm md:text-base mb-6">
              {{ integration.description }}
            </p>
            <div class="flex gap-3 flex-wrap">
              <a v-for="link in integration.links" :key="link.href" class="nq-pill-sm nq-arrow" :href="link.href" target="_blank" rel="noopener noreferrer" :class="link.variant === 'secondary' ? 'nq-pill-secondary-white' : 'nq-pill-white'">{{ link.label }}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Collaborate + Contact Form -->
      <section class="nq-section-gap bg-darkerblue">
        <Headline v-if="page.collaborate" class="dark" :label="page.collaborate.label" :headline="page.collaborate.headline" :subline="page.collaborate.subline" />
        <iframe class="mx-auto mt-16 rounded-1.5 h-[651px] max-w-[392px] w-full" src="https://notionforms.io/forms/nim-prospect-contact-form" frameborder="0" />
      </section>
    </main>
  </NuxtLayout>
</template>
