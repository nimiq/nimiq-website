<script setup lang="ts">
interface BannerItem { headline: string, subline?: string, label?: string, link?: string }
defineProps<{ overlapsNextSection?: boolean, items: BannerItem[] }>()
</script>

<template>
  <div class="pt-0 bg-neutral-0 relative z-10 of-x-clip f-px-sm" :class="{ 'pb-20': overlapsNextSection }">
    <div v-for="(item, i) in items" :key="i" class="banner-item py-6 py-lg:72 px-8 rounded-2 w-full relative of-hidden max-w-none max-w-lg:[calc(var(--nq-max-width)-32px)] outline outline-1.5 outline-offset--1.5 outline-neutral/10" shadow>
      <div class="flex flex-wrap flex-justify-between max-w-full w-full items-end relative z-10">
        <div class="max-w-60ch">
          <p v-if="item.label" class="text-12 f-mt-md nq-label">
            {{ item.label }}
          </p>
          <h3 class="nq-heading">
            {{ item.headline }}
          </h3>
          <p v-if="item.subline" class="f-mt-md">
            {{ item.subline }}
          </p>
        </div>
        <NuxtLink v-if="item.link" class="mt-8 mt-md:24 nq-arrow nq-pill-lg nq-pill-blue lg:mr-32" :to="item.link" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-item {
  background: var(--colors-neutral);
}
.banner-item:nth-child(even) {
  background: var(--colors-darkblue);
  color: var(--colors-neutral);
}
</style>
