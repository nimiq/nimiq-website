<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.AppsShowcaseSlice>())
</script>

<template>
  <section bg-neutral-100>
    <AppsShowcaseNimiq v-if="slice.variation === 'nimiqsApps'" :items="slice.primary.apps" />
    <AppsShowcaseAll v-else-if="slice.variation === 'default'" v-bind="slice.primary" />
  </section>
</template>
