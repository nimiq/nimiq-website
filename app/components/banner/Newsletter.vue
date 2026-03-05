<script setup lang="ts">
withDefaults(defineProps<{ cta?: string, placeholder?: string }>(), {
  cta: 'Stay up to date',
})
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <h3 class="max-md:text-left text-center text-[22px] md:text-[26px] lg:text-[30px] font-bold leading-tight text-neutral">
      {{ cta }}
    </h3>
    <UiNewsletterEmailInput class="text-[18px] md:text-24 f-mt-sm" :placeholder="placeholder" />
  </div>
</template>
