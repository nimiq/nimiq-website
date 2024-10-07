<script setup lang="ts">
import { useNimiqAlbatross } from '~/stores/albatross/client'

const props = defineProps<{ block: LiveviewMacroBlock }>()
const { slots } = storeToRefs(useNimiqAlbatross())

const requiredVotes = computed(() => Math.ceil(slots.value * 2 / 3))
const progress = computed(() => Math.min(props.block.votes / requiredVotes.value, 1))
</script>

<template>
  <div :class="{ accepted: progress === 1 }" title="Macro Block" flex="~ col justify-between items-center shrink-0" text="14 white center" relative my--24 h-208 w-160 rounded-8 bg-green text-white transition-300>
    <header text-11 font-bold lh-24 uppercase tracking="0.1em">
      Macro Block
    </header>

    <div text-24 font-bold lh-none>
      M{{ block.batch }}
    </div>

    <AlbatrossLiveviewRadialProgress
      :progress="progress" :radius="36" stroke="#FFFFFFFF" inner-stroke="#FFFFFF66" :stroke-width="2"
      :inner-stroke-width="2"
    />

    <div mb-16 text-24>
      {{ block.votes }} / {{ slots }}
      <div text-12 lh-none>
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
