<script setup lang="ts">
import type { KeyTextField } from '@prismicio/client'
import { email as emailCheck, nonEmpty, pipe, safeParse, string } from 'valibot'

defineProps<{ placeholder?: KeyTextField | string }>()

const email = ref('')

const EmailSchema = pipe(string(), nonEmpty('Please enter your email.'), emailCheck('Invalid email.'))
const parser = computed(() => safeParse(EmailSchema, email.value))
</script>

<template>
  <form relative>
    <input v-model="email" type="email" name="email" required relative rounded-full nq-input-box :placeholder="placeholder || 'Enter email address...'">
    {{ parser.success }}
    <button type="submit" :disabled="!parser.success" group absolute right-3 top-3 aspect-1 size-27 rounded-full nq-input-box bg="gradient-blue hocus:gradient-blue-darkened disabled:!gradient-subtle-neutral" flex="~ items-center justify-center">
      <div i-nimiq:arrow-right text="11 white group-disabled:neutral-600" />
    </button>
    <p v-if="parser.issues?.at(0)?.message" text="sm red mt-8">
      {{ parser.issues.at(0)?.message }}
    </p>
  </form>
</template>
