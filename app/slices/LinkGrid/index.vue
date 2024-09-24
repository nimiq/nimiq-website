<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.LinkGridSlice>())
const sectionRef = useSection(props.slice.id, 'darkblue')
</script>

<template>
  <section ref="sectionRef">
    <ul grid="~ cols-1 gap-20 md:cols-2" pb-2>
      <li v-for="({ description, pillLabel, primaryLink, primaryLinkLabel, secondaryLink, secondaryLinkLabel, title }, i) in slice.items" :key="i" p="32 xl:40 2xl:48" rounded-6 ring="1.5 white/25">
        <!-- <PrismicMedia v-if="icon" :field="icon" w="48 md:56 xl:64" op-60 nq-mb-16 /> -->
        <span v-if="pillLabel" nq-label nq-mb-24 text="xs neutral-600">{{ pillLabel }}</span>
        <PrismicRichText :field="title" />
        <PrismicRichText :field="description" nq-mt-24 />

        <div nq-mt-32 flex="~ gap-14">
          <PrismicLink v-if="hasLink(primaryLink)" :field="primaryLink" nq-arrow nq-pill-blue>
            {{ primaryLinkLabel }}
          </PrismicLink>
          <PrismicLink v-if="hasLink(secondaryLink)" :field="secondaryLink" nq-arrow nq-pill-secondary>
            {{ secondaryLinkLabel }}
          </PrismicLink>
        </div>
      </li>
    </ul>
  </section>
</template>
