<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'

interface CtaSectionSlice {
  primary: {
    headline: RichTextField
    label: string | undefined
    iconName: string | undefined
    subline: RichTextField
    linkHref: string | undefined
    linkLabel: string | undefined
  }
}

const { slice } = defineProps<{ slice: CtaSectionSlice, slices?: any[] }>()
</script>

<template>
  <section bg-neutral-0>
    <Headline :headline="slice.primary.headline" :label="slice.primary.label" :icon-name="slice.primary.iconName" :subline="slice.primary.subline" :cta-href="slice.primary.linkHref" :cta-label="slice.primary.linkLabel" />
  </section>
</template>
