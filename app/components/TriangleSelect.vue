<script setup lang="ts">
const props = defineProps<{ options: string[] }>()

const selected = defineModel<string>('selected')
const options = computed(() => [selected.value!].concat(props.options.filter(option => option !== selected.value)))
</script>

<template>
  <SelectRoot v-model="selected">
    <SelectTrigger select px-12 py-6 rounded-4 bg-transparent w-max outline="none focus-visible:blue">
      <SelectValue flex="~ items-center gap-4" text-current font-bold uppercase transition-colors as="div" />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent
        side="top" position="item-aligned"
        select bg-gradient-neutral text-neutral-0 py-6 rounded-6 shadow bottom-0 relative z-200 animate-fade-in animate-duration-100 drop-shadow
      >
        <SelectViewport>
          <SelectItem
            v-for="option in options" :key="option" :value="option" px-12 py-4 cursor-pointer
            outline="none hocus:none"
          >
            <SelectItemText
              text="neutral-600/80"
              flex="~ items-center justify-between gap-4" font-bold uppercase transition-colors
            >
              {{ option }}
              <div
                aria-hidden i-nimiq:triangle-left
                text="7 current" transition-colors
                rotate="data-closed:-90" duration-1000
              />
            </SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<style scoped>
[i-nimiq\:triangle-left] {
  transition:
    100ms opacity var(--nq-ease),
    400ms transform var(--nq-ease);
}
</style>
