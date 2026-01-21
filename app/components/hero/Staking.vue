<script setup lang="ts">
const { headline } = defineProps<{ headline: string }>()

const { annualRewardPercentage } = useStakingInfo()
const headlineParts = computed(() => headline.split('{{ interestPerAnnum }}'))
const id = `terms-note-${useId()}`
</script>

<template>
  <section class="bg-neutral-0 relative of-x-clip f-p-5xl max-md:pb-[100px]">
    <!-- Background layers for the green radial gradient effect -->
    <AnimatedCircleRipple class="left--100vw left-lg:-5vw size-300vw size-lg:110vw max-w-none absolute z-0 bottom-2.5 bottom-lg:-300" />
    <div class="h-[400px] h-lg:200 bg-neutral-0 max-w-none pointer-events-none inset-0 absolute z-1" />
    <div class="bg-radial-green top-50vh top-lg:200 max-w-none pointer-events-none inset-0 absolute z-1" />
    <div class="bg-linear-white-1 top-20vh top-lg:200 max-w-none pointer-events-none inset-0 absolute z-1" />
    <div class="bg-linear-white-2 top-20vh top-lg:200 max-w-none pointer-events-none inset-0 absolute z-1" />

    <!-- Content -->
    <div class="flex flex-col flex-md:items-center group relative z-2">
      <AnimatedStakingRipple class="size-[120px]" />
      <h1 class="nq-heading text-wrap text-md:balance f-mt-md md:text-center">
        {{ headlineParts[0] }}
        <span class="bg-green/15 inline-flex-~ text-green px-2.5 py-[3px] rounded-1 whitespace-nowrap" data-percentage>
          ~{{ annualRewardPercentage }}<Icon class="text-14 translate-y-2" name="nimiq:asterisk" :aria-labelledby="id" />
        </span>
        {{ headlineParts[1] }}
      </h1>
      <small :id class="text-green-1100 text-sm:center transition-colors duration-400 f-mt-md sm:max-w-40ch" data-note>
        <Icon class="size-0.4em -translate-x-2 translate-y-1 sm:translate-x-1 sm:translate-y-2" aria-hidden name="nimiq:asterisk" /> average return based on the current distribution. This is not financial advice.
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
  --uno: 'text-neutral-800';
}
</style>
