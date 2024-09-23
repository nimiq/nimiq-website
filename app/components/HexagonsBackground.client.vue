<script setup lang="ts">
const rows = 8
const { width } = useWindowSize()
const columns = computed(() => (Math.floor(width.value / 140) + 4) & ~1)

const items = rows * columns.value / 2
</script>

<template>
  <div w-full of-hidden>
    <div aria-hidden="true" class="grid-parent" :style="`--rows:${rows};--cols:${columns}`">
      <div v-for="i in items" :key="i" i-nimiq:logos-nimiq-mono text-neutral-400 op="$op" :style="`--op: ${1}`" />
    </div>
  </div>
</template>

<style scoped>
.grid-parent {
  --gap: 16px;
  --hexagon-w: 140px;
  --hexagon-h: calc(var(--hexagon-w) / 1.1111);
  --hexagon-h-half: calc(var(--hexagon-h) / 2);
  display: grid;
  row-gap: calc(var(--gap) / 2);
  grid-template-columns: repeat(var(--cols), var(--gap) calc(var(--hexagon-w) - (2 * var(--gap)))) var(--gap);
  grid-template-rows: repeat(var(--rows), var(--hexagon-h-half));
  height: calc(var(--rows) * var(--hexagon-h-half) + var(--rows) * var(--gap));
  left: calc(-1 * var(--hexagon-w) / 2);
  position: relative;

  > div {
    width: var(--hexagon-w);
    height: var(--hexagon-h);
    grid-row: span 2;
    grid-column: span 2;
  }

  > div:nth-child(even) {
    margin-top: var(--hexagon-h-half);
    grid-row-end: span 3;
  }
}
</style>
