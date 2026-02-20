<script setup lang="ts">
interface Props {
  title: string
  description: string
  categoriesLabel?: string
  categoriesDescription?: string
  cta: string
}
defineProps<Props>()

const apps = await useApps()
const appsToShow = computed(() => apps.communityApps ? shuffle(apps.communityApps).slice(0, 6) : [])
</script>

<template>
  <NuxtLink class="relative overflow-hidden rounded-2 bg-darkblue/5 nq-hoverable h-[420px] md:h-[538px] w-full" :to="cta">
    <!-- Left info panel -->
    <div class="absolute z-10 flex flex-col justify-between p-10 md:p-20 inset-y-0 left-0 w-[200px] md:w-[260px]">
      <div class="flex flex-col gap-3 md:gap-4">
        <Icon class="size-10 md:size-12" name="custom:apps" />
        <div>
          <h3 class="font-bold text-darkblue text-lg md:text-xl leading-tight">
            {{ title }}
          </h3>
          <p class="text-darkblue/60 mt-1.5 text-sm md:text-base leading-snug">
            {{ description }}
          </p>
        </div>
      </div>
      <div v-if="categoriesLabel || categoriesDescription" class="flex flex-col gap-1.5 md:gap-2">
        <p v-if="categoriesLabel" class="nq-label text-[11px] md:text-[13px] text-darkblue/60 opacity-60 whitespace-nowrap">
          {{ categoriesLabel }}
        </p>
        <p v-if="categoriesDescription" class="text-darkblue/60 opacity-60 text-xs md:text-sm leading-snug whitespace-pre-line">
          {{ categoriesDescription }}
        </p>
      </div>
    </div>

    <!-- App grid - based on original main branch implementation -->
    <div class="absolute top-10 md:top-16 left-[212px] md:left-[300px] w-[125%] h-[145%] rounded-[24px] border-[16px] border-neutral-400">
      <ul class="grid grid-cols-3 gap-3 md:gap-4 size-full rounded-lg bg-white p-3 md:p-4">
        <li v-for="app in appsToShow" :key="app.name" class="rounded-lg overflow-hidden" :style="`background: ${app.color}`">
          <NuxtImg class="size-full object-contain mix-blend-lighten" :src="app.logo" />
        </li>
      </ul>
    </div>
  </NuxtLink>
</template>
