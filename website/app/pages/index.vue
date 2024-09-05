<script setup lang="ts">
const { client } = usePrismic()
const { data: home } = await useAsyncData('home', () => client.getByUID('page', 'home'))
</script>

<template>
  <h2 text-pink>Hello world!</h2>
  <p>
    {{ home }}
  </p>
</template>