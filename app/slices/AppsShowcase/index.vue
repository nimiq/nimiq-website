<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.AppsShowcaseSlice>())
</script>

<template>
  <section children:f-px="8/256" px-0 bg-neutral-0 max-lg:children:max-w-none>
    <AppsShowcaseNimiq v-if="slice.variation === 'nimiqsApps'" :items="slice.primary.apps" />
    <AppsShowcaseAll v-else-if="slice.variation === 'default'" v-bind="slice.primary" />
  </section>
</template>
