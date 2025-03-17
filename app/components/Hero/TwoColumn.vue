<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps<{ primary: Content.HeroSectionSliceTwoColumnPrimary }>()
</script>

<template>
  <section bg-blue-s3 relative>
    <div v-if="primary.backgroundImage" left="50%" absolute bottom-0 max-w-full>
      <PrismicImage :field="primary.backgroundImage" />
    </div>

    <Headline :headline="primary.headline" :subline="primary.subline" children:text-white />

    <div flex="~ col lg:row justify-between gap-x-32" relative w-full f-mt-md lg:bottom--60>
      <div flex="~ col sm:items-center lg:items-start">
        <RichText wrapper="div" :field="primary.text" class="nq-prose-compact px-0" />
        <PrismicLink internal-component="a" :field="primary.linkHref" nq-arrow nq-pill-tertiary>
          {{ primary.linkLabel }}
        </PrismicLink>
      </div>

      <PrismicImage :field="primary.image" relative mx-auto drop-shadow-xl lg:mr-0 />
    </div>
  </section>
</template>
