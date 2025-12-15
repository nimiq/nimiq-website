<script setup lang="ts">
defineProps<{ cta: string }>()
</script>

<template>
  <section bg-neutral-100>
    <h3 text-center>
      {{ cta }}
    </h3>
    <UiNewsletterEmailInput text-24 f-mt-xl />
  </section>
</template>
