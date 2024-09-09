<script setup lang="ts">
// const { navigation } = storeToRefs(useNavigation())
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <header>
    <NuxtLink to="/">
      <div class="i-nimiq:logos-nimiq-horizontal dark:i-nimiq:logos-nimiq-white-horizontal" text-18 />
    </NuxtLink>
  </header>
  <main>
    <slot />
  </main>

  <footer />
</template>
