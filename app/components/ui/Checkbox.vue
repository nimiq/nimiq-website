<script setup lang="ts">
const { required = false } = defineProps<{ name?: string, required?: boolean }>()
const model = defineModel<boolean>({ required: true })
</script>

<template>
  <label class="flex gap-x-4 items-start group ml-[-8px] p-2 rounded-sm focus-within:bg-neutral-200">
    <input v-model="model" :name class="peer sr-only" type="checkbox" :required>
    <div class="mt-[3px] rounded-full shrink-0 size-[15px] transition-colors ring-1 ring-neutral-400 ring-offset-4 peer-checked:ring-blue peer-checked:bg-blue group-hover:ring-blue" />
    <p class="text-left text-sm lg:text-base text-neutral-700 font-normal max-w-[40ch]">
      <slot />
    </p>
  </label>
</template>
