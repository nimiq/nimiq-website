<script setup lang="ts">
const props = defineProps<{
  headline: string
  subline?: string
  link?: string
  stakingNote?: string
}>()

const { annualRewardPercentage } = useStakingInfo()

// Split headline at {{ interestPerAnnum }} placeholder
const headlineParts = computed(() => props.headline.split('{{ interestPerAnnum }}'))
const id = `terms-note-${useId()}`
</script>

<template>
  <section class="staking-gradient" nq-section-gap relative>
    <div flex="~ col md:items-center" group>
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
          ~{{ annualRewardPercentage }}<div text-14 translate-y-8 i-nimiq:asterisk :aria-labelledby="id" />
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
        <div aria-hidden size-0.4em i-nimiq:asterisk un-translate="x--8 sm:x-4 y-4 sm:y-8" /> {{ stakingNote }}
      </small>
    </div>
  </section>
</template>

<style>
.staking-gradient {
  --gradient-height: 352px;
  background: linear-gradient(
    180deg,
    rgb(var(--nq-darkblue)) 0px,
    rgb(var(--nq-darkblue)) calc(0.1179 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.967585) calc(0.2138 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.9296) calc(0.2912 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.879348) calc(0.3534 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.818519) calc(0.4037 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.7488) calc(0.4456 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.671881) calc(0.4824 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.589452) calc(0.5176 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.5032) calc(0.5544 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.414815) calc(0.5963 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.325985) calc(0.6466 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.2384) calc(0.7088 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.153748) calc(0.7862 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0.0737185) calc(0.8821 * var(--gradient-height)),
    rgb(var(--nq-darkblue) / 0) var(--gradient-height),
    rgb(var(--nq-green)) var(--gradient-height),
    rgb(var(--nq-green)) 100%
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
