<script setup lang="ts">
interface LinkItem { icon?: string, headline?: string, color?: string, link?: string }
defineProps<{ items: LinkItem[] }>()
</script>

<template>
  <div grid="~ cols-1 lg:cols-3 gap-8 md:gap-16">
    <NuxtLink
      v-for="(item, i) in items" :key="i"
      flex="~ row gap-20 items-center" :style="`--c: var(--colors-${item.color})`"
      :to="item.link" group p-20 nq-hoverable class="hocus:var:nq-gradient-from:$c hocus:var:nq-gradient-to:$c"
    >
      <Icon v-if="item.icon" :name="item.icon" class="text-32 text-$c transition-colors md:text-48 group-hocus:!text-white" />
      <div whitespace-nowrap flex="~ items-center" text="group-hocus:children:!white">
        {{ item.headline }}
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
[nq-hoverable]:hover::before,
[nq-hoverable]:focus-visible::before {
  background-image: none;
  background: var(--c);
}
</style>
