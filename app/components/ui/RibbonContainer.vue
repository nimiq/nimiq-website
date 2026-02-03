<script setup lang="ts">
const { floatingStars = true, color = 'gold', icon, shadow = false } = defineProps<{ label: string, floatingStars?: boolean, color?: 'gold' | 'purple', icon?: string, shadow?: boolean }>()

const gradientMap = {
  gold: 'radial-gradient(100% 100% at 100% 100%, #EC991C 0%, #E9B213 100%)',
  purple: 'radial-gradient(100% 100% at 100% 100%, #4D4C96 0%, #5F4B8B 100%)',
}
const foldColorMap = { gold: '#e9b213', purple: '#220f3b' }
const starColorMap = { gold: '#e9b213', purple: '#1F2348' }
</script>

<template>
  <div class="ribbon-container max-w-none md:max-w-[var(--nq-max-width)] mx-auto rounded-lg size-full min-h-32 relative grid outline outline-[1.5px] outline-neutral-400 bg-neutral-0" :class="{ shadow }" style="--top: 25px">
    <slot name="default" />

    <div class="self-start justify-self-end -mr-8 w-max relative z-10" style="top: var(--top, 25px)">
      <div class="w-11 origin-bottom-right -translate-y-px -rotate-45 bottom-0 right-0 absolute z-[1]" aria-hidden="true" :style="{ borderColor: `transparent transparent ${foldColorMap[color]} transparent`, borderWidth: '22px' }" />

      <UiFloatingStars v-if="floatingStars" class="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-[30%] z-[21]" aria-hidden="true" :color="starColorMap[color]" />
      <div class="text-base md:text-lg text-white rounded-md rounded-br-none px-4 md:px-5 pr-7 md:pr-5 leading-none ml-auto pl-5 w-max relative z-[22] py-2 md:py-3 flex items-center gap-2" :style="{ backgroundImage: gradientMap[color] }">
        <Icon v-if="icon" class="text-[0.85em]" :name="icon" />
        {{ label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Stack grid children in same cell (like UnoCSS 'stack' preset) */
.ribbon-container > * {
  grid-area: 1 / 1;
}
</style>
