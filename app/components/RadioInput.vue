<script setup lang="ts" generic="T">
import type { CSSProperties } from 'vue'

const { options, getLabel = item => item, isSelected: _isSelected } = defineProps<{ options: T[], isSelected?: (item: T) => boolean, getLabel?: (item: T) => string }>()

const model = defineModel<T>()
const isSelected = _isSelected || ((item: T) => item === model.value)

const pill = useTemplateRef('pill')
const pillStyles = ref<CSSProperties>()

const id = useId()

async function updateValues() {
  await nextTick()
  if (!pill?.value)
    return
  const parent = pill.value.parentElement!.getBoundingClientRect()
  const { width, left } = document.querySelector(`#${id} [data-state="active"]`)?.getBoundingClientRect() || { width: 0, left: 0 }
  pillStyles.value = { width: `${width}px`, left: `${left - parent.left}px` }
}

watch(model, updateValues)
onMounted(updateValues)
</script>

<template>
  <div :id flex="~ gap-2 items-center" group relative w-max rounded-4 bg-neutral-200>
    <div ref="pill" absolute inset-y-0 rounded-4 bg-neutral group-has-focus-visible:ring="1.5 blue offset-1 offset-white" :style="pillStyles" ease-out transition="[left,width,background-color]" />
    <label v-for="(option, i) in options" :key="i" z-1 :data-state="isSelected(option) ? 'active' : undefined">
      <input v-model="model" type="radio" :value="option" sr-only>
      <div text="12 neutral-800 data-active:neutral-0" relative cursor-pointer px-8 py-4 lh-none tracking-0.8 transition-colors nq-label>
        <slot name="label" :option>
          {{ getLabel(option) }}
        </slot>
      </div>
    </label>
  </div>
</template>
