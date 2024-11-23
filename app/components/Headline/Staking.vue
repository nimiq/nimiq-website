<script setup lang="ts">
import type { LinkField, RichTextField } from '@prismicio/client'

const { headline, showStakingIcon = false } = defineProps<{
  headline: RichTextField
  subline?: RichTextField
  cta?: LinkField
  showStakingIcon?: boolean
  primaryPill?: boolean
}>()

const { stakingValues } = useGlobalContent()

const headlineTag = computed(() => {
  const type = headline?.at(0)?.type
  if (!type?.startsWith('heading'))
    return 'h2'
  return `h${type.slice(-1)}`
})

const headlineParts = computed(() => getText(headline!).split('{{ interestPerAnnum }}'))
</script>

<template>
  <div flex="~ col items-center">
    <AnimatedStakingRipple v-if="showStakingIcon" size-120 />
    <component :is="headlineTag" nq-mt-32 inverted:text-white>
      {{ headlineParts[0] }}
      <span bg="green/15 inverted:white/30" rounded-4 px-10 py-3 text="green inverted:white" inline-flex="~">
        ~{{ stakingValues?.interestPerYear }}%<sup relative top-18 text="current 20">*</sup></span>
      {{ headlineParts[1] }}
    </component>
    <PrismicText v-if="hasText(subline)" wrapper="p" :field="subline" inverted:text="white/80" />
    <PrismicLink v-if="hasLink(cta)" internal-component="a" :field="cta" nq-shadow nq-mt-48 nq-arrow nq-pill-lg :class="primaryPill ? 'nq-pill-blue' : 'nq-pill-secondary'" md:mx-auto />
    <small text="green-1100 inverted:white/80 center" max-w-32ch nq-mt-32>
      * {{ stakingValues?.stakingNote }}
    </small>
  </div>
</template>

<style>
section.gradient-transparent-green {
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
