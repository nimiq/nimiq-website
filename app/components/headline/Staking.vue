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
    <h2 class="nq-heading f-mt-md text-white text-wrap md:text-balance">
      {{ headlineParts[0] }}
      <span class="bg-white/30 text-white px-[10px] py-[3px] rounded-[4px] inline-flex" data-percentage>
        <template v-if="annualRewardPercentage">~{{ annualRewardPercentage }}<Icon class="text-[14px] translate-y-[8px]" name="nimiq:asterisk" :aria-labelledby="id" /></template>
        <span v-else class="h-[1em] w-[120px] rounded-[2px] bg-white/20 animate-pulse" />
      </span>
      {{ headlineParts[1] }}
    </h2>
    <p v-if="$slots.description || subline" style="color: rgba(255, 255, 255, 0.8)">
      <slot name="description" mdc-unwrap="p">
        {{ subline }}
      </slot>
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
  --f-pb-min: 80;
  --f-pb-max: 120;
}

section.gradient-transparent-green-transparent {
  position: relative;
  overflow: hidden;
  --gradient-height: 100%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    color-mix(in oklch, var(--color-green) 10%, transparent) 4%,
    color-mix(in oklch, var(--color-green) 35%, transparent) 8%,
    color-mix(in oklch, var(--color-green) 70%, transparent) 13%,
    var(--color-green) 20%,
    var(--color-green) 80%,
    color-mix(in oklch, var(--color-green) 70%, transparent) 87%,
    color-mix(in oklch, var(--color-green) 35%, transparent) 92%,
    color-mix(in oklch, var(--color-green) 10%, transparent) 96%,
    transparent 100%
  );
  background-size: 100% var(--gradient-height);
  background-repeat: no-repeat;
  background-color: var(--color-neutral-0);
  --f-pb-min: 160;
  --f-pb-max: 200;
}

section.gradient-transparent-green-transparent::before {
  content: '';
  position: absolute;
  left: 50%;
  top: -34%;
  width: min(840px, 85vw);
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translateX(-50%);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.55) 0%,
    rgba(255, 255, 255, 0.24) 24%,
    rgba(255, 255, 255, 0) 62%
  );
  animation: stake-gradient-breath 8s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}

section.gradient-transparent-green-transparent > * {
  position: relative;
  z-index: 1;
}

@keyframes stake-gradient-breath {
  0%,
  100% {
    transform: translate(-50%, -4%) scale(0.96);
    opacity: 0.2;
  }
  50% {
    transform: translate(-50%, 2%) scale(1.08);
    opacity: 0.45;
  }
}

@media (prefers-reduced-motion: reduce) {
  section.gradient-transparent-green-transparent::before {
    animation: none;
    opacity: 0.2;
    transform: translate(-50%, -4%) scale(1);
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
