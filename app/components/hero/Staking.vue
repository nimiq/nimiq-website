<script setup lang="ts">
import { motion } from 'motion-v'

const { headline, link, description } = defineProps<{ headline: string, link?: { href: string, label?: string }, description?: string }>()

const { annualRewardPercentage } = useStakingInfo()
const headlineParts = computed(() => headline.split('{{ interestPerAnnum }}'))
const id = `terms-note-${useId()}`
const isExternal = computed(() => /^https?:\/\//.test(link?.href || ''))
const heroRef = useTemplateRef<HTMLElement>('heroRef')

const enter = { opacity: 1, y: 0 }
const ease = [0.25, 0.46, 0.45, 0.94] as const // ease-out-quad

onMounted(() => {
  if (!heroRef.value)
    return
  const top = heroRef.value.getBoundingClientRect().top + window.scrollY
  heroRef.value.style.minHeight = `calc(100dvh - ${top}px)`
})
</script>

<template>
  <div ref="heroRef" data-section class="staking-hero relative overflow-x-clip max-lg:children:max-w-none min-h-dvh">
    <motion.div :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1], delay: 0.2 }" class="staking-hero-bg absolute inset-0 z-0 pointer-events-none" style="max-width: none">
      <AnimatedCircleRipple class="w-[300vw] lg:w-[110vw] max-w-none absolute z-0 bottom-[10px] lg:bottom-[-300px] left-[-100vw] lg:left-[-5vw]" style="max-width: none" />
      <div class="h-[400px] lg:h-[200px] bg-neutral-0 max-w-none inset-0 absolute z-[1]" style="max-width: none" />
      <div class="bg-radial-green top-[50vh] lg:top-[200px] max-w-none inset-0 absolute z-[1]" style="max-width: none" />
      <div class="bg-linear-white-1 top-[20vh] lg:top-[200px] max-w-none inset-0 absolute z-[1]" style="max-width: none" />
      <div class="bg-linear-white-2 top-[20vh] lg:top-[200px] max-w-none inset-0 absolute z-[1]" style="max-width: none" />
    </motion.div>

    <div class="flex flex-col md:items-center group relative z-[2]">
      <motion.div :initial="{ opacity: 0, y: 20 }" :animate="enter" :transition="{ duration: 0.3, ease }">
        <AnimatedStakingRipple class="w-[120px] h-[120px]" />
      </motion.div>
      <motion.h1 :initial="{ opacity: 0, y: 20 }" :animate="enter" :transition="{ duration: 0.3, ease, delay: 0.08 }" class="nq-heading text-wrap text-balance mt-4 md:mt-6 md:text-center text-neutral">
        {{ headlineParts[0] }}
        <span class="bg-green/15 inline-flex items-center text-green px-[10px] py-[3px] rounded whitespace-nowrap">
          <template v-if="annualRewardPercentage">~{{ annualRewardPercentage }}<Icon class="text-[14px] translate-y-[8px]" name="nimiq:asterisk" :aria-labelledby="id" /></template>
          <span v-else class="h-[1em] w-[120px] rounded-[2px] bg-green/20 animate-pulse" />
        </span>
        {{ headlineParts[1] }}
      </motion.h1>
      <motion.div v-if="link?.href" :initial="{ opacity: 0, y: 20 }" :animate="enter" :transition="{ duration: 0.3, ease, delay: 0.16 }" :while-tap="{ scale: 0.97 }">
        <NuxtLink class="f-mt-lg nq-arrow nq-pill-lg nq-pill-blue md:mx-auto" :to="link.href" :external="isExternal" :target="isExternal ? '_blank' : undefined">
          {{ link.label }}
        </NuxtLink>
      </motion.div>
      <motion.small :id :initial="{ opacity: 0, y: 20 }" :animate="enter" :transition="{ duration: 0.3, ease, delay: 0.24 }" class="text-green-1100 text-left sm:text-center transition-colors duration-400 f-mt-md sm:max-w-[384px]" data-note>
        {{ description || 'average return based on the current distribution. This is not financial advice.' }}
      </motion.small>
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

.staking-hero {
  background: rgb(255, 255, 255);
}

.staking-hero-bg {
  background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 40%, rgb(33, 188, 165) 100%);
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
