<script setup lang="ts" generic="T">
import { onMounted, ref, watch } from 'vue'

defineProps<{
  options: T[]
}>()

const model = defineModel<T>()
const randomName = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 10)

const loaded = ref(false)

const id = useId()

onMounted(() => {
  setPill()
  setTimeout(() => loaded.value = true, 300)
})
watch(model, setPill, { immediate: true })

const pillStyles = ref({ left: '0px', width: '0px' })
function setPill() {
  const selectedLabel = globalThis.document?.querySelector(`#${randomName}-${model.value}`)?.parentElement as HTMLLabelElement
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
      v-for="(option, i) of options" :key="i"
      :class="{ 'text-darkblue': model === i, 'text-neutral-800': model !== i }"
      relative z-1 z-2 cursor-pointer select-none rounded-full px-12 text-12 transition-colors nq-label hover:text-neutral-900 flex="~ items-center"
    >
      <input :id v-model="model" type="radio" :value="option" sr-only :name="randomName" @mousedown.prevent>
      {{ option }}
    </label>
    <div absolute top-2 z-1 h-27 rounded-full bg-white :style="{ ...pillStyles, transition: loaded ? 'left 300ms, width 200ms' : '' }" />
  </div>
</template>

<style scoped>
label:has(input:focus-visible) {
  --uno: 'ring-2 ring-blue ring-offset-3';
}
</style>
