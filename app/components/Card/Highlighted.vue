<script setup lang="ts">
const { link } = defineProps<{ name: string, description: string, screenshot?: string, link: string }>()

// If url is same as current page, resolve it to avoid page reload
const url = new URL(link)
const resolvedUrl = url.host === useRequestURL().host ? url.pathname : link
</script>

<template>
  <div flex="~ wrap items-center gap-8" rounded-6 bg-neutral-0 h-full shadow f-p-xs>
    <NuxtImg v-if="screenshot" :src="screenshot!" rounded-4 rounded-8 h-auto max-h="445 md:full" max-w-full w="full md:320" object-cover />
    <div flex="~ col gap-12" p-24 flex-1>
      <h3>{{ name }}</h3>
      <p class="nq-raw" text-neutral-800 mt-0 f-pt-2xs>
        {{ description }}
      </p>
      <NuxtLink :to="resolvedUrl" mx-0 f-mt-md nq-arrow nq-pill-lg nq-pill-blue>
        Learn more
      </NuxtLink>
    </div>
  </div>
</template>
