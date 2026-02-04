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
  <div class="flex flex-col md:items-center group text-white" data-inverted>
    <AnimatedStakingRipple class="text-green size-[120px]" data-inverted />
    <h2 class="f-mt-md text-white text-wrap md:text-balance">
      {{ headlineParts[0] }}
      <span class="bg-white/30 text-white px-[10px] py-[3px] rounded inline-flex" data-percentage>
        ~{{ annualRewardPercentage }}<Icon class="text-[14px] translate-y-[8px]" name="nimiq:asterisk" :aria-labelledby="id" />
      </span>
      {{ headlineParts[1] }}
    </h2>
    <p v-if="subline" class="text-white/80">
      {{ subline }}
    </p>
    <ul v-if="actions?.length" class="flex gap-4 lg:gap-5 flex-wrap">
      <li v-for="action in actions" :key="action.href">
        <NuxtLink
          class="f-mt-lg nq-arrow nq-pill-lg md:mx-auto" :to="action.href" :class="{
            'nq-pill-blue': action.variant === 'primary' || action.variant === 'arrow',
            'nq-pill-secondary': action.variant === 'secondary',
            'nq-pill-tertiary bg-white text-neutral': action.variant === 'tertiary',
          }"
        >
          {{ action.label }}
        </NuxtLink>
      </li>
    </ul>
    <small v-if="stakingNote" :id class="text-white/80 sm:text-center transition-colors duration-400 f-mt-md sm:max-w-[32ch] staking-note" data-note>
      <Icon class="size-[0.4em] -translate-x-[8px] sm:translate-x-[4px] translate-y-[4px] sm:translate-y-[8px]" style="display: block" aria-hidden name="nimiq:asterisk" /> {{ stakingNote }}
    </small>
  </div>
</template>

<style>
section:has(+ section.gradient-transparent-green-transparent) {
  padding-bottom: 15px;
}
@media (min-width: 768px) {
  section:has(+ section.gradient-transparent-green-transparent) {
    padding-bottom: 20px;
  }
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
  background-color: var(--color-green);
  padding-bottom: 320px;
}
@media (min-width: 768px) {
  section.gradient-transparent-green-transparent {
    padding-bottom: 456px;
  }
}
</style>

<style scoped>
[group]:has([data-percentage]:hover) [data-note] {
  color: var(--color-neutral-800);
}
.dark [group]:has([data-percentage]:hover) [data-note] {
  color: white;
}
</style>
