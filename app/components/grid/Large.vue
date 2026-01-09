<script setup lang="ts">
interface LargeGridItem { shape?: string, headline: string, subline?: string, icon?: string, link?: string, color?: string }
defineProps<{ items: LargeGridItem[] }>()
</script>

<template>
  <div grid="~ gap-20 cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))]" w-full>
    <NuxtLink v-for="(item, i) in items" :key="i" :style="`--c: var(--colors-${item.color})`" :to="item.link" p="32 lg:40 2xl:48" group relative nq-hoverable class="hocus:var:nq-gradient-from:$c hocus:var:nq-gradient-to:$c">
      <div v-if="item.shape === 'Hexagons'" rounded-8 pointer-events-none inset-0 absolute of-hidden>
        <div text="neutral-500/60 group-hocus:white/10" size-full pointer-events-none relative children:transition-colors>
          <Icon name="nimiq:logos-nimiq-mono" class="text-360 bottom--50% left--164 absolute" />
          <Icon name="nimiq:logos-nimiq-mono" class="text-360 right--214 top--140 absolute" />
        </div>
      </div>
      <Icon v-if="item.icon && typeof item.icon === 'string'" :name="item.icon" class="nq-prose-compact text-96 text-blue max-w-128 f-mb-sm md:text-120 group-hocus:text-white" :class="{ 'md:mx-auto': item.subline }" />
      <h3 z-1 text="f-2xl group-hocus:white" :class="{ 'md:text-center': item.subline }">
        {{ item.headline }}
      </h3>
      <p v-if="item.subline" transition-colors z-1 f-mt-2xs text="md:center group-hocus:white/80">
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
