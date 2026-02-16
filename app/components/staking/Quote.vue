<script setup lang="ts">
defineProps<{ text: string, learnMoreLink?: string }>()
</script>

<template>
  <div class="quote-section relative z-[1]">
    <div class="bg-green absolute inset-x-0 top-0 h-[200px] max-w-none pointer-events-none" />
    <div class="bg absolute inset-x-0 top-[200px] h-[600px] max-w-none pointer-events-none" />
    <Icon class="text-white text-[96px] md:text-[112px]" name="nimiq:duotone-safe-lock" />
    <p class="quote-text text-white text-xl md:text-2xl text-left md:text-center max-w-[36ch] relative z-[1]" v-html="text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')" />
    <NuxtLink v-if="learnMoreLink" class="mt-6 md:mt-8 nq-arrow nq-pill-lg nq-pill-blue relative z-[1]" :to="learnMoreLink">
      Learn more
    </NuxtLink>
  </div>
</template>

<style scoped>
.quote-section {
  /* Override to use uniform fluid padding like f-p-5xl (144-200px, 320-1920 range) */
  --f-space-width-max: 1920;
  --f-pt-min: 144;
  --f-pt-max: 200;
  --f-pb-min: 144;
  --f-pb-max: 200;
  --f-px-min: 144;
  --f-px-max: 200;
}

.quote-text {
  /* Fluid font-size like f-2xl (22-26px, 320-1920 range) */
  font-size: clamp(22px, calc(22px + (26 - 22) * (100vw - 320px) / (1920 - 320)), 26px) !important;
  /* Fluid line-height ~1.5 */
  line-height: 1.5;
  /* Fluid margin-top like f-mt-md (24-32px, 320-1920 range) */
  margin-top: clamp(24px, calc(24px + (32 - 24) * (100vw - 320px) / (1920 - 320)), 32px);
  /* Override section's max-width rule */
  max-width: 36ch !important;
}

.bg {
  background: linear-gradient(
    180deg,
    rgb(33, 188, 165) 0%,
    rgba(33, 188, 165, 0.991615) 11.79%,
    rgba(33, 188, 165, 0.967585) 21.38%,
    rgba(33, 188, 165, 0.9296) 29.12%,
    rgba(33, 188, 165, 0.879348) 35.34%,
    rgba(33, 188, 165, 0.818519) 40.37%,
    rgba(33, 188, 165, 0.7488) 44.56%,
    rgba(33, 188, 165, 0.671881) 48.24%,
    rgba(33, 188, 165, 0.589452) 51.76%,
    rgba(33, 188, 165, 0.5032) 55.44%,
    rgba(33, 188, 165, 0.414815) 59.63%,
    rgba(33, 188, 165, 0.325985) 64.66%,
    rgba(33, 188, 165, 0.2384) 70.88%,
    rgba(33, 188, 165, 0.153748) 78.62%,
    rgba(33, 188, 165, 0.0737185) 88.21%,
    rgba(33, 188, 165, 0) 100%
  );

  background-color: var(--color-neutral-100);
}
</style>
