<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

defineProps<{ items: FaqItem[] }>()
</script>

<template>
  <div flex="~ col md:items-center">
    <ul grid="~ cols-1 md:cols-2 lg:cols-3 gap-24">
      <li v-for="(item, i) in items" :key="i" p-16 rounded-6 bg-neutral-200>
        <h3 text-16 font-bold>
          {{ item.question }}
        </h3>
        <p nq-prose-compact f-mt-xs>
          {{ item.answer }}
        </p>
      </li>
    </ul>
  </div>
</template>
