<script setup lang="ts">
interface ZigZagItem { headline: string, description?: string, image?: string, label?: string, buttonLabel?: string, buttonHref?: string, secondaryButtonLabel?: string, secondaryButtonLabelMobile?: string, secondaryButtonHref?: string }
interface Props { items: ZigZagItem[] }

defineProps<Props>()
</script>

<template>
  <ul>
    <li v-for="(item, i) in items" :key="i" class="grid grid-cols-1 gap-x-96 md:grid-cols-2 md:items-center border-b border-neutral-300 last:border-b-0" :class="{ 'md:pr-32': i % 2 !== 0, 'md:pl-32': i % 2 === 0 }">
      <NuxtImg v-if="item.image" class="ring-1.5 ring-neutral-400 aspect-[1.39] md:aspect-[1.48] lg:aspect-auto rounded-6 pointer-events-none object-cover shadow" :src="item.image" :class="{ 'md:col-start-2': i % 2 === 0 }" />

      <div class="py-32 col-start-1 row-start-2 lg:py-96 md:py-80 xl:py-145 md:flex-1 md:row-start-1 md:items-center" :class="{ 'xl:pl-32 xl:pr-0': i % 2 === 0, 'xl:pr-32 xl:pl-0 md:col-start-2': i % 2 !== 0 }">
        <h3 class="text-xl md:text-2xl font-bold">
          {{ item.headline }}
        </h3>
        <p v-if="item.label" class="text-12 mt-4 md:mt-6 nq-label">
          {{ item.label }}
        </p>
        <p v-if="item.description" class="nq-prose-compact mt-24 md:mt-32">
          {{ item.description }}
        </p>

        <div class="flex gap-24 md:flex-col lg:flex-row max-w-lg mt-12 md:mt-16">
          <NuxtLink v-if="item.buttonHref" class="font-semibold nq-arrow nq-pill-lg nq-pill-blue" :to="item.buttonHref">
            {{ item.buttonLabel }}
          </NuxtLink>
          <NuxtLink v-if="item.secondaryButtonHref" class="font-semibold nq-arrow text-blue" :to="item.secondaryButtonHref">
            <span class="max-md:hidden">{{ item.secondaryButtonLabel }}</span>
            <span class="md:hidden">{{ item.secondaryButtonLabelMobile || item.secondaryButtonLabel }}</span>
          </NuxtLink>
        </div>
      </div>
    </li>
  </ul>
</template>
