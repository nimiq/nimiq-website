<script setup lang="ts">
import { LiveviewBlockType } from '~~/server/utils/liveview.types'

defineProps<{ block: LiveviewBlock }>()
</script>

<template>
  <div flex="~ justify-end items-center">
    <div i-nimiq:arrow-left-thin relative top--8 m-16 font-bold text="16 neutral-600" />
    <AlbatrossLiveviewMacroBlock v-if="block.kind === LiveviewBlockType.MacroBlock" :block />
    <AlbatrossLiveviewMicroBlock v-else-if="block.kind === 'micro'" :block />
    <div v-else-if="block.kind === 'placeholder'" grid="~ place-content-center" i-custom:curly h-120pt min-w-120pt text="30pt neutral-700/85" />
  </div>
</template>
