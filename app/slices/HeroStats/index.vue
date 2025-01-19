<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.HeroStatsSlice>())
</script>

<template>
  <section bg-neutral-100>
    <ul grid="~ items-center gap-20 cols-[repeat(auto-fit,minmax(max-content,484px))]">
      <li v-for="(stat, i) in slice.items" :key="i" flex="~ col gap-y-8" rounded-6 bg-white shadow f-p-24 ring="1.5 neutral-200">
        <span text="12 md:14 neutral-700" nq-label>{{ stat.label }}</span>
        <span font-bold text="green xl">{{ stat.value }}</span>
      </li>
    </ul>
  </section>
</template>
