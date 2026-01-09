<script setup lang="ts">
interface WalletBannerData { overlapsNextSection?: boolean, icon: string, label: string, headline: string, subline: string, link: string, image: string }
defineProps<WalletBannerData>()
</script>

<template>
  <div pt-0 bg-neutral-0 relative z-10 of-x-clip f-px-sm :class="{ 'pb-80': overlapsNextSection }">
    <div
      class="banner-item"
      py="24 lg:72" px-32 rounded-8 w-full shadow relative of-hidden
      max-w="none lg:[calc(var(--nq-max-width)-32px)]"
      outline="~ 1.5 offset--1.5 neutral/10"
      grid="~ cols-1 lg:cols-[1fr_max-content] gap-x-32"
    >
      <div flex="~ col gap-8" relative z-10>
        <div flex="~ gap-8 items-center">
          <Icon :name="icon" class="text-24" />
          <p text-12 nq-label>
            {{ label }}
          </p>
        </div>
        <h3 nq-heading>
          {{ headline }}
        </h3>
        <p max-w-60ch f-mt-md>
          {{ subline }}
        </p>
        <NuxtLink :to="link" mt="32 md:24" self-start nq-arrow nq-pill-lg nq-pill-blue />
      </div>
      <div v-if="image" relative lg:self-end>
        <img :src="image" alt="" class="h-auto max-h-200 max-w-full lg:max-h-300">
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-item {
  background: var(--colors-neutral);
}
</style>
