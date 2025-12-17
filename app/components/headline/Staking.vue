<script setup lang="ts">
interface Action { href: string, label?: string, icon?: string, variant?: 'arrow' | 'primary' | 'secondary' }
const { headline, subline, actions, stakingNote } = defineProps<{
  headline: string
  subline?: string
  actions?: Action[]
  stakingNote?: string
}>()

const { annualRewardPercentage } = useStakingInfo()

const headlineParts = computed(() => headline.split('{{ interestPerAnnum }}'))
const id = `terms-note-${useId()}`
</script>

<template>
  <div flex="~ col md:items-center" group scheme-light relative pt="120 lg:140" pb="120 lg:152">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 148 148" text-green size-120>
      <radialGradient id="a" cx="-791" cy="458" r="1" gradientTransform="matrix(-83 0 0 83.5341 -66014 -38208)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#41a38e" />
        <stop offset="1" stop-color="#21bca5" />
      </radialGradient>
      <circle cx="73.76" cy="73.76" r="51.76" stroke-opacity=".6" stroke-width="2" stroke="currentColor" />
      <circle cx="73.76" cy="73.76" r="61.76" stroke-opacity=".4" stroke-width="2" stroke="currentColor" />
      <circle cx="73.76" cy="73.76" r="71.76" stroke-opacity=".2" stroke-width="2" stroke="currentColor" />
      <circle cx="73.76" cy="73.76" r="41.76" fill="url(#a)" />
      <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M72.53 75.07v16.61m0-16.61C60.13 75.07 56 68.33 56 55c15.5 0 16.53 6.64 16.53 20.07Zm18.71-9.5c0 12.4-6.31 18.89-18.71 18.89 0-17.56 5.28-18.89 18.71-18.89Z" translate-y-3 />
    </svg>
    <h1 nq-heading text="wrap md:balance" f-mt-md>
      {{ headlineParts[0] }}
      <span bg="green/20" data-percentage text-white px-10 py-3 rounded-4 inline-flex="~">
        ~{{ annualRewardPercentage }}<Icon name="nimiq:asterisk" class="text-14 translate-y-8" :aria-labelledby="id" />
      </span>
      {{ headlineParts[1] }}
    </h1>
    <p v-if="subline" text="white/80 md:center" f-mt-sm>
      {{ subline }}
    </p>
    <div v-if="actions?.length" flex="~ gap-16 wrap" f-mt-lg md:mx-auto>
      <template v-for="action in actions" :key="action.href">
        <NuxtLink v-if="action.variant === 'arrow'" :to="action.href" nq-arrow nq-pill-lg nq-pill-secondary />
        <NuxtLink v-else :to="action.href" nq-pill-lg nq-pill-secondary flex="~ items-center gap-8">
          <Icon v-if="action.icon" :name="action.icon" class="text-20" />
          <span v-if="action.label">{{ action.label }}</span>
        </NuxtLink>
      </template>
    </div>
    <small v-if="stakingNote" :id text="white/60 sm:center" data-note transition-colors duration-400 f-mt-md sm:max-w-40ch>
      <Icon aria-hidden name="nimiq:asterisk" class="size-0.4em translate-x--8 translate-y-4 sm:translate-x-4 sm:translate-y-8" /> {{ stakingNote }}
    </small>
  </div>
</template>

<style scoped>
:global(section.staking-gradient) {
  --gradient-height: 452px;
  background: linear-gradient(
    180deg,
    var(--colors-darkerblue) 0px,
    var(--colors-darkerblue) calc(0.1179 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 96.7585%, var(--colors-green)) calc(0.2138 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 92.96%, var(--colors-green)) calc(0.2912 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 87.9348%, var(--colors-green)) calc(0.3534 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 81.8519%, var(--colors-green)) calc(0.4037 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 74.88%, var(--colors-green)) calc(0.4456 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 67.1881%, var(--colors-green)) calc(0.4824 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 58.9452%, var(--colors-green)) calc(0.5176 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 50.32%, var(--colors-green)) calc(0.5544 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 41.4815%, var(--colors-green)) calc(0.5963 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 32.5985%, var(--colors-green)) calc(0.6466 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 23.84%, var(--colors-green)) calc(0.7088 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 15.3748%, var(--colors-green)) calc(0.7862 * var(--gradient-height)),
    color-mix(in oklab, var(--colors-darkerblue) 7.37185%, var(--colors-green)) calc(0.8821 * var(--gradient-height)),
    var(--colors-green) var(--gradient-height),
    var(--colors-green) 100%
  );
}

[group]:has([data-percentage]:hover) [data-note] {
  --uno: 'text-white/80';
}
</style>
