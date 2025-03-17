<script setup lang="ts">
defineProps<NimiqApp>()
</script>

<template>
  <div flex="~ wrap items-center gap-8" h-full rounded-6 bg-neutral-0 shadow f-pt-xs>
    <div w-320 rounded-4 stack>
      <NuxtImg v-if="screenshot" :src="screenshot!" h-auto max-h-full max-w-full rounded-4 object-cover />
    </div>
    <div flex="~ col gap-12" nq-prose-compact flex-1 p-24>
      <h3>{{ name }}</h3>
      <p nq-prose-compact f-pt-2xs>
        {{ description }}
      </p>
      <NuxtLink :href="link" nq-arrow nq-pill-blue f-mt-xl>
        Learn more
      </NuxtLink>
    </div>
  </div>
</template>
