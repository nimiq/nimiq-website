<script setup lang="ts">
interface LargeGridItem { shape?: string, headline: string, subline?: string, icon?: string, link?: string, color?: string }
defineProps<{ items: LargeGridItem[] }>()
</script>

<template>
  <div class="grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] justify-center w-full">
    <NuxtLink v-for="(item, i) in items" :key="i" class="large-grid-item p-[40px] group relative nq-hoverable" :class="{ 'md:text-center': item.subline }" :style="`--c: var(--color-${item.color})`" :to="item.link">
      <div v-if="item.shape === 'Hexagons'" class="rounded-lg pointer-events-none inset-0 absolute overflow-hidden">
        <div class="hexagon-container size-full pointer-events-none relative">
          <Icon class="text-360 -bottom-1/2 -left-[164px] absolute text-neutral-500/60 transition-colors duration-150" name="nimiq:logos-nimiq-mono" />
          <Icon class="text-360 -right-[214px] -top-[140px] absolute text-neutral-500/60 transition-colors duration-150" name="nimiq:logos-nimiq-mono" />
        </div>
      </div>
      <Icon v-if="item.icon && typeof item.icon === 'string'" class="nq-prose-compact team-grid-icon text-96 md:text-120 max-w-128 text-blue mb-3 md:mb-4 transition-colors duration-150" :name="item.icon" :class="{ 'md:mx-auto': item.subline }" />
      <h3 class="z-1 transition-colors duration-150">
        {{ item.headline }}
      </h3>
      <p v-if="item.subline" class="transition-colors duration-150 z-1 mt-1 md:mt-1.5">
        {{ item.subline }}
      </p>
    </NuxtLink>
  </div>
</template>

<style scoped>
.large-grid-item.nq-hoverable:where(:focus-visible, :hover) {
  --nq-gradient-from: var(--c) !important;
  --nq-gradient-to: var(--c) !important;
}

.large-grid-item:where(:focus-visible, :hover) h3,
.large-grid-item:where(:focus-visible, :hover) p {
  color: #fff !important;
  opacity: 1;
}

.large-grid-item:where(:focus-visible, :hover) .team-grid-icon {
  color: #fff !important;
  fill: #fff !important;
}

.large-grid-item:where(:focus-visible, :hover) svg[class*='text-blue'] {
  color: white;
}
</style>
