<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.SocialMediaGridSlice>())
</script>

<template>
  <ContentSocialMediaGrid :slice="slice as any" />
</template>

<style scoped>
section [nq-hoverable] {
  &:hover,
  &:focus-visible {
    &::before {
      background-image: none;
      background: var(--c);
    }
  }
}
</style>
