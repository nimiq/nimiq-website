<script setup lang="ts">
defineProps<{ item: string, label?: string, icon: string }>()
</script>

<template>
  <div class="flex flex-items-center flex-gap-10 flex-md:mx-auto flex-md:w-max py-6 pl-8 pr-20 rounded-full f-mb-sm">
    <div class="text-$c bg-[color-mix(in_oklch,var(--c)_20%,transparent)] size-28 size-lg:40 rounded-full grid grid-place-content-center" aria-hidden>
      <Icon class="pill-gradient size-18 lg:size-30" :name="icon" />
    </div>
    <span class="text-18 text-neutral-700 nq-label">{{ item }}</span>
  </div>
</template>

<style>
.pill-gradient {
  background: radial-gradient(
    78.95% 73.1% at 12.5% 14.72%,
    var(--c) 0%,
    color-mix(in oklch, var(--c) 30%, transparent) 100%
  );
}
</style>
