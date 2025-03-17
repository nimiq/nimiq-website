<script setup lang="ts">
const { link } = defineProps<{ name: string, description: string, screenshot?: string, link: string }>()

// If url is same as current page, resolve it to avoid page reload
const url = new URL(link)
const resolvedUrl = url.host === useRequestURL().host ? url.pathname : link
</script>

<template>
  <div flex="~ wrap items-center gap-8" h-full rounded-6 bg-neutral-0 shadow f-p-xs>
    <NuxtImg v-if="screenshot" :src="screenshot!" h-auto max-h-full max-w-full w-320 rounded-4 rounded-8 object-cover />
    <div flex="~ col gap-12" flex-1 p-24>
      <h3>{{ name }}</h3>
      <p class="nq-raw" mt-0 text-neutral-800 f-pt-2xs>
        {{ description }}
      </p>
      <NuxtLink :to="resolvedUrl" mx-0 nq-arrow nq-pill-lg nq-pill-blue f-mt-md>
        Learn more
      </NuxtLink>
    </div>
  </div>
</template>
