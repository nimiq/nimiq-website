<script setup lang="ts">
const { title, description, link } = defineProps<{ title: string, description?: string, link?: { href: string, label?: string } }>()
const linkHref = computed(() => link?.href || 'https://wallet.nimiq.com')
const isExternal = computed(() => linkHref.value.startsWith('http'))
</script>

<template>
  <h1 class="whitespace-pre-line" style="--font-size-max:45.87">
    <slot name="title" mdc-unwrap="p">
      {{ title.replace(/\\L|\u2028/g, '\n') }}
    </slot>
  </h1>
  <p v-if="$slots.description || description" class="text-white/70 font-normal" style="--font-size-min:20;--font-size-max:22">
    <slot name="description" mdc-unwrap="p">
      {{ description }}
    </slot>
  </p>
  <div class="flex flex-wrap gap-x-32 gap-y-16 items-center f-mt-lg" style="--nq-font-size-min:18;--nq-font-size-max:22">
    <NuxtLink class="nq-arrow nq-pill-lg nq-pill-white" :to="linkHref" :external="isExternal" :target="isExternal ? '_blank' : undefined">
      {{ link?.label || 'Create a wallet' }}
    </NuxtLink>
  </div>
</template>
