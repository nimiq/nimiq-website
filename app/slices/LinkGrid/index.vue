<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.LinkGridSlice>())

const colors = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="colors">
    <ul grid="~ cols-1 gap-20 md:cols-2">
      <li v-for="({ description, icon, links, pillLabel, title }, i) in slice.items" :key="i" p="32 xl:40 2xl:48" rounded-6 ring="1.5 neutral-400">
        <div v-if="icon" :class="icon" text="58|64" style="font-size: var(--nq-font-size)" op-60 f-mb-16 />
        <span v-if="pillLabel" f-mb-24q-label text="xs neutral-600">{{ pillLabel }}</span>
        <PrismicRichText :field="title" />
        <PrismicRichText :field="description" f-mt-24>
          <div f-mt-32lex="~ gap-14 wrap">
            <PrismicLink v-for="(link, j) in links" :key="j" internal-component="a" :field="link" :class="j === 0 ? 'nq-pill-blue' : 'nq-pill-secondary'" nq-arrow />
          </div>
        </prismicrichtext>
      </li>
    </ul>
  </section>
</template>
