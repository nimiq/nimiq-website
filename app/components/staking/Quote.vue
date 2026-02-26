<script setup lang="ts">
import { motion } from 'motion-v'

defineProps<{ text: string, learnMoreLink?: string }>()

const inView = { opacity: 1, y: 0 }
const viewport = { once: true, margin: '-100px' }
const ease = [0.25, 0.46, 0.45, 0.94] as const
</script>

<template>
  <div data-section class="quote-section relative z-[1] items-stretch">
    <div class="quote-bg absolute inset-y-0 left-[calc(var(--px)*-1)] w-[calc(100%+var(--px)*2)] max-w-none pointer-events-none">
      <div class="quote-gradient absolute inset-x-0 -top-1 h-[804px]" />
    </div>

    <div class="quote-content relative z-[1] flex flex-col items-center">
      <motion.div :initial="{ opacity: 0, y: 16 }" :while-in-view="inView" :viewport="viewport" :transition="{ duration: 0.3, ease }">
        <Icon class="text-white text-[96px] md:text-[112px]" name="nimiq:duotone-safe-lock" />
      </motion.div>
      <motion.div :initial="{ opacity: 0, y: 16 }" :while-in-view="inView" :viewport="viewport" :transition="{ duration: 0.3, ease, delay: 0.1 }">
        <p class="quote-text text-white text-xl md:text-2xl text-left md:text-center max-w-[36ch] relative z-[1]" v-html="text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')" />
      </motion.div>
      <motion.div v-if="learnMoreLink" :initial="{ opacity: 0, y: 16 }" :while-in-view="inView" :viewport="viewport" :transition="{ duration: 0.3, ease, delay: 0.2 }">
        <NuxtLink class="mt-6 md:mt-8 nq-arrow nq-pill-lg nq-pill-blue relative z-[1]" :to="learnMoreLink">
          Learn more
        </NuxtLink>
      </motion.div>
    </div>
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
}

.quote-text {
  /* Fluid font-size (22-28px, 320-1920 range) */
  font-size: clamp(22px, calc(22px + (28 - 22) * (100vw - 320px) / (1920 - 320)), 28px) !important;
  line-height: 1.3;
  /* Fluid margin-top like f-mt-md (24-32px, 320-1920 range) */
  margin-top: clamp(24px, calc(24px + (32 - 24) * (100vw - 320px) / (1920 - 320)), 32px);
  /* Override section's max-width rule */
  max-width: 36ch !important;
}

.quote-gradient {
  background: linear-gradient(
    180deg,
    rgb(33, 188, 165) 0%,
    rgb(33, 188, 165) 12.5%,
    rgba(33, 188, 165, 0.991615) 18.4%,
    rgba(33, 188, 165, 0.967585) 23.6%,
    rgba(33, 188, 165, 0.9296) 28.1%,
    rgba(33, 188, 165, 0.879348) 32%,
    rgba(33, 188, 165, 0.818519) 35.7%,
    rgba(33, 188, 165, 0.7488) 39.6%,
    rgba(33, 188, 165, 0.671881) 43.7%,
    rgba(33, 188, 165, 0.589452) 48.1%,
    rgba(33, 188, 165, 0.5032) 52.8%,
    rgba(33, 188, 165, 0.414815) 57.8%,
    rgba(33, 188, 165, 0.325985) 63.5%,
    rgba(33, 188, 165, 0.2384) 70%,
    rgba(33, 188, 165, 0.153748) 77.3%,
    rgba(33, 188, 165, 0.0737185) 85.9%,
    rgba(33, 188, 165, 0) 100%
  );

  background-color: var(--color-neutral-100);
}

.quote-bg {
  max-width: none !important;
}
</style>
