<script setup lang="ts">
import type { Block } from './types'

defineProps<Block>()

const [DefineBlock, ReuseBlock] = createReusableTemplate < { style?: Record<string, any> }>()
</script>

<template>
  <DefineBlock v-slot="{ style }">
    <div
      flex="~ gap-8 items-center" w-max
      :class="{ 'px-8 py-4 rounded-6 bg-[hsla(0,0%,100%,0.25)]': withBg }"
      :style
    >
      <div v-if="icon" :class="icon" shrink-0 text-14 op-90 />
      <span v-if="name" whitespace-nowrap text-16 :class="{ 'lh-none': !withBg }" v-html="name" />
      <div v-if="milestone" absolute bottom-0 top-12 class="milestone" flex="~ col">
        <div w-full flex-1 bg-white bg-op-25 />
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" fill="none"><path stroke="white" stroke-width="2" d="M1 0v.98c0 1.02.4 2 1.1 2.74l3.52 3.66c.73.76.73 1.97 0 2.74L2.1 13.78c-.7.74-1.1 1.72-1.1 2.74V18" opacity=".25" /></svg>
        <div w-full flex-1 bg-white bg-op-25 />
      </div>
    </div>
  </DefineBlock>

  <Tooltip v-if="tooltip">
    <template #trigger>
      <div flex="~ items-center gap-8" absolute top-14 whitespace-nowrap text-10 italic op-80 :style="{ '--year': year, '--month': month, 'grid-row': row || 1, '--until-year': untilYear, '--until-month': untilMonth }">
        <div i-nimiq:info />
        Optional tooltip. This text will be removed.
      </div>
      <ReuseBlock />
    </template>
    <p text="xs neutral-800" max-w-320>
      {{ tooltip.label }}
    </p>
    <NuxtLink v-if="tooltip.cta" :to="tooltip.cta.link" target="_blank" un-text-blue w-max font-semibold nq-arrow nq-mt-16>
      {{ tooltip.cta.label }}
    </NuxtLink>
  </Tooltip>
  <ReuseBlock v-else :style="{ '--year': year, '--month': month, 'grid-row': row || 1, '--until-year': untilYear, '--until-month': untilMonth }" />
</template>

<style scoped>
.milestone {
  --w: 2px;
  width: var(--w);
  left: calc(((var(--column-start) - 1) * var(--columns-width)) + (var(--columns-width) / 2) - 3px);
}
</style>
