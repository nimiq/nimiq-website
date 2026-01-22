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
  <div :id class="flex gap-0.5 flex-items-center group rounded-1 bg-neutral-200 w-max relative">
    <div ref="pill" class="group-focus-visible:ring-1.5 blue offset-1 offset-white rounded-1 bg-neutral ease-out inset-y-0 absolute transition-[left,width,background-color]" :style="pillStyles" />
    <label v-for="(option, i) in options" :key="i" class="z-1" :data-state="isSelected(option) ? 'active' : undefined">
      <input v-model="model" class="sr-only" type="radio" :value="option">
      <div class="text-12 text-neutral-800 text-reka-active:neutral-0 lh-none tracking-0.8 px-2 py-1 cursor-pointer transition-colors relative nq-label">
        <slot name="label" :option>
          {{ getLabel(option) }}
        </slot>
      </div>
    </label>
  </div>
</template>
