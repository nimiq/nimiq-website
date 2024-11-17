<script setup lang="ts">
// Check https://github.com/tmg0/hero-motion/pull/223 and remove .client from the file name
const validatorsApi = new URL('/api/v1/validators', useRuntimeConfig().public.validatorsApi)
validatorsApi.searchParams.set('with-scores', 'true')
validatorsApi.searchParams.set('with-identicons', 'true')

const { data: validators } = useFetch<Validator[]>(validatorsApi.href)

function getScoreColor(score: number) {
  if (score >= 0.75)
    return 'green'
  if (score >= 0.6)
    return 'gold'
  return 'red'
}

const formatter = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 2 })

const activeValidator = ref<string>()

const [DefineScore, ReuseScore] = createReusableTemplate<{ score: number }>()

const showAllValidators = ref(false)
function toggleShowAllValidators() {
  showAllValidators.value = !showAllValidators.value
  if (!showAllValidators.value)
    activeValidator.value = undefined
}
</script>

<template>
  <DefineScore v-slot="{ score }">
    <div ring="1.5 $c" nq-raw flex="~ items-center gap-4" col-start-4 h-max w-max rounded-full px-10 py-4 text="$c" :style="`--c: rgb(var(--nq-${getScoreColor(score)}))`">
      <div i-nimiq:star text-16 />
      <span text-24 font-semibold lh-none>{{ formatter.format(score * 5) }}</span>
    </div>
  </DefineScore>
  <div :data-expanded="showAllValidators ? '' : undefined" relative max-w-560 w-full pb-80 :style="`--count: ${validators?.length}`">
    <div bg-gradient="to-b from-transparent via-neutral-0 to-neutral-0" :class="showAllValidators ? 'op-0' : 'op-100'" aria-hidden pointer-events-none absolute bottom-0 z-10 h-180 w-full transition-opacity />
    <button bottom="8 data-open:42" absolute inset-x-0 z-10 mx-auto transition-bottom nq-pill-lg nq-pill-tertiary aria-label="Expand list" @click="toggleShowAllValidators">
      <span v-if="showAllValidators">Show less</span>
      <span v-else>Show more</span>
    </button>
    <AccordionRoot v-model="activeValidator" type="single" :collapsible="true" flex="~ col gap-16" as="ul" w-full of-y-clip :style="`height: ${showAllValidators ? 'calc(var(--count)*88+(var(--count)-1)*16)' : '400px'}`" transition-height>
      <AccordionItem v-for="({ name, address, icon, description, payoutSchedule, score, fee, website = 'https://nimiq.com' }) in validators" :key="name" as="li" :value="address" bg="neutral-200 data-open:neutral-0" rounded="8 data-open:b-0" style="--radix-accordion-content-height: 130px" relative transition data-open:shadow>
        <AccordionHeader rounded="8 data-open:b-0" size-full data-open:ring="1.5 neutral-300">
          <AccordionTrigger size-full rounded-8 bg-transparent p="20 lg:24" grid="~ cols-[40px_max-content_1fr_max-content] rows-[1fr_max-content] gap-x-16 items-center" :aria-label="`See more details about ${name}`">
            <img row-span-2 :src="icon" :alt="`${name} logo`" size-40>
            <h3 font-semibold text-lg>
              {{ name }}
            </h3>
            <div v-if="address === activeValidator" :key="address" size-16 shrink-0 rounded-full animate="fade-in" bg="neutral-400 hover:neutral-500/80" transition-colors stack>
              <div i-nimiq:chevron-top text="6 neutral-700" />
            </div>
            <Hero v-if="address !== activeValidator" :transition="{ duration: 400, type: 'spring' }" :layout-id="`${address}-score`" ml-auto>
              <!-- <ReuseScore :score="score.total" top="20 data-open:[calc(var(--radix-accordion-content-height)+20px)]" absolute right-20 transition="top ease-out duration-300" data-open:z-4 /> -->
              <ReuseScore :score="score.total" data-open:z-4 />
            </Hero>
            <NuxtLink v-if="address === activeValidator && website" :to="website" external un-text-white ml-auto size-32 rounded-full px-4 py-10 duration-400 delay-800 bg-gradient-blue nq-arrow stack />

            <p v-if="payoutSchedule" col-span-2 text="sm neutral-800 left" font-normal>
              Payout: {{ payoutSchedule }}
            </p>
          </AccordionTrigger>
          <div absolute inset-x-0 bottom-0 h-1.5 bg-neutral-0 data-open:z-3 />
        </AccordionHeader>
        <AccordionContent class="animate-content" ring="1.5 neutral-300" p="x-24 t-0 data-open:b-24" absolute inset-x-0 top-full z-1 of-clip rounded-b-8 bg-neutral-0 transition-padding data-open:shadow>
          <p v-if="description" text-lg nq-mb-16>
            {{ description }}
          </p>
          <div flex="~ gap-8 wrap items-center" font-semibold style="--delay: 100ms">
            <template v-if="fee >= 0">
              <p>Fees: {{ formatter.format(fee * 100) }}%</p>
            </template>
            <div v-if="fee >= 0 && payoutSchedule" size-2 rounded-full bg-neutral-400 />
            <template v-if="payoutSchedule">
              <p>Payout: {{ payoutSchedule }}%</p>
            </template>
          </div>
          <hr h-1 w-full bg-neutral-300 nq-my-24 style="--delay: 150ms">

          <div flex="~ items-center gap-8" style="--delay: 200ms">
            <div size-24 rounded-full bg-green stack>
              <div i-nimiq:leaf-2-filled text="14 white" />
            </div>
            <p text-xl>
              <span text-green font-bold>{{ formatter.format(score.size * 100) }}%</span> staked
            </p>
          </div>
          <ClientOnly>
            <Hero :layout-id="`${address}-score`" absolute bottom="20 lg:24" right="20 lg:24" data-open:z-5 class="nq-raw">
              <ReuseScore :score="score.total" />
            </Hero>
          </ClientOnly>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  </div>
</template>

<style scoped>
.animate-content {
  &[data-state='open'] {
    animation: slideDown 200ms ease-out both;
  }
  &[data-state='closed'] {
    animation: slideUp 150ms ease-out both;
  }
  > *:not(.nq-raw) {
    animation: zoom-in 400ms ease-out both;
    animation-delay: var(--delay, 0);
  }
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}

@keyframes zoom-in {
  from {
    opacity: 0;
    transform: scale3d(0.9, 0.9, 0.9);
  }
  50% {
    opacity: 1;
  }
}
</style>
