<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { PillLinkSliceDefaultPrimary } from '~~/prismicio-types'

type Item = Exclude<PillLinkSliceDefaultPrimary['item'], null>

const { slice } = defineProps(getSliceComponentProps<Content.PillLinkSlice>())

const colors = getColorClass(slice.primary.bgColor)

// @unocss-include

const itemsColor: Record<Item, string> = {
  'The Tech': 'text-gold bg-gold/20',
  'The Apps': 'text-green bg-green/20',
  'The Map': 'text-orange bg-orange/20',
}

const icons: Record<Item, string> = {
  'The Tech': 'i-nimiq:bolt',
  'The Apps': 'i-nimiq:arrows-to-sides',
  'The Map': 'i-nimiq:crypto-map',
}

const item = slice.primary.item as Item
</script>

<template>
  <section :class="colors" class="nq-section-gap" data-slice-type="pill-link" relative mx-0 pb-2 children:max-w-none max-md:items-start>
    <div flex="~ items-center gap-10" mr-8 rounded-full py-6 pl-8 pr-20 ring="1.5 neutral-500">
      <div :class="itemsColor[item]" aria-hidden size-28 rounded-full grid="~ place-content-center">
        <div :class="icons[item]" h-18 w-16 />
      </div>
      <span text="18 neutral-700" nq-label>{{ item }}</span>
    </div>
  </section>
</template>

<style>
section:where(.bg-darkblue, [bg-darkblue])
  + :is(section[data-slice-type='pill-link']):where(.bg-darkblue, [bg-darkblue]),
section:where(.bg-neutral-100, [bg-neutral-100])
  + :is(section[data-slice-type='pill-link']):where(.bg-neutral-100, [bg-neutral-100]),
section:where(.bg-neutral-0, [bg-neutral-0])
  + :is(section[data-slice-type='pill-link']):where(.bg-neutral-0, [bg-neutral-0]) {
  /* Add a border if the pill links are following another section with the same color */
  --uno: 'border-t border-neutral-500';
}
</style>
