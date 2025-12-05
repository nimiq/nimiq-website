<script setup lang="ts">
interface AppItem {
  highlight?: boolean
  title: string
  description: string
  preview: string
  item: string
  link: string
  draft?: boolean
}

const props = defineProps<{
  apps: AppItem[]
}>()

const visibleApps = computed(() => props.apps.filter(app => !app.draft))
const highlightedApps = computed(() => visibleApps.value.filter(app => app.highlight))
const regularApps = computed(() => visibleApps.value.filter(app => !app.highlight))
</script>

<template>
  <section nq-section-gap bg-neutral-0 data-slice-type="apps-showcase">
    <!-- Highlighted apps - large cards -->
    <div v-if="highlightedApps.length" grid="~ cols-1 md:cols-2 gap-24" mb-32>
      <NuxtLink
        v-for="app in highlightedApps"
        :key="app.item"
        :to="app.link"
        class="group"
        flex="~ col"
        p-24 rounded-8 bg-neutral-100 nq-hoverable
      >
        <NuxtImg
          :src="app.preview"
          :alt="app.title"
          mb-16 rounded-8 w-full aspect-video object-cover
        />
        <h3 font-bold mb-8 f-text-xl>
          {{ app.title }}
        </h3>
        <p text-neutral-700>
          {{ app.description }}
        </p>
      </NuxtLink>
    </div>

    <!-- Regular apps - smaller cards -->
    <div v-if="regularApps.length" grid="~ cols-1 sm:cols-2 lg:cols-4 gap-16">
      <NuxtLink
        v-for="app in regularApps"
        :key="app.item"
        :to="app.link"
        class="group"
        flex="~ col"
        p-16 rounded-8 bg-neutral-100 nq-hoverable
      >
        <NuxtImg
          :src="app.preview"
          :alt="app.title"
          mb-12 rounded-8 w-full aspect-video object-cover
        />
        <h4 font-bold mb-4 f-text-lg>
          {{ app.title }}
        </h4>
        <p text="sm neutral-700">
          {{ app.description }}
        </p>
      </NuxtLink>
    </div>
  </section>
</template>
