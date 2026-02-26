<script setup lang="ts">
const { decimals = 0, min = 0, grouping = false } = defineProps<{ decimals?: number, min?: number, grouping?: boolean }>()

const amount = defineModel<number>()
const liveValue = ref(amount.value ? `${amount.value}` : '')
const lastEmittedValue = ref(0)

function addGrouping(str: string): string {
  if (!grouping)
    return str
  const [integer, decimal] = str.split('.')
  const grouped = integer!.replace(/\B(?=(\d{3})+(?!\d))/g, '\u2019')
  return decimal !== undefined ? `${grouped}.${decimal}` : grouped
}

const formattedValue = computed({
  get() {
    return addGrouping(liveValue.value)
  },
  set(value: string) {
    // Strip grouping characters before parsing
    value = value.replace(/[\u2019']/g, '')
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

const mirror = useTemplateRef<HTMLSpanElement>('mirror')
const { width } = useElementSize(mirror)
</script>

<template>
  <span class="inline-grid items-center">
    <span ref="mirror" class="invisible col-start-1 row-start-1 leading-none font-semibold whitespace-pre" v-bind="$attrs">{{ formattedValue || '0' }}</span>
    <input v-model="formattedValue" class="col-start-1 row-start-1 leading-none font-semibold min-w-0" type="text" inputmode="decimal" :style="{ width: `${width}px` }" v-bind="$attrs" @blur="onBlur">
  </span>
</template>
