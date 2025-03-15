<script setup lang="ts">
const { required = false } = defineProps<{ name?: string, required?: boolean }>()
const model = defineModel<boolean>({ required: true })
</script>

<template>
  <label flex="~ gap-x-16 items-start" group ml--8 p-8 rounded-2 focus-within:bg-neutral-200>
    <input v-model="model" peer :name type="checkbox" :required sr-only>
    <div ring=" 1 neutral-400 offset-4 peer-checked:blue-600 group-hover:blue-600" mt-3 rounded-full shrink-0 size-15 transition-color peer-checked:bg-blue />
    <p text="left 14 lg:16 neutral-700" font-normal max-w-40ch>
      <slot />
    </p>
  </label>
</template>
