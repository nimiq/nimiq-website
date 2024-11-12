<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
const bgColor = getColorClass(props.slice.primary.bgColor)

const { stakingValues } = useGlobalContent()

const isStakingSlice = computed(() => stakingValues?.template && getText(props.slice.primary.headline).includes(stakingValues.template))
const gradientClass = computed<'gradient-transparent-green' | 'gradient-transparent-green-transparent' | undefined>(() => {
  if (!isStakingSlice.value)
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
  <section relative :class="[bgColor, gradientClass]">
    <Headline
      v-if="!isStakingSlice"
      :headline="slice.primary.headline"
      :subline="slice.primary.subline"
      :cta-href="slice.primary.linkHref"
      :cta-label="slice.primary.linkLabel"
      :label="slice.primary.label"
      :icon-name="slice.primary.iconName"
    />
    <HeadlineStaking
      v-else
      :headline="slice.primary.headline"
      :subline="slice.primary.subline"
      :link="slice.primary.link"
    />
  </section>
</template>

<style>
/* After Pill Slice, we don't leave space */
section[data-slice-type='pill-link'] + section[data-slice-type='simple-headline'] {
  --uno: 'pt-24';
}

/* If the headline is after a slice that is the same theme (dark or light) we increase space */
section.dark:not([data-slice-type='pill-link']) + section[data-slice-type='simple-headline'].dark,
section:not(.dark):not([data-slice-type='pill-link']) + section[data-slice-type='simple-headline']:not(.dark) {
  --uno: 'pt-160 lg:pt-200';
}
</style>
