<script setup lang="ts">
defineProps<{ cta: string, placeholder?: string }>()
</script>

<template>
  <section class="bg-neutral-100 py-8 md:py-12">
    <h3 class="text-center">
      {{ cta }}
    </h3>
    <UiNewsletterEmailInput class="text-24 mt-8 md:mt-12" />
  </section>
</template>
