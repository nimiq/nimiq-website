<script setup lang="ts">
interface LogosGridProps {
  label?: string
  items: { logo: string, link: string, alt?: string }[]
}

defineProps<LogosGridProps>()
</script>

<template>
  <ul class="flex flex-wrap gap-x-8 gap-y-4 flex-justify-center flex-items-center m-0 mb-[1.5px] py-0">
    <li v-if="label">
      <p class="text-14/16.8 text-neutral-700 mr-2 whitespace-nowrap nq-label">
        {{ label }}
      </p>
    </li>
    <li v-for="({ logo, link, alt }, i) in items" :key="i">
      <NuxtLink class="transition-opacity" :to="link" external target="_blank" :aria-label="alt || `Partner logo ${i + 1}`">
        <NuxtImg class="max-h-9 w-full op-40 op-hocus:80" :src="logo" :alt="alt" />
      </NuxtLink>
    </li>
  </ul>
</template>
