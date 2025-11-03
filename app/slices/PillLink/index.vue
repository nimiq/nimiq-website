<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.PillLinkSlice>())
</script>

<template>
  <ContentPillLink :slice="slice as any" />
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
