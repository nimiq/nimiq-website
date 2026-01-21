<script setup lang="ts">
interface WalletBannerData { overlapsNextSection?: boolean, icon: string, label: string, headline: string, subline: string, link: string, image: string }
defineProps<WalletBannerData>()
</script>

<template>
  <div class="pt-0 bg-neutral-0 relative z-10 of-x-clip f-px-sm" :class="{ 'pb-80': overlapsNextSection }">
    <div class="banner-item py-24 py-lg:72 px-32 rounded-8 w-full relative of-hidden max-w-none max-w-lg:[calc(var(--nq-max-width)-32px)] outline outline-1.5 outline-offset--1.5 outline-neutral/10 grid grid-cols-1 grid-lg:cols-[1fr_max-content] grid-gap-x-32" shadow>
      <div class="flex flex-col flex-gap-8 relative z-10">
        <div class="flex flex-gap-8 flex-items-center">
          <Icon class="text-24" :name="icon" />
          <p class="text-12 nq-label">
            {{ label }}
          </p>
        </div>
        <h3 class="nq-heading">
          {{ headline }}
        </h3>
        <p class="max-w-60ch f-mt-md">
          {{ subline }}
        </p>
        <NuxtLink class="mt-32 mt-md:24 self-start nq-arrow nq-pill-lg nq-pill-blue" :to="link" />
      </div>
      <div v-if="image" class="relative lg:self-end">
        <img class="h-auto max-h-200 max-w-full lg:max-h-300" :src="image" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-item {
  background: var(--colors-neutral);
}
</style>
