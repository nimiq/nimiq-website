<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div max-w="$nq-max-width" outline="~ 1.5 neutral-400" mx-auto size-full min-h-128 rounded-8 bg-neutral-0 stack>
    <slot name="default" />

    <div self-start="!" justify-self-end="!" relative top--25 z-10 mr--32 w-max>
      <div aria-hidden absolute right-0 z-1 w-44 origin-bottom-right translate-y-26 rotate--45 border="22 x-transparent t-0 #EC991C" />

      <AnimatedFloatingStars translate="-50%" absolute left="50%" top="30%" z-1 color="e9b213" />
      <div style="background-image: radial-gradient(100% 100% at 100% 100%, #EC991C 0%, #E9B213 100%)" text="f-lg white" rounded="6 br-0" f-px="16/20" relative z-2 ml-auto w-max px-20 font-semibold lh-none f-py-xs>
        {{ label }}
      </div>
    </div>
  </div>
</template>
