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
      class="rounded-2 shadow p-32 md:p-40 lg:p-48"
      :class="[bgColor === 'darkblue' ? 'bg-darkblue dark dark-card' : 'bg-neutral-0']"
      :scheme-dark="bgColor === 'darkblue' ? '' : undefined"
    >
      <MDC class="rich-text-card nq-prose nq-prose-no-pb nq-prose-no-px" :value="content" wrapper="div" />
    </li>
  </ul>
</template>

<style>
.rich-text-card.nq-prose h3 {
  --font-size-min-em: 1.5 !important;
  --font-size-max-em: 1.75 !important;
  font-weight: 600 !important;
  color: var(--color-neutral) !important;
}

.rich-text-card.nq-prose p {
  --font-size-min-em: 0.75 !important;
  --font-size-max-em: 0.85 !important;
}

.rich-text-card.nq-prose img {
  max-width: 100%;
}

.dark-card .nq-prose :not(:where(.nq-raw, .nq-raw *, .nq-not-prose, .nq-not-prose *)) {
  color: var(--color-neutral-800) !important;
}

.dark-card .nq-prose h3 {
  color: var(--color-neutral) !important;
}
</style>
