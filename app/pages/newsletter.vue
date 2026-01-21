<script setup lang="ts">
const page = await queryCollection('newsletterPage').first()!

const title = page.seo?.title || page.hero?.title || 'Newsletter'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/newsletter' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/newsletter' }] })

const email = ref('')
const permissionGranted = ref(false)
const selectedInterests = ref<string[]>([])
const selectedProducts = ref<string[]>([])
</script>

<template>
  <NuxtLayout>
    <main>
      <section class="nq-section-gap bg-neutral-100">
        <div class="flex flex-col flex-items-center mx-auto text-center max-w-2xl">
          <h1 class="nq-heading-lg">
            {{ page.hero.title }}
          </h1>
          <p class="text-neutral-700 text-f-lg mt-24 max-w-prose">
            {{ page.hero.description }}
          </p>

          <form class="mt-48 text-left w-full" @submit.prevent>
            <!-- Email Field -->
            <div class="mb-24">
              <label class="font-semibold" for="email">{{ page.form.emailLabel }}</label>
              <input id="email" v-model="email" class="mt-8 w-full nq-input-box" type="email" required>
            </div>

            <!-- Communication Permission -->
            <div class="mb-24">
              <p class="font-semibold mb-8">
                {{ page.form.permissionTitle }}
              </p>
              <p class="text-neutral-700 text-f-sm mb-12">
                {{ page.form.permissionDescription }}
              </p>
              <label class="flex flex-gap-8 items-start">
                <input v-model="permissionGranted" class="mt-4" type="checkbox" required>
                <span class="text-f-sm">Yes, I would like to subscribe to the free Nimiq.com newsletter and receive information tailored to my needs at the email address I have provided based on my registration data and newsletter preferences. I hereby accept the <a class="text-blue hover:underline" href="/privacy-policy">Privacy Policy.</a></span>
              </label>
            </div>

            <!-- Interests -->
            <div class="mb-24">
              <p class="font-semibold mb-8">
                {{ page.form.interestsTitle }}
              </p>
              <p class="text-neutral-700 text-f-sm mb-12">
                {{ page.form.interestsDescription }}
              </p>
              <div class="flex flex-wrap flex-gap-x-16 flex-gap-y-8">
                <template v-for="(interest, index) in page.form.interests" :key="interest">
                  <label class="flex flex-gap-8 items-center">
                    <input v-model="selectedInterests" type="checkbox" :value="interest">
                    <span>{{ interest }}</span>
                  </label>
                  <span v-if="index < page.form.interests.length - 1" aria-hidden="true" />
                </template>
              </div>
            </div>

            <!-- Products -->
            <div class="mb-24">
              <p class="font-semibold mb-8">
                {{ page.form.productsTitle }}
              </p>
              <div class="flex flex-wrap flex-gap-x-16 flex-gap-y-8">
                <template v-for="(product, index) in page.form.products" :key="product">
                  <label class="flex flex-gap-8 items-center">
                    <input v-model="selectedProducts" type="checkbox" :value="product">
                    <span>{{ product }}</span>
                  </label>
                  <span v-if="index < page.form.products.length - 1" aria-hidden="true" />
                </template>
              </div>
            </div>

            <!-- Submit Button -->
            <button class="nq-button-solid w-full" type="submit">
              {{ page.form.submitButton }}
            </button>
          </form>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
