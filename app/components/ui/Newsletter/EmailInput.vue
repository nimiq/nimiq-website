<script setup lang="ts">
import { email as emailCheck, nonEmpty, pipe, safeParse, string } from 'valibot'

defineProps<{ placeholder?: string }>()

const email = ref('')

const EmailSchema = pipe(string(), nonEmpty('Please enter your email.'), emailCheck('Invalid email.'))
const invalidEmailMessage = ref<string>()

function submitForm() {
  invalidEmailMessage.value = ''

  const { success, issues } = safeParse(EmailSchema, email.value)
  if (!success && issues.length > 0) {
    invalidEmailMessage.value = issues[0].message
    return
  }

  navigateTo({ path: '/newsletter', query: { email: email.value } })
}
</script>

<template>
  <form class="max-w-32em w-full relative" @submit.prevent="submitForm">
    <label class="sr-only" for="newsletter-email">Email address</label>
    <input id="newsletter-email" v-model="email" class="rounded-full relative nq-input-box" type="email" name="email" required :placeholder="placeholder || 'Enter email address...'" autocomplete="email">
    <button class="group rounded-full size-1.6875em aspect-1 transition-colors right-0.1875em top-0.1875em absolute bg-not-disabled:gradient-blue bg-hocus:not-disabled:gradient-blue-darkened bg-disabled:!neutral-300 flex flex-items-center flex-justify-center" aria-label="Submit your email" type="submit" :disabled="!email" not-disabled:cursor-pointer>
      <Icon class="text-[0.6875em] text-white group-disabled:text-neutral-600" name="nimiq:arrow-right" />
    </button>
    <!-- The following div is always on the dom to avoid CLS -->
    <div class="h-0.5em h-md:0.75em font-semibold mt-0.25em pl-0.75em text-0.875em text-lg:0.9375em text-2xl:1em text-red text-mt-0.5em">
      <span v-if="invalidEmailMessage && email">{{ invalidEmailMessage }}</span>
    </div>
  </form>
</template>
