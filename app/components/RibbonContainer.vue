<script setup lang="ts">
const { floatingStars = true, color = 'gold', icon } = defineProps<{ label: string, floatingStars?: boolean, color?: 'gold' | 'purple', icon?: string }>()

const gradientMap = {
  gold: 'radial-gradient(100% 100% at 100% 100%, #EC991C 0%, #E9B213 100%)',
  purple: 'radial-gradient(100% 100% at 100% 100%, #4D4C96 0%, #5F4B8B 100%)',
}
const foldColorMap = { gold: '#e9b213', purple: '#220f3b' }
const starColorMap = { gold: '#e9b213', purple: '#1F2348' }
</script>

<template>
  <div max-w="none md:$nq-max-width" outline="~ 1.5 neutral-400" stack mx-auto rounded-8 bg-neutral-0 size-full min-h-128 relative var:top:-25>
    <slot name="default" />

    <div self-start="!" justify-self-end="!" mr--32 w-max relative top="$top" z-10>
      <div aria-hidden="true" w-44 origin-bottom-right translate-y--1 rotate--45 bottom-0 right-0 absolute z-1 :style="{ borderColor: `transparent transparent ${foldColorMap[color]} transparent`, borderWidth: '22px' }" />

      <AnimatedFloatingStars v-if="floatingStars" aria-hidden="true" translate="-50%" absolute left="50%" top="30%" z-21 :color="starColorMap[color]" />
      <div :style="{ backgroundImage: gradientMap[color] }" text="f-lg white" rounded="6 br-0" f-px="16/20" f-pr="28/20" lh-none ml-auto pl-20 w-max relative z-22 f-py-xs flex="~ items-center gap-8">
        <div v-if="icon" :class="icon" text="0.85em" />
        {{ label }}
      </div>
    </div>
  </div>
</template>
