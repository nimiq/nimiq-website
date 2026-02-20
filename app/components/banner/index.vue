<script setup lang="ts">
interface BannerItem { headline: string, subline?: string, backgroundPattern?: string, label?: string, link?: string, linkLabel?: string, bgColor?: string }
defineProps<{ overlapsNextSection?: boolean, items: BannerItem[] }>()
</script>

<template>
  <div class="pt-0 bg-neutral-0 relative z-10 overflow-x-clip">
    <div
      v-for="(item, i) in items" :key="i"
      class="py-6 py-lg:72 px-8 rounded-2 w-full shadow relative overflow-hidden outline outline-1.5 outline-offset--1.5 outline-neutral/10"
      :class="item.bgColor === 'green' ? 'bg-gradient-green' : ''"
      :style="item.bgColor !== 'green' ? `background: rgb(var(--nq-${item.bgColor || 'green'}))` : undefined"
    >
      <!-- Hexagon pattern decoration -->
      <div v-if="item.backgroundPattern === 'Nimiq Hexagon'" class="text-200 md:text-300 lg:text-400 pointer-events-none absolute -bottom-2.5 bottom-lg:-0.2775em -right-0.2em right-lg:-0.25em">
        <div class="text-transparent" i-nimiq:logos-nimiq-mono>
          <div class="size-full bg-gradient-to-bl from-transparent via-transparent to-neutral/20" />
        </div>
      </div>

      <div class="max-w-full w-full relative z-10">
        <div>
          <p v-if="item.label" class="text-12 nq-label" :class="item.bgColor === 'green' ? 'text-white/60 mt-2 md:mt-3' : 'mt-4 md:mt-6'">
            {{ item.label }}
          </p>
          <h3 class="banner-headline" :class="item.bgColor === 'green' ? '!text-white' : ''">
            {{ item.headline }}
          </h3>
        </div>
        <div v-if="item.subline || item.link" class="mt-3 md:mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <p v-if="item.subline" class="md:max-w-60ch" :class="item.bgColor === 'green' ? 'text-white/70' : ''">
            {{ item.subline }}
          </p>
          <NuxtLink v-if="item.link && item.linkLabel" class="nq-arrow nq-pill-lg shrink-0 self-start md:self-end md:ml-auto" :to="item.link" :class="item.bgColor === 'green' ? 'nq-pill-tertiary text-blue' : 'nq-pill-blue'">
            {{ item.linkLabel }}
          </NuxtLink>
          <NuxtLink v-else-if="item.link" class="nq-arrow nq-pill-lg nq-pill-blue shrink-0 self-start md:self-end md:ml-auto" :to="item.link" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-headline {
  font-size: clamp(22px, calc(22px + 6 * ((100vw - 375px) / (1440 - 375))), 28px);
  line-height: 1.15;
}
</style>
