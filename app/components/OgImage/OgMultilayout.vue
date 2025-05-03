<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  image?: string
  layout?: 'image' | 'text' | 'overlay'
}>(), {
  title: 'title',
  description: 'description',
  image: 'image',
  layout: 'image',
})

const layoutStyles = {
  default: {
    container: '',
    image: '',
    title: '',
    description: '',
  },

  overlay: {
    container: 'flex justify-end   h-full w-full',
    image: 'absolute  inset-0 object-cover w-full h-full',
    title: 'text-white px-24 py-24 text-6xl font-bold',
    description: 'hidden',
  },
  text: {
    container: 'flex-col  justify-end h-full px-24 py-24 bg-gray-100',
    image: '',
    title: 'text-neutral-800  text-7xl font-bold',
    description: 'text-2xl',
  },
  image: {
    container: '',
    image: '',
    title: '',
    description: '',
  },
}
</script>

<template>
  <div :class="layoutStyles[layout].container || layoutStyles.default.container">
    <img
      v-if="image && layout !== 'text'"
      :class="layoutStyles[layout].image || layoutStyles.default.image "
      :src="image"
      :alt="title"
      :width="1200"
      :height="630"
    >
    <div v-if="layout === 'overlay'" class="absolute inset-0 bottom-0 h-full w-full bg-dark opacity-50" />
    <div v-if="layout !== 'image' ">
      <h1 :class="layoutStyles[layout].title || layoutStyles.default.title">
        {{ title }}
      </h1>
      <p :class="layoutStyles[layout].description || layoutStyles.default.description">
        {{ description }}
      </p>
    </div>
  </div>
</template>
