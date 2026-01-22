<script setup lang="ts">
interface LinkItem { icon?: string, headline?: string, color?: string, link?: string }
defineProps<{ items: LinkItem[] }>()
</script>

<template>
  <div class="grid grid-cols-1 grid-lg:cols-3 gap-2 grid-md:gap-4">
    <NuxtLink v-for="(item, i) in items" :key="i" class="hocus:var:nq-gradient-from:$c hocus:var:nq-gradient-to:$c flex flex-row gap-5 flex-items-center group p-5 nq-hoverable bg-neutral-300" :style="`--c: var(--colors-${item.color})`" :to="item.link">
      <Icon v-if="item.icon" class="group-hocus:!text-white text-32 text-md:48 text-$c transition-colors" :name="item.icon" />
      <h4 class="group-hocus:!text-white whitespace-nowrap flex flex-items-center font-semibold transition-colors">
        {{ item.headline }}
      </h4>
    </NuxtLink>
  </div>
</template>

<style scoped>
[nq-hoverable]:hover::before,
[nq-hoverable]:focus-visible::before {
  background-image: none;
  background: var(--c);
}
</style>
