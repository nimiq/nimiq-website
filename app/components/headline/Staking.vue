<script setup lang="ts">
interface Action { href: string, label?: string, icon?: string, variant?: 'arrow' | 'primary' | 'secondary' | 'tertiary' }
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
  <div flex="~ col md:items-center" group data-inverted>
    <AnimatedStakingRipple text="green data-inverted:white" size-120 />
    <h2 f-mt-md text="data-inverted:white wrap md:balance">
      {{ headlineParts[0] }}
      <span bg="green/15 data-inverted:white/30" text="green data-inverted:white" data-percentage px-10 py-3 rounded-4 inline-flex="~">
        ~{{ annualRewardPercentage }}<Icon name="nimiq:asterisk" class="text-14 translate-y-8" :aria-labelledby="id" />
      </span>
      {{ headlineParts[1] }}
    </h2>
    <p v-if="subline" data-inverted:text="white/80">
      {{ subline }}
    </p>
    <ul v-if="actions?.length" flex="~ gap-16 lg:gap-20 wrap">
      <li v-for="action in actions" :key="action.href">
        <NuxtLink
          :to="action.href" f-mt-lg nq-arrow nq-pill-lg md:mx-auto :class="{
            'nq-pill-blue': action.variant === 'primary',
            'nq-pill-secondary': action.variant === 'secondary',
            'nq-pill-tertiary bg-white text-neutral': action.variant === 'tertiary',
          }"
        >
          {{ action.label }}
        </NuxtLink>
      </li>
    </ul>
    <small v-if="stakingNote" :id text="green-1100 data-inverted:white/80 sm:center" data-note transition-colors duration-400 f-mt-md sm:max-w-32ch>
      <Icon aria-hidden name="nimiq:asterisk" class="size-0.4em" un-translate="x--8 sm:x-4 y-4 sm:y-8" /> {{ stakingNote }}
    </small>
  </div>
</template>

<style>
section:has(+ section.gradient-transparent-green-transparent) {
  --uno: 'f-pb-60/80';
}

section.gradient-transparent-green-transparent {
  --gradient-height: 352px;
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
  --uno: 'bg-green f-pb-320/456';
}
</style>

<style scoped>
[group]:has([data-percentage]:hover) [data-note] {
  --uno: 'text-neutral-800 dark:text-white';
}
</style>
