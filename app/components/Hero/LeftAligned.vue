<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'

defineProps<{ headline: RichTextField, subline: RichTextField }>()
</script>

<template>
  <section>
    <Headline :headline :subline left-align px-32 max-w-780px w-full />
    <div flex="~ justify-start" px-32 max-w-780px w-full f-mt-xs>
      <slot name="bottom" />
    </div>
  </section>
</template>
