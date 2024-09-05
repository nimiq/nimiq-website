<script setup lang="ts">
import { type BlockLiveview, BlockLiveviewType } from '~~/server/types'

defineProps<{ block: BlockLiveview }>()
</script>

<template>
  <div flex="~ justify-end items-center">
    <!-- Arrow pointing to previous block -->
    <div i-nimiq:arrow-left-thin relative top--8 m-16 font-bold text="16 neutral-600" />
    <MacroBlock v-if="block.kind === BlockLiveviewType.MacroBlock" :block />
    <MicroBlock v-else-if="block.kind === 'micro'" :block />
    <div v-else-if="block.kind === 'placeholder'" grid="~ place-content-center" i-custom:curly h-120pt min-w-120pt text="30pt neutral-500" />
  </div>
</template>
