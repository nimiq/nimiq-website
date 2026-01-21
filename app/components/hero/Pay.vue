<script setup lang="ts">
const { title, description, appStore, playStore, items } = defineProps<{
  title: string
  description?: string
  appStore?: string
  playStore?: string
  items?: { highlight?: string }[]
}>()

const highlightsItems = computed(() => items?.map(i => i.highlight?.trim()).filter(Boolean) || [])
</script>

<template>
  <div>
    <h1 class="nq-heading">
      {{ title }}
    </h1>
    <p v-if="description" class="text-neutral-700 font-400 mx-auto max-w-prose f-mt-xs dark:text-neutral-900">
      {{ description }}
    </p>
    <ul v-if="highlightsItems.length > 0" class="f-mt-xs flex flex-md:justify-center flex-items-center flex-wrap gap-x-4 gap-y-1" :aria-label="`Highlights of ${title}`" role="list">
      <li v-for="(highlight, i) in highlightsItems" :key="i" class="contents">
        <div v-if="i > 0" class="rounded-full bg-neutral-500 size-1.5" />
        <span class="text-f-xl text-green font-semibold">{{ highlight }}</span>
      </li>
    </ul>
    <ul v-if="appStore || playStore" class="f-mt-xl flex flex-wrap gap-8 flex-lg:gap-10 flex-justify-center">
      <li v-if="appStore">
        <NuxtLink :to="appStore" external target="_blank">
          <NuxtImg class="f-h-36/52" src="/assets/images/apple-store-badge.png" alt="Get it on Apple Store" />
        </NuxtLink>
      </li>
      <li v-if="playStore">
        <NuxtLink :to="playStore" external target="_blank">
          <NuxtImg class="f-h-36/52" src="/assets/images/google-play-badge.svg" alt="Get it on Google Play" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
