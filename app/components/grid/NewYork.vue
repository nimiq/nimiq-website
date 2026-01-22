<script setup lang="ts">
interface StatItem { label: string, stat: string }
interface BlockItem { image: string, stats: StatItem[] }
defineProps<{ blocks: BlockItem[] }>()

const [DefineStats, ReuseStat] = createReusableTemplate<{ label?: string, value?: string }>()
</script>

<template>
  <DefineStats v-slot="{ label, value }">
    <div class="flex flex-col p-4 p-sm:24 rounded-1.5 bg-neutral-0 ring-1.5 ring-neutral-200" shadow>
      <span class="nq-label text-neutral-700 text-12">{{ label }}</span>
      <span class="mt-3 mt-sm:16 font-bold text-green text-lg md:text-xl">{{ value }}</span>
    </div>
  </DefineStats>

  <div class="one-image grid grid-flow-row gap-2 grid-lg:rows-[auto,1fr,auto] grid-lg:gap-6 grid-cols-1 grid-md:cols-2 grid-lg:cols-4 mx-0 bg-neutral-0 w-full" children:rounded-1.5 children:shadow>
    <div class="ring-1.5 ring-neutral-200 h-32 h-md:240 h-lg:auto lg:max-h-[278px] rounded-1.5 bg-white of-hidden lg:row-span-2 md:col-span-2" style="grid-area: block1-image">
      <NuxtImg v-if="blocks[0]" class="size-full object-cover" :src="blocks[0].image" />
    </div>

    <ReuseStat v-if="blocks[0]?.stats[0]" :label="blocks[0].stats[0].label" :value="blocks[0].stats[0].stat" style="grid-area: block1-stat1" />
    <ReuseStat v-if="blocks[0]?.stats[1]" :label="blocks[0].stats[1].label" :value="blocks[0].stats[1].stat" style="grid-area: block1-stat2" />

    <div class="ring-1.5 ring-neutral-200 h-32 h-md:240 h-lg:auto lg:max-h-[278px] rounded-1.5 bg-white of-hidden lg:row-span-2 md:col-span-2" style="grid-area: block2-image">
      <NuxtImg v-if="blocks[1]" class="size-full object-cover" :src="blocks[1].image" />
    </div>

    <ReuseStat v-if="blocks[1]?.stats[0]" :label="blocks[1].stats[0].label" :value="blocks[1].stats[0].stat" style="grid-area: block2-stat1" />
    <ReuseStat v-if="blocks[1]?.stats[1]" :label="blocks[1].stats[1].label" :value="blocks[1].stats[1].stat" style="grid-area: block2-stat2" />
  </div>
</template>

<style scoped>
.one-image {
  grid-template-areas: 'block1-image' 'block1-stat1' 'block1-stat2' 'block2-image' 'block2-stat1' 'block2-stat2';

  @screen md {
    grid-template-areas: 'block1-image block1-image' 'block1-stat1 block1-stat2' 'block2-image block2-image' 'block2-stat1 block2-stat2';
  }

  @screen lg {
    grid-template-areas: 'block1-image block1-image block2-stat1 block2-stat2' 'block1-image block1-image block2-image block2-image' 'block1-stat1 block1-stat2 block2-image block2-image';
  }
}
</style>
