<script setup lang="ts" generic="T">
defineProps<{ duration: string, items: T[] }>()
</script>

<template>
  <div w-full flex of-hidden whitespace-nowrap>
    <ul class="marquee" inline-flex="~" v-bind="$attrs" :style="`--duration: ${duration}; --count: ${items.length};--inset: 3`">
      <li v-for="(item, i) in items" :key="i" :style="`--index: ${i}`">
        <slot :item="item" :index="i" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.marquee {
  li {
    --delay: calc((var(--duration) / var(--count)) * (var(--a, 0) - 8));
    animation: slide var(--duration) var(--delay) infinite linear;
    translate: calc(((var(--count) - var(--index)) + var(--inset, 0)) * 100%) 0%;
  }
}
@keyframes slide {
  100% {
    translate: calc(calc((var(--index) + var(--outset, 0)) * -100%)) 0%;
  }
}
</style>
