<script setup lang="ts">
interface SocialItem { id: string, label: string, link: string, icon: string, color: string }
defineProps<{ items: SocialItem[] }>()
</script>

<template>
  <ul v-if="items?.length" class="flex items-center gap-0.5 -mx-2 text-neutral-700" role="list">
    <li v-for="{ id, icon, link, label } in items" :key="id" class="self-stretch justify-self-stretch" aria-label="Links to some of our social media pages">
      <NuxtLink class="p-2 rounded-1 flex h-max hover:bg-darkblue/6 focus:bg-darkblue/6 text-neutral-700 hover:text-neutral-900 focus:text-neutral-900 transition-colors" :title="label" :to="link" focusable :aria-label="`Visit Nimiq on ${label}`" external target="_blank">
        <Icon :name="icon" />
      </NuxtLink>
    </li>
  </ul>
</template>
