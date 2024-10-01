<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.ExchangesShowcaseSlice>())
const sectionRef = useSection(props.slice.id, 'grey')
</script>

<template>
  <section ref="sectionRef">
    <ul v-if="slice.items.length > 0" grid="~ md:cols-2 xl:cols-3 gap-16 2xl:gap-24">
      <li v-for="({ description, linkHref, linkLabel, logo, name }, i) in slice.items" :key="i" shrink-0>
        <PrismicLink internal-component="a" :field="linkHref" h-full nq-hoverable>
          <header flex="~  gap-16 md:gap-24 items-center" pb="24 md:32" un-border="b neutral-600">
            <PrismicImage :field="logo" :alt="`${name} logo`" max-h="32 md:40" />
            <h3 v-if="name" text-left>
              {{ name }}
            </h3>
          </header>
          <PrismicRichText mt="24 md:32" :field="description" class="nq-prose" children:pb-0="!" children:last:mb-0="!" mx--32 pb-32 children:children:last:mb-0="!" />
          <p mt-auto flex text-blue font-semibold nq-hoverable-cta>
            {{ linkLabel }}
          </p>
        </PrismicLink>
      </li>
    </ul>
  </section>
</template>
