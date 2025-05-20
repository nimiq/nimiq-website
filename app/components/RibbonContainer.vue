<script setup lang="ts">
const { floatingStarts = true } = defineProps<{ label: string, floatingStarts?: boolean }>()
</script>

<template>
  <div max-w="none md:$nq-max-width" outline="~ 1.5 neutral-400" stack mx-auto rounded-8 bg-neutral-0 size-full min-h-128 relative>
    <slot name="default" />

    <div self-start="!" justify-self-end="!" mr--32 w-max top--25 relative z-20>
      <div aria-hidden w-44 origin-bottom-right translate-y--1 rotate--45 bottom-0 right-0 absolute z-1 border="22 x-transparent t-0 #EC991C" />

      <AnimatedFloatingStars v-if="floatingStarts" translate="-50%" absolute left="50%" top="30%" z-1 color="#e9b213" />
      <div style="background-image: radial-gradient(100% 100% at 100% 100%, #EC991C 0%, #E9B213 100%)" text="f-lg white" rounded="6 br-0" f-px="16/20" f-pr="28/20" lh-none ml-auto pl-20 w-max relative z-2 f-py-xs>
        {{ label }}
      </div>
    </div>
  </div>
</template>
