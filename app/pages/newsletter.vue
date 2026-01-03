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
      <section nq-section-gap bg-neutral-100>
        <div flex="~ col items-center" mx-auto text-center max-w-2xl>
          <h1 nq-heading-lg>
            {{ page.hero.title }}
          </h1>
          <p text="neutral-700 f-lg" mt-24 max-w-prose>
            {{ page.hero.description }}
          </p>

          <form mt-48 text-left w-full @submit.prevent>
            <!-- Email Field -->
            <div mb-24>
              <label for="email" font-semibold>{{ page.form.emailLabel }}</label>
              <input id="email" v-model="email" type="email" required mt-8 w-full nq-input-box>
            </div>

            <!-- Communication Permission -->
            <div mb-24>
              <p font-semibold mb-8>
                {{ page.form.permissionTitle }}
              </p>
              <p text="neutral-700 f-sm" mb-12>
                {{ page.form.permissionDescription }}
              </p>
              <label flex="~ gap-8" items-start>
                <input v-model="permissionGranted" type="checkbox" required mt-4>
                <span text="f-sm">Yes, I would like to subscribe to the free Nimiq.com newsletter and receive information tailored to my needs at the email address I have provided based on my registration data and newsletter preferences. I hereby accept the <a href="/privacy-policy" text-blue hover:underline>Privacy Policy.</a></span>
              </label>
            </div>

            <!-- Interests -->
            <div mb-24>
              <p font-semibold mb-8>
                {{ page.form.interestsTitle }}
              </p>
              <p text="neutral-700 f-sm" mb-12>
                {{ page.form.interestsDescription }}
              </p>
              <div flex="~ wrap gap-x-16 gap-y-8">
                <template v-for="(interest, index) in page.form.interests" :key="interest">
                  <label flex="~ gap-8" items-center>
                    <input v-model="selectedInterests" type="checkbox" :value="interest">
                    <span>{{ interest }}</span>
                  </label>
                  <span v-if="index < page.form.interests.length - 1" aria-hidden="true" />
                </template>
              </div>
            </div>

            <!-- Products -->
            <div mb-24>
              <p font-semibold mb-8>
                {{ page.form.productsTitle }}
              </p>
              <div flex="~ wrap gap-x-16 gap-y-8">
                <template v-for="(product, index) in page.form.products" :key="product">
                  <label flex="~ gap-8" items-center>
                    <input v-model="selectedProducts" type="checkbox" :value="product">
                    <span>{{ product }}</span>
                  </label>
                  <span v-if="index < page.form.products.length - 1" aria-hidden="true" />
                </template>
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" nq-button-solid w-full>
              {{ page.form.submitButton }}
            </button>
          </form>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
