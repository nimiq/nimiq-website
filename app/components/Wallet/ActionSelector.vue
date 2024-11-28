<script setup lang="ts">
const emit = defineEmits(['state'])

const state = ref<'idle' | 'stake' | 'buy' | 'swap'>('idle')

// @unocss-include
const states = [
  { label: 'Stake', value: 'stake', icon: 'i-nimiq:leaf-2-filled', color: `green` },
  { label: 'Buy', value: 'buy', icon: 'i-nimiq:floating-ball', color: 'blue' },
  { label: 'Swap', value: 'swap', icon: 'i-nimiq:exchange-chevron', color: 'purple' },
  // { label: undefined, icon: 'i-nimiq:redo', value: 'idle' },
] as const

const pill = useTemplateRef('pill')
watchEffect(() => {
  if (!pill.value)
    return
  if (state.value === 'idle') {
    pill.value.style.transform = 'scale(0.75)'
    pill.value.style.opacity = '0'
  }
  else {
    const parent = pill.value.parentElement!.getBoundingClientRect()
    const { width, left } = document.querySelector(`button[data-state="active"]`)?.getBoundingClientRect() || { width: 0, left: 0 }
    pill.value.style.width = `${width}px`
    pill.value.style.left = `${left - parent.left}px`
    pill.value.style.transform = 'scale(1)'
    pill.value.style.opacity = '1'
  }
  emit('state', state.value)
}, { flush: 'post' })
</script>

<template>
  <ul flex="~ gap-4" self-end="!" ring="1 blue/80" relative z-10 h-max rounded-full bg-white p-4 style="--un-shadow: 0 0 32px #0682CA;">
    <div ref="pill" absolute inset-y-3 rounded-full bg-darkblue transition-all duration-400 ease-in-out />
    <li v-for="({ icon, label, value, color }) in states" :key="value" :style="{ '--c': `rgb(var(--nq-${color}) / 1)` }">
      <button flex="~ gap-2 items-center" rounded-full bg-transparent p-2 pr-12 :data-state="value === state ? 'active' : undefined" @click="state = value">
        <div :class="icon" text="neutral-800 data-active:$c" m-8 transition-color />
        <span font="semibold data-active:bold" text="data-active:white" transition-color>
          {{ label }}
        </span>
      </button>
    </li>
    <li :class="state === 'idle' ? 'scale-0 w-0' : 'scale-100 w-36'" h-36 transition="[width,transform]" duration-300 ease-out max-sm:hidden>
      <button bg-transparent @click="state = 'idle'">
        <div i-nimiq:redo text="neutral-800" m-8 />
      </button>
    </li>
  </ul>
</template>
