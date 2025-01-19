<script setup lang="ts">
import type { LinkField, RichTextField } from '@prismicio/client'

const { headline, showStakingIcon = false } = defineProps<{
  headline: RichTextField
  subline?: RichTextField
  cta?: LinkField
  showStakingIcon?: boolean
  primaryPill?: boolean
}>()

const { stakingValues, rewardPerAnnumPercentage } = useStakingStore()

const headlineTag = computed(() => {
  const type = headline?.at(0)?.type
  if (!type?.startsWith('heading'))
    return 'h2'
  return `h${type.slice(-1)}`
})

const headlineParts = computed(() => getText(headline!).split('{{ interestPerAnnum }}'))

const id = `terms-note-${useId()}`
</script>

<template>
  <div flex="~ col md:items-center" group>
    <AnimatedStakingRipple v-if="showStakingIcon" size-120 />
    <component :is="headlineTag" f-m-md text="inverted:white wrap md:balance">
      {{ headlineParts[0] }}
      <span bg="green/15 inverted:white/30" text="green inverted:white" data-percentage rounded-4 px-10 py-3 inline-flex="~">
        ~{{ rewardPerAnnumPercentage }}<div i-nimiq:asterix translate-y-8 text-14 :aria-labelledby="id" /></span>
      {{ headlineParts[1] }}
    </component>
    <PrismicText v-if="hasText(subline)" wrapper="p" :field="subline" inverted:text="white/80" />
    <PrismicLink v-if="hasLink(cta)" internal-component="a" :field="cta" :class="primaryPill ? 'nq-pill-blue' : 'nq-pill-tertiary'" nq-shadow nq-arrow nq-pill-lg f-m-lg md:mx-auto inverted:shadow-none />
    <small :id text="green-1100 inverted:white/80 sm:center" data-note transition-colors duration-400 f-m-md sm:max-w-32ch>
      <div aria-hidden i-nimiq:asterix text="7 sm:9" un-translate="x--8 sm:x-4 y-4 sm:y-8" /> {{ stakingValues?.stakingNote }}
    </small>
  </div>
</template>

<style>
section:has(+ section.gradient-transparent-green-transparent) {
  --uno: 'f-pb-60/80';
}

section.gradient-transparent-green {
  --uno: 'pt-140 lg:pt-152';
  --gradient-height: 252px;
  background: linear-gradient(
    180deg,
    rgb(var(--nq-neutral-0)) 0px,
    rgb(var(--nq-neutral-0) / 0.991615) calc(0.1179 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.967585) calc(0.2138 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.9296) calc(0.2912 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.879348) calc(0.3534 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.818519) calc(0.4037 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.7488) calc(0.4456 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.671881) calc(0.4824 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.589452) calc(0.5176 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.5032) calc(0.5544 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.414815) calc(0.5963 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.325985) calc(0.6466 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.2384) calc(0.7088 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.153748) calc(0.7862 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.0737185) calc(0.8821 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0) var(--gradient-height)
  );
  --uno: 'bg-green';
}

section.gradient-transparent-green-transparent {
  --pt: 160px;
  --pb: 160px;
  --gradient-height: 252px;
  background: linear-gradient(
    180deg,
    rgb(var(--nq-neutral-0)) 0px,
    rgb(var(--nq-neutral-0)) calc(0.1179 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.967585) calc(0.2138 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.9296) calc(0.2912 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.879348) calc(0.3534 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.818519) calc(0.4037 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.7488) calc(0.4456 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.671881) calc(0.4824 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.589452) calc(0.5176 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.5032) calc(0.5544 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.414815) calc(0.5963 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.325985) calc(0.6466 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.2384) calc(0.7088 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.153748) calc(0.7862 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.0737185) calc(0.8821 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0) var(--gradient-height),
    rgb(var(--nq-neutral-0) / 0) calc(100% - var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.0737185) calc(100% - 0.8821 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.153748) calc(100% - 0.7862 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.2384) calc(100% - 0.7088 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.325985) calc(100% - 0.6466 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.414815) calc(100% - 0.5963 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.5032) calc(100% - 0.5544 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.589452) calc(100% - 0.5176 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.671881) calc(100% - 0.4824 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.7488) calc(100% - 0.4456 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.818519) calc(100% - 0.4037 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.879348) calc(100% - 0.3534 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.9296) calc(100% - 0.2912 * var(--gradient-height)),
    rgb(var(--nq-neutral-0) / 0.967585) calc(100% - 0.2138 * var(--gradient-height)),
    rgb(var(--nq-neutral-0)) calc(100% - 0.1179 * var(--gradient-height)),
    rgb(var(--nq-neutral-0)) 100%
  );
  --uno: 'bg-green';
}

@keyframes ringPulse {
  0% {
    transform: scale(0.9);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>

<style scoped>
[group]:has([data-percentage]:hover) {
  & [data-note] {
    --uno: 'text-neutral-800 dark:text-white';
  }
}
</style>
