<script setup lang="ts">
interface BannerItem { headline: string, subline?: string, backgroundPattern?: string, label?: string, link?: string, linkLabel?: string, bgColor?: string }
defineProps<{ overlapsNextSection?: boolean, items: BannerItem[] }>()
</script>

<template>
  <div class="pt-0 bg-neutral-0 relative z-10 of-x-clip px-3 md:px-4">
    <div v-for="(item, i) in items" :key="i" class="py-6 py-lg:72 px-8 rounded-2 w-full relative of-hidden max-w-none max-w-lg:[calc(var(--nq-max-width)-32px)] outline outline-1.5 outline-offset--1.5 outline-neutral/10" :style="`background: var(--nq-${item.bgColor || 'green'})`" :data-inverted="item.bgColor === 'green' ? '' : undefined" shadow>
      <!-- Green gradient overlay -->
      <div v-if="item.bgColor === 'green'" class="rounded-1.5 pointer-events-none inset-[1.5px] absolute bg-gradient-green" />

      <!-- Hexagon pattern decoration -->
      <div v-if="item.backgroundPattern === 'Nimiq Hexagon'" class="text-200 text-md:300 text-lg:400 pointer-events-none absolute -bottom-2.5 bottom-lg:-0.2775em -right-0.2em right-lg:-0.25em">
        <div class="text-transparent" i-nimiq:logos-nimiq-mono>
          <div class="size-full bg-gradient-to-bl from-transparent via-transparent to-neutral/20" />
        </div>
      </div>

      <div class="flex flex-wrap flex-justify-between max-w-full w-full items-end relative z-10">
        <div class="max-w-60ch">
          <p v-if="item.label" class="text-12 nq-label" :class="{ 'mt-2 md:mt-3': item.bgColor === 'green', 'mt-4 md:mt-6': item.bgColor !== 'green' }">
            {{ item.label }}
          </p>
          <div :class="{ 'children:!text-white': item.bgColor === 'green' }">
            <h3>{{ item.headline }}</h3>
          </div>
          <div v-if="item.subline" :class="{ 'children:text-white/70 mt-3 md:mt-4': item.bgColor === 'green', 'mt-4 md:mt-6': item.bgColor !== 'green' }">
            <p>{{ item.subline }}</p>
          </div>
        </div>
        <NuxtLink v-if="item.link && item.linkLabel" class="mt-8 mt-md:24 nq-arrow nq-pill-lg lg:mr-32" :to="item.link" :class="item.bgColor === 'green' ? 'nq-pill-tertiary text-blue' : 'nq-pill-blue'">
          {{ item.linkLabel }}
        </NuxtLink>
        <NuxtLink v-else-if="item.link" class="mt-8 mt-md:24 nq-arrow nq-pill-lg nq-pill-blue lg:mr-32" :to="item.link" />
      </div>
    </div>
  </div>
</template>
