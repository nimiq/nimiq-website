<script setup lang="ts">
interface Action { href: string, label?: string, icon?: string, variant?: string, color?: string }
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
  <div class="flex flex-col flex-md:items-center group" data-inverted>
    <AnimatedStakingRipple class="text-green text-data-inverted:white size-[120px]" />
    <h2 class="mt-4 md:mt-6 text-data-inverted:white text-wrap text-md:balance">
      {{ headlineParts[0] }}
      <span class="bg-green/15 bg-data-inverted:white/30 text-green text-data-inverted:white px-2.5 py-[3px] rounded-1 inline-flex-~" data-percentage>
        ~{{ annualRewardPercentage }}<Icon class="text-14 translate-y-2" name="nimiq:asterisk" :aria-labelledby="id" />
      </span>
      {{ headlineParts[1] }}
    </h2>
    <p v-if="subline" class="data-inverted:text-white/80">
      {{ subline }}
    </p>
    <ul v-if="actions?.length" class="flex gap-4 flex-lg:gap-5 flex-wrap">
      <li v-for="action in actions" :key="action.href">
        <NuxtLink
          class="mt-6 md:mt-8 nq-arrow nq-pill-lg md:mx-auto" :to="action.href" :class="{
            'nq-pill-blue': action.variant === 'primary',
            'nq-pill-secondary': action.variant === 'secondary',
            'nq-pill-tertiary bg-white text-neutral': action.variant === 'tertiary',
          }"
        >
          {{ action.label }}
        </NuxtLink>
      </li>
    </ul>
    <small v-if="stakingNote" :id class="text-green-1100 text-data-inverted:white/80 text-sm:center transition-colors duration-400 mt-4 md:mt-6 sm:max-w-32ch" data-note>
      <Icon class="size-0.4em" aria-hidden name="nimiq:asterisk" un-translate="x--8 sm:x-4 y-4 sm:y-8" /> {{ stakingNote }}
    </small>
  </div>
</template>

<style>
section:has(+ section.gradient-transparent-green-transparent) {
  --uno: 'pb-15 md:pb-20';
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
  --uno: 'bg-green pb-[320px] md:pb-[456px]';
}
</style>

<style scoped>
[group]:has([data-percentage]:hover) [data-note] {
  --uno: 'text-neutral-800 dark:text-white';
}
</style>
