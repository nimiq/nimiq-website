<script setup lang="ts">
const { title = 'Nimiq', subline = 'The World’s Most Accepted Crypto' } = defineProps<{ title: string, subline?: string }>()
</script>

<template>
  <div relative h-full flex="~ col justify-end">
    <img absolute inset-0 size-full object-cover src="/assets/og-images/og-background.jpg" :alt="title" width="1200" height="630">
    <div p-96>
      <h1 font-semibold text="neutral 64">
        {{ title }}
      </h1>
      <p text="neutral/60 40" mt-32>
        {{ subline }}
      </p>
    </div>
  </div>
</template>
