<script setup lang="ts">
interface ZigZagItem { headline: string, description?: string, image?: string, label?: string, buttonLabel?: string, buttonHref?: string, secondaryButtonLabel?: string, secondaryButtonLabelMobile?: string, secondaryButtonHref?: string }
interface Props { items: ZigZagItem[] }

defineProps<Props>()
</script>

<template>
  <ul>
    <li v-for="(item, i) in items" :key="i" class="grid grid-cols-1 grid-gap-x-96 grid-md:cols-2 grid-md:items-center border-b border-neutral-300 border-last:none p-first:pb-64 p-first:md:pb-96 p-py-64 p-md:py-96 p-last:pt-64 p-last:md:pt-96 p-md:odd:r-32 p-md:even:l-32">
      <NuxtImg v-if="item.image" class="ring-1.5 ring-neutral-400 aspect-1.39 aspect-md:1.48 aspect-lg:initial rounded-6 pointer-events-none object-cover" :src="item.image" shadow :class="{ 'md:col-start-2': i % 2 === 0 }" />

      <div class="py-32 col-start-1 row-start-2 lg:py-96 md:py-80 xl:py-144 md:flex-1 md:row-start-1 md:items-center" :class="{ 'xl:pl-32 xl:pr-0': i % 2 === 0, 'xl:pr-32 xl:pl-0 md:col-start-2': i % 2 !== 0 }">
        <h3 class="text-f-2xl font-bold">
          {{ item.headline }}
        </h3>
        <p v-if="item.label" class="text-12 f-mt-2xs nq-label">
          {{ item.label }}
        </p>
        <p v-if="item.description" class="nq-prose-compact f-mt-lg">
          {{ item.description }}
        </p>

        <div class="flex flex-gap-24 flex-md:col flex-lg:row max-w-lg f-mt-sm">
          <NuxtLink v-if="item.buttonHref" class="font-semibold nq-arrow nq-pill-lg nq-pill-blue" :to="item.buttonHref">
            {{ item.buttonLabel }}
          </NuxtLink>
          <NuxtLink v-if="item.secondaryButtonHref" class="font-semibold nq-arrow" :to="item.secondaryButtonHref" un-text-blue>
            <span class="max-md:hidden">{{ item.secondaryButtonLabel }}</span>
            <span class="md:hidden">{{ item.secondaryButtonLabelMobile || item.secondaryButtonLabel }}</span>
          </NuxtLink>
        </div>
      </div>
    </li>
  </ul>
</template>
