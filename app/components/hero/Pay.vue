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
    <p v-if="description" class="font-400 dark:text-neutral-900">
      {{ description }}
    </p>
    <ul v-if="highlightsItems.length > 0" class="mt-12 md:mt-14 lg:mt-16 flex md:justify-center items-center flex-wrap gap-x-16 gap-y-4" :aria-label="`Highlights of ${title}`" role="list">
      <li v-for="(highlight, i) in highlightsItems" :key="i" class="contents">
        <div v-if="i > 0" class="rounded-full bg-neutral-500 size-[6px]" />
        <span class="text-20 md:text-22 text-green font-semibold">{{ highlight }}</span>
      </li>
    </ul>
    <ul v-if="appStore || playStore" class="mt-48 md:mt-56 lg:mt-64 flex flex-wrap gap-32 lg:gap-40 justify-center">
      <li v-if="appStore">
        <NuxtLink :to="appStore" external target="_blank">
          <NuxtImg class="h-[clamp(36px,calc(36px+(52-36)*((100vw-375px)/(1440-375))),52px)]" src="/assets/images/apple-store-badge.png" alt="Get it on Apple Store" />
        </NuxtLink>
      </li>
      <li v-if="playStore">
        <NuxtLink :to="playStore" external target="_blank">
          <NuxtImg class="h-[clamp(36px,calc(36px+(52-36)*((100vw-375px)/(1440-375))),52px)]" src="/assets/images/google-play-badge.svg" alt="Get it on Google Play" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
