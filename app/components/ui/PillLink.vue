<script setup lang="ts">
defineProps<{ item: string, label?: string, icon: string }>()
</script>

<template>
  <div flex="~ items-center gap-10 md:mx-auto md:w-max" py-6 pl-8 pr-20 rounded-full f-mb-sm>
    <div text="$c" bg="[color-mix(in_oklch,var(--c)_20%,transparent)]" aria-hidden size="28 lg:40" rounded-full grid="~ place-content-center">
      <Icon :name="icon" class="pill-gradient size-18 lg:size-30" />
    </div>
    <span text="18 neutral-700" nq-label>{{ item }}</span>
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
