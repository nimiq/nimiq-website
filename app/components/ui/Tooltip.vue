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
    <PopoverTrigger v-bind="$attrs" bg-transparent h-max block @mouseenter="handleTriggerInteraction" @focus="handleTriggerInteraction">
      <slot name="trigger">
        <Icon name="nimiq:info" class="text-12 text-neutral-700" />
      </slot>
    </PopoverTrigger>

    <PopoverPortal v-if="shouldRenderPortal">
      <PopoverContent as-child class="tooltip-animation" :side-offset :collision-padding :side flex="~ col" max-w-360>
        <div :class="dark ? 'bg-white' : 'bg-gradient-neutral shadow dark scheme-dark'" p-16 rounded-8 text="neutral dark:white">
          <slot />
        </div>
        <PopoverArrow as-child>
          <div rotate-180 :class="{ dark }">
            <Icon aria-hidden name="nimiq:tooltip-triangle" class="tooltip-animation text-darkblue mt--1 h-8 w-16 dark:text-white" />
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
