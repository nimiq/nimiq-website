<script setup lang="ts">
interface AfterText { headline: string, description: string }
defineProps<{ cta: string, afterText?: AfterText }>()
</script>

<template>
  <div bg-neutral-100>
    <h3 text-center>
      {{ cta }}
    </h3>
    <UiNewsletterEmailInput text-24 f-mt-xl />
    <div v-if="afterText" text-center f-mt-xl>
      <h2 nq-heading font-semibold>
        {{ afterText.headline }}
      </h2>
      <p f-mt-xs>
        {{ afterText.description }}
      </p>
    </div>
  </div>
</template>
