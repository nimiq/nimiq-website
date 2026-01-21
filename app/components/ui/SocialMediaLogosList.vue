<script setup lang="ts">
interface SocialItem { id: string, label: string, link: string, icon: string, color: string }
defineProps<{ items: SocialItem[] }>()
</script>

<template>
  <ul v-if="items?.length" class="flex flex-items-center gap-0.5 flex-wrap text-neutral-700" role="list">
    <li v-for="{ id, icon, link, label } in items" :key="id" class="self-stretch justify-self-stretch" aria-label="Links to some of our social media pages">
      <NuxtLink class="p-2 rounded-1 flex h-max bg-hocus:darkblue/6" :title="label" :to="link" focusable :aria-label="`Visit Nimiq on ${label}`">
        <Icon :name="icon" />
      </NuxtLink>
    </li>
  </ul>
</template>
