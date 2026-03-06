<script setup lang="ts">
const page = await usePage('newsletterPage')

const title = page.seo?.title || page.hero?.title || 'Newsletter'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/newsletter' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/newsletter' }] })

const emailQuery = useRouteQuery('email', '')
const productsQuery = useRouteQuery('products', '')
const topicsQuery = useRouteQuery('topics', '')

const email = ref(emailQuery.value)
const communicationPermission = ref(false)

const nimiqTopicsOptions = reactive(page.form.interests.map((topic: string) => ({ label: topic, model: ref(topicsQuery.value.includes(topic)) })))
const nimiqProducts = reactive(page.form.products.map((product: string) => ({ label: product, model: ref(productsQuery.value.includes(product)) })))

const topics = computed(() => nimiqTopicsOptions.filter(topic => topic.model).map(topic => topic.label))
const products = computed(() => nimiqProducts.filter(product => product.model).map(product => product.label))

const body = computed(() => new URLSearchParams({
  email: email.value ?? '',
  communicationPermission: String(communicationPermission.value ?? false),
  topics: topics.value.join(','),
  products: products.value.join(','),
}))

const { apiDomain } = useSafeRuntimeConfig().public
const url = new URL('/api/newsletter/subscribe', apiDomain)
const { execute: submitForm, status, error } = useFetch(url.href, { method: 'POST', body, watch: false, immediate: false })
</script>

<template>
  <NuxtLayout>
    <section class="pt-[148px] md:pt-[153px] lg:pt-[160px] bg-neutral-100" style="--f-pb-min: 80; --f-pb-max: 120" data-slice-type="newsletter-form">
      <div class="newsletter-form">
        <h1 class="font-bold" style="--font-size-min:18;--font-size-max:20">
          {{ page.hero.title }}
        </h1>
        <template v-if="status === 'idle' || status === 'pending'">
          <p class="mt-3 lg:mt-4">
            {{ page.hero.description }}
          </p>

          <form class="flex flex-col mt-9 lg:mt-10" style="gap: 3rem 0" @submit.prevent="() => submitForm()">
            <fieldset>
              <legend class="text-sm text-neutral-800 ml-[-2px] nq-label">
                {{ page.form.emailLabel }}
              </legend>
              <input v-model="email" type="email" placeholder="Email address" class="mt-3 lg:mt-4 rounded-full nq-input-box w-full" required>
            </fieldset>

            <fieldset>
              <legend class="text-sm text-neutral-800 ml-[-2px] nq-label">
                {{ page.form.permissionTitle }}
              </legend>
              <p class="mt-3 lg:mt-4">
                {{ page.form.permissionDescription }}
              </p>
              <UiCheckbox v-model="communicationPermission" :required="true" class="mt-3 lg:mt-4">
                Yes, I would like to subscribe to the free Nimiq.com newsletter and receive information tailored to my needs at the email address I have provided based on my registration data and newsletter preferences. I hereby accept the <NuxtLink to="/privacy-policy" class="text-blue" target="_blank">
                  Privacy Policy.
                </NuxtLink>
              </UiCheckbox>
            </fieldset>

            <fieldset class="flex flex-col gap-y-2 lg:gap-y-3">
              <legend class="text-sm text-neutral-800 ml-[-2px] nq-label">
                {{ page.form.interestsTitle }}
              </legend>
              <p class="mt-5 lg:mt-6">
                {{ page.form.interestsDescription }}
              </p>
              <div class="grid grid-cols-2 gap-y-1 gap-x-4">
                <UiCheckbox v-for="topic in nimiqTopicsOptions" :key="topic.label" v-model="topic.model">
                  {{ topic.label }}
                </UiCheckbox>
              </div>
              <p class="mt-3">
                {{ page.form.productsTitle }}
              </p>
              <div class="grid grid-cols-2 gap-y-1 gap-x-4">
                <UiCheckbox v-for="product in nimiqProducts" :key="product.label" v-model="product.model">
                  {{ product.label }}
                </UiCheckbox>
              </div>
            </fieldset>

            <button class="self-end nq-pill-lg nq-pill-blue" :class="{ 'nq-arrow': status === 'idle' }">
              <span v-if="status === 'idle'">{{ page.form.submitButton }}</span>
              <Icon v-else class="text-lg" name="nimiq:spinner" />
            </button>
          </form>
        </template>
        <div v-else-if="status === 'error'">
          <div class="flex items-center gap-2 text-lg text-red font-semibold mt-6">
            <Icon class="scale-70" name="nimiq:cross" />
            Error
          </div>
          <p class="mt-3">
            There was an error while subscribing to the newsletter. Please try again later.
          </p>
          <pre class="px-3 py-2.5 rounded-md mt-4">{{ error }}</pre>
        </div>

        <div v-else-if="status === 'success'" class="flex items-start gap-2 text-lg text-green font-semibold mt-6">
          <Icon class="mt-1.5 scale-70" name="nimiq:check" />
          Please confirm your subscription sent to your {{ email }}.
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.newsletter-form {
  max-width: 36rem;
  margin-inline: auto;
  padding: 2.5rem 2rem;
  background: var(--color-neutral-0);
  border-radius: 0.625rem;
  box-shadow: var(--nq-shadow);
  outline: 1.5px solid color-mix(in oklch, var(--color-neutral) 6%, transparent);
  outline-offset: -1.5px;
}

@media (min-width: 640px) {
  .newsletter-form {
    padding: 3rem 2.5rem;
  }
}

@media (min-width: 1024px) {
  .newsletter-form {
    padding: 3rem;
  }
}

.newsletter-form h1,
.newsletter-form h1 + p,
.newsletter-form p {
  text-align: left;
}

.newsletter-form h1 + p,
.newsletter-form p {
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-neutral-700);
  font-weight: normal;
  max-width: 40ch;
}

@media (min-width: 1024px) {
  .newsletter-form h1 + p,
  .newsletter-form p {
    font-size: 16px;
  }
}
</style>
