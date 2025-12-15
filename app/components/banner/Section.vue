<script setup lang="ts">
interface BannerItem { headline: string, subline?: string, label?: string, link?: string }
defineProps<{ overlapsNextSection?: boolean, items: BannerItem[] }>()
</script>

<template>
  <div pt-0 bg-neutral-0 relative z-10 of-x-clip f-px-sm :class="{ 'pb-80': overlapsNextSection }">
    <div
      v-for="(item, i) in items" :key="i"
      class="banner-item"
      py="24 lg:72" px-32 rounded-8 w-full shadow relative of-hidden
      max-w="none lg:[calc(var(--nq-max-width)-32px)]"
      outline="~ 1.5 offset--1.5 neutral/10"
    >
      <div flex="~ wrap justify-between" max-w-full w-full items-end relative z-10>
        <div max-w-60ch>
          <p v-if="item.label" text-12 f-mt-md nq-label>
            {{ item.label }}
          </p>
          <h3 nq-heading>
            {{ item.headline }}
          </h3>
          <p v-if="item.subline" f-mt-md>
            {{ item.subline }}
          </p>
        </div>
        <NuxtLink v-if="item.link" :to="item.link" mt="32 md:24" nq-arrow nq-pill-lg nq-pill-blue lg:mr-128 />
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
