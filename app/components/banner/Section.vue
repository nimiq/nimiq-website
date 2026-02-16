<script setup lang="ts">
interface BannerItem { headline: string, subline?: string, label?: string, link?: string, buttonLabel?: string, features?: { icon: string, description: string }[] }
defineProps<{ overlapsNextSection?: boolean, items: BannerItem[] }>()
</script>

<template>
  <div class="pt-0 bg-neutral-0 relative z-10 overflow-x-clip px-3 md:px-4" :class="{ 'pb-20': overlapsNextSection }">
    <div v-for="(item, i) in items" :key="i" class="banner-item py-6 py-lg:72 px-8 rounded-2 w-full relative overflow-hidden max-w-none max-w-lg:[calc(var(--nq-max-width)-32px)] outline outline-1.5 outline-offset--1.5 outline-neutral/10" shadow>
      <div class="flex flex-wrap justify-between max-w-full w-full items-end relative z-10">
        <div class="max-w-60ch">
          <p v-if="item.label" class="text-12 mt-4 md:mt-6 nq-label">
            {{ item.label }}
          </p>
          <h3 class="nq-heading text-white">
            {{ item.headline }}
          </h3>
          <p v-if="item.subline" class="mt-4 md:mt-6">
            {{ item.subline }}
          </p>
          <NuxtLink v-if="item.link" class="mt-8 nq-arrow nq-pill-lg nq-pill-blue" :to="item.link">
            <template v-if="item.buttonLabel">
              {{ item.buttonLabel }}
            </template>
          </NuxtLink>
        </div>
        <ul v-if="item.features?.length" class="flex flex-col gap-3 md:gap-4 lg:gap-6 mt-10 lg:mt-0">
          <li v-for="({ description, icon }, fi) in item.features" :key="fi" class="flex gap-3 items-center">
            <div class="rounded-full bg-white/20 size-8 flex items-center justify-center shrink-0">
              <Icon class="text-18 text-white" :name="icon" />
            </div>
            <p>{{ description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-item {
  background: rgb(var(--nq-green));
  color: white;
}
.banner-item::before {
  content: '';
  position: absolute;
  inset: 1.5px;
  border-radius: inherit;
  pointer-events: none;
  background-image: radial-gradient(
    at 100% 100% in oklab,
    var(--color-green-gradient-to) 0%,
    var(--color-green-gradient-from) 100%
  );
}
.banner-item:nth-child(even) {
  background: var(--color-darkblue);
  color: var(--color-neutral);
}
.banner-item:nth-child(even)::before {
  display: none;
}
</style>
