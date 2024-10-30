<script setup lang="ts">
import type { KeyTextField, LinkField, RichTextField } from '@prismicio/client'

const props = defineProps<{
  headline: RichTextField
  subline?: RichTextField
  ctaHref?: LinkField
  ctaLabel?: KeyTextField
  interesPerYear?: string
  note?: string
}>()

const headlineParts = computed(() => getText(props.headline!).split('{{ interesPerYear }}'))
</script>

<template>
  <div flex="~ col items-center">
    <div flex="~ items-center justify-center" class="leaf" relative size-76 rounded-full bg-white>
      <div v-for="i in 3" :key="i" ring="1.5 white/60" absolute size-full origin-center rounded-full :style="`animation: ringPulse 10s ease-out infinite;animation-delay: calc(3.3s * ${i})`" />
      <div i-nimiq:leaf-2 text="36 green-staking" />
    </div>
    <h2 w-max inline-flex="~ md:justify-center" nq-mt-32>
      {{ headlineParts[0] }}
      <div bg="white/30" mx-16 rounded-4 px-10 py-3>
        {{ interesPerYear }}
      </div>
      {{ headlineParts[1] }}
    </h2>
    <PrismicText v-if="hasText(subline)" wrapper="p" :field="subline" text="white/80" />
    <PrismicLink v-if="ctaHref && ctaLabel" internal-component="a" :field="ctaHref" bg="white hocus:white/95" nq-shadow un-text-darkblue nq-mt-48 nq-arrow nq-pill-lg md:mx-auto>
      {{ ctaLabel }}
    </PrismicLink>
    <small text="white/80" nq-mt-32>
      {{ note }}
    </small>
  </div>
</template>

<style>
section[data-slice-type='stakeHeadline'] {
  --pt: 160px;
  --gradient-height: 252px;
  background: linear-gradient(
    180deg,
    oklch(27.37% 0.068 276.29) 0px,
    oklch(27.37% 0.068 276.29 / 0.991615) calc(0.1179 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.967585) calc(0.2138 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.9296) calc(0.2912 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.879348) calc(0.3534 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.818519) calc(0.4037 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.7488) calc(0.4456 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.671881) calc(0.4824 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.589452) calc(0.5176 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.5032) calc(0.5544 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.414815) calc(0.5963 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.325985) calc(0.6466 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.2384) calc(0.7088 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.153748) calc(0.7862 * var(--gradient-height)),
    oklch(27.37% 0.068 276.29 / 0.0737185) calc(0.8821 * var(--gradient-height)),
    rgba(31, 35, 72, 0) var(--gradient-height)
  );
  --uno: 'bg-green-staking';
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
