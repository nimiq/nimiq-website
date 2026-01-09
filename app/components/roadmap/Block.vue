<script setup lang="ts">
import type { Block } from './types'

const { icon, name, year, month, row, untilYear, untilMonth, withBg, milestone } = defineProps<Block>()
const [DefineBlock, ReuseBlock] = createReusableTemplate()

// Parse icon string: "nimiq:icon-name w-96 text-inherit" → { name: "nimiq:icon-name", classes: "w-96 text-inherit" }
const parsedIcon = computed(() => {
  if (!icon)
    return null
  const parts = icon.split(' ')
  return { name: parts[0]!, classes: parts.slice(1).join(' ') }
})
</script>

<template>
  <div
    :class="{ 'px-8 py-4 rounded-6 bg-[hsla(0,0%,100%,0.25)] mt--4 h-max mx--8': withBg }" lh-none w-max
    :style="{ '--year': year, '--month': month, 'grid-row': row || 1, '--until-year': untilYear, '--until-month': untilMonth }"
  >
    <DefineBlock>
      <div flex="~ gap-8 items-center">
        <Icon v-if="parsedIcon" :name="parsedIcon.name" class="text-14 op-90 shrink-0" :class="parsedIcon.classes" />
        <span v-if="name" text-16 whitespace-nowrap :class="{ 'lh-none': !withBg }" v-html="name" />
        <div v-if="milestone" bottom-0 top-12 absolute class="milestone" flex="~ col">
          <div bg-white bg-op-25 flex-1 w-full />
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" fill="none"><path stroke="white" stroke-width="2" d="M1 0v.98c0 1.02.4 2 1.1 2.74l3.52 3.66c.73.76.73 1.97 0 2.74L2.1 13.78c-.7.74-1.1 1.72-1.1 2.74V18" opacity=".25" /></svg>
          <div bg-white bg-op-25 flex-1 w-full />
        </div>
      </div>
    </DefineBlock>
    <ReuseBlock />
  </div>
</template>

<style scoped>
.milestone {
  width: var(--vertical-lines-w);
  margin-left: calc(-1 * var(--columns-w) + var(--vertical-lines-w) * 2 - var(--block-index, 0) * 6px);
}
</style>
