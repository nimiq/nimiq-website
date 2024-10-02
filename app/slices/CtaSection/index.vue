<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.CtaSectionSlice>())
</script>

<template>
  <section class="white bg-neutral-0">
    <Headline :headline="slice.primary.headline" :label="slice.primary.label" :icon-name="slice.primary.iconName" :subline="slice.primary.subline" :cta-href="slice.primary.linkHref" :cta-label="slice.primary.linkLabel" />
  </section>
</template>
