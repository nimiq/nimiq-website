<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
const bgColor = getColorClass(props.slice.primary.bgColor)

const { stakingValues } = useGlobalContent()
const isLastSlice = computed(() => props.slices.indexOf(props.slice) === props.slices.length - 1)

const isStakingSlice = computed(() => stakingValues?.template && getText(props.slice.primary.headline).includes(stakingValues.template))
const gradientClass = computed<'gradient-transparent-green' | 'gradient-transparent-green-transparent' | undefined>(() => {
  if (!isStakingSlice.value || isLastSlice.value)
    return
  const currentIndex = props.slices.indexOf(props.slice)
  // @ts-expect-error the types are meh
  const nextSliceBgColor = props.slices.at(currentIndex + 1)?.primary.bgColor
  // @ts-expect-error the types are meh
  const prevSliceBgColor = props.slices.at(currentIndex - 1)?.primary.bgColor

  return (nextSliceBgColor === prevSliceBgColor) ? 'gradient-transparent-green-transparent' : 'gradient-transparent-green'
})
</script>

<template>
  <section relative :class="[bgColor, gradientClass]" data-slice-type="simple-headline">
    <Headline
      v-if="!isStakingSlice"
      :headline="slice.primary.headline"
      :subline="slice.primary.subline"
      :cta="slice.primary.cta"
      :label="slice.primary.label"
      :icon-name="slice.primary.iconName" z-1
    />
    <!-- :cta-href="slice.primary.linkHref"
      :cta-label="slice.primary.linkLabel" -->
    <HeadlineStaking
      v-else
      :headline="slice.primary.headline"
      :subline="slice.primary.subline"
      :cta="slice.primary.cta"
      :show-staking-icon="!isLastSlice" :data-inverted="isLastSlice ? undefined : ''"
      :primary-pill="isLastSlice"
    />
  </section>
</template>

<style>
/* After Pill Slice, we don't leave space */
section[data-slice-type='pill-link'] + section[data-slice-type='simple-headline'] {
  --uno: 'pt-24';
}

/* If the headline is after a slice that is the same theme (dark or light) we increase space */
/* section.dark:not([data-slice-type='pill-link']) + section[data-slice-type='simple-headline'].dark,
section:not(.dark):not([data-slice-type='pill-link']) + section[data-slice-type='simple-headline']:not(.dark), */
section:is([bg-neutral-0], .bg-neutral-0) + section[data-slice-type='simple-headline'].bg-neutral-0 {
  --uno: 'nq-pt-200 border-t border-neutral-300';
}

section[bg-neutral-0]:has(+ section[data-slice-type='simple-headline'].bg-neutral-0) {
  --uno: 'nq-pb-200';
}

section[data-slice-type='staking-faq'] + section[data-slice-type='simple-headline'] {
  --uno: 'nq-pt-200';

  small {
    --uno: 'text-neutral-700';
  }
}
</style>
