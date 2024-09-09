<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
</script>

<template>
  <SliceWrapper>
    <HeadlineSection>
      <template #headline>
        <PrismicText :field="slice.primary.headline" />
      </template>
      <template #subheadline>
        <PrismicText :field="slice.primary.subline" />
      </template>
    </HeadlineSection>
  </SliceWrapper>
</template>
