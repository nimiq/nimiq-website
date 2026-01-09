<script setup lang="ts">
interface SocialItem { id: string, label: string, link: string, icon: string, color: string }
defineProps<{ items: SocialItem[] }>()
</script>

<template>
  <ul v-if="items?.length" role="list" flex="~ items-center gap-2 wrap" text-neutral-700>
    <li v-for="{ id, icon, link, label } in items" :key="id" self-stretch justify-self-stretch aria-label="Links to some of our social media pages">
      <NuxtLink :title="label" :to="link" focusable p-8 rounded-4 flex h-max bg="hocus:darkblue/6" :aria-label="`Visit Nimiq on ${label}`">
        <Icon :name="icon" />
      </NuxtLink>
    </li>
  </ul>
</template>
