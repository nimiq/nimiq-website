<script setup lang="ts" generic="T">
import type { CSSProperties } from 'vue'
import { nextTick, ref, watch } from 'vue'

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
  <div flex="~ align-center" relative w-max rounded-full bg-neutral-200 p-2>
    <!-- {{ pillStyles }} -->
    <label
      v-for="(option, i) of options"
      :id="String(option)" ref="labels" :key="i"
      text="12 neutral-800 data-active:neutral hocus:neutral-900" flex="~ items-center" relative z-2 h-max cursor-pointer select-none rounded-full px-8 py-4 lh-none transition-colors nq-label
    >
      <input v-model="model" type="radio" :value="option" sr-only @mousedown.prevent>
      {{ option }}
    </label>
    <div absolute top-2 z-1 h-20 rounded-full bg-neutral-0 :style="pillStyles" />
  </div>
</template>

<style scoped>
label:has(input:focus-visible) {
  --uno: 'ring-2 ring-blue ring-offset-3';
}
</style>
