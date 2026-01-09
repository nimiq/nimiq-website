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
  if (props.linkHref) return { href: props.linkHref, label: props.linkLabel }
  // link can be an object {href, label} or just a string URL
  if (typeof props.link === 'object') return props.link
  if (typeof props.link === 'string') return { href: props.link, label: props.linkLabel }
  return undefined
})
const highlightsItems = computed(() => props.items?.map(i => i.highlight?.trim()).filter(Boolean) || [])
const isExternal = computed(() => displayLink.value?.href?.startsWith('http'))
</script>

<template>
  <div>
    <h1 nq-heading>
      {{ displayTitle }}
    </h1>
    <p v-if="displayDescription" text-neutral-700 font-400 mx-auto max-w-prose f-mt-xs dark:text-neutral-900>
      {{ displayDescription }}
    </p>
    <ul v-if="highlightsItems.length > 0" :aria-label="`Highlights of ${displayTitle}`" role="list" f-mt-xs flex="~ md:justify-center items-center wrap gap-x-16 gap-y-4">
      <li v-for="(highlight, i) in highlightsItems" :key="i" contents>
        <div v-if="i > 0" rounded-full bg-neutral-500 size-6 />
        <span text="f-xl green" font-semibold>{{ highlight }}</span>
      </li>
    </ul>
    <div v-if="displayLink" flex="~ wrap gap-x-32 gap-y-16 items-center justify-center" f-mt-lg style="--nq-font-size-min:18;--nq-font-size-max:22">
      <NuxtLink :to="displayLink.href" :external="isExternal" nq-arrow nq-pill-lg nq-pill-blue :target="isExternal ? '_blank' : undefined">
        {{ displayLink.label || 'Learn more' }}
      </NuxtLink>
    </div>
  </div>
</template>
