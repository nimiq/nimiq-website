<script setup lang="ts">
const { title, description, link } = defineProps<{ title: string, description?: string, link?: { href: string, label?: string } }>()
const linkHref = computed(() => link?.href || 'https://wallet.nimiq.com')
const isExternal = computed(() => linkHref.value.startsWith('http'))
</script>

<template>
  <div flex="grow ~ col justify-center items-center" px-24 text-center z-10>
    <h1>
      {{ title.replace(/\\L/g, '\n') }}
    </h1>
    <p v-if="description" text="white/70" font-400 whitespace-pre-line>
      {{ description }}
    </p>
    <div flex="~ wrap gap-x-32 gap-y-16 items-center" f-mt-lg style="--nq-font-size-min:18;--nq-font-size-max:22">
      <NuxtLink :to="linkHref" :external="isExternal" nq-arrow nq-pill-lg nq-pill-blue dark:nq-pill-white :target="isExternal ? '_blank' : undefined">
        {{ link?.label || 'Create a wallet' }}
      </NuxtLink>
    </div>
  </div>
</template>
