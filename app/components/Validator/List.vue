<script setup lang="ts">
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'

const { validators } = useValidatorsInfo()

const percentageFormatter = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })

const activeValidator = ref<string>()

const showAllValidators = ref(false)
function toggleShowAllValidators() {
  showAllValidators.value = !showAllValidators.value
  if (!showAllValidators.value)
    activeValidator.value = undefined
}

function truncate(text: string) {
  return text.length > 28 ? `${text.slice(0, 16)}...${text.slice(-8)}` : text
}
</script>

<template>
  <div :data-state="showAllValidators ? 'open' : 'closed'" class="pb-20 w-full relative transition-[height]" :class="showAllValidators ? 'h-auto' : 'h-[448px] overflow-y-clip'" :style="`--count: ${validators?.length}`">
    <div class="h-[228px] w-full pointer-events-none bottom-[-48px] absolute z-10 transition-opacity" :class="showAllValidators ? 'opacity-0' : 'opacity-100'" aria-hidden style="background: linear-gradient(to bottom in oklab, transparent 0%, rgb(255, 255, 255) 100%);" />
    <button class="mx-auto transition-[bottom] inset-x-0 absolute z-10 nq-pill-secondary" :class="showAllValidators ? 'bottom-[42px]' : 'bottom-2'" aria-label="Expand list" @click="toggleShowAllValidators">
      <span v-if="showAllValidators">Show less</span>
      <span v-else>Show more</span>
    </button>
    <AccordionRoot v-model="activeValidator" type="single" :collapsible="true" as="ul" class="grid grid-cols-[repeat(auto-fit,minmax(200px,469px))] gap-4 justify-center w-full transition-[height]">
      <AccordionItem v-for="({ name, address, logo, description, rewardGainRatio, score, fee, website, dominanceRatio }) in validators" :key="name" as="li" :value="address" style="--reka-accordion-content-height: 130px" class="rounded-2 max-w-full transition relative">
        <AccordionTrigger class="rounded-2 reka-open:rounded-b-0 reka-open:border reka-open:border-neutral-400 reka-open:border-b-transparent p-4 lg:px-6 grid grid-cols-[max-content_1fr_max-content] grid-rows-[1fr_max-content] gap-x-4 items-center border border-transparent transition-[background-color,border-radius,border] size-full delay-100 relative reka-open:z-[11] bg-neutral-200 reka-open:bg-neutral-0" :aria-label="`See more details about ${name}`">
          <img :src="logo" :alt="`${name} logo`" class="row-span-full h-full w-10 object-contain flex items-center" loading="lazy">
          <h3 class="font-semibold truncate text-lg text-left">
            {{ truncate(name) }}
          </h3>
          <Transition mode="out-in" enter-active-class="transition-[opacity,transform] duration-400" enter-from-class="opacity-0 scale-0" enter-to-class="opacity-100 scale-100" leave-active-class="transition-[opacity,transform] duration-150" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-0">
            <div v-if="address === activeValidator" class="bg-neutral-400 hover:bg-neutral-500 flex items-center justify-center rounded-full shrink-0 size-[18px] transition-colors">
              <Icon class="text-10 text-neutral-700" name="nimiq:chevron-up" />
            </div>
            <ValidatorTrustscore v-else-if="score" :score="score.total" show-border class="text-14 ml-auto row-span-full col-start-3" />
          </Transition>
          <p v-if="rewardGainRatio" class="text-sm text-neutral-800 text-left col-start-2 col-span-2 font-normal mt-0 row-start-2">
            {{ percentageFormatter.format(rewardGainRatio) }} p.a.
          </p>
        </AccordionTrigger>
        <AccordionContent class="animate-content px-6 pt-0 pb-6 border border-neutral-400 border-t-0 pt-2 rounded-b-2 bg-neutral-0 shadow transition-[padding] inset-x-0 top-full absolute z-10 z-[11] overflow-y-clip">
          <div class="bg-neutral-0 h-1 inset-x-0 top-0 absolute z-[111]" />
          <ValidatorScoreAccordion v-if="score" :score class="mt-4" />
          <div class="grid grid-cols-[1fr_auto] items-center text-neutral-700 text-sm font-semibold mt-2">
            <template v-if="rewardGainRatio !== undefined">
              <h4 class="text-base">
                Estimated yearly rewards
              </h4>
              <p class="font-semibold text-sm text-neutral text-right">
                {{ percentageFormatter.format(rewardGainRatio) }}
              </p>
            </template>
            <h5 class="font-semibold text-xs">
              incl. pool fee
            </h5>
            <p class="text-sm text-neutral-800 text-right">
              {{ percentageFormatter.format(fee) }}
            </p>
            <p class="text-[10px] text-neutral-700 mt-2">
              Your rewards are influenced by how many NIM are staked globally and your validator pool's fee.
            </p>
            <div class="col-span-full h-6" />
            <h4 class="text-base col-start-1">
              Staked amount
            </h4>
            <p class="text-right text-neutral">
              <template v-if="dominanceRatio">
                {{ percentageFormatter.format(dominanceRatio) }}
              </template>
              <span v-else class="text-orange-1100">
                Data not available
              </span>
            </p>
          </div>
          <template v-if="description || website">
            <hr class="w-[calc(100%+48px)] mx-[-24px] bg-neutral-300 h-[1px] my-4">
            <p v-if="description" class="text-neutral font-medium">
              &ldquo;{{ description }}&rdquo;
            </p>
            <NuxtLink v-if="website" :to="website" class="text-blue font-semibold mt-2 nq-arrow" external>
              {{ website }}
            </NuxtLink>
            <p class="text-neutral-600 text-[10px] font-semibold mt-1">
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
