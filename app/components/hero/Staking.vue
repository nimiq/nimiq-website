<script setup lang="ts">
const { headline } = defineProps<{ headline: string }>()

const { annualRewardPercentage } = useStakingInfo()
const headlineParts = computed(() => headline.split('{{ interestPerAnnum }}'))
const id = `terms-note-${useId()}`
</script>

<template>
  <section class="staking-hero bg-neutral-0 relative overflow-hidden px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32 w-full max-w-none">
    <!-- Background gradient for the green radial effect at bottom -->
    <div class="bg-radial-green absolute inset-0 top-[60%] z-0 pointer-events-none" />

    <!-- Content -->
    <div class="flex flex-col md:items-center group relative z-[2]">
      <AnimatedStakingRipple class="w-[120px] h-[120px]" />
      <h1 class="nq-heading text-wrap text-balance mt-4 md:mt-6 md:text-center text-neutral">
        {{ headlineParts[0] }}
        <span class="bg-green/15 inline-flex text-green px-[10px] py-[3px] rounded whitespace-nowrap" data-percentage>
          ~{{ annualRewardPercentage }}<Icon class="text-[14px] translate-y-[8px]" name="nimiq:asterisk" :aria-labelledby="id" />
        </span>
        {{ headlineParts[1] }}
      </h1>
      <small :id class="text-green-1100 sm:text-center transition-colors duration-400 mt-4 md:mt-6 sm:max-w-[32ch]" data-note>
        <Icon class="size-[0.4em] -translate-x-[8px] sm:translate-x-[4px] translate-y-[4px] sm:translate-y-[8px]" aria-hidden name="nimiq:asterisk" /> average return based on the current distribution. This is not financial advice.
      </small>
    </div>
  </section>
</template>

<style scoped>
.bg-radial-green {
  background: radial-gradient(
    101.57% 50% at 50% 50%,
    rgba(var(--nq-green) / 0) 0%,
    rgba(var(--nq-green) / 0.0737185) 11.79%,
    rgba(var(--nq-green) / 0.153748) 21.38%,
    rgba(var(--nq-green) / 0.2384) 29.12%,
    rgba(var(--nq-green) / 0.325985) 35.34%,
    rgba(var(--nq-green) / 0.414815) 40.37%,
    rgba(var(--nq-green) / 0.5032) 44.56%,
    rgba(var(--nq-green) / 0.589452) 48.24%,
    rgba(var(--nq-green) / 0.671881) 51.76%,
    rgba(var(--nq-green) / 0.7488) 55.44%,
    rgba(var(--nq-green) / 0.818519) 59.63%,
    rgba(var(--nq-green) / 0.879348) 64.66%,
    rgba(var(--nq-green) / 0.9296) 70.88%,
    rgba(var(--nq-green) / 0.967585) 78.62%,
    rgba(var(--nq-green) / 0.991615) 88.21%,
    rgb(var(--nq-green)) 100%
  );
}

.bg-linear-white-1 {
  background: linear-gradient(
    180deg,
    rgb(var(--nq-neutral-0) / 1) 0,
    rgb(var(--nq-neutral-0) / 0.991615) 11.79%,
    rgb(var(--nq-neutral-0) / 0.967585) 21.38%,
    rgb(var(--nq-neutral-0) / 0.9296) 29.12%,
    rgb(var(--nq-neutral-0) / 0.879348) 35.34%,
    rgb(var(--nq-neutral-0) / 0.818519) 40.37%,
    rgb(var(--nq-neutral-0) / 0.7488) 44.56%,
    rgb(var(--nq-neutral-0) / 0.671881) 48.24%,
    rgb(var(--nq-neutral-0) / 0.589452) 51.76%,
    rgb(var(--nq-neutral-0) / 0.5032) 55.44%,
    rgb(var(--nq-neutral-0) / 0.414815) 59.63%,
    rgb(var(--nq-neutral-0) / 0.325985) 64.66%,
    rgb(var(--nq-neutral-0) / 0.2384) 70.88%,
    rgb(var(--nq-neutral-0) / 0.153748) 78.62%,
    rgb(var(--nq-neutral-0) / 0.0737185) 88.21%,
    rgb(var(--nq-neutral-0) / 0) 100%
  );
}

.bg-linear-white-2 {
  background: linear-gradient(
    180deg,
    rgb(var(--nq-neutral-0) / 1) 0,
    rgb(var(--nq-neutral-0) / 0.991615) 11.79%,
    rgb(var(--nq-neutral-0) / 0.967585) 21.38%,
    rgb(var(--nq-neutral-0) / 0.9296) 29.12%,
    rgb(var(--nq-neutral-0) / 0.879348) 35.34%,
    rgb(var(--nq-neutral-0) / 0.818519) 40.37%,
    rgb(var(--nq-neutral-0) / 0.7488) 44.56%,
    rgb(var(--nq-neutral-0) / 0.671881) 48.24%,
    rgb(var(--nq-neutral-0) / 0.589452) 51.76%,
    rgb(var(--nq-neutral-0) / 0.5032) 55.44%,
    rgb(var(--nq-neutral-0) / 0.414815) 59.63%,
    rgb(var(--nq-neutral-0) / 0.325985) 64.66%,
    rgb(var(--nq-neutral-0) / 0.2384) 70.88%,
    rgb(var(--nq-neutral-0) / 0.153748) 78.62%,
    rgb(var(--nq-neutral-0) / 0.0737185) 88.21%,
    rgb(var(--nq-neutral-0) / 0) 100%
  );
}

[group]:has([data-percentage]:hover) [data-note] {
  color: var(--color-neutral-800);
}
</style>
