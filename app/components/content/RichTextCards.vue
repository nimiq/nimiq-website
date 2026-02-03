<script setup lang="ts">
interface RichTextCardsProps {
  items?: { content: string, bgColor?: string }[]
}

defineProps<RichTextCardsProps>()
</script>

<template>
  <ul class="grid grid-cols-1 gap-8 lg:grid-cols-2">
    <li
      v-for="({ bgColor, content }, i) in items"
      :key="i"
      class="rounded-2 shadow pt-32 md:pt-40 lg:pt-48"
      :class="bgColor === 'darkblue' ? 'bg-darkerblue dark text-white' : 'bg-neutral-0'"
    >
      <MDC class="nq-prose nq-prose-no-pb nq-prose-no-px" :value="content" wrapper="div" />
    </li>
  </ul>
</template>
