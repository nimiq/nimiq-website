<script setup lang="ts">
const { title, description, link, items } = defineProps<{
  title: string
  description?: string
  link?: { href: string, label?: string }
  items?: { highlight?: string }[]
}>()

const highlightsItems = computed(() => items?.map(i => i.highlight?.trim()).filter(Boolean) || [])
const isExternal = computed(() => link?.href?.startsWith('http'))
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
    <div v-if="link" flex="~ wrap gap-x-32 gap-y-16 items-center justify-center" f-mt-lg style="--nq-font-size-min:18;--nq-font-size-max:22">
      <NuxtLink :to="link.href" :external="isExternal" nq-arrow nq-pill-lg nq-pill-blue :target="isExternal ? '_blank' : undefined">
        {{ link.label || 'Learn more' }}
      </NuxtLink>
    </div>
  </div>
</template>
