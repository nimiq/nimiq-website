<script setup lang="ts">
import type { Action } from '~/composables/usePlaygroundIframe'
import { usePlaygroundIframe } from '~/composables/usePlaygroundIframe'

const emit = defineEmits<{ state: [state: Action] }>()

const { playgroundState, setSelectedAction } = usePlaygroundIframe()

const state = ref<Action>('idle')

watch(state, newState => setSelectedAction(newState), { immediate: true })

watch(() => playgroundState.value.selectedAction, (newAction) => {
  if (newAction !== state.value)
    state.value = newAction
}, { immediate: true })

const states = [
  { label: 'Stake', value: 'stake', icon: 'nimiq:leaf-2-filled', color: `green` },
  { label: 'Buy', value: 'buy', icon: 'nimiq:floating-ball', color: 'blue' },
  { label: 'Swap', value: 'swap', icon: 'nimiq:exchange-chevron', color: 'purple' },
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
  <ul flex="~ gap-4" self-end="!" ring="1 blue/80" p-4 rounded-full bg-white h-max relative z-10 style="--un-shadow: 0 0 32px #0682CA;">
    <div ref="pill" rounded-full bg-darkblue transition-all duration-400 ease-in-out inset-y-3 absolute />
    <li v-for="({ icon, label, value, color }) in states" :key="value" :style="{ '--c': `var(--colors-${color})` }" class="dark" scheme-dark>
      <button flex="~ gap-2 items-center" p-2 pr-12 rounded-full bg-transparent :data-state="value === state ? 'active' : undefined" @click="state = value">
        <Icon :name="icon" class="text-neutral-800 m-8 transition-color reka-active:text-$c" />
        <span font="semibold reka-active:bold" text="reka-active:white" transition-color>{{ label }}</span>
      </button>
    </li>
    <li :class="state === 'idle' ? 'scale-0 w-0' : 'scale-100 w-36'" h-36 transition="[width,transform]" duration-300 ease-out max-sm:hidden>
      <button bg-transparent @click="state = 'idle'">
        <Icon name="nimiq:redo" class="text-neutral-800 m-8" />
      </button>
    </li>
  </ul>
</template>
