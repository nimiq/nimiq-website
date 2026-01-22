<script setup lang="ts">
const { withEnv = false } = defineProps<{ withEnv?: boolean }>()

const { isProduction, name } = useRuntimeConfig().public.environment
const { enablePrismicSSR } = useRuntimeConfig().public
</script>

<template>
  <div v-if="!isProduction && (withEnv || enablePrismicSSR)" class="flex flex-items-center gap-4 flex-wrap">
    <UiTooltip v-if="withEnv" class="shrink-0">
      <template #trigger>
        <div class="ring-1.5 ring-white outline outline-1.5 outline-neutral-400 capitalize text-[10px] md:text-[11px] nq-pill-lg nq-pill-tertiary">
          {{ name }}
        </div>
      </template>
      <template #content>
        <p>
          You are previewing the <strong>{{ name }}</strong> environment. This is a development-only message.
        </p>
        <p>
          This environment is not intended for production use and may contain incomplete or unstable features. <NuxtLink class="nq-arrow" to="https://github.com/nimiq/nimiq-website?tab=readme-ov-file#runtime-environments" external target="_blank">
            Learn more
          </NuxtLink>
        </p>
      </template>
    </UiTooltip>
    <div v-if="enablePrismicSSR" class="shrink-0 ring-1.5 ring-white text-[10px] md:text-[11px] nq-pill-lg nq-pill-blue" title="Prismic Server-Side Rendering is enabled. This will be hidden in production">
      <Icon name="nimiq:server" />
      Prismic SSR
    </div>
  </div>
</template>
