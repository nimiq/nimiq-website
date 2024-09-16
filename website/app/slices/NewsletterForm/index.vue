<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.NewsletterFormSlice>())
const { sectionRef } = useSlice(props.slice.id, 'grey')

const email = ref('')

const communicationPermission = ref(false)
const nimiqTopicsOptions = reactive([
  { label: 'Education', model: ref(false) },
  { label: 'Community', model: ref(false) },
  { label: 'Consumer Tech', model: ref(false) },
  { label: 'Business Tech', model: ref(false) },
  { label: 'Blockchain Tech', model: ref(false) },
])
const nimiqProducts = reactive([
  { label: 'Nimiq Wallet', model: ref(false) },
  { label: 'SuperSimpleSwap', model: ref(false) },
  { label: 'Cryptopayment.link', model: ref(false) },
])

async function submitForm() {
  const interests = nimiqTopicsOptions.filter(topic => topic.model).map(topic => topic.label)
  const products = nimiqProducts.filter(product => product.model).map(product => product.label)

  try {
    const response = await $fetch('/api/newsletter-signup', {
      method: 'POST',
      body: {
        email: email.value,
        communicationPermission: communicationPermission.value,
        interests,
        products,
      },
    })
    // eslint-disable-next-line no-console
    console.log('Newsletter signup response:', response)

    // TODO: Handle successful signup (e.g., show a success message)
  }
  catch (error) {
    console.error('Newsletter signup error:', error)
    // TODO: Handle signup error (e.g., show an error message)
  }
}
</script>

<template>
  <section ref="sectionRef" pt="148 md:153 lg:160" mx-auto max-w-65ch>
    <div px="32 md:36 lg:40" rounded-6 bg-white py-60 shadow>
      <h1 style="--font-size-min:24;--font-size-max:28" text-left>
        Nimiq newsletter signup
      </h1>
      <p mt="12 lg:16">
        You don't want to miss any news about the Nimiq ecosystem? Subscribe to our newsletter and receive regular updates on a variety of Nimiq related topics.
      </p>

      <form flex="~ col gap-y-36 lg:gap-y-40" mt="36 lg:40" @submit.prevent="submitForm">
        <fieldset>
          <legend text="14 neutral" ml--2 nq-label>
            Your email*
          </legend>
          <input v-model="email" type="email" placeholder="Email address" required rounded-full mt="12 lg:16" nq-input-box>
        </fieldset>

        <fieldset>
          <legend text="14 neutral" ml--2 nq-label>
            Communication permission*
          </legend>
          <p mt="12 lg:16">
            In order to receive the Nimiq newsletter, you must give us permission to contact you.
          </p>
          <Checkbox v-model="communicationPermission" :required="true" mt="12 lg:16">
            Yes, I would like to subscribe to the Nimiq.com newsletter free of charge and receive information tailored to me at the e-mail address I have provided on the basis of my registration data and newsletter preference.
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

        <button self-end nq-arrow nq-pill-lg nq-pill-blue>
          Subscribe
        </button>
      </form>
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
