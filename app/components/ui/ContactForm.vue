<script setup lang="ts">
defineProps<{ data: { headline?: string, subline?: string, nameLabel?: string, emailLabel?: string, messageLabel?: string, submitLabel?: string } }>()
</script>

<template>
  <div class="f-container">
    <div v-if="data.headline || data.subline" class="mb-8 text-center">
      <h2 v-if="data.headline" class="nq-h2 mb-2">
        {{ data.headline }}
      </h2>
      <p v-if="data.subline" class="nq-text text-neutral-700">
        {{ data.subline }}
      </p>
    </div>
    <form class="mx-auto max-w-lg space-y-4">
      <div>
        <label class="nq-label" :for="`name-${$.uid}`">{{ data.nameLabel || 'Name' }}</label>
        <input :id="`name-${$.uid}`" class="nq-input" type="text" required>
      </div>
      <div>
        <label class="nq-label" :for="`email-${$.uid}`">{{ data.emailLabel || 'Email' }}</label>
        <input :id="`email-${$.uid}`" class="nq-input" type="email" required>
      </div>
      <div>
        <label class="nq-label" :for="`message-${$.uid}`">{{ data.messageLabel || 'Message' }}</label>
        <textarea :id="`message-${$.uid}`" class="nq-input" rows="5" required />
      </div>
      <button class="nq-button-primary" type="submit">
        {{ data.submitLabel || 'Submit' }}
      </button>
    </form>
  </div>
</template>
