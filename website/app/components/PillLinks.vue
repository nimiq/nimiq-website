<script setup lang="ts">
import type { PillLinkSliceDefaultPrimary } from '~~/prismicio-types'

type Item = Exclude<PillLinkSliceDefaultPrimary['item'], null>

const props = defineProps<{ items: { item: Item, label: string, active: boolean }[] }>()

// @unocss-include

const colors: Record<Item, string> = {
  'The Tech': 'text-gold bg-gold/20',
  'The Apps': 'text-green bg-green/20',
  'The Map': 'text-orange bg-orange/20',
}

const icons: Record<Item, string> = {
  'The Tech': 'i-nimiq:bolt',
  'The Apps': 'i-nimiq:arrows-to-sides',
  'The Map': 'i-nimiq:crypto-map',
}

const activeItem = computed(() => props.items.filter(({ active }) => active)[0]?.item)
</script>

<template>
  <ul :id="activeItem" flex="~ items-center gap-12 justify-center">
    <li v-for="({ item, label, active }, i) in items" :key="item" flex="~ items-center gap-12">
      <NuxtLink :to="`#${item}`" flex="~ items-center gap-10" rounded-full py-6 :class="active ? 'my-1.5 mr-8 pl-8 pr-20 ring-1.5 ring-neutral-500' : 'max-lg:hidden px-8'">
        <div :class="colors[item]" aria-hidden size-28 rounded-full grid="~ place-content-center">
          <div :class="icons[item]" h-18 w-16 />
        </div>
        <span text="18 neutral-700" nq-label>{{ label }}</span>
      </NuxtLink>
      <div v-if="i < items.length - 1" aria-hidden i-nimiq:chevron-right max-lg:hidden text="12 neutral-600" />
    </li>
  </ul>
</template>
