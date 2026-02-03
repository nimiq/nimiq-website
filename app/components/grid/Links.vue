<script setup lang="ts">
interface LinkItem { icon?: string, headline?: string, color?: string, link?: string }
defineProps<{ items: LinkItem[] }>()
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4">
    <NuxtLink v-for="(item, i) in items" :key="i" class="link-item flex flex-row gap-5 items-center group p-5 nq-hoverable" :style="`--c: var(--color-${item.color})`" :to="item.link">
      <Icon v-if="item.icon" class="group-hover:!text-white group-focus-visible:!text-white text-32 md:text-48 transition-colors" style="color: var(--c)" :name="item.icon" />
      <h4 class="group-hover:!text-white group-focus-visible:!text-white whitespace-nowrap flex items-center font-semibold transition-colors">
        {{ item.headline }}
      </h4>
    </NuxtLink>
  </div>
</template>

<style scoped>
.link-item.nq-hoverable:hover,
.link-item.nq-hoverable:focus-visible {
  --nq-gradient-from: var(--c) !important;
  --nq-gradient-to: var(--c) !important;
}
</style>
