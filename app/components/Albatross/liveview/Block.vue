<script setup lang="ts">
defineProps<{ block: LiveviewBlock }>()
</script>

<template>
  <div class="flex justify-end items-center">
    <Icon name="nimiq:arrow-left-thin" class="font-bold m-16 -top-[8px] relative text-16 text-neutral-600" />
    <AlbatrossLiveviewMacroBlock v-if="block.kind === LiveviewBlockType.MacroBlock" :block />
    <AlbatrossLiveviewMicroBlock v-else-if="block.kind === 'micro'" :block />
    <div v-else-if="block.kind === 'placeholder'" class="grid place-content-center h-[120px] min-w-[120px]">
      <Icon name="custom:curly" class="size-[120px] text-neutral-700/85" />
    </div>
  </div>
</template>
