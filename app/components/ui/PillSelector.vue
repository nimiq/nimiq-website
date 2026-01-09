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
  <div flex="~ align-center" p-2 rounded-full bg-neutral-200 w-max relative>
    <label v-for="(option, i) of options" :id="String(option)" ref="labels" :key="i" text="12 neutral-800 reka-active:neutral hocus:neutral-900" flex="~ items-center" lh-none px-8 py-4 rounded-full h-max cursor-pointer select-none transition-colors relative z-2 nq-label>
      <input v-model="model" type="radio" :value="option" sr-only @mousedown.prevent>
      {{ option }}
    </label>
    <div rounded-full bg-neutral-0 h-20 top-2 absolute z-1 :style="pillStyles" />
  </div>
</template>

<style scoped>
label:has(input:focus-visible) {
  --uno: 'ring-2 ring-blue ring-offset-3';
}
</style>
