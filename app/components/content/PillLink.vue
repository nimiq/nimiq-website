<script setup lang="ts">
type Item = 'The Tech' | 'The Apps'

interface PillLinkSlice {
  primary: {
    bgColor: string | undefined
    item: string | undefined
  }
}

const { slice } = defineProps<{ slice: PillLinkSlice, slices?: any[] }>()

const bgClass = getColorClass(slice.primary.bgColor as any)

// @unocss-include

const itemColors: Record<Item, string> = {
  'The Tech': 'green',
  'The Apps': 'blue',
}

const icons: Record<Item, string> = {
  'The Tech': 'i-nimiq:bolt',
  'The Apps': 'i-nimiq:arrows-to-sides',
}

const label: Record<Item, string> = {
  'The Tech': 'Infra Tech',
  'The Apps': 'Enduser tech',
}

const item = slice.primary.item as Item
</script>

<template>
  <section :class="bgClass" class="nq-section-gap" data-slice-type="pill-link" mx-0 f-pt-2xl pb-2 relative children:max-w-none max-md:items-start>
    <div flex="~ items-center gap-10" mr-8 py-6 pl-8 pr-20 rounded-full>
      <div :style="`--c: var(--nq-${itemColors[item]})`" style="color: rgb(var(--c)); background-color: rgb(var(--c) / 0.2);" aria-hidden size="28 lg:40" rounded-full grid="~ place-content-center">
        <div :class="icons[item]" h="18 lg:30" w="16 lg:26" class="gradient" />
      </div>
      <span text="18 neutral-700" nq-label>{{ label[item] }}</span>
    </div>
  </section>
</template>

<style>
.gradient {
  background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, rgb(var(--c) / 1) 0%, rgb(var(--c) / 0.3) 100%);
}
</style>
