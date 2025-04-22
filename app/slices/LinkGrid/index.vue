<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.LinkGridSlice>())

const bgClass = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="bgClass">
    <ul grid="~ cols-1 gap-20 md:cols-2">
      <li v-for="({ description, icon, links, pillLabel, title }, i) in slice.items" :key="i" rounded-6 f-p-lg ring="1.5 neutral-400">
        <div v-if="icon" :class="icon" f-text="~ min-58 max-64" op-60 f-mt-xs />
        <span v-if="pillLabel" nq-label f-mt-sm text="f-xs neutral-600">{{ pillLabel }}</span>
        <RichText wrapper="div" :field="title" />
        <RichText wrapper="div" :field="description" f-mt-sm />
        <div f-mt-md flex="~ gap-14 wrap">
          <PrismicLink v-for="(link, j) in links.filter(hasLink)" :key="j" internal-component="a" :field="link" :class="j === 0 ? 'nq-pill-blue' : 'nq-pill-secondary'" nq-arrow />
        </div>
      </li>
    </ul>
  </section>
</template>
