<script setup lang="ts">
const { data: page } = await useAsyncData('newsletter', () => queryCollection('newsletterPage').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

useSeoMeta({ title: 'Newsletter | Nimiq', description: 'Subscribe to the Nimiq newsletter', ogTitle: 'Newsletter | Nimiq', ogDescription: 'Subscribe to the Nimiq newsletter', ogUrl: 'https://nimiq.com/newsletter' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/newsletter' }] })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <section nq-section-gap bg-neutral-100>
        <div flex="~ col items-center" text-center>
          <h1 nq-heading-lg>
            Newsletter
          </h1>
          <p text="neutral-700 f-lg" mt-24 max-w-prose>
            Subscribe to stay updated with Nimiq news and announcements.
          </p>
          <div mt-48 max-w-md w-full>
            <UiNewsletterEmailInput />
          </div>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
