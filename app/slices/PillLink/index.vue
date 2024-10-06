<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { PillLinkSliceDefaultPrimary } from '~~/prismicio-types'

type Item = Exclude<PillLinkSliceDefaultPrimary['item'], null>

const { slice, slices } = defineProps(getSliceComponentProps<Content.PillLinkSlice>())

const items = slices
  .filter(slice => slice.slice_type === 'pill_link')
  .map(slice => (slice as unknown as { primary: PillLinkSliceDefaultPrimary }).primary)
  .map(primary => ({
    item: primary.item!,
    label: primary.label!,
    active: slice.primary.item === primary.item,
  }))

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

const activeItem = computed(() => items.filter(({ active }) => active)[0]?.item)

const strToUrl = (str: string) => str?.toLowerCase().replace(/ /g, '-')
</script>

<template>
  <section :class="colors" :data-slice="slice" class="nq-section-gap" data-slice-type="pill-link" relative mx-0 pb-0 children:max-w-none max-md:items-start>
    <!-- This element is just to avoid the user clicking on the menu and seeing the tab hidden behind the header -->
    <div :id="strToUrl(activeItem!)" sr-only bottom="md:140" scroll-mt-60 />
    <ul flex="~ items-center md:gap-12 md:justify-center" my-1.5>
      <li v-for="({ item, label, active }, i) in items" :key="item" flex="~ items-center gap-12">
        <NuxtLink :to="`#${strToUrl(item)}`" flex="~ items-center gap-10" rounded-full py-6 :class="active ? 'mr-8 pl-8 pr-20 ring-1.5 ring-neutral-500' : 'max-lg:hidden px-8'">
          <div v-if="active" :class="itemsColor[item]" aria-hidden size-28 rounded-full grid="~ place-content-center">
            <div :class="icons[item]" h-18 w-16 />
          </div>
          <span text="18 neutral-700" nq-label>{{ label }}</span>
        </NuxtLink>
        <div v-if="i < items.length - 1" aria-hidden i-nimiq:chevron-right max-lg:hidden text="12 neutral-600" />
      </li>
    </ul>
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
