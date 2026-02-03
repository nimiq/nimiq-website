<script setup lang="ts">
interface LogosGridProps {
  label?: string
  items: { logo: string, link: string, alt?: string }[]
}

defineProps<LogosGridProps>()

function getLogoClass(link: string) {
  // Naka logo is smaller
  return link.includes('naka.com') ? 'max-h-24' : 'max-h-36'
}
</script>

<template>
  <ul class="flex flex-wrap gap-x-32 gap-y-16 justify-center items-center m-0 mb-[1.5px]">
    <li v-if="label">
      <p class="text-[14px]/[16.8px] text-neutral-700 mr-8 whitespace-nowrap nq-label">
        {{ label }}
      </p>
    </li>
    <li v-for="({ logo, link, alt }, i) in items" :key="i">
      <NuxtLink class="transition-opacity" :to="link" external target="_blank" :aria-label="alt || `Partner logo ${i + 1}`">
        <NuxtImg class="w-full opacity-40 hocus:opacity-80" :class="getLogoClass(link)" :src="logo" :alt="alt" />
      </NuxtLink>
    </li>
  </ul>
</template>
