<script setup lang="ts">
const { withEnv = false } = defineProps<{ withEnv?: boolean }>()

const { isProduction, name } = useRuntimeConfig().public.environment
const { enablePrismicSSR } = useRuntimeConfig().public
</script>

<template>
  <div v-if="!isProduction && (withEnv || enablePrismicSSR)" flex="~ items-center gap-16 wrap">
    <Tooltip v-if="withEnv" shrink-0>
      <template #trigger>
        <div ring="1.5 white" outline="1.5 ~ neutral-400" capitalize f-text-2xs nq-pill-lg nq-pill-tertiary>
          {{ name }}
        </div>
      </template>
      <template #content>
        <p>
          You are previewing the <strong>{{ name }}</strong> environment. This is a development-only message.
        </p>
        <p>
          This environment is not intended for production use and may contain incomplete or unstable features. <a href="https://github.com/nimiq/nimiq-website?tab=readme-ov-file#runtime-environments" target="_blank" nq-arrow>Learn more</a>
        </p>
      </template>
    </Tooltip>
    <div v-if="enablePrismicSSR" shrink-0 title="Prismic Server-Side Rendering is enabled. This will be hidden in production" ring="1.5 white" f-text-2xs nq-pill-lg nq-pill-blue>
      <div i-nimiq:server />
      Prismic SSR
    </div>
  </div>
</template>
