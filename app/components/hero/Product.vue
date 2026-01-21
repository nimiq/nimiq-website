<script setup lang="ts">
const props = defineProps<{
  title?: string
  headline?: string
  description?: string
  subline?: string
  link?: string | { href: string, label?: string }
  linkHref?: string
  linkLabel?: string
  items?: { highlight?: string }[]
}>()

const displayTitle = computed(() => props.title || props.headline || '')
const displayDescription = computed(() => props.description || props.subline)
const displayLink = computed(() => {
  // Prefer linkHref/linkLabel if provided (explicit naming)
  if (props.linkHref)
    return { href: props.linkHref, label: props.linkLabel }
  // link can be an object {href, label} or just a string URL
  if (typeof props.link === 'object')
    return props.link
  if (typeof props.link === 'string')
    return { href: props.link, label: props.linkLabel }
  return undefined
})
const highlightsItems = computed(() => props.items?.map(i => i.highlight?.trim()).filter(Boolean) || [])
const isExternal = computed(() => displayLink.value?.href?.startsWith('http'))
</script>

<template>
  <div>
    <h1 class="nq-heading">
      {{ displayTitle }}
    </h1>
    <p v-if="displayDescription" class="text-neutral-700 font-400 mx-auto max-w-prose f-mt-xs dark:text-neutral-900">
      {{ displayDescription }}
    </p>
    <ul v-if="highlightsItems.length > 0" class="f-mt-xs flex flex-md:justify-center flex-items-center flex-wrap flex-gap-x-16 flex-gap-y-4" :aria-label="`Highlights of ${displayTitle}`" role="list">
      <li v-for="(highlight, i) in highlightsItems" :key="i" class="contents">
        <div v-if="i > 0" class="rounded-full bg-neutral-500 size-6" />
        <span class="text-f-xl text-green font-semibold">{{ highlight }}</span>
      </li>
    </ul>
    <div v-if="displayLink" class="flex flex-wrap flex-gap-x-32 flex-gap-y-16 flex-items-center flex-justify-center f-mt-lg" style="--nq-font-size-min:18;--nq-font-size-max:22">
      <NuxtLink class="nq-arrow nq-pill-lg nq-pill-blue" :to="displayLink.href" :external="isExternal" :target="isExternal ? '_blank' : undefined">
        {{ displayLink.label || 'Learn more' }}
      </NuxtLink>
    </div>
  </div>
</template>
