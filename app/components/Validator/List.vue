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

function truncateAddress(address: string) {
  return `${address.slice(0, 9)}...${address.slice(-4)}`
}

const { copy, copied } = useClipboard()
const copiedAddress = ref<string>()
function copyAddress(address: string) {
  copy(address)
  copiedAddress.value = address
}
watch(copied, (v) => {
  if (!v)
    copiedAddress.value = undefined
})
</script>

<template>
  <div :data-state="showAllValidators ? 'open' : 'closed'" class="pb-20 w-full relative transition-[height]" :class="[showAllValidators ? 'h-auto' : 'h-[448px] md:h-[320px]', !showAllValidators && !activeValidator && 'overflow-y-clip']" :style="`--count: ${validators?.length}`">
    <div class="h-[228px] w-full pointer-events-none bottom-[-48px] absolute z-10 transition-opacity" :class="showAllValidators ? 'opacity-0' : 'opacity-100'" aria-hidden style="background: linear-gradient(to bottom in oklab, transparent 0%, rgb(255, 255, 255) 100%);" />
    <button class="mx-auto transition-[bottom] inset-x-0 absolute z-10 nq-pill-secondary" :class="showAllValidators ? 'bottom-[42px]' : 'bottom-2'" aria-label="Expand list" @click="toggleShowAllValidators">
      <span v-if="showAllValidators">Show less</span>
      <span v-else>Show more</span>
    </button>
    <AccordionRoot v-model="activeValidator" type="single" :collapsible="true" as="ul" class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto w-full transition-[height]">
      <AccordionItem v-for="({ name, address, logo, description, rewardGainRatio, score, fee, website, dominanceRatio }) in validators" :key="name" as="li" :value="address" class="rounded-2 max-w-full relative">
        <AccordionTrigger class="rounded-2 reka-open:rounded-b-0 reka-open:border reka-open:border-neutral-400 reka-open:border-b-transparent p-6 flex items-center gap-4 border border-transparent transition-[background-color,border-radius,border] size-full delay-100 relative reka-open:z-[11] bg-neutral-200 reka-open:bg-neutral-0" :aria-label="`See more details about ${name}`">
          <img :src="logo" :alt="`${name} logo`" class="size-10 shrink-0 object-contain" loading="lazy">
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold truncate text-[17px] text-left text-neutral leading-[1.3]">
              {{ truncate(name) }}
            </h3>
            <p v-if="rewardGainRatio" class="text-[15px] text-neutral-800 text-left font-normal mt-1">
              {{ percentageFormatter.format(rewardGainRatio) }} p.a.
            </p>
          </div>
          <Transition mode="out-in" enter-active-class="transition-[opacity,transform] duration-400" enter-from-class="opacity-0 scale-0" enter-to-class="opacity-100 scale-100" leave-active-class="transition-[opacity,transform] duration-150" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-0">
            <div v-if="address === activeValidator" class="bg-neutral-400 hover:bg-neutral-500 flex items-center justify-center rounded-full shrink-0 size-[18px] transition-colors">
              <Icon class="text-10 text-neutral-700" name="nimiq:chevron-up" />
            </div>
            <ValidatorTrustscore v-else-if="score" :score="score.total" show-border class="text-14 shrink-0" />
          </Transition>
        </AccordionTrigger>
        <AccordionContent class="accordion-content px-6 pb-6 border border-neutral-400 border-t-0 rounded-b-2 bg-neutral-0 shadow inset-x-0 top-full absolute z-[11] overflow-y-auto max-h-[70vh]">
          <div class="bg-neutral-0 h-1 inset-x-0 top-0 absolute z-[111] sticky" />
          <ValidatorScoreAccordion v-if="score" :score class="mt-4" />
          <div class="grid grid-cols-[1fr_auto] items-center text-neutral-700 text-sm font-semibold mt-2">
            <template v-if="rewardGainRatio !== undefined">
              <h4 class="text-[16px]">
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
            <h4 class="text-[16px] col-start-1">
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

          <hr class="w-[calc(100%+48px)] mx-[-24px] bg-neutral-300 h-[1px] mt-4 mb-3">
          <button class="copy-address group flex items-center gap-2 w-full rounded-1 px-2 py-1.5 -mx-2 transition-colors" :class="copiedAddress === address ? 'bg-green/8' : 'hover:bg-neutral-200'" @click.stop="copyAddress(address)">
            <span class="font-mono text-[13px] leading-none transition-colors" :class="copiedAddress === address ? 'text-green' : 'text-neutral-700'">{{ truncateAddress(address) }}</span>
            <span class="relative size-4 ml-auto shrink-0">
              <Transition enter-active-class="transition-[opacity,transform] duration-200 ease-out" enter-from-class="opacity-0 scale-75" enter-to-class="opacity-100 scale-100" leave-active-class="transition-[opacity,transform] duration-150 ease-out" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-75" mode="out-in">
                <Icon v-if="copiedAddress === address" class="size-4 text-green absolute inset-0" name="nimiq:check" />
                <Icon v-else class="size-4 text-neutral-600 group-hover:text-neutral-800 transition-colors absolute inset-0" name="lucide:copy" />
              </Transition>
            </span>
          </button>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  </div>
</template>

<style scoped>
.accordion-content {
  --enter-duration: 250ms;
  --exit-duration: 180ms;
  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);

  will-change: height, opacity;
  overflow: clip;

  &[data-state='open'] {
    animation:
      accordionOpen var(--enter-duration) var(--ease-out-quart) both,
      fadeIn var(--enter-duration) var(--ease-out-quart) both;
  }

  &[data-state='closed'] {
    animation:
      accordionClose var(--exit-duration) var(--ease-out-quart) both,
      fadeOut var(--exit-duration) var(--ease-out-quart) both;
  }

  &[data-state='open'] > * {
    animation: contentReveal 300ms var(--ease-out-quart) both;
    animation-delay: 80ms;
  }
}

@keyframes accordionOpen {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes accordionClose {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes contentReveal {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .accordion-content {
    animation: none !important;
    &[data-state='open'] > * {
      animation: none !important;
    }
  }
}

.copy-address {
  -webkit-tap-highlight-color: transparent;
}
</style>
