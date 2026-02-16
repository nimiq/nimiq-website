<script setup lang="ts">
const { headline } = defineProps<{ headline: string, link?: { href: string, label?: string }, description?: string }>()

const { annualRewardPercentage } = useStakingInfo()
const headlineParts = computed(() => headline.split('{{ interestPerAnnum }}'))
const id = `terms-note-${useId()}`
</script>

<template>
  <div class="staking-hero bg-neutral-0 relative overflow-hidden px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32 w-full max-w-none">
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
      <NuxtLink v-if="link?.href" class="mt-6 md:mt-8 nq-arrow nq-pill-lg nq-pill-blue" :to="link.href">
        {{ link.label }}
      </NuxtLink>
      <small :id class="text-green-1100 sm:text-center transition-colors duration-400 mt-4 md:mt-6 sm:max-w-[32ch]" data-note>
        <Icon class="size-[0.4em] -translate-x-[8px] sm:translate-x-[4px] translate-y-[4px] sm:translate-y-[8px]" aria-hidden name="nimiq:asterisk" /> {{ description || 'average return based on the current distribution. This is not financial advice.' }}
      </small>
    </div>
  </div>
</template>

<style scoped>
.bg-radial-green {
  background: radial-gradient(
    101.57% 50% at 50% 50%,
    rgba(33, 188, 165, 0) 0%,
    rgba(33, 188, 165, 0.0737185) 11.79%,
    rgba(33, 188, 165, 0.153748) 21.38%,
    rgba(33, 188, 165, 0.2384) 29.12%,
    rgba(33, 188, 165, 0.325985) 35.34%,
    rgba(33, 188, 165, 0.414815) 40.37%,
    rgba(33, 188, 165, 0.5032) 44.56%,
    rgba(33, 188, 165, 0.589452) 48.24%,
    rgba(33, 188, 165, 0.671881) 51.76%,
    rgba(33, 188, 165, 0.7488) 55.44%,
    rgba(33, 188, 165, 0.818519) 59.63%,
    rgba(33, 188, 165, 0.879348) 64.66%,
    rgba(33, 188, 165, 0.9296) 70.88%,
    rgba(33, 188, 165, 0.967585) 78.62%,
    rgba(33, 188, 165, 0.991615) 88.21%,
    rgb(33, 188, 165) 100%
  );
}

.bg-linear-white-1 {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0,
    rgba(255, 255, 255, 0.991615) 11.79%,
    rgba(255, 255, 255, 0.967585) 21.38%,
    rgba(255, 255, 255, 0.9296) 29.12%,
    rgba(255, 255, 255, 0.879348) 35.34%,
    rgba(255, 255, 255, 0.818519) 40.37%,
    rgba(255, 255, 255, 0.7488) 44.56%,
    rgba(255, 255, 255, 0.671881) 48.24%,
    rgba(255, 255, 255, 0.589452) 51.76%,
    rgba(255, 255, 255, 0.5032) 55.44%,
    rgba(255, 255, 255, 0.414815) 59.63%,
    rgba(255, 255, 255, 0.325985) 64.66%,
    rgba(255, 255, 255, 0.2384) 70.88%,
    rgba(255, 255, 255, 0.153748) 78.62%,
    rgba(255, 255, 255, 0.0737185) 88.21%,
    rgba(255, 255, 255, 0) 100%
  );
}

.bg-linear-white-2 {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0,
    rgba(255, 255, 255, 0.991615) 11.79%,
    rgba(255, 255, 255, 0.967585) 21.38%,
    rgba(255, 255, 255, 0.9296) 29.12%,
    rgba(255, 255, 255, 0.879348) 35.34%,
    rgba(255, 255, 255, 0.818519) 40.37%,
    rgba(255, 255, 255, 0.7488) 44.56%,
    rgba(255, 255, 255, 0.671881) 48.24%,
    rgba(255, 255, 255, 0.589452) 51.76%,
    rgba(255, 255, 255, 0.5032) 55.44%,
    rgba(255, 255, 255, 0.414815) 59.63%,
    rgba(255, 255, 255, 0.325985) 64.66%,
    rgba(255, 255, 255, 0.2384) 70.88%,
    rgba(255, 255, 255, 0.153748) 78.62%,
    rgba(255, 255, 255, 0.0737185) 88.21%,
    rgba(255, 255, 255, 0) 100%
  );
}

[group]:has([data-percentage]:hover) [data-note] {
  color: var(--color-neutral-800);
}
</style>
