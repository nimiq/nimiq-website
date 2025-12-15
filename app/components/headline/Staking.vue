<script setup lang="ts">
const { headline, subline, link, stakingNote } = defineProps<{
  headline: string
  subline?: string
  link?: string
  stakingNote?: string
}>()

const { annualRewardPercentage } = useStakingInfo()

// Split headline at {{ interestPerAnnum }} placeholder
const headlineParts = computed(() => headline.split('{{ interestPerAnnum }}'))
const id = `terms-note-${useId()}`
</script>

<template>
  <div class="staking-gradient" flex="~ col md:items-center" nq-section-gap group relative>
    <!-- StakingRipple inlined -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 148 148" text="green data-inverted:white" size-120>
      <radialGradient id="a" cx="-791" cy="458" r="1" gradientTransform="matrix(-83 0 0 83.5341 -66014 -38208)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#41a38e" />
        <stop offset="1" stop-color="#21bca5" />
      </radialGradient>
      <circle cx="73.76" cy="73.76" r="51.76" stroke-opacity=".8" stroke-width="3" style="--delay:200ms" stroke="currentColor" op-0 class="ripple" />
      <circle cx="73.76" cy="73.76" r="61.76" stroke-opacity=".6" stroke-width="3" style="--delay:400ms" stroke="currentColor" op-0 class="ripple" />
      <circle cx="73.76" cy="73.76" r="71.76" stroke-opacity=".4" stroke-width="3" style="--delay:600ms" stroke="currentColor" op-0 class="ripple" />
      <circle cx="73.76" cy="73.76" r="41.76" fill="url(#a)" un-fill="data-inverted:white" />
      <path stroke="white data-inverted:!green" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M72.53 75.07v16.61m0-16.61C60.13 75.07 56 68.33 56 55c15.5 0 16.53 6.64 16.53 20.07Zm18.71-9.5c0 12.4-6.31 18.89-18.71 18.89 0-17.56 5.28-18.89 18.71-18.89Z" translate-y-3 />
    </svg>
    <h2 nq-heading text="wrap md:balance" f-mt-md>
      {{ headlineParts[0] }}
      <span bg="green/15" data-percentage text-green px-10 py-3 rounded-4 inline-flex="~">
        ~{{ annualRewardPercentage }}<Icon name="nimiq:asterisk" class="text-14 translate-y-8" :aria-labelledby="id" />
      </span>
      {{ headlineParts[1] }}
    </h2>
    <p v-if="subline" text="neutral-800 md:center" f-mt-sm>
      {{ subline }}
    </p>
    <NuxtLink v-if="link" :to="link" f-mt-lg nq-arrow nq-pill-lg nq-pill-secondary md:mx-auto>
      Start Staking
    </NuxtLink>
    <small v-if="stakingNote" :id text="green-1100 sm:center" data-note transition-colors duration-400 f-mt-md sm:max-w-32ch>
      <Icon aria-hidden name="nimiq:asterisk" class="size-0.4em translate-x--8 translate-y-4 sm:translate-x-4 sm:translate-y-8" /> {{ stakingNote }}
    </small>
  </div>
</template>

<style>
.staking-gradient {
  --gradient-height: 352px;
  background: linear-gradient(
    180deg,
    var(--colors-darkblue) 0px,
    var(--colors-darkblue) calc(0.1179 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 96.7585%, transparent) calc(0.2138 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 92.96%, transparent) calc(0.2912 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 87.9348%, transparent) calc(0.3534 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 81.8519%, transparent) calc(0.4037 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 74.88%, transparent) calc(0.4456 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 67.1881%, transparent) calc(0.4824 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 58.9452%, transparent) calc(0.5176 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 50.32%, transparent) calc(0.5544 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 41.4815%, transparent) calc(0.5963 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 32.5985%, transparent) calc(0.6466 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 23.84%, transparent) calc(0.7088 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 15.3748%, transparent) calc(0.7862 * var(--gradient-height)),
    color-mix(in oklch, var(--colors-darkblue) 7.37185%, transparent) calc(0.8821 * var(--gradient-height)),
    transparent var(--gradient-height),
    var(--colors-green) var(--gradient-height),
    var(--colors-green) 100%
  );
}
</style>

<style scoped>
[group]:has([data-percentage]:hover) [data-note] {
  --uno: 'text-neutral-800';
}

/* StakingRipple styles */
svg .ripple {
  animation: fastwave 1s ease alternate infinite;
  animation-delay: var(--delay);
}

@keyframes fastwave {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.15;
  }
  100% {
    opacity: 0;
  }
}
</style>
