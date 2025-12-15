<script setup lang="ts">
const { decimals = 0, min = 0 } = defineProps<{ decimals?: number, min?: number }>()

const amount = defineModel<number>()
const liveValue = ref(amount.value ? `${amount.value}` : '')
const lastEmittedValue = ref(0)

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
      return
    }

    value = value.replace(/,/, '.')
    const regExp = new RegExp(`(\\d*)(\\.(\\d{0,${decimals}}))?`, 'g')
    const regExpResult = regExp.exec(value)!
    if (regExpResult[1] || regExpResult[2]) {
      liveValue.value = `${regExpResult[1] ? regExpResult[1] : '0'}${regExpResult[2] ? regExpResult[2] : ''}`
      amount.value = Number(`${regExpResult[1]}${(regExpResult[2] ? regExpResult[3]! : '').padEnd(decimals, '0')}`)
    }
    else {
      if (amount.value === undefined || amount.value === null) {
        liveValue.value = ''
        amount.value = min
      }
    }

    if (lastEmittedValue.value !== amount.value) {
      lastEmittedValue.value = amount.value
    }
  },
})

function updateValue(newValue?: number) {
  if (newValue === undefined || newValue === null)
    return
  if (newValue === amount.value)
    return

  lastEmittedValue.value = newValue
  formattedValue.value = newValue > 0 ? (newValue / 10 ** decimals).toString() : ''
}

watch(amount, newValue => updateValue(newValue), { immediate: true })

function onBlur() {
  if (!amount.value && min > 0)
    updateValue(min)
}

onMounted(() => {
  if (!amount.value)
    onBlur()
})
</script>

<template>
  <input v-model="formattedValue" type="text" style="field-sizing: content" focus-visible:outline="1 solid blue" lh-none font-semibold px-12 rounded-2 bg-transparent nq-input-box inputmode="decimal" v-bind="$attrs" @blur="onBlur">
</template>
