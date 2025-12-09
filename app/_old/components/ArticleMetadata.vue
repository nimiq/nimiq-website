<script setup lang="ts">
const { date } = defineProps<{ date: Date, authors: string }>()

const locale = useLocale()

const formattedDate = computed(() => {
  return new Date(date).toLocaleDateString(locale.value, {
    day: 'numeric',
    month: 'short',
    year: new Date(date).getFullYear() === new Date().getFullYear() ? undefined : 'numeric',
  })
})
</script>

<template>
  <div flex="~ items-center gap-x-16 wrap" text="12 neutral" lh="[2]" nq-label>
    <time :datetime="formattedDate">
      {{ formattedDate }}
    </time>
    <address flex="~ gap-1ch" not-italic>
      <span text-neutral-800>by</span>
      <span text-blue>
        {{ authors }}
      </span>
    </address>
    <slot name="after" />
  </div>
</template>
