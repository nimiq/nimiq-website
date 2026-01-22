<script setup lang="ts" generic="T">
import type { CSSProperties } from 'vue'

defineProps<{ options: T[] }>()

const model = defineModel<T>()
const isMounted = useMounted()

const labels = useTemplateRef('labels')
const pillStyles = ref<CSSProperties>()

watch(() => model.value, async () => {
  await nextTick()
  const activeLabel = labels.value?.find(label => label.id === String(model.value))
  labels.value?.forEach(label => label.dataset.state = activeLabel && label.isEqualNode(activeLabel) ? 'active' : undefined)
  if (!activeLabel)
    return
  pillStyles.value = {
    left: `${activeLabel.offsetLeft}px`,
    width: `${activeLabel.offsetWidth}px`,
    transition: isMounted ? 'left 300ms, width 200ms' : 'none',
  }
}, { immediate: true })
</script>

<template>
  <div class="flex flex-align-center p-0.5 rounded-full bg-neutral-200 w-max relative">
    <label v-for="(option, i) of options" :id="String(option)" ref="labels" :key="i" class="text-12 text-neutral-800 text-reka-active:neutral text-hocus:neutral-900 flex flex-items-center lh-none px-2 py-1 rounded-full h-max cursor-pointer select-none transition-colors relative z-2 nq-label">
      <input v-model="model" class="sr-only" type="radio" :value="option" @mousedown.prevent>
      {{ option }}
    </label>
    <div class="rounded-full bg-neutral-0 h-5 top-0.5 absolute z-1" :style="pillStyles" />
  </div>
</template>

<style scoped>
label:has(input:focus-visible) {
  --uno: 'ring-2 ring-blue ring-offset-3';
}
</style>
