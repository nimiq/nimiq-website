<script setup lang="ts">
import type { RichTextField, TitleField } from '@prismicio/client'

defineProps<{ headline: TitleField, subline: RichTextField }>()
</script>

<template>
  <section>
    <Headline :headline :subline left-align max-w-780px w-full px-32 />
    <div flex="~ justify-start" max-w-780px w-full px-32 f-mt-xs>
      <slot name="bottom" />
    </div>
  </section>
</template>
