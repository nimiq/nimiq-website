<script setup lang="ts">
const { status: statsStatus, stats } = storeToRefs(useStats())
const { status: blocksStatus } = storeToRefs(useBlocks())
const isDark = useDark()
</script>

<template>
  <div grid="~ place-content-center gap-12" w-max rounded-8 p-16 bg="orange op-6" border="orange/50 dashed 2" text-11>
    <div mb-6 flex="~ justify-between items-center">
      <h2 text-12 font-mono nq-label>
        Dev Panel
      </h2>
      <div flex="~ items-center gap-8" :class="statsStatus === 'OPEN' ? 'nq-pill-green' : 'nq-pill-secondary'" ml-32 bg-op-60 text-12 capitalize>
        <div :class="statsStatus === 'OPEN' ? 'i-nimiq:world-check' : 'i-nimiq:world-alert'" />
        Stats
      </div>
      <div flex="~ items-center gap-8" :class="blocksStatus === 'OPEN' ? 'nq-pill-green' : 'nq-pill-secondary'" ml-12 bg-op-60 text-12 capitalize>
        <div :class="blocksStatus === 'OPEN' ? 'i-nimiq:world-check' : 'i-nimiq:world-alert'" />
        Blocks
      </div>
    </div>

    <div flex="~ gap-16 items-center">
      <div flex="~ gap-8 items-center" bg-transparent text-11 nq-pill-tertiary>
        <div i-nimiq:stopwatch />
        <span>Duration: {{ stats?.duration || -1 }}</span>
      </div>
      <div flex="~ gap-8 items-center" bg-transparent text-11 nq-pill-tertiary>
        <div i-nimiq:digital-gold />
        <span># blocks: {{ stats?.numberBlocks || -1 }}</span>
      </div>
    </div>

    <label flex="~ items-center text-10 gap-8">
      <span text-10 nq-label>Theme</span>
      <input v-model="isDark" nq-switch type="checkbox">
    </label>
  </div>
</template>
