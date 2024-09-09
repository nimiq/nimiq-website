<script setup lang="ts">
import type { PillLinkSliceDefaultPrimary } from '~~/prismicio-types'

type Item = Exclude<PillLinkSliceDefaultPrimary['item'], null>

defineProps<{ items: { item: Item, label: string, active: boolean }[] }>()

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
</script>

<template>
  <ul flex="~ items-center gap-20 justify-center">
    <li v-for="{ item, label, active } in items" :id="item" :key="label">
      <NuxtLink :to="item" flex="~ items-center gap-10" :class="active ? 'mt-1.5 pl-8 py-6 pr-20 ring-1.5 rounded-full ring-neutral-500' : 'max-lg:hidden'">
        <div :class="colors[item]" aria-hidden size-28 rounded-full grid="~ place-content-center">
          <div :class="icons[item]" h-18 w-16 />
        </div>
        <span text="18 neutral-700" nq-label>{{ label }}</span>
      </NuxtLink>
    </li>
    <div aria-hidden i-nimiq:chevron-right max-lg:hidden lg:last:hidden />
  </ul>
</template>
