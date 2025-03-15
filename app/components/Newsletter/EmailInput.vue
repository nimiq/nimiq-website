<script setup lang="ts">
import type { KeyTextField } from '@prismicio/client'
import { email as emailCheck, nonEmpty, pipe, safeParse, string } from 'valibot'

defineProps<{ placeholder?: KeyTextField | string }>()

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
  <form max-w-32em w-full relative @submit.prevent="submitForm">
    <input v-model="email" type="email" name="email" required nq-input-box rounded-full relative :placeholder="placeholder || 'Enter email address...'">
    <button aria-label="Submit your email" type="submit" :disabled="!email" group rounded-full size-1.6875em aspect-1 transition-colors right-0.1875em top-0.1875em absolute not-disabled:cursor-pointer bg="not-disabled:gradient-blue hocus:not-disabled:gradient-blue-darkened disabled:!neutral-300" flex="~ items-center justify-center">
      <div i-nimiq:arrow-right text="0.6875em white group-disabled:neutral-600" />
    </button>
    <!-- The following div is always on the dom to avoid CLS -->
    <div h="0.5em md:0.75em" font-semibold mt-0.25em pl-0.75em text="0.875em lg:0.9375em 2xl:1em red mt-0.5em">
      <span v-if="invalidEmailMessage && email">{{ invalidEmailMessage }}</span>
    </div>
  </form>
</template>
