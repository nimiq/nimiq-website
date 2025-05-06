<script setup lang="ts">
const { withEnv = false, draft = false } = defineProps<{ withEnv?: boolean, draft?: boolean }>()

const { isProduction, name } = useRuntimeConfig().public.environment
</script>

<template>
  <div v-if="!isProduction && (draft || withEnv)" flex="~ items-center">
    <Tooltip v-if="withEnv">
      <template #trigger>
        <div ring="1.5 white" nq-pill-lg nq-pill-orange f-text-2xs>
          Deployed {{ name }}
        </div>
      </template>
    </Tooltip>
    <div v-if="draft" title="This item is a draft in the CMS. This will be hidden in production" ring="1.5 white" nq-pill-lg nq-pill-orange>
      <div i-nimiq:locked-lock />
      Draft
    </div>
  </div>
</template>
