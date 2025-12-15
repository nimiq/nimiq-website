<script setup lang="ts">
interface BannerData {
  headline: string
  cta: string
  features?: { icon: string, description: string }[]
}

defineProps<{ data: BannerData }>()
</script>

<template>
  <div
    grid="~ cols-1 lg:cols-[1fr_max-content] gap-x-32 lg:flow-col"
    ring="1.5 neutral-300" p="y-64 x-32 md:x-64 lg:72"
    rounded-8 bg-neutral-0 gap-x-24 w-full shadow relative
  >
    <h3 text="44 neutral" nq-raw font-bold max-w-24ch>
      {{ data.headline }}
    </h3>
    <NuxtLink :to="data.cta" f-mt-md nq-arrow nq-pill-lg nq-pill-blue />
    <ul v-if="data.features?.length" flex="~ col gap-12 md:gap-16 lg:gap-24" mt-40 lg:mt-0 lg:row-span-2>
      <li v-for="({ description, icon }, i) in data.features" :key="i" flex="~ gap-12 items-center">
        <div stack rounded-full bg-gold size-32>
          <Icon :name="icon" class="text-18 text-white relative" :class="{ 'bottom--2 right-1 translate-x-1': icon === 'nimiq:document-filled' }" />
        </div>
        <p>{{ description }}</p>
      </li>
    </ul>
  </div>
</template>
