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

const activeIndexes = computed(() => items.filter(i => selected.value.includes(i.title)).map(i => items.map(item => item.title).indexOf(i.title)))
</script>

<template>
  <div class="grid grid-gap-x-6 grid-flow-row grid-gap-y-20 bg-neutral-0 w-full" :style="{ gridTemplateColumns, gridTemplateRows: `repeat(${items.length + 1}, auto)` }">
    <div v-for="(_, i) in items" :key="i" class="rounded-6 h-81" :style="`background-image:var(--colors-${getColor(i)}-gradient)`" shadow />
    <template v-for="({ title, description, percentage }, i) in items" :key="i">
      <AccordionRoot v-model="selected" class="w-full" :style="`grid-column: 1 / ${1 + i};`">
        <AccordionItem class="col-span-full" :value="title">
          <AccordionHeader>
            <AccordionTrigger class="flex flex-items-center flex-gap-x-8 bg-transparent w-full">
              <span class="font-semibold transition-colors f-text-lg" :style="{ color: selected.length === 0 || selected.includes(title) ? `var(--colors-${getColor(i)})` : `var(--colors-neutral-700)` }">
                {{ title }}
                <span class="text-neutral-700 ml-12">{{ percentage }}%</span>
              </span>
              <Icon class="text-10 text-neutral-600 transition-transform duration-300 reka-open:rotate-90" name="nimiq:chevron-right" />
              <div v-if="i > 0" class="flex-1 outline-0.75 outline-neutral-500 outline-reka-open:neutral-700 transition-colors right--6 relative" @click.stop />
              <div v-else class="border-b-1.5 border-r-1.5 border-neutral-500 border-reka-open:neutral-700 ml-6 mr-12 rounded-br-6 flex-1 h-40 translate-y--20 transition-colors" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent class="of-hidden animate-accordion">
            <p class="max-w-52ch">
              {{ description }}
            </p>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
      <div v-if="i > 0" class="relative of-hidden" :data-state="activeIndexes.includes(Math.max(i - 1, 0) + 1) ? 'active' : undefined">
        <div class="w-50% rounded-br-6 h-12 translate-x--0.75 translate-y--1 absolute ring-1.5 ring-neutral-500 ring-reka-active:neutral-700" />
      </div>
      <div v-for="j in items.length - i - 1" :key="j" class="h-[calc(100%+40px)] w-1.5 self-center justify-self-center bg-neutral-500 bg-reka-active:neutral-700" :data-state="activeIndexes.includes(j + i) ? 'active' : undefined" />
    </template>
  </div>
</template>
