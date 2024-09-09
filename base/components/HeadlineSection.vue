<script setup lang="ts">
</script>

<template>
  <section text-pink>
    <slot name="top" />
    <h2>
      <slot name="headline" />
    </h2>
    <p>
      <slot name="subheadline" />
    </p>
  </section>
</template>
