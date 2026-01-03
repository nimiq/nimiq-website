<script setup lang="ts">
const { headline } = defineProps<{ headline: string }>()

const { annualRewardPercentage } = useStakingInfo()
const headlineParts = computed(() => headline.split('{{ interestPerAnnum }}'))
const id = `terms-note-${useId()}`
</script>

<template>
  <section bg-neutral-0 relative of-x-clip f-p-5xl max-md:pb-100>
    <!-- Background layers for the green radial gradient effect -->
    <AnimatedCircleRipple left="-100vw lg:-5vw" size="300vw lg:110vw" max-w-none absolute z-0 bottom="10 lg:-300" />
    <div h="400 lg:200" bg-neutral-0 max-w-none pointer-events-none inset-0 absolute z-1 />
    <div class="bg-radial-green" top="50vh lg:200" max-w-none pointer-events-none inset-0 absolute z-1 />
    <div class="bg-linear-white-1" top="20vh lg:200" max-w-none pointer-events-none inset-0 absolute z-1 />
    <div class="bg-linear-white-2" top="20vh lg:200" max-w-none pointer-events-none inset-0 absolute z-1 />

    <!-- Content -->
    <div flex="~ col md:items-center" group relative z-2>
      <AnimatedStakingRipple size-120 />
      <h1 nq-heading text="wrap md:balance" f-mt-md md:text-center>
        {{ headlineParts[0] }}
        <span bg="green/15" inline-flex="~" data-percentage text-green px-10 py-3 rounded-4 whitespace-nowrap>
          ~{{ annualRewardPercentage }}<Icon name="nimiq:asterisk" class="text-14 translate-y-8" :aria-labelledby="id" />
        </span>
        {{ headlineParts[1] }}
      </h1>
      <small :id text="green-1100 sm:center" data-note transition-colors duration-400 f-mt-md sm:max-w-40ch>
        <Icon aria-hidden name="nimiq:asterisk" class="size-0.4em translate-x--8 translate-y-4 sm:translate-x-4 sm:translate-y-8" /> average return based on the current distribution. This is not financial advice.
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
