<script setup lang="ts">
import type { LinkField, RichTextField } from '@prismicio/client'

const { headline, showStakingIcon = false, links = [] } = defineProps<{
  headline: RichTextField
  subline?: RichTextField
  links?: LinkField<string, string, unknown, 'filled', 'nq-pill-blue' | 'nq-pill-secondary' | 'nq-pill-tertiary'>[]
  showStakingIcon?: boolean
  primaryPill?: boolean
}>()

const { annualRewardPercentage } = useStakingInfo()

const { client } = usePrismic()
const { data: stakingValues } = await useAsyncData('staking_values', () => client.getSingle('stakingValues').then(doc => doc.data!))
if (!stakingValues)
  throw new Error('No staking values found')

const headlineTag = headline?.at(0)?.type.replace('heading', 'h') || 'h2'
const headlineParts = getText(headline!).split('{{ interestPerAnnum }}')
const id = `terms-note-${useId()}`
</script>

<template>
  <div flex="~ col md:items-center" group>
    <AnimatedStakingRipple v-if="showStakingIcon" size-120 />
    <component :is="headlineTag" f-mt-md text="data-inverted:white wrap md:balance">
      {{ headlineParts[0] }}
      <span bg="green/15 data-inverted:white/30" text="green data-inverted:white" data-percentage px-10 py-3 rounded-4 inline-flex="~">
        ~{{ annualRewardPercentage }}<div text-14 translate-y-8 i-nimiq:asterisk :aria-labelledby="id" /></span>
      {{ headlineParts[1] }}
    </component>
    <PrismicText v-if="hasText(subline)" wrapper="p" :field="subline" data-inverted:text="white/80" />
    <ul v-if="links.length > 0" flex="~ gap-16 lg:gap-20 wrap">
      <li v-for="(link, i) in links" :key="i">
        <PrismicLink
          internal-component="a" :field="link" f-mt-lg nq-arrow nq-pill-lg md:mx-auto :class="{
            'nq-pill-blue': link.variant === 'nq-pill-blue',
            'nq-pill-secondary': link.variant === 'nq-pill-secondary',
            'nq-pill-tertiary bg-white text-neutral': link.variant === 'nq-pill-tertiary',
          }"
        />
      </li>
    </ul>
    <small :id text="green-1100 data-inverted:white/80 sm:center" data-note transition-colors duration-400 f-mt-md sm:max-w-32ch>
      <div aria-hidden size-0.4em i-nimiq:asterisk un-translate="x--8 sm:x-4 y-4 sm:y-8" /> {{ stakingValues?.stakingNote }}
    </small>
  </div>
</template>

<style>
section:has(+ section.gradient-transparent-green-transparent) {
  --uno: 'f-pb-60/80';
}

section.gradient-transparent-green {
  --un-gradient-fn-from: transparent !important;
  --uno: 'pt-140 lg:pt-152 bg-gradient-fn-from-transparent bg-gradient-fn-to-green bg-gradient-fn-ease-out-cubic bg-gradient-fn-to-b bg-gradient-fn-length-252';
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
