<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'

interface TokenItem {
  title: string
  percentage: number
  description: string
}

const { items } = defineProps<{ items: TokenItem[] }>()

const COLORS = ['green', 'blue', 'orange', 'red', 'gold'] as const
const getColor = (index: number) => COLORS[index % COLORS.length]

const gridTemplateColumns = computed(() => items.map(i => `${i.percentage}fr`).join(' '))

const selected = ref<string[]>([])

const itemTitles = computed(() => items.map(item => item.title))
const activeIndexes = computed(() => selected.value.map(title => itemTitles.value.indexOf(title)).filter(index => index >= 0))

function isTitleActive(title: string) {
  return selected.value.length === 0 || selected.value.includes(title)
}

function isTitleOpen(title: string) {
  return selected.value.includes(title)
}

function isConnectorActive(index: number) {
  return activeIndexes.value.includes(index)
}
</script>

<template>
  <!-- Mobile: stacked bar + simple accordion list -->
  <div class="flex flex-col gap-6 w-full md:hidden">
    <div class="flex gap-1 h-12 rounded-1.5 overflow-hidden shadow">
      <div v-for="(item, i) in items" :key="i" :style="{ flex: item.percentage }" :class="`bg-gradient-${getColor(i)}`" />
    </div>
    <AccordionRoot v-model="selected" type="multiple" class="flex flex-col">
      <AccordionItem v-for="({ title, description, percentage }, i) in items" :key="i" :value="title" class="border-b border-neutral-300 last:border-b-0">
        <AccordionHeader>
          <AccordionTrigger class="flex items-center gap-3 w-full py-3 bg-transparent">
            <span class="size-3 rounded-full shrink-0" :class="`bg-gradient-${getColor(i)}`" />
            <span class="font-semibold transition-colors text-base" :style="{ color: isTitleActive(title) ? `var(--color-${getColor(i)})` : `var(--color-neutral-700)` }">
              {{ title }}
            </span>
            <span class="text-neutral-700 ml-auto tabular-nums">{{ percentage }}%</span>
            <Icon class="text-10 text-neutral-600 transition-transform duration-300 shrink-0" :class="{ 'rotate-90': isTitleOpen(title) }" name="nimiq:chevron-right" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="distribution-content overflow-hidden">
          <p class="pb-3 text-neutral-700">
            {{ description }}
          </p>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  </div>

  <!-- Desktop: grid with connectors -->
  <div class="grid gap-x-1.5 grid-flow-row gap-y-5 bg-neutral-0 w-full max-md:hidden" :style="{ gridTemplateColumns, gridTemplateRows: `repeat(${items.length + 1}, auto)` }">
    <div v-for="(_, i) in items" :key="i" class="rounded-1.5 h-[81px] shadow" :class="`bg-gradient-${getColor(i)}`" />
    <template v-for="({ title, description, percentage }, i) in items" :key="i">
      <AccordionRoot v-model="selected" class="w-full" :style="`grid-column: 1 / ${1 + i};`" type="multiple" :collapsible="true">
        <AccordionItem class="col-span-full" :value="title">
          <AccordionHeader>
            <AccordionTrigger class="flex items-center gap-x-2 bg-transparent w-full">
              <span class="font-semibold transition-colors text-base md:text-lg" :style="{ color: isTitleActive(title) ? `var(--color-${getColor(i)})` : `var(--color-neutral-700)` }">
                {{ title }}
                <span class="text-neutral-700 ml-3">{{ percentage }}%</span>
              </span>
              <Icon class="text-10 text-neutral-600 transition-transform duration-300" :class="{ 'rotate-90': isTitleOpen(title) }" name="nimiq:chevron-right" />
              <div
                v-if="i > 0"
                class="-mr-1.5 flex-1 h-[1.5px] transition-colors"
                :class="isTitleOpen(title) ? 'bg-neutral-700' : 'bg-neutral-500'"
              />
              <div
                v-else
                class="ml-1.5 mr-3 rounded-br-1.5 flex-1 h-10 -translate-y-5 transition-colors border-b-[1.5px] border-r-[1.5px]"
                :class="isTitleOpen(title) ? 'border-neutral-700' : 'border-neutral-500'"
              />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent class="distribution-content overflow-hidden">
            <p class="max-w-52ch">
              {{ description }}
            </p>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
      <div v-if="i > 0" class="relative h-3 overflow-visible">
        <div
          class="absolute inset-0 w-1/2 border-b-[1.5px] border-r-[1.5px] rounded-br-1.5 transition-colors"
          :class="isConnectorActive(Math.max(i - 1, 0) + 1) ? 'border-neutral-700' : 'border-neutral-500'"
        />
      </div>
      <div
        v-for="j in items.length - i - 1"
        :key="j"
        class="h-[calc(100%+40px)] w-[1.5px] self-start justify-self-center"
        :class="isConnectorActive(j + i) ? 'bg-neutral-700' : 'bg-neutral-500'"
      />
    </template>
  </div>
</template>

<style scoped>
.distribution-content[data-state='open'] {
  animation: slideDown 300ms ease-out;
}

.distribution-content[data-state='closed'] {
  animation: slideUp 300ms ease-out;
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
</style>
