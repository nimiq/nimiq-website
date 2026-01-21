<script setup lang="ts">
const { dark = false, side = 'bottom' as const, sideOffset = 8, collisionPadding = 8 } = defineProps<{ dark?: boolean, side?: 'top' | 'right' | 'bottom' | 'left', sideOffset?: number, collisionPadding?: number }>()

const shouldRenderPortal = shallowRef(false)
const isOpen = shallowRef(false)

function handleTriggerInteraction() {
  if (!shouldRenderPortal.value)
    shouldRenderPortal.value = true
}

function handleOpenChange(open: boolean) {
  isOpen.value = open
  if (open)
    handleTriggerInteraction()
}
</script>

<template>
  <PopoverRoot :open="isOpen" @update:open="handleOpenChange">
    <PopoverTrigger class="bg-transparent h-max" v-bind="$attrs" block @mouseenter="handleTriggerInteraction" @focus="handleTriggerInteraction">
      <slot name="trigger">
        <Icon class="text-12 text-neutral-700" name="nimiq:info" />
      </slot>
    </PopoverTrigger>

    <PopoverPortal v-if="shouldRenderPortal">
      <PopoverContent class="tooltip-animation flex flex-col max-w-[360px]" as-child :side-offset :collision-padding :side>
        <div class="p-4 rounded-2 text-neutral text-dark:white" :class="dark ? 'bg-white' : 'bg-gradient-neutral shadow dark scheme-dark'">
          <slot />
        </div>
        <PopoverArrow as-child>
          <div class="rotate-180" :class="{ dark }">
            <Icon class="tooltip-animation text-darkblue -mt-px h-2 w-4 dark:text-white" aria-hidden name="nimiq:tooltip-triangle" />
          </div>
        </PopoverArrow>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<style scoped>
.tooltip-animation {
  transform-origin: var(--reka-tooltip-content-transform-origin);
  animation: fadeInSlideUp 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeInSlideUp {
  from {
    opacity: 0;
    scale: 0.98;
    translate: 0 4px;
  }
  to {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
}
</style>
