<script setup lang="ts">
const page = await queryCollection('oasis').first()!

const title = page.seo?.title || page.hero?.title || 'Nimiq OASIS'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/oasis' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/oasis' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section nq-section-gap bg-neutral-100>
        <Hero v-bind="page.hero" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Hero v-bind="page.secondHero" />
      </section>

      <section v-if="page.centralAmerica" nq-section-gap bg-neutral-100>
        <div text-center mx-auto max-w-150>
          <h2 nq-h2 mb-6>{{ page.centralAmerica.title }}</h2>
          <p nq-text mb-8>{{ page.centralAmerica.description }}</p>
          <h3 v-if="page.centralAmerica.socials" nq-h3>Be the first to know</h3>
          <div v-if="page.centralAmerica.socials" flex gap-4 justify-center>
            <a v-for="social in page.centralAmerica.socials" :key="social.href" :href="social.href" target="_blank" rel="noopener noreferrer" aria-label="Social link" />
          </div>
        </div>
      </section>

      <section v-if="page.notAvailable" nq-section-gap bg-neutral-100>
        <div text-center mx-auto max-w-150>
          <h2 nq-h2 mb-6>{{ page.notAvailable.title }}</h2>
          <p nq-text mb-8>{{ page.notAvailable.description }}</p>
          <UiPillLink v-if="page.notAvailable.link" :href="page.notAvailable.link.href">{{ page.notAvailable.link.label }}</UiPillLink>
          <h3 v-if="page.notAvailable.socials" nq-h3 mt-8>Be the first to know</h3>
          <div v-if="page.notAvailable.socials" flex gap-4 justify-center>
            <a v-for="social in page.notAvailable.socials" :key="social.href" :href="social.href" target="_blank" rel="noopener noreferrer" aria-label="Social link" />
          </div>
        </div>
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.about.headline" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <GridLarge :items="page.about.items" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.howItWorks.headline" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <div text-center>
          <a :href="page.howItWorks.embedUrl" target="_blank" rel="noopener noreferrer" nq-pill-lg>Play video</a>
          <p v-if="page.howItWorks.title" mt-4 nq-h3>{{ page.howItWorks.title }}</p>
        </div>
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.openTech" />
      </section>

      <section v-if="page.integrations" nq-section-gap bg-neutral-0>
        <div grid="~ cols-1 md:cols-2" gap-8>
          <div v-for="integration in page.integrations" :key="integration.title" p-8 bg-neutral-100 rounded>
            <h3 nq-h3 mb-4>{{ integration.title }}</h3>
            <p nq-text mb-6>{{ integration.description }}</p>
            <div flex gap-4>
              <UiPillLink v-for="link in integration.links" :key="link.href" :href="link.href">{{ link.label }}</UiPillLink>
            </div>
          </div>
        </div>
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.collaborate" />
      </section>

      <!-- Contact form section removed temporarily for content parity test -->
    </main>
  </NuxtLayout>
</template>
