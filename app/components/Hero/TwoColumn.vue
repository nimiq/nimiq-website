<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps<{ primary: Content.HeroSectionSliceTwoColumnPrimary }>()
</script>

<template>
  <section bg-blue-s3 relative>
    <div v-if="primary.backgroundImage" absolute bottom-0 left="50%" max-w-full>
      <PrismicImage :field="primary.backgroundImage" />
    </div>

    <Headline :headline="primary.headline" :subline="primary.subline" children:text-white />

    <div flex="~ col lg:row justify-between gap-x-32" relative w-full nq-mt-32 lg:bottom--60>
      <div flex="~ col sm:items-center lg:items-start">
        <PrismicRichText :field="primary.text" class="px-0 nq-prose-compact" />
        <PrismicLink internal-component="a" :field="primary.linkHref" nq-arrow nq-pill-tertiary>
          {{ primary.linkLabel }}
        </PrismicLink>
      </div>

      <PrismicImage relative :field="primary.image" mx-auto drop-shadow-xl lg:mr-0 />
    </div>
  </section>
</template>
