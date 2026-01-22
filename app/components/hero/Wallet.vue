<script setup lang="ts">
const { title, description, link } = defineProps<{ title: string, description?: string, link?: { href: string, label?: string } }>()
const linkHref = computed(() => link?.href || 'https://wallet.nimiq.com')
const isExternal = computed(() => linkHref.value.startsWith('http'))
</script>

<template>
  <div class="flex-grow flex flex-col flex-justify-center flex-items-center px-6 text-center z-10">
    <h1>
      {{ title.replace(/\\L/g, '\n') }}
    </h1>
    <p v-if="description" class="text-white/70 font-400 whitespace-pre-line">
      {{ description }}
    </p>
    <div class="flex flex-wrap gap-x-8 gap-y-4 flex-items-center mt-6 md:mt-8" style="--nq-font-size-min:18;--nq-font-size-max:22">
      <NuxtLink class="nq-arrow nq-pill-lg nq-pill-blue dark:nq-pill-white" :to="linkHref" :external="isExternal" :target="isExternal ? '_blank' : undefined">
        {{ link?.label || 'Create a wallet' }}
      </NuxtLink>
    </div>
  </div>
</template>
