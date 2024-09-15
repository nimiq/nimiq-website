<script setup lang="ts">
const { dark = true } = defineProps<{
  dark?: boolean
}>()
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger v-bind="$attrs" bg-transparent>
      <slot name="trigger">
        <div i-nimiq:info text-14 text-neutral-700 />
      </slot>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent as-child class="tooltip-animation" :side-offset="8" :collision-padding="8" side="bottom">
        <div z-300 rounded-8 p-16 :class="dark ? 'bg-gradient-neutral' : 'bg-white shadow'">
          <slot />
        </div>
        <PopoverArrow as-child>
          <div rotate-180>
            <div aria-hidden i-nimiq:tooltip-triangle mt--1 h-8 w-16 class="tooltip-animation" :class="dark ? 'text-neutral' : 'text-white'" />
          </div>
        </PopoverArrow>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<style scoped>
.tooltip-animation {
  transform-origin: var(--radix-tooltip-content-transform-origin);
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
