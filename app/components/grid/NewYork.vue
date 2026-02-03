<script setup lang="ts">
interface StatItem { label: string, stat: string }
interface BlockItem { image: string, alt?: string, stats: StatItem[] }
defineProps<{ blocks: BlockItem[] }>()

const [DefineStats, ReuseStat] = createReusableTemplate<{ label?: string, value?: string }>()
</script>

<template>
  <DefineStats v-slot="{ label, value }">
    <div class="flex flex-col p-4 sm:p-6 rounded-1.5 bg-neutral-0 shadow ring-1.5 ring-neutral-200">
      <span class="nq-label text-neutral-700 text-12">{{ label }}</span>
      <span class="mt-3 sm:mt-4 font-bold text-green text-lg md:text-xl">{{ value }}</span>
    </div>
  </DefineStats>

  <div class="one-image grid grid-flow-row gap-2 lg:grid-rows-[auto,1fr,auto] lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-0 bg-neutral-0 w-full [&>*]:rounded-1.5 [&>*]:shadow">
    <NuxtImg v-if="blocks[0]" class="size-full max-h-[278px] object-cover lg:row-span-2 md:col-span-2" style="grid-area: block1-image" :src="blocks[0].image" :alt="blocks[0].alt" />

    <ReuseStat v-if="blocks[0]?.stats[0]" :label="blocks[0].stats[0].label" :value="blocks[0].stats[0].stat" style="grid-area: block1-stat1" />
    <ReuseStat v-if="blocks[0]?.stats[1]" :label="blocks[0].stats[1].label" :value="blocks[0].stats[1].stat" style="grid-area: block1-stat2" />

    <NuxtImg v-if="blocks[1]" class="size-full max-h-[278px] object-cover lg:row-span-2 md:col-span-2" style="grid-area: block2-image" :src="blocks[1].image" :alt="blocks[1].alt" />

    <ReuseStat v-if="blocks[1]?.stats[0]" :label="blocks[1].stats[0].label" :value="blocks[1].stats[0].stat" style="grid-area: block2-stat1" />
    <ReuseStat v-if="blocks[1]?.stats[1]" :label="blocks[1].stats[1].label" :value="blocks[1].stats[1].stat" style="grid-area: block2-stat2" />
  </div>
</template>

<style scoped>
.one-image {
  grid-template-areas: 'block1-image' 'block1-stat1' 'block1-stat2' 'block2-image' 'block2-stat1' 'block2-stat2';
}

@media (min-width: 768px) {
  .one-image {
    grid-template-areas: 'block1-image block1-image' 'block1-stat1 block1-stat2' 'block2-image block2-image' 'block2-stat1 block2-stat2';
  }
}

@media (min-width: 1024px) {
  .one-image {
    grid-template-areas: 'block1-image block1-image block2-stat1 block2-stat2' 'block1-image block1-image block2-image block2-image' 'block1-stat1 block1-stat2 block2-image block2-image';
  }
}
</style>
