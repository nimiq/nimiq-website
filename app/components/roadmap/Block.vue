<script setup lang="ts">
import type { Block } from './types'

const { icon, name, year, month, row, untilYear, untilMonth, withBg, milestone } = defineProps<Block>()
const [DefineBlock, ReuseBlock] = createReusableTemplate()

// Parse icon string: "nimiq:icon-name w-24 text-inherit" → { name: "nimiq:icon-name", classes: "w-24 text-inherit" }
const parsedIcon = computed(() => {
  if (!icon)
    return null
  const parts = icon.split(' ')
  return { name: parts[0]!, classes: parts.slice(1).join(' ') }
})
</script>

<template>
  <div class="leading-none w-max" :class="{ 'px-2 py-1 rounded-md bg-white/25 -mt-1 h-max -mx-2': withBg }" :style="{ '--year': year, '--month': month, 'grid-row': row || 1, '--until-year': untilYear, '--until-month': untilMonth }">
    <DefineBlock>
      <div class="flex gap-2 items-center">
        <Icon v-if="parsedIcon" class="text-sm opacity-90 shrink-0" :name="parsedIcon.name" :class="parsedIcon.classes" />
        <span v-if="name" class="text-base whitespace-nowrap" :class="{ 'leading-none': !withBg }" v-html="name" />
        <div v-if="milestone" class="milestone bottom-0 top-3 absolute flex flex-col">
          <div class="bg-white/25 flex-1 w-full" />
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" fill="none"><path stroke="white" stroke-width="2" d="M1 0v.98c0 1.02.4 2 1.1 2.74l3.52 3.66c.73.76.73 1.97 0 2.74L2.1 13.78c-.7.74-1.1 1.72-1.1 2.74V18" opacity=".25" /></svg>
          <div class="bg-white/25 flex-1 w-full" />
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
