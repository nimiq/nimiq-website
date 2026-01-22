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
  <div class="max-w-none max-w-md:$nq-max-width mx-auto rounded-2 size-full min-h-32 relative" stack var:top:-25 :class="{ shadow }">
    <slot name="default" />

    <div class="self-start-! justify-self-end-! -mr-8 w-max relative top-$top z-10">
      <div class="w-11 origin-bottom-right -translate-y-px rotate--45 bottom-0 right-0 absolute z-1" aria-hidden="true" :style="{ borderColor: `transparent transparent ${foldColorMap[color]} transparent`, borderWidth: '22px' }" />

      <UiFloatingStars v-if="floatingStars" class="translate--50% absolute left-50% top-30% z-21" aria-hidden="true" :color="starColorMap[color]" />
      <div class="text-base md:text-lg text-white rounded-1.5 rounded-br-0 px-4 md:px-5 pr-7 md:pr-5 lh-none ml-auto pl-5 w-max relative z-22 py-2 md:py-3 flex flex-items-center gap-2" :style="{ backgroundImage: gradientMap[color] }">
        <Icon v-if="icon" class="text-0.85em" :name="icon" />
        {{ label }}
      </div>
    </div>
  </div>
</template>
