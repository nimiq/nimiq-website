<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}
interface ForumLink {
  text: string
  href: string
}

defineProps<{ items: FaqItem[], forumLink?: ForumLink }>()
</script>

<template>
  <div class="flex flex-col flex-md:items-center">
    <ul class="grid grid-cols-1 grid-md:cols-2 grid-lg:cols-3 grid-gap-24">
      <li v-for="(item, i) in items" :key="i" class="p-16 rounded-6 bg-neutral-200">
        <h3 class="text-16 font-bold">
          {{ item.question }}
        </h3>
        <p class="nq-prose-compact f-mt-xs">
          {{ item.answer }}
        </p>
      </li>
    </ul>
    <p v-if="forumLink" class="text-center f-mt-lg">
      {{ forumLink.text }} <NuxtLink class="text-blue" :to="forumLink.href">
        Nimiq forum
      </NuxtLink>
    </p>
  </div>
</template>
