<script setup lang="ts">
interface AfterText { headline: string, description: string }
defineProps<{ cta: string, afterText?: AfterText }>()
</script>

<template>
  <div class="bg-neutral-100">
    <h3 class="text-center">
      {{ cta }}
    </h3>
    <UiNewsletterEmailInput class="text-24 f-mt-xl" />
    <div v-if="afterText" class="text-center f-mt-xl">
      <h2 class="nq-heading font-semibold">
        {{ afterText.headline }}
      </h2>
      <p class="f-mt-xs">
        {{ afterText.description }}
      </p>
    </div>
  </div>
</template>
