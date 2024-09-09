<script setup lang="ts">
defineProps<{ items: { label: string, item: Item }[] }>()
enum Item {
  Tech = 'Tech',
  Map = 'Map',
  Apps = 'Apps',
}
// @unocss-include

const colors: Record<Item, string> = {
  [Item.Tech]: 'text-gold bg-gold/20',
  [Item.Apps]: 'text-green bg-green/20',
  [Item.Map]: 'text-orange bg-orange/20',
}

const icons: Record<Item, string> = {
  [Item.Tech]: 'i-nimiq:bolt',
  [Item.Apps]: 'i-nimiq:arrows-to-sides',
  [Item.Map]: 'i-nimiq:crypto-map',
}
</script>

<template>
  <ul>
    <li v-for="{ item, label } in items" :key="label">
      <NuxtLink :to="item.toLocaleLowerCase()">
        <div :class="colors[item]" aria-hidden size-28 rounded-full grid="~ place-content-center">
          <div :class="icons[item]" text-16 />
        </div>
        <span>{{ label }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>
