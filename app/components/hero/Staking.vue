<script setup lang="ts">
const { headline, link, description } = defineProps<{ headline: string, link?: { href: string, label?: string }, description?: string }>()

const { annualRewardPercentage } = useStakingInfo()
const headlineParts = computed(() => headline.split('{{ interestPerAnnum }}'))
const id = `terms-note-${useId()}`
const isExternal = computed(() => /^https?:\/\//.test(link?.href || ''))
</script>

<template>
  <div class="staking-hero bg-neutral-0 relative overflow-x-clip max-lg:children:max-w-none">
    <AnimatedCircleRipple class="w-[300vw] lg:w-[110vw] max-w-none absolute z-0 bottom-[10px] lg:bottom-[-300px] left-[-100vw] lg:left-[-5vw] pointer-events-none" style="max-width: none" />
    <div class="h-[400px] lg:h-[200px] bg-neutral-0 max-w-none pointer-events-none inset-0 absolute z-[1]" style="max-width: none" />
    <div class="bg-radial-green top-[50vh] lg:top-[200px] max-w-none pointer-events-none inset-0 absolute z-[1]" style="max-width: none" />
    <div class="bg-linear-white-1 top-[20vh] lg:top-[200px] max-w-none pointer-events-none inset-0 absolute z-[1]" style="max-width: none" />
    <div class="bg-linear-white-2 top-[20vh] lg:top-[200px] max-w-none pointer-events-none inset-0 absolute z-[1]" style="max-width: none" />

    <div class="flex flex-col md:items-center group relative z-[2]">
      <AnimatedStakingRipple class="w-[120px] h-[120px]" />
      <h1 class="nq-heading text-wrap text-balance mt-4 md:mt-6 md:text-center text-neutral">
        {{ headlineParts[0] }}
        <span class="bg-green/15 inline-flex text-green px-[10px] py-[3px] rounded whitespace-nowrap" data-percentage>
          ~{{ annualRewardPercentage }}<Icon class="text-[14px] translate-y-[8px]" name="nimiq:asterisk" :aria-labelledby="id" />
        </span>
        {{ headlineParts[1] }}
      </h1>
      <NuxtLink v-if="link?.href" class="f-mt-lg nq-arrow nq-pill-lg nq-pill-blue md:mx-auto" :to="link.href" :external="isExternal" :target="isExternal ? '_blank' : undefined">
        {{ link.label }}
      </NuxtLink>
      <small :id class="text-green-1100 text-left sm:text-center transition-colors duration-400 f-mt-md sm:max-w-[32ch]" data-note>
        <span class="inline-flex items-start gap-x-1 max-sm:items-start">
          <Icon class="size-3 sm:size-[0.4em] translate-x-0 translate-y-0 sm:translate-x-[4px] sm:translate-y-[8px]" aria-hidden name="nimiq:asterisk" />
          <span>{{ description || 'average return based on the current distribution. This is not financial advice.' }}</span>
        </span>
      </small>
    </div>

    <AnimatedBreathArrow class="breath-arrow-hero absolute left-1/2 -translate-x-1/2 bottom-8 lg:bottom-12 z-[2]" />
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

.breath-arrow-hero {
  display: none;
}

@media (min-width: 768px) {
  .breath-arrow-hero {
    display: block;
  }
}
</style>
