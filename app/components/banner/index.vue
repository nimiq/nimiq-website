<script setup lang="ts">
interface BannerItem { headline: string, subline?: string, backgroundPattern?: string, label?: string, link?: string, linkLabel?: string, bgColor?: string }
defineProps<{ overlapsNextSection?: boolean, items: BannerItem[] }>()
</script>

<template>
  <div pt-0 bg-neutral-0 relative z-10 of-x-clip f-px-sm>
    <div
      v-for="(item, i) in items" :key="i"
      :style="`background: var(--nq-${item.bgColor || 'green'})`"
      :data-inverted="item.bgColor === 'green' ? '' : undefined"
      py="24 lg:72" px-32 rounded-8 w-full shadow relative of-hidden
      max-w="none lg:[calc(var(--nq-max-width)-32px)]"
      outline="~ 1.5 offset--1.5 neutral/10"
    >
      <!-- Green gradient overlay -->
      <div v-if="item.bgColor === 'green'" rounded-6 pointer-events-none inset-1.5 absolute bg-gradient-green />

      <!-- Hexagon pattern decoration -->
      <div v-if="item.backgroundPattern === 'Nimiq Hexagon'" text="200 md:300 lg:400" pointer-events-none absolute bottom="-10 lg:-0.2775em" right="-0.2em lg:-0.25em">
        <div text-transparent i-nimiq:logos-nimiq-mono>
          <div size-full bg-gradient="to-bl from-transparent via-transparent to-neutral/20" />
        </div>
      </div>

      <div flex="~ wrap justify-between" max-w-full w-full items-end relative z-10>
        <div max-w-60ch>
          <p v-if="item.label" :class="{ 'f-mt-xs': item.bgColor === 'green', 'f-mt-md': item.bgColor !== 'green' }" text-12 nq-label>
            {{ item.label }}
          </p>
          <div :class="{ 'children:!text-white': item.bgColor === 'green' }">
            <h3>{{ item.headline }}</h3>
          </div>
          <div v-if="item.subline" :class="{ 'children:text-white/70 f-mt-sm': item.bgColor === 'green', 'f-mt-md': item.bgColor !== 'green' }">
            <p>{{ item.subline }}</p>
          </div>
        </div>
        <NuxtLink v-if="item.link && item.linkLabel" :to="item.link" mt="32 md:24" nq-arrow nq-pill-lg :class="item.bgColor === 'green' ? 'nq-pill-tertiary text-blue' : 'nq-pill-blue'" lg:mr-128>
          {{ item.linkLabel }}
        </NuxtLink>
        <NuxtLink v-else-if="item.link" :to="item.link" mt="32 md:24" nq-arrow nq-pill-lg nq-pill-blue lg:mr-128 />
      </div>
    </div>
  </div>
</template>
