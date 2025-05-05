<script setup lang="ts" generic="T">
import { onMounted, ref, watch } from 'vue'

defineProps<{
  options: T[]
}>()

const model = defineModel<T>()

const loaded = ref(false)

const id = useId()

onMounted(() => {
  setPill()
  setTimeout(() => loaded.value = true, 300)
})
watch(model, setPill, { immediate: true })

const pillStyles = ref({ left: '0px', width: '0px' })
function setPill() {
  if (import.meta.server)
    return
  // Use String() to ensure proper comparison for all value types
  const selectedLabel = globalThis.document?.querySelector(`#${id}-${String(model.value)}`)?.parentElement as HTMLLabelElement
  if (!selectedLabel)
    return
  globalThis.window?.requestAnimationFrame(() => {
    pillStyles.value = { left: `${selectedLabel.offsetLeft}px`, width: `${selectedLabel.offsetWidth}px` }
  })
}
</script>

<template>
  <div flex="~ align-center" relative w-max rounded-full bg-neutral-200 p-2>
    <label
      v-for="(option, i) of options"
      :key="i" :data-state="String(model) === String(option) ? 'active' : undefined"
      text="12 neutral-800 data-active:neutral hocus:neutral-900" flex="~ items-center" relative z-2 h-max cursor-pointer select-none rounded-full px-8 py-4 lh-none transition-colors nq-label
    >
      <input :id="`${id}-${String(option)}`" v-model="model" type="radio" :value="option" sr-only @mousedown.prevent>
      {{ option }}
    </label>
    <div absolute top-2 z-1 h-20 rounded-full bg-neutral-0 :style="{ ...pillStyles, transition: loaded ? 'left 300ms, width 200ms' : '' }" />
  </div>
</template>

<style scoped>
label:has(input:focus-visible) {
  --uno: 'ring-2 ring-blue ring-offset-3';
}
</style>
