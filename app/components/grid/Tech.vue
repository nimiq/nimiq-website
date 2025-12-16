<script setup lang="ts">
interface GridItem { headline: string, image?: string, subline?: string, icon?: string }
defineProps<{ headline: string, subline?: string, items: GridItem[] }>()
</script>

<template>
  <div>
    <!-- Headline -->
    <div flex="~ col md:items-center">
      <h2 nq-heading break-keep md:text-center>
        {{ headline }}
      </h2>
      <p v-if="subline" text-neutral-600 md:text-center>
        {{ subline }}
      </p>
    </div>

    <!-- Grid -->
    <ul flex="~ col lg:row gap-y-24 lg:items-center" w-full f-mt-xl>
      <li v-for="(item, i) in items" :key="i" py-24 flex-1 border="b-1 lg:b-0 lg:r-1 last:0 white/15 solid" md:mx-auto md:w-max>
        <NuxtImg v-if="item.image" :src="item.image" rounded-8 h-80 object-contain md:mx-auto />
        <Icon v-else-if="item.icon" :name="item.icon" class="h-80 md:mx-auto" />
        <h3 text="green md:center f-xl" font-bold max-w-20ch f-mt-xs lg:mx-auto>
          {{ item.headline }}
        </h3>
        <p v-if="item.subline" text="neutral-700 md:center" max-w-20ch f-mt-xs lg:mx-auto>
          {{ item.subline }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pill-gradient {
  background: radial-gradient(
    78.95% 73.1% at 12.5% 14.72%,
    var(--c) 0%,
    color-mix(in oklch, var(--c) 30%, transparent) 100%
  );
}
</style>
