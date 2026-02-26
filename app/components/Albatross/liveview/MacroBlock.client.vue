<script setup lang="ts">
import { SLOTS } from '@nimiq/utils/albatross-policy'

const props = defineProps<{ block: LiveviewMacroBlock }>()

const requiredVotes = computed(() => Math.ceil(SLOTS * 2 / 3))
const progress = computed(() => Math.min(props.block.votes / requiredVotes.value, 1))
</script>

<template>
  <div :class="{ accepted: progress === 1 }" title="Macro Block" class="flex flex-col justify-between items-center shrink-0 text-14 text-white text-center -my-24 rounded-8 bg-green h-[208px] w-160 transition duration-300 relative">
    <header class="text-11 font-bold leading-[24px] uppercase tracking-[0.1em]">
      Macro Block
    </header>

    <div class="text-24 font-bold leading-none">
      M{{ block.batch }}
    </div>

    <AlbatrossLiveviewRadialProgress
      :progress="progress" :radius="36" stroke="#FFFFFFFF" inner-stroke="#FFFFFF66" :stroke-width="2"
      :inner-stroke-width="2"
    />

    <div class="text-24 mb-16">
      {{ block.votes }} / {{ SLOTS }}
      <div class="text-12 leading-none">
        Votes
      </div>
    </div>
  </div>
</template>

<style scoped>
.accepted :deep(.progress-circle) {
  transition: opacity 0.6s var(--nq-ease) 0.4s;
  opacity: 0;
}
</style>
