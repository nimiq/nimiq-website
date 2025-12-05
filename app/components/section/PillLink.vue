<script setup lang="ts">
type Item = 'The Tech' | 'The Apps' | 'The Map'

const props = defineProps<{
  item: string
  label?: string
  bgColor?: string
}>()

const bgClass = computed(() => {
  switch (props.bgColor) {
    case 'white': return 'bg-neutral-0'
    case 'grey': return 'bg-neutral-100'
    case 'darkblue': return 'bg-darkblue dark'
    default: return 'bg-neutral-0'
  }
})

// @unocss-include
const itemColors: Record<Item, string> = {
  'The Tech': 'green',
  'The Apps': 'blue',
  'The Map': 'orange',
}

const icons: Record<Item, string> = {
  'The Tech': 'i-nimiq:bolt',
  'The Apps': 'i-nimiq:arrows-to-sides',
  'The Map': 'i-nimiq:crypto-map',
}

const item = computed(() => props.item as Item)
const color = computed(() => itemColors[item.value] || 'blue')
const icon = computed(() => icons[item.value] || 'i-nimiq:bolt')
</script>

<template>
  <section :class="bgClass" class="nq-section-gap" data-slice-type="pill-link" mx-0 pb-2 relative children:max-w-none max-md:items-start>
    <div flex="~ items-center gap-10" mr-8 py-6 pl-8 pr-20 rounded-full>
      <div :style="`--c: var(--nq-${color})`" style="color: rgb(var(--c)); background-color: rgb(var(--c) / 0.2);" aria-hidden size="28 lg:40" rounded-full grid="~ place-content-center">
        <div :class="icon" h="18 lg:30" w="16 lg:26" class="gradient" />
      </div>
      <span text="18 neutral-700" nq-label>{{ props.item }}</span>
    </div>
  </section>
</template>

<style>
section:where(.bg-darkblue, [bg-darkblue])
  + :where(section[data-slice-type='pill-link']):where(.bg-darkblue, [bg-darkblue]),
section:where(.bg-neutral-100, [bg-neutral-100])
  + :where(section[data-slice-type='pill-link']):where(.bg-neutral-100, [bg-neutral-100]),
section:where(.bg-neutral-0, [bg-neutral-0])
  + :where(section[data-slice-type='pill-link']):where(.bg-neutral-0, [bg-neutral-0]) {
  --uno: 'border-t border-neutral-500';
}

.gradient {
  background: radial-gradient(78.95% 73.1% at 12.5% 14.72%, rgb(var(--c) / 1) 0%, rgb(var(--c) / 0.3) 100%);
}
</style>
