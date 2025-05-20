<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const { validators } = useValidatorsInfo() // TODO Loading/Error states

const percentageFormatter = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })

const activeValidator = ref<string>()

const { smaller } = useBreakpoints(breakpointsTailwind)

const showAllValidators = ref(false)
function handleTriggerClick() {
  if (smaller('xl'))
    showAllValidators.value = true
}
function toggleShowAllValidators() {
  showAllValidators.value = !showAllValidators.value
  if (!showAllValidators.value)
    activeValidator.value = undefined
}

// If name is longer than 25 letter, then truncate as follows: 18 + '...' + 5 = 25
function truncate(text: string) {
  if (text.length > 28)
    return text.length > 28 ? `${text.slice(0, 16)}...${text.slice(-8)}` : text
  return text
}
</script>

<template>
  <div :data-state="showAllValidators ? 'open' : 'closed'" :class="showAllValidators ? 'h-auto' : 'h-448 of-y-clip'" :style="`--count: ${validators?.length}`" pb-80 w-full relative transition="height discrete">
    <div bg-gradient="to-b from-transparent via-neutral-0 to-neutral-0" :class="showAllValidators ? 'op-0' : 'op-100'" aria-hidden h-228 w-full pointer-events-none transition-opacity bottom--48 absolute z-10 />
    <button bottom="8 data-open:42" mx-auto transition-bottom inset-x-0 absolute z-10 nq-pill-secondary aria-label="Expand list" @click="toggleShowAllValidators">
      <span v-if="showAllValidators">Show less</span>
      <span v-else>Show more</span>
    </button>
    <AccordionRoot v-model="activeValidator" type="single" :collapsible="true" grid="~ cols-[repeat(auto-fit,minmax(200px,469px))] gap-16 justify-center" as="ul" w-full transition-height>
      <AccordionItem v-for="({ name, address, logo, description, rewardGainRatio, score, fee, website, dominanceRatio }) in validators" :key="name" as="li" :value="address" style="--reka-accordion-content-height: 130px" rounded-8 max-w-full transition relative>
        <AccordionTrigger rounded="8 data-open:b-0" data-open:border="1 neutral-400 b-transparent" p="x-20 lg:x-24 16" grid="~ cols-[max-content_1fr_max-content] rows-[1fr_max-content] gap-x-16 items-center" :aria-label="`See more details about ${name}`" border="1 transparent" transition="[background-color,border-radius,border]" rounded-8 size-full delay-100 relative data-open:z-11 bg="neutral-200 data-open:neutral-0" @click="handleTriggerClick">
          <img :src="logo" :alt="`${name} logo`" row-span-full h-full w-40 object-contain flex="~ items-center">
          <h3 font-semibold truncate text="f-lg left">
            {{ truncate(name) }}
          </h3>
          <transition mode="out-in" enter-active-class="transition-[opacity,transform] duration-400" enter-from-class="op-0 scale-0" enter-to-class="op-100 scale-100" leave-active-class="transition-[opacity,transform] duration-150" leave-from-class="op-100 scale-100" leave-to-class="op-0 scale-0">
            <div v-if="address === activeValidator" bg="neutral-400 hover:neutral-500" stack rounded-full shrink-0 size-18 transition-colors transition-opacity>
              <div i-nimiq:chevron-up text="10 neutral-700" />
            </div>
            <ValidatorTrustscore v-else-if="score" :score="score.total" show-border text-14 ml-auto row-span-full col-start-3 />
          </transition>
          <p v-if="rewardGainRatio" text="f-sm neutral-800 left" col="start-2 span-2" font-normal mt-0 row-start-2>
            {{ percentageFormatter.format(rewardGainRatio) }} p.a.
          </p>
        </AccordionTrigger>
        <AccordionContent class="animate-content" p="x-24 t-0 b-24" border="1 neutral-400 t-0" pt-8 rounded-b-8 bg-neutral-0 shadow transition-padding inset-x-0 top-full absolute z-10 z-11 of-y-clip>
          <div bg-neutral-0 h-4 inset-x-0 top-0 absolute z-111 />
          <ValidatorScoreAccordion v-if="score" :score f-mt-md />
          <div grid="~ cols-[1fr_auto] items-center" text="neutral-700 f-sm" text-neutral font-semibold f-mt-xs>
            <template v-if="rewardGainRatio !== undefined">
              <h4 text-16>
                Estimated yearly rewards
              </h4>
              <p font-semibold text="f-sm neutral right">
                {{ percentageFormatter.format(rewardGainRatio) }}
              </p>
            </template>
            <h5 font-semibold f-text-xs>
              incl. pool fee
            </h5>
            <p text="f-sm neutral-800 right">
              {{ percentageFormatter.format(fee) }}
            </p>
            <p text="f-2xs neutral-700" mt-8>
              Your rewards are influenced by how many NIM are staked globally and your validator pool's fee.
            </p>
            <div col-span-full h-24 />
            <h4 text-16 col-start-1>
              Staked amount
            </h4>
            <p text="right neutral">
              <template v-if="dominanceRatio">
                {{ percentageFormatter.format(dominanceRatio) }}
              </template>
              <span v-else text="orange-1100">
                Data not available
              </span>
            </p>
          </div>
          <template v-if="description || website">
            <hr w="[calc(100%+48px)]" mx--24 bg-neutral-300 h-1 f-my-sm>
            <p v-if="description" text="neutral" font-500>
              &ldquo;{{ description }}&rdquo;
            </p>
            <NuxtLink v-if="website" :to="website" un-text="blue" external font-semibold mt-8 nq-arrow>
              {{ website }}
            </NuxtLink>
            <p text="neutral-600 f-2xs" font-semibold f-mt-2xs>
              The validator is solely responsible for the information provided above. It is not to be viewed as an endorsement or recommendation by Nimiq.
            </p>
          </template>
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
    height: var(--reka-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-accordion-content-height);
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
