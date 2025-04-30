<script setup lang="ts">
const props = defineProps<{ options: string[] }>()

const selected = defineModel<string>('selected')
const options = computed(() => [selected.value!].concat(props.options.filter(option => option !== selected.value)))
</script>

<template>
  <SelectRoot v-model="selected">
    <SelectTrigger select w-max rounded-4 bg-transparent px-12 py-6 outline="none focus-visible:blue" flex="~ items-center gap-4">
      <SelectValue flex="~ items-center gap-4" text-current font-bold uppercase transition-colors as="div" />
      <div size-10 op-80 i-nimiq:triangle-down />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent
        side="top" position="item-aligned"
        select relative bottom-0 z-200 animate-fade-in animate-duration-100 rounded-6 py-6 text-neutral-0 shadow drop-shadow bg-gradient-neutral
      >
        <SelectViewport>
          <SelectItem
            v-for="option in options" :key="option" :value="option" cursor-pointer px-12 py-4
            outline="none hocus:none"
          >
            <SelectItemText
              text="neutral-600/80"
              flex="~ items-center justify-between gap-4" font-bold uppercase transition-colors
            >
              {{ option }}
              <div

                text="7 current"
                rotate="data-closed:-90" aria-hidden transition-colors duration-1000 i-nimiq:triangle-left
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
