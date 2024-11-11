<script setup lang="ts">
import type { RichTextField, TitleField } from '@prismicio/client'

defineProps<{ headline: TitleField, subline: RichTextField }>()
</script>

<template>
  <section class="bg-neutral-100">
    <Headline :headline :subline left-align max-w-780px px-32 />
  </section>
</template>
