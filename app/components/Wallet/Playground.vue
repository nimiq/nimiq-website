<script setup lang="ts">
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
}, { flush: 'post' })
</script>

<template>
  <div relative>
    <div grid="~ cols-1 rows-1 *:row-span-full *:col-span-full *:self-center *:justify-self-center" nq-wide size-full max-w="$nq-max-width">
      <!-- Ribbon fold -->
      <div self-start="!" justify-self-end="!" aria-hidden z-1 mr--18 mt-48 w-44 origin-bottom-right rotate--45 border="22 x-transparent t-0 #EC991C" />

      <WalletPlaygroundBackground />

      <div p="t-48 x-10 b-10" z-1 size-full>
        <!-- iframe -->
        <div size-full rounded-4 bg-slate-200 />
      </div>

      <!-- Ribbon -->
      <div self-start="!" justify-self-end="!" relative z-10 mr--18 mt-11 w-max>
        <AnimatedFloatingStars translate="-50%" absolute left="50%" top="50%" z-1 />
        <div bg="#E9B213" text="lg white" rounded="6 br-0" relative z-2 ml-auto w-max px-20 py-16 font-semibold>
          Try live preview
        </div>
      </div>

      <ul flex="~ gap-4" self-end="!" translate-y="[calc(50%-10px)]" ring="1 blue/80" relative z-10 h-max rounded-full bg-white p-4 style="--un-shadow: 0 0 32px #0682CA;">
        <div ref="pill" absolute inset-y-3 rounded-full bg-darkblue transition-all duration-400 ease-in-out />
        <li v-for="({ icon, label, value, color }) in states" :key="value" :style="{ '--c': `rgb(var(--nq-${color}) / 1)` }">
          <button flex="~ gap-2 items-center" rounded-full bg-transparent p-2 pr-12 :data-state="value === state ? 'active' : undefined" @click="state = value">
            <div :class="icon" text="neutral-800 data-active:$c" m-8 transition-color />
            <span font="semibold data-active:bold" text="data-active:white" transition-color>
              {{ label }}
            </span>
          </button>
        </li>
        <li :class="state === 'idle' ? 'scale-0 w-0' : 'scale-100 w-36'" h-36 transition="[width,transform]" duration-300 ease-out>
          <button bg-transparent @click="state = 'idle'">
            <div i-nimiq:redo text="neutral-800" m-8 />
          </button>
        </li>
      </ul>
    </div>
    <div flex="~ col gap-20 justify-center items-center" nq-mt-48>
      <div flex="~ gap-12 " text="white/40 34">
        <div i-nimiq:logos-nimiq-mono title="NIM" />
        <div i-nimiq:logos-bitcoin-mono title="BTC" />
        <div i-nimiq:logos-usdc-mono title="USDC" />
        <div i-nimiq:logos-usdt-mono title="USDT" />
      </div>
      <h2 nq-label text="white/60 xs">
        Supported currencies
      </h2>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide {
  0% {
    --uno: 'translate-x-0';
  }
  100% {
    --uno: 'translate-x-200';
  }
}

.slide {
  animation: slide var(--d) ease-out forwards;
}
</style>
