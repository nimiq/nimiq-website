<script setup lang="ts">
defineProps<{ cta: string, placeholder?: string }>()
</script>

<template>
  <div>
    <h3 class="text-center">
      {{ cta }}
    </h3>
    <UiNewsletterEmailInput class="text-24 f-mt-xl" />
  </div>
</template>
