<script setup lang="ts" generic="T">
defineProps<{ items: T[] }>()
</script>

<template>
  <div relative w-full of-hidden>
    <ul relative flex inline-flex="~" v-bind="$attrs" class="marquee">
      <li v-for="(item, i) in items" :key="i" :style="`--index: ${i}`" w-fit whitespace-nowrap>
        <slot :item="item" :index="i" />
      </li>
      <li v-for="(item, i) in items" :key="i" :style="`--index: ${i}`" w-fit whitespace-nowrap>
        <slot :item="item" :index="i" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.marquee {
  gap: 2rem;
  display: flex;
  /* --initial-x: calc(max(var(--direction, 0), 0) * (-10% + 100vw)); */
  --initial-x: calc(max(var(--direction, 0), 0) * (-100% + 100vw));
  --final-x: calc(max(var(--direction, 0), 0) * (-50% + 100vw) + 50% * min(var(--direction, 0), 0));
  animation: scroll var(--duration, 50s) linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(var(--initial-x));
  }
  to {
    transform: translateX(var(--final-x));
  }
}
</style>
