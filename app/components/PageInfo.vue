<script setup lang="ts">
const { withEnv = false, draft = false } = defineProps<{ withEnv?: boolean, draft?: boolean }>()

const { isProduction, name } = useRuntimeConfig().public.environment
</script>

<template>
  <div v-if="!isProduction && (draft || withEnv)" flex="~ items-center gap-16">
    <Tooltip v-if="withEnv">
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
    <div v-if="draft" title="This item is a draft in the CMS. This will be hidden in production" ring="1.5 white" f-text-2xs nq-pill-lg nq-pill-orange>
      <div i-nimiq:locked-lock />
      Draft
    </div>
  </div>
</template>
