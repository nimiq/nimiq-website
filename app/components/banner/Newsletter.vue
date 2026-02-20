<script setup lang="ts">
defineProps<{ cta: string, placeholder?: string }>()
</script>

<template>
  <div>
    <h3 class="text-center text-[22px] md:text-[26px] lg:text-[30px] font-bold leading-tight text-neutral">
      {{ cta }}
    </h3>
    <UiNewsletterEmailInput class="text-24 f-mt-sm" />
  </div>
</template>
