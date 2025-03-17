<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { NewsletterProducts, NewsletterTopics } from '~~/server/utils/newsletter'

defineProps(getSliceComponentProps<Content.NewsletterFormSlice>())

const emailQuery = useRouteQuery('email', '')
const productsQuery = useRouteQuery('products', '')
const topicsQuery = useRouteQuery('topics', '')

const email = ref(emailQuery.value)

const communicationPermission = ref(false)

const nimiqTopicsOptions = reactive(Object.values(NewsletterTopics).map(topic => ({ label: topic, model: ref(topicsQuery.value.includes(topic)) })))
const nimiqProducts = reactive(Object.values(NewsletterProducts).map(product => ({ label: product, model: ref(productsQuery.value.includes(product)) })))

const topics = computed(() => nimiqTopicsOptions.filter(topic => topic.model).map(topic => topic.label))
const products = computed(() => nimiqProducts.filter(product => product.model).map(product => product.label))
const body = computed(() => ({ email: email.value, communicationPermission: communicationPermission.value, topics: topics.value, products: products.value }))

const url = `${useRuntimeConfig().public.apiDomain}/api/newsletter/subscribe`
const { execute: submitForm, status, error } = useFetch(url, { method: 'POST', body, watch: false, immediate: false })
</script>

<template>
  <section pt="148 md:153 lg:160" data-slice-type="newsletter-form">
    <div px="32 md:36 lg:40" mx-auto max-w-65ch rounded-6 bg-neutral-0 py-60 shadow>
      <h1 style="--nq-font-size-min:24;--nq-font-size-max:28" text-left>
        Nimiq newsletter signup
      </h1>
      <template v-if="status === 'idle' || status === 'pending'">
        <p mt="12 lg:16">
          You don't want to miss any news about the Nimiq ecosystem? Subscribe to our newsletter and receive regular updates on a variety of Nimiq related topics.
        </p>

        <form flex="~ col gap-y-36 lg:gap-y-40" mt="36 lg:40" @submit.prevent="() => submitForm()">
          <fieldset>
            <legend text="14 neutral" ml--2 nq-label>
              Your email*
            </legend>
            <input v-model="email" type="email" placeholder="Email address" mt="12 lg:16" required rounded-full nq-input-box>
          </fieldset>

          <fieldset>
            <legend text="14 neutral" ml--2 nq-label>
              Communication permission*
            </legend>
            <p mt="12 lg:16">
              In order to receive the Nimiq newsletter, you must give us permission to contact you.
            </p>
            <Checkbox v-model="communicationPermission" :required="true" mt="12 lg:16">
              Yes, I would like to subscribe to the free Nimiq.com newsletter and receive information tailored to my needs at the email address I have provided based on my registration data and newsletter preferences. I hereby accept the <NuxtLink to="/privacy-policy" text-blue target="_blank">
                Privacy Policy.
              </NuxtLink>
            </Checkbox>
          </fieldset>

          <fieldset flex="~ col gap-y-20 lg:gap-y-24">
            <legend text="14 neutral" ml--2 nq-label>
              Your interests
            </legend>
            <p mt-20 lg:mt-24>
              In which topics are you interested?
            </p>
            <div grid="~ cols-2 gap-y-4 gap-x-16">
              <Checkbox v-for="topic in nimiqTopicsOptions" :key="topic.label" v-model="topic.model">
                {{ topic.label }}
              </Checkbox>
            </div>
            <p mt-12>
              Which Nimiq products do you use?
            </p>
            <div grid="~ cols-2 gap-y-4 gap-x-16">
              <Checkbox v-for="product in nimiqProducts" :key="product.label" v-model="product.model">
                {{ product.label }}
              </Checkbox>
            </div>
          </fieldset>

          <button :class="{ 'nq-arrow': status === 'idle' }" self-end nq-pill-lg nq-pill-blue>
            <span v-if="status === 'idle'">
              Subscribe
            </span>
            <div v-else i-nimiq:spinner text-18 />
          </button>
        </form>
      </template>
      <div v-else-if="status === 'error'">
        <div flex="~ items-center gap-8" text="f-lg red" font-semibold f-mt-md>
          <div i-nimiq:cross scale-70 />
          Error
        </div>
        <p nt-mt-12>
          There was an error while subscribing to the newsletter. Please try again later.
        </p>

        <pre rounded-6 px-12 py-10 f-mt-xs>
          {{ error }}
        </pre>
      </div>

      <div v-else-if="status === 'success'" flex="~ items-start gap-8" text="f-lg green" font-semibold f-mt-md>
        <div i-nimiq:check mt-6 scale-70 />
        Please confirm your subscription sent to your {{ email }}.
      </div>
    </div>
  </section>
</template>

<style scoped>
@layer components {
  p {
    --uno: 'text-14 lg:text-16 text-neutral-700 text-left font-normal max-w-40ch';
  }
}
</style>
