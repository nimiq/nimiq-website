<script setup lang="ts">
import type { ImageField, LinkField, RichTextField } from '@prismicio/client'

defineProps<{ icon: string | undefined, label: string | undefined, headline: RichTextField, subline: RichTextField, link: LinkField, image: ImageField }>()
</script>

<template>
  <div max-w-none>
    <RibbonContainer label="New release" color="purple" shadow icon="i-nimiq:verified-filled" var:top:-25px>
      <div flex="~ col lg:row gap-x-32 md:gap-x-40 gap-y-64 items-center" p="x-32 md:x-72 y-64 md:t-72 lg:b-72" w-full>
        <div flex="~ col ~md:items-center">
          <div v-if="icon" flex="~ items-center gap-12">
            <div :class="icon" f-size="40/48" />
            <h2 f-text="20/22" text="neutral left" font-600>
              {{ label }}
            </h2>
          </div>
          <RichText wrapper="div" :field="headline" f-mt-2xs text="f-xl ~md:center" />
          <RichText wrapper="div" :field="subline" text="neutral-700 f-xl ~md:center" max-w-55ch f-mt-xs />
          <PrismicLink v-if="hasLink(link)" :field="link" f-mt-md nq-arrow nq-pill-lg nq-pill-blue />
        </div>
        <ProxiedPrismicImage v-if="image.url" :field="image" rounded-8 h-auto max-w-full w-max of-hidden max-lg:max-h-120 md:max-w-352 max-md:self-start />
      </div>
    </RibbonContainer>
  </div>
</template>
