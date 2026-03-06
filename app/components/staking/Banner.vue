<script setup lang="ts">
interface BannerItem { headline: string, buttonLabel?: string, link?: string, features?: { icon: string, description: string }[] }
defineProps<{ overlapsNextSection?: boolean, items: BannerItem[] }>()
</script>

<template>
  <div
    class="w-full max-w-none relative pb-0"
    style="padding: var(--f-pt) var(--f-px) 0;"
  >
    <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden">
      <AnimatedCircleRipple class="w-[110vw] absolute bottom-[-300px] left-[-5vw] pointer-events-none" style="max-width: none" />
      <div class="absolute inset-x-0 top-0 h-[200px] bg-linear-to-b from-neutral-0 to-transparent pointer-events-none" />
      <div class="absolute inset-x-0 bottom-0 h-[200px] bg-linear-to-b from-transparent to-green pointer-events-none" />
    </div>

    <div
      v-for="(item, i) in items" :key="i"
      class="staking-banner-card relative grid grid-cols-1 lg:grid-cols-[1fr_max-content] lg:grid-flow-col gap-x-8 py-16 px-8 md:p-16 lg:p-[72px] rounded-2 bg-neutral-0 shadow mx-auto"
      :class="{ 'lg:translate-y-[72px]': overlapsNextSection }"
      style="max-width: min(100%, calc(73rem - 32px))"
    >
      <div class="flex-1 flex flex-col gap-8 md:max-lg:items-center md:max-lg:text-center">
        <h3 class="text-f-3xl text-neutral font-bold max-w-[24ch] md:max-lg:max-w-[28ch]">
          {{ item.headline }}
        </h3>
        <NuxtLink v-if="item.link" class="nq-arrow nq-pill-lg nq-pill-blue w-fit md:max-lg:mx-auto" :to="item.link">
          {{ item.buttonLabel }}
        </NuxtLink>
      </div>

      <ul class="flex flex-col gap-3 md:gap-5 lg:gap-6 mt-10 md:max-lg:mt-14 lg:mt-0 lg:row-span-2 lg:self-center md:max-lg:items-center md:max-lg:text-center shrink-0">
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
