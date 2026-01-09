<script setup lang="ts">
interface LogosGridProps {
  label?: string
  items: { logo: string, link: string, alt?: string }[]
}

defineProps<LogosGridProps>()
</script>

<template>
  <ul flex="~ wrap gap-x-32 gap-y-16 justify-center items-center" m-0 mb-1.5 py-0>
    <li v-if="label">
      <p text="14/16.8 neutral-700" mr-8 whitespace-nowrap nq-label>
        {{ label }}
      </p>
    </li>
    <li v-for="({ logo, link, alt }, i) in items" :key="i">
      <NuxtLink :to="link" external target="_blank" transition-opacity :aria-label="alt || `Partner logo ${i + 1}`">
        <NuxtImg :src="logo" :alt="alt" max-h-36 w-full op="40 hocus:80" />
      </NuxtLink>
    </li>
  </ul>
</template>
