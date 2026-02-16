<script setup lang="ts">
interface Props {
  title: string
  description: string
  categoriesLabel?: string
  categoriesDescription?: string
  cta: string
}
defineProps<Props>()

const { data: apps } = useApps()

const appsToShow = computed(() => {
  if (!apps.value?.communityApps)
    return []
  return apps.value.communityApps.slice(0, 6)
})
</script>

<template>
  <NuxtLink class="!grid grid-cols-1 md:grid-cols-[1fr_3fr] grid-rows-[1fr_auto] gap-x-96 gap-y-32 md:gap-y-128 bg-neutral-0 w-full p-6 md:p-8 nq-hoverable" :to="cta">
    <div class="flex flex-col">
      <Icon class="size-10" name="custom:apps" />
      <h3 class="font-bold text-base md:text-lg mt-2 md:mt-3">
        {{ title }}
      </h3>
      <p class="text-neutral-800 mt-1 md:mt-1.5">
        {{ description }}
      </p>
    </div>

    <div class="row-span-2 relative">
      <div class="w-[125%] h-[145%] border-16 border-solid border-neutral-400 rounded-[24px] inset-0 absolute">
        <ul class="grid grid-cols-3 rounded-2 bg-white size-full p-3 md:p-4 gap-3 md:gap-4">
          <li v-for="app in appsToShow" :key="app.name" class="rounded-2" :style="`background: ${app.color}`" stack>
            <NuxtImg class="size-[136px] md:size-[180px] object-contain mix-blend-lighten" :src="app.logo" />
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col">
      <p v-if="categoriesLabel" class="nq-label">
        {{ categoriesLabel }}
      </p>
      <p v-if="categoriesDescription" class="text-neutral-800 mt-2 md:mt-3">
        {{ categoriesDescription }}
      </p>
    </div>
  </NuxtLink>
</template>
