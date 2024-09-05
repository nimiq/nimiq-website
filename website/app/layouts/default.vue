<script setup lang="ts">
const { navigation } = storeToRefs(useNavigation())
</script>

<template>
  <header>TODO</header>
  <main>
    {{ { navigation } }}
    <slot />
  </main>

  <footer></footer>
</template>