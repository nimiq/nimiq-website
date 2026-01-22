<script setup lang="ts">
interface AfterText { headline: string, description: string }
defineProps<{ cta: string, afterText?: AfterText }>()
</script>

<template>
  <div class="bg-neutral-100">
    <h3 class="text-center">
      {{ cta }}
    </h3>
    <UiNewsletterEmailInput class="text-24 mt-8 md:mt-12" />
    <div v-if="afterText" class="text-center mt-8 md:mt-12">
      <h2 class="nq-heading font-semibold">
        {{ afterText.headline }}
      </h2>
      <p class="mt-2 md:mt-3">
        {{ afterText.description }}
      </p>
    </div>
  </div>
</template>
