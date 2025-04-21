<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.NimTokenDistributionSlice>())

const gridTemplateColumns = computed(() => slice.primary.item.map(i => `${i.percentage}fr`).join(' '))

const selected = ref<string[]>([])

const activeIndexes = computed(() => slice.primary.item.filter(i => selected.value.includes(i.title!)).map(i => slice.primary.item.map(i => i.title!).indexOf(i.title!)))
</script>

<template>
  <section bg-neutral-0>
    <div grid="~ gap-x-6 flow-row gap-y-20" :style="{ gridTemplateColumns, gridTemplateRows: `repeat(${slice.primary.item.length + 1}, auto)` }" w-full>
      <div v-for="({ color }, i) in slice.primary.item" :key="i" :style="`background-image:var(--nq-${color}-gradient)`" h-81 rounded-6 shadow />
      <template v-for="({ title, description, color, percentage }, i) in slice.primary.item" :key="i">
        <AccordionRoot v-model="selected" w-full>
          <AccordionItem col-span-full :value="title!">
            <AccordionHeader>
              <AccordionTrigger flex="~ items-center gap-x-8" w-full bg-transparent>
                <span :style=" { color: selected.length === 0 || selected.includes(title!) ? `rgb(var(--nq-${color}))` : `rgb(var(--nq-neutral-700))` }" font-semibold transition-colors f-text-lg>
                  {{ title }}
                  <span ml-12 text-neutral-700>{{ percentage }}%</span>
                </span>
                <div text="10 neutral-600" transition-transform duration-300 i-nimiq:chevron-right data-open:rotate-90 />
                <div v-if="i > 0" relative right--6 h-1.5 flex-1 transition-colors bg="neutral-500 data-open:neutral-700" @click.stop />
                <div v-else border="b-1.5 r-1.5 neutral-500 data-open:neutral-700" ml-6 mr-12 h-40 flex-1 translate-y--20 rounded-br-6 transition-colors />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent of-hidden class="content">
              <RichText wrapper="div" :field="description" max-w-52ch />
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
        <div v-for="j in Math.max(i - 1, 0)" :key="j" w="[calc(100%+6px)]" :data-state="activeIndexes.includes(Math.max(i - 1, 0) + 1) ? 'active' : undefined" relative top-12.75 h-1.5 transition-colors bg="neutral-500 data-active:neutral-700" />
        <div v-if="i > 0" relative of-hidden :data-state="activeIndexes.includes(Math.max(i - 1, 0) + 1) ? 'active' : undefined">
          <div w="50%" absolute h-14.5 translate-x--0.75 translate-y--1.5 rounded-br-6 ring="1.5 neutral-500 data-active:neutral-700" />
        </div>
        <div v-for="j in slice.primary.item.length - i - 1" :key="j" h="[calc(100%+40px)]" :data-state="activeIndexes.includes(j + i) ? 'active' : undefined" w-1.5 self-center justify-self-center bg="neutral-500 data-active:neutral-700" />
      </template>
    </div>
  </section>
</template>

<style scoped>
.content[data-state='open'] {
  animation: slideDown 300ms ease-out;
}
.content[data-state='closed'] {
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
