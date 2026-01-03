<script setup lang="ts">
const page = await queryCollection('oasis').first()!

const title = page.seo?.title || page.hero?.headline || 'Nimiq OASIS'
const description = page.seo?.description || page.hero?.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/oasis' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/oasis' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <!-- Section 0: Hero with globe + carousel -->
      <section bg-darkerblue>
        <div nq-section-gap text-center>
          <h1 nq-h1 text-white>
            {{ page.hero?.headline }}
          </h1>
          <p text="white/80" nq-text mx-auto mt-6 max-w-160>
            {{ page.hero?.subline }}
          </p>
          <div flex="~ gap-16 justify-center wrap" mt-8>
            <a v-if="page.hero?.linkHref" :href="page.hero.linkHref" target="_blank" rel="noopener noreferrer" nq-arrow nq-pill-lg nq-pill-white>{{ page.hero?.linkLabel }}</a>
            <a v-if="page.hero?.secondaryLinkHref" :href="page.hero.secondaryLinkHref" nq-pill-tertiary-white nq-arrow nq-pill-lg>{{ page.hero?.secondaryLinkLabel }}</a>
          </div>
        </div>
        <HeroOasisWorld v-if="page.oasisWorld" :items="page.oasisWorld.items" :be-the-first-to-know-label="page.oasisWorld.beTheFirstToKnowLabel" />
      </section>

      <!-- Section 1: Try It - LargeGrid -->
      <section nq-section-gap bg-neutral-100>
        <Headline v-if="page.tryIt" :label="page.tryIt.label" :headline="page.tryIt.headline" />
        <GridLarge v-if="page.largeGrid" :items="page.largeGrid" mt-64 />
      </section>

      <!-- Section 2: How does it work + YouTube -->
      <section nq-section-gap nq-overlaps bg-neutral-100>
        <Headline v-if="page.howDoesItWork" :label="page.howDoesItWork.label" :headline="page.howDoesItWork.headline" :subline="page.howDoesItWork.subline" />
        <div v-if="page.youtube" ring="1 neutral-200" stack mx-auto mt-64 rounded-8 bg-neutral-0 max-w-240 w-full aspect-video shadow>
          <a :href="page.youtube.url" target="_blank" rel="noopener noreferrer" aria-label="Play video" stack size-full>
            <Icon name="nimiq:triangle-right" text="48 md:96 gold" drop-shadow />
          </a>
        </div>
        <h2 v-if="page.youtube?.title" text="center f-2xl" f-mt-sm>
          {{ page.youtube.title }}
        </h2>
      </section>

      <!-- Section 3: Integrate - Open Tech + Cards -->
      <section id="integrate" nq-section-gap bg-darkerblue>
        <Headline v-if="page.openTech" :label="page.openTech.label" :headline="page.openTech.headline" :subline="page.openTech.subline" class="dark" />
        <div v-if="page.integrations" grid="~ cols-1 gap-32 lg:cols-2" mt-64>
          <div v-for="(integration, i) in page.integrations" :key="i" p="32 lg:40" rounded-8 style="background: rgb(var(--nq-neutral-900))">
            <h3 nq-h3 text-white mb-12>
              {{ integration.title }}
            </h3>
            <p text="white/70 f-base" mb-24>
              {{ integration.description }}
            </p>
            <div flex="~ gap-12 wrap">
              <a v-for="link in integration.links" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer" :class="link.variant === 'secondary' ? 'nq-pill-secondary-white' : 'nq-pill-white'" nq-pill-sm nq-arrow>{{ link.label }}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Collaborate + Contact Form -->
      <section nq-section-gap bg-darkerblue>
        <Headline v-if="page.collaborate" :label="page.collaborate.label" :headline="page.collaborate.headline" :subline="page.collaborate.subline" class="dark" />
        <iframe mx-auto mt-64 rounded-6 h-651 max-w-392 w-full src="https://notionforms.io/forms/nim-prospect-contact-form" frameborder="0" />
      </section>
    </main>
  </NuxtLayout>
</template>
