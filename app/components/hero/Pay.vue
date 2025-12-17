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
    <h1 nq-heading>
      {{ title }}
    </h1>
    <p v-if="description" text-neutral-700 font-400 mx-auto max-w-prose f-mt-xs dark:text-neutral-900>
      {{ description }}
    </p>
    <ul v-if="highlightsItems.length > 0" :aria-label="`Highlights of ${title}`" role="list" f-mt-xs flex="~ md:justify-center items-center wrap gap-x-16 gap-y-4">
      <li v-for="(highlight, i) in highlightsItems" :key="i" contents>
        <div v-if="i > 0" rounded-full bg-neutral-500 size-6 />
        <span text="f-xl green" font-semibold>{{ highlight }}</span>
      </li>
    </ul>
    <ul v-if="appStore || playStore" f-mt-xl flex="~ wrap gap-32 lg:gap-40 justify-center">
      <li v-if="appStore">
        <NuxtLink :to="appStore" external target="_blank">
          <NuxtImg src="/assets/images/apple-store-badge.png" f-h="36/52" alt="Get it on Apple Store" />
        </NuxtLink>
      </li>
      <li v-if="playStore">
        <NuxtLink :to="playStore" external target="_blank">
          <NuxtImg src="/assets/images/google-play-badge.svg" f-h="36/52" alt="Get it on Google Play" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
