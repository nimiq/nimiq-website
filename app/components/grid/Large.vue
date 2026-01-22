<script setup lang="ts">
interface LargeGridItem { shape?: string, headline: string, subline?: string, icon?: string, link?: string, color?: string }
defineProps<{ items: LargeGridItem[] }>()
</script>

<template>
  <div class="grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] w-full">
    <NuxtLink v-for="(item, i) in items" :key="i" class="hocus:var:nq-gradient-from:$c hocus:var:nq-gradient-to:$c p-8 p-lg:40 p-2xl:48 group relative nq-hoverable" :style="`--c: var(--colors-${item.color})`" :to="item.link">
      <div v-if="item.shape === 'Hexagons'" class="rounded-2 pointer-events-none inset-0 absolute of-hidden">
        <div class="text-neutral-500/60 text-group-hocus:white/10 size-full pointer-events-none relative" children:transition-colors>
          <Icon class="text-360 bottom--50% -left-[164px] absolute" name="nimiq:logos-nimiq-mono" />
          <Icon class="text-360 -right-[214px] -top-[140px] absolute" name="nimiq:logos-nimiq-mono" />
        </div>
      </div>
      <Icon v-if="item.icon && typeof item.icon === 'string'" class="nq-prose-compact text-96 text-blue max-w-32 mb-3 md:mb-4 md:text-120 group-hocus:text-white" :name="item.icon" :class="{ 'md:mx-auto': item.subline }" />
      <h3 class="z-1 text-xl md:text-2xl text-group-hocus:white" :class="{ 'md:text-center': item.subline }">
        {{ item.headline }}
      </h3>
      <p v-if="item.subline" class="transition-colors z-1 mt-1 md:mt-1.5 text-md:center text-group-hocus:white/80">
        {{ item.subline }}
      </p>
    </NuxtLink>
  </div>
</template>

<style scoped>
[group]:where(:focus-visible, :hover) h3 {
  --uno: 'text-white transition-colors';
}
</style>
