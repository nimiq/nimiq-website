<script setup lang="ts">
interface BannerItem { headline: string, buttonLabel?: string, link?: string, features?: { icon: string, description: string }[] }
defineProps<{ items: BannerItem[] }>()
</script>

<template>
  <div class="w-full relative pt-40 md:pt-56 lg:pt-72 pb-0 px-3 md:px-4">
    <!-- Green background from ripple only -->
    <div class="absolute inset-0 overflow-hidden">
      <AnimatedCircleRipple class="w-[110vw] absolute bottom-[-300px] left-[-5vw] pointer-events-none" style="max-width: none" />
      <div class="absolute inset-x-0 top-0 h-[200px] bg-linear-to-b from-neutral-0 to-transparent pointer-events-none" />
      <div class="absolute inset-x-0 bottom-0 h-[200px] bg-linear-to-b from-transparent to-green pointer-events-none" />
    </div>

    <!-- White card — extends below the green section -->
    <div
      v-for="(item, i) in items" :key="i"
      class="staking-banner-card relative grid grid-cols-1 lg:grid-cols-[1fr_max-content] lg:grid-flow-col gap-x-8 py-16 px-8 md:px-16 lg:p-18 rounded-2 bg-neutral-0 shadow mx-auto"
      style="max-width: calc(var(--nq-max-width, 73rem) - 32px)"
    >
      <div class="flex-1 flex flex-col gap-8">
        <h3 class="text-f-4xl text-neutral font-bold max-w-[24ch]">
          {{ item.headline }}
        </h3>
        <NuxtLink v-if="item.link" class="nq-arrow nq-pill-lg nq-pill-blue w-fit" :to="item.link">
          {{ item.buttonLabel }}
        </NuxtLink>
      </div>

      <ul class="flex flex-col gap-3 md:gap-4 lg:gap-6 mt-10 lg:mt-0 lg:row-span-2 shrink-0">
        <li v-for="({ description, icon }, fi) in item.features" :key="fi" class="flex gap-3 items-center">
          <div class="rounded-full bg-green size-8 flex items-center justify-center shrink-0">
            <Icon class="text-[18px] text-white" :name="icon" />
          </div>
          <p>{{ description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.staking-banner-card {
  border: 1.5px solid color-mix(in oklch, var(--color-neutral) 15%, transparent);
  box-shadow:
    0px 18px 38px rgba(31, 35, 72, 0.07),
    0px 7px 8.5px rgba(31, 35, 72, 0.04),
    0px 2px 2.5px rgba(31, 35, 72, 0.02);
}
</style>
