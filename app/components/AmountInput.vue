<script setup lang="ts">
const { decimals = 0 } = defineProps<{ decimals?: number }>()

const amount = defineModel<number>()
const liveValue = ref('')
const lastEmittedValue = ref(0)

// Code from https://github.com/nimiq/vue3-components/blob/8d54857370cffc6c5fdb7b75b12b0e2eacbc8f04/src/components/AmountInput/AmountInput.vue#L96
const formattedValue = computed({
  get() {
    return liveValue.value
  },
  set(value: string) {
    liveValue.value = value

    if (!value) {
      liveValue.value = ''
      lastEmittedValue.value = 0
      amount.value = 0
      // context.emit(AmountInputEvent.MODELVALUE_UPDATE, valueInLuna.value)
      return
    }

    value = value.replace(/,/, '.')
    const regExp = new RegExp(`(\\d*)(\\.(\\d{0,${decimals}}))?`, 'g') // Backslashes are escaped
    const regExpResult = regExp.exec(value)!
    if (regExpResult[1] || regExpResult[2]) {
      liveValue.value = `${regExpResult[1] ? regExpResult[1] : '0'}${regExpResult[2] ? regExpResult[2] : ''}`
      amount.value = Number(`${regExpResult[1]}${(regExpResult[2] ? regExpResult[3]! : '').padEnd(decimals, '0')}`)
    }
    else {
      liveValue.value = ''
      amount.value = 0
    }

    if (lastEmittedValue.value !== amount.value) {
      lastEmittedValue.value = amount.value
    }
  },
})

function updateValue(newValue?: number) {
  if (!newValue)
    return
  if (newValue === amount.value)
    return
  lastEmittedValue.value = newValue || 0
  formattedValue.value = newValue ? (newValue / 10 ** decimals).toString() : ''
}

watch(amount, newValue => updateValue(newValue), { immediate: true })
</script>

<template>
  <input v-model="formattedValue" bg-transparent type="text" style="field-sizing: content" px-2 font-semibold lh-none text-xl inputmode="decimal">
</template>
