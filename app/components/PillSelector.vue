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
  const selectedLabel = globalThis.document?.querySelector(`#${id}-${model.value}`)?.parentElement as HTMLLabelElement
  if (!selectedLabel)
    return
  globalThis.window?.requestAnimationFrame(() => {
    pillStyles.value = { left: `${selectedLabel.offsetLeft}px`, width: `${selectedLabel.offsetWidth}px` }
  })
}
</script>

<template>
  <div flex="~ align-center" relative h-32 w-max rounded-full bg-neutral-200 p-4>
    <label
      v-for="(option, i) of options"
      :key="i" :data-state="model === option ? 'active' : undefined"
      text="12 neutral-800 data-active:neutral-0 hocus:neutral-900" relative z-1 z-2 cursor-pointer select-none rounded-full px-12 transition-colors nq-label flex="~ items-center"
    >
      <input :id="`${id}-${option}`" v-model="model" type="radio" :value="option" sr-only @mousedown.prevent>
      {{ option }}
    </label>
    <div absolute top-2 z-1 h-27 rounded-full bg-neutral :style="{ ...pillStyles, transition: loaded ? 'left 300ms, width 200ms' : '' }" />
  </div>
</template>

<style scoped>
label:has(input:focus-visible) {
  --uno: 'ring-2 ring-blue ring-offset-3';
}
</style>
