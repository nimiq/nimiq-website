<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps<{ primary: Content.HeroSectionSliceTwoColumnPrimary }>()
</script>

<template>
  <section bg-blue-s3 relative>
    <div v-if="primary.backgroundImage" left="50%" max-w-full bottom-0 absolute>
      <PrismicImage :field="primary.backgroundImage" />
    </div>

    <Headline :headline="primary.headline" :subline="primary.subline" children:text-white />

    <div flex="~ col lg:row justify-between gap-x-32" w-full relative f-mt-md lg:bottom--60>
      <div flex="~ col sm:items-center lg:items-start">
        <RichText wrapper="div" :field="primary.text" class="nq-prose-compact px-0" />
        <PrismicLink internal-component="a" :field="primary.linkHref" nq-arrow nq-pill-tertiary>
          {{ primary.linkLabel }}
        </PrismicLink>
      </div>

      <PrismicImage :field="primary.image" mx-auto relative drop-shadow-xl lg:mr-0 />
    </div>
  </section>
</template>
