<script setup lang="ts">
interface LinkItem { icon?: string, headline?: string, color?: string, link?: string }
defineProps<{ items: LinkItem[] }>()
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 w-full mx-auto" style="max-width: 965px">
    <NuxtLink v-for="(item, i) in items" :key="i" class="link-item flex flex-row gap-5 items-center group p-5 nq-hoverable" :style="`--c: var(--color-${item.color})`" :to="item.link">
      <Icon v-if="item.icon" class="group-hover:!text-white group-focus-visible:!text-white text-32 md:text-48 transition-colors" style="color: var(--c)" :name="item.icon" />
      <div class="group-hover:!text-white group-focus-visible:!text-white text-16 leading-6 font-normal transition-colors min-w-[120px]">
        {{ item.headline }}
      </div>
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
