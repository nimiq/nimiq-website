<script setup lang="ts">
interface WalletBannerData { overlapsNextSection?: boolean, icon: string, label: string, headline: string, subline: string, link: string, image: string }
defineProps<WalletBannerData>()
</script>

<template>
  <div class="pt-0 bg-neutral-0 relative z-10 overflow-x-clip px-3 md:px-4" :class="{ 'pb-20': overlapsNextSection }">
    <div class="banner-item py-6 py-lg:72 px-8 rounded-2 w-full relative overflow-hidden max-w-none max-w-lg:[calc(var(--nq-max-width)-32px)] outline outline-1.5 outline-offset--1.5 outline-neutral/10 grid grid-cols-1 lg:grid-cols-[1fr_max-content] gap-x-8" shadow>
      <div class="flex flex-col gap-2 relative z-10">
        <div class="flex gap-2 items-center">
          <Icon class="text-24" :name="icon" />
          <p class="text-12 nq-label">
            {{ label }}
          </p>
        </div>
        <h3 class="nq-heading">
          {{ headline }}
        </h3>
        <p class="max-w-60ch mt-4 md:mt-6">
          {{ subline }}
        </p>
        <NuxtLink class="mt-8 mt-md:24 self-start nq-arrow nq-pill-lg nq-pill-blue" :to="link" />
      </div>
      <div v-if="image" class="relative lg:self-end">
        <img class="h-auto max-h-[200px] max-w-full lg:max-h-[300px]" :src="image" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-item {
  background: var(--color-neutral);
}
</style>
