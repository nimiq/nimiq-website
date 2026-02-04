<script setup lang="ts">
defineProps<{ item: string, label?: string, icon: string }>()
</script>

<template>
  <div class="flex items-center gap-2.5 md:mx-auto md:w-max py-1.5 pl-2 pr-5 rounded-full">
    <div class="text-[var(--c)] bg-[color-mix(in_oklch,var(--c)_20%,transparent)] size-7 lg:size-10 rounded-full grid place-content-center" aria-hidden>
      <Icon class="pill-gradient size-[18px] lg:size-[30px]" :name="icon" />
    </div>
    <span class="text-[18px] text-neutral-700 nq-label pill-label">{{ item }}</span>
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
