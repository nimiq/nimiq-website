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
  <form relative @submit.prevent="submitForm">
    <input v-model="email" type="email" name="email" required relative rounded-full nq-input-box :placeholder="placeholder || 'Enter email address...'">
    <button type="submit" :disabled="!email" group absolute right-3 top-3 aspect-1 size-27 rounded-full transition-colors not-disabled:cursor-pointer bg="not-disabled:gradient-blue hocus:not-disabled:gradient-blue-darkened disabled:!neutral-300" flex="~ items-center justify-center">
      <div i-nimiq:arrow-right text="11 white group-disabled:neutral-600" />
    </button>
    <!-- The following div is always on the dom to avoid CLS -->
    <div h="8 md:12" mt-4 pl-12 font-semibold text="sm red mt-8">
      <span v-if="invalidEmailMessage && email">{{ invalidEmailMessage }}</span>
    </div>
  </form>
</template>
