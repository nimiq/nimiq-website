<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}
interface ForumLink {
  text: string
  href: string
}

defineProps<{ items: FaqItem[], forumLink?: ForumLink, title?: string }>()
</script>

<template>
  <div class="flex flex-col md:items-center">
    <h2 v-if="title" class="w-max text-lg nq-label mb-6">
      {{ title }}
    </h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <li v-for="(item, i) in items" :key="i" class="p-4 rounded-1.5 bg-neutral-300">
        <h3 class="text-16 font-bold">
          {{ item.question }}
        </h3>
        <p class="nq-prose-compact mt-2 md:mt-3">
          {{ item.answer }}
        </p>
      </li>
    </ul>
    <p v-if="forumLink?.text" class="text-left md:text-center text-neutral-800 text-lg mt-10">
      {{ forumLink.text }}
    </p>
    <NuxtLink v-if="forumLink?.href" :to="forumLink.href" class="nq-arrow nq-pill-lg nq-pill-secondary mt-4">
      Nimiq forum
    </NuxtLink>
  </div>
</template>
