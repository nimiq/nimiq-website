<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { PillLinkSliceDefaultPrimary } from '~~/prismicio-types'

type Item = Exclude<PillLinkSliceDefaultPrimary['item'], null>

const { slice } = defineProps(getSliceComponentProps<Content.PillLinkSlice>())

const bgClass = getColorClass(slice.primary.bgColor)

// @unocss-include

const itemColors: Record<Item, string> = {
  'The Tech': 'green',
  'The Apps': 'blue',
  'The Map': 'orange',
}

const icons: Record<Item, string> = {
  'The Tech': 'i-nimiq:bolt',
  'The Apps': 'i-nimiq:arrows-to-sides',
  'The Map': 'i-nimiq:crypto-map',
}

const item = slice.primary.item as Item
</script>

<template>
  <section :class="bgClass" class="nq-section-gap" data-slice-type="pill-link" mx-0 pb-2 relative children:max-w-none max-md:items-start>
    <div flex="~ items-center gap-10" mr-8 py-6 pl-8 pr-20 rounded-full>
      <div :style="`--c: var(--nq-${itemColors[item]})`" style="color: rgb(var(--c)); background-color: rgb(var(--c) / 0.2);" aria-hidden size="28 lg:40" rounded-full grid="~ place-content-center">
        <div :class="icons[item]" h="18 lg:30" w="16 lg:26" class="gradient" />
      </div>
      <span text="18 neutral-700" nq-label>{{ item }}</span>
    </div>
  </section>
</template>

<style>
section:where(.bg-darkblue, [bg-darkblue])
  + :where(section[data-slice-type='pill-link']):where(.bg-darkblue, [bg-darkblue]),
section:where(.bg-neutral-100, [bg-neutral-100])
  + :where(section[data-slice-type='pill-link']):where(.bg-neutral-100, [bg-neutral-100]),
section:where(.bg-neutral-0, [bg-neutral-0])
  + :where(section[data-slice-type='pill-link']):where(.bg-neutral-0, [bg-neutral-0]) {
  /* Add a border if the pill links are following another section with the same color */
  --uno: 'border-t border-neutral-500';
}

.gradient {
  background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, rgb(var(--c) / 1) 0%, rgb(var(--c) / 0.3) 100%);
}
</style>
