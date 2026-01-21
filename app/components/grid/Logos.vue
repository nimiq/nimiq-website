<script setup lang="ts">
interface LogosGridProps {
  label?: string
  items: { logo: string, link: string, alt?: string }[]
}

defineProps<LogosGridProps>()
</script>

<template>
  <ul class="flex flex-wrap flex-gap-x-32 flex-gap-y-16 flex-justify-center flex-items-center m-0 mb-1.5 py-0">
    <li v-if="label">
      <p class="text-14/16.8 text-neutral-700 mr-8 whitespace-nowrap nq-label">
        {{ label }}
      </p>
    </li>
    <li v-for="({ logo, link, alt }, i) in items" :key="i">
      <NuxtLink class="transition-opacity" :to="link" external target="_blank" :aria-label="alt || `Partner logo ${i + 1}`">
        <NuxtImg class="max-h-36 w-full op-40 op-hocus:80" :src="logo" :alt="alt" />
      </NuxtLink>
    </li>
  </ul>
</template>
