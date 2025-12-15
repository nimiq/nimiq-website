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
  <div grid="~ gap-x-6 flow-row gap-y-20" :style="{ gridTemplateColumns, gridTemplateRows: `repeat(${items.length + 1}, auto)` }" bg-neutral-0 w-full>
    <div v-for="(_, i) in items" :key="i" :style="`background-image:var(--colors-${getColor(i)}-gradient)`" rounded-6 h-81 shadow />
    <template v-for="({ title, description, percentage }, i) in items" :key="i">
      <AccordionRoot v-model="selected" w-full :style="`grid-column: 1 / ${1 + i};`">
        <AccordionItem col-span-full :value="title">
          <AccordionHeader>
            <AccordionTrigger flex="~ items-center gap-x-8" bg-transparent w-full>
              <span :style="{ color: selected.length === 0 || selected.includes(title) ? `var(--colors-${getColor(i)})` : `var(--colors-neutral-700)` }" font-semibold transition-colors f-text-lg>
                {{ title }}
                <span text-neutral-700 ml-12>{{ percentage }}%</span>
              </span>
              <Icon name="nimiq:chevron-right" class="text-10 text-neutral-600 transition-transform duration-300 reka-open:rotate-90" />
              <div v-if="i > 0" flex-1 outline="0.75 neutral-500 reka-open:neutral-700" transition-colors right--6 relative @click.stop />
              <div v-else border="b-1.5 r-1.5 neutral-500 reka-open:neutral-700" ml-6 mr-12 rounded-br-6 flex-1 h-40 translate-y--20 transition-colors />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent of-hidden animate-accordion>
            <p max-w-52ch>
              {{ description }}
            </p>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
      <div v-if="i > 0" relative of-hidden :data-state="activeIndexes.includes(Math.max(i - 1, 0) + 1) ? 'active' : undefined">
        <div w="50%" rounded-br-6 h-12 translate-x--0.75 translate-y--1 absolute ring="1.5 neutral-500 reka-active:neutral-700" />
      </div>
      <div v-for="j in items.length - i - 1" :key="j" h="[calc(100%+40px)]" :data-state="activeIndexes.includes(j + i) ? 'active' : undefined" w-1.5 self-center justify-self-center bg="neutral-500 reka-active:neutral-700" />
    </template>
  </div>
</template>
