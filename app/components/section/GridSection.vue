<script setup lang="ts">
interface GridItem {
  headline: string
  image?: string
  subline?: string
  icon?: string
}

const props = defineProps<{
  items: GridItem[]
  bgColor?: string
}>()

const bgClass = computed(() => {
  switch (props.bgColor) {
    case 'white': return 'bg-neutral-0'
    case 'grey': return 'bg-neutral-100'
    case 'darkblue': return 'bg-darkblue dark'
    default: return 'bg-neutral-0'
  }
})
</script>

<template>
  <section :class="bgClass" nq-section-gap data-slice-type="grid-section">
    <ul nq-grid-330>
      <li
        v-for="(item, i) in props.items"
        :key="i"
        grid="~ cols-[auto_1fr] rows-[auto_1fr] gap-x-20 gap-y12 lg:gap-y-16 items-center"
      >
        <NuxtImg v-if="item.image" :src="item.image" size="48 lg:56 xl:64" />
        <div v-else-if="item.icon" :class="item.icon" size="48 lg:56 xl:64" />
        <div text-left>
          {{ item.headline }}
        </div>
        <p v-if="item.subline" text-neutral-700 col-span-2>
          {{ item.subline }}
        </p>
      </li>
    </ul>
  </section>
</template>
