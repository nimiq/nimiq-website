<script setup lang="ts">
const { fontSize: _fontSize = 4, placeholder = '0', maxFontSize = 4, decimals = 0 } = defineProps<{ fontSize?: number, maxFontSize?: number, placeholder?: string, decimals?: number }>()
const model = defineModel<number>()

const fullWidth = useTemplateRef('fullWidth')
const input = useTemplateRef('input')
const widthPlaceholder = useTemplateRef('widthPlaceholder')
const widthValue = useTemplateRef('widthValue')

const fontSize = ref(_fontSize)

const liveValue = ref('')
const lastEmittedValue = ref(0)
const width = ref(50)
const maxWidth = ref(0)
const valueInLuna = ref(0)

onMounted(() => {
  if (!maxFontSize || !fullWidth.value)
    return
  maxWidth.value = fullWidth.value.offsetWidth
})

const formattedValue = computed({
  get() {
    return liveValue.value
  },
  set(value: string) {
    liveValue.value = value

    if (!value) {
      liveValue.value = ''
      lastEmittedValue.value = 0
      valueInLuna.value = 0
      // context.emit(AmountInputEvent.MODELVALUE_UPDATE, valueInLuna.value)
      return
    }

    value = value.replace(/,/, '.')
    const regExp = new RegExp(`(\\d*)(\\.(\\d{0,${decimals}}))?`, 'g') // Backslashes are escaped
    const regExpResult = regExp.exec(value)!
    if (regExpResult[1] || regExpResult[2]) {
      liveValue.value = `${regExpResult[1] ? regExpResult[1] : '0'}${regExpResult[2] ? regExpResult[2] : ''}`
      valueInLuna.value = Number(
        `${regExpResult[1]}${(regExpResult[2] ? regExpResult[3]! : '').padEnd(decimals, '0')}`,
      )
    }
    else {
      liveValue.value = ''
      valueInLuna.value = 0
    }

    if (lastEmittedValue.value !== valueInLuna.value) {
      // context.emit(AmountInputEvent.MODELVALUE_UPDATE, valueInLuna.value)
      lastEmittedValue.value = valueInLuna.value
    }
  },
})

function updateValue(newValue: number) {
  if (newValue === valueInLuna.value)
    return
  lastEmittedValue.value = newValue || 0
  formattedValue.value = newValue ? (newValue / 10 ** decimals).toString() : ''
  updateWidth()
}

async function updateWidth() {
  await nextTick() // Await updated DOM
  if (!widthPlaceholder.value || !widthValue.value)
    return

  const placeholderWidth = widthPlaceholder.value.offsetWidth
  const valueWidth = widthValue.value.offsetWidth
  const fontSizeFactor = Math.min(1.0, Math.max(maxWidth.value / valueWidth, 1 / maxFontSize))

  fontSize.value = fontSizeFactor * maxFontSize
  width.value = (formattedValue.value ? (fontSizeFactor === 1 ? valueWidth : maxWidth.value) : placeholderWidth)
}

watch(formattedValue, updateWidth)
watch(model, newValue => newValue && updateValue(newValue), { immediate: true })
</script>

<template>
  <div text="xl blue focus-within:blue-600" flex="~ items-baseline justify-center" w-full transition-colors duration-200>
    <div ref="fullWidth" relative h-full max-w-full flex of-hidden>
      <span ref="widthPlaceholder" class="width-finder width-placeholder">{{ placeholder }}</span>
      <div v-if="maxFontSize" w-1000 :class="{ 'width-finder': maxWidth > 0 }">
        Width
      </div>
      <span ref="widthValue" class="width-finder">{{ formattedValue || '' }}</span>
      <input
        ref="input" v-model="formattedValue" type="text"
        inputmode="decimal"
        max-w-full px-4 text-center nq-input-box
        :placeholder="placeholder"
        :style="{ width: `${width}px`, fontSize: `${fontSize}rem` }"
      >
      <!-- @paste="$emit(AmountInputEvent.PASTE, $event)" -->
    </div>
    <span ml-8 font-bold lh-none text-lg>NIM</span>
  </div>
</template>

<style scoped>
.width-finder {
  --uno: 'absolute text-transparent pointer-events-none select-none p-10 whitespace-pre ';
}

input {
  transition:
    width 50ms ease-out,
    color 0.2s var(--nq-ease);
}
</style>
