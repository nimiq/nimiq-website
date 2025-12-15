<script setup lang="ts">
interface StatItem { label: string, stat: string }
interface BlockItem { image: string, stats: StatItem[] }
defineProps<{ blocks: BlockItem[] }>()

const [DefineStats, ReuseStat] = createReusableTemplate<{ label?: string, value?: string }>()
</script>

<template>
  <DefineStats v-slot="{ label, value }">
    <div flex="~ col" p="16 sm:24" rounded-6 bg-neutral-0 shadow ring="1.5 neutral-200">
      <span nq-label text="neutral-700 12">{{ label }}</span>
      <span mt="12 sm:16" font-bold text="green f-xl">{{ value }}</span>
    </div>
  </DefineStats>

  <div grid="~ flow-row gap-8 lg:rows-[auto,1fr,auto] lg:gap-24 cols-1 md:cols-2" class="multiple-images" mx-0 bg-neutral-0 w-full children:rounded-6 children:shadow>
    <div style="grid-area: block1-image" ring="1.5 neutral-200" h="128 lg:192 md:240" rounded-6 bg-white of-hidden>
      <NuxtImg v-if="blocks[0]" :src="blocks[0].image" size-full object-cover />
    </div>

    <ReuseStat v-if="blocks[0]?.stats[0]" :label="blocks[0].stats[0].label" :value="blocks[0].stats[0].stat" style="grid-area: block1-stat1" />

    <div style="grid-area: block2-image" ring="1.5 neutral-200" h="128 lg:192 md:240" rounded-6 bg-white of-hidden>
      <NuxtImg v-if="blocks[1]" :src="blocks[1].image" size-full object-cover />
    </div>

    <ReuseStat v-if="blocks[1]?.stats[0]" :label="blocks[1].stats[0].label" :value="blocks[1].stats[0].stat" style="grid-area: block2-stat1" />
  </div>
</template>

<style scoped>
.multiple-images {
  grid-template-areas: 'block1-image' 'block1-stat1' 'block2-image' 'block2-stat1';

  @screen lg {
    grid-template-areas: 'block1-image block2-stat1' 'block1-image block2-image' 'block1-stat1 block2-image';
  }
}
</style>
