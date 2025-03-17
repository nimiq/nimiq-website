<script setup lang="ts">
defineProps<{ color: string, link: string, logo: string, type: string, name: string, description: string, developer?: string }>()
</script>

<template>
  <NuxtLink :to="link" target="_blank" w="[min(calc(100vw-var(--px,32px)*2),350px)]" :style="`--c: ${color}`" external group h-full gap-24 rounded-6 p-6 nq-hoverable>
    <!-- TODO Fix stack -->
    <div bg="$c" mb-0 h-240 rounded-4 stack>
      <NuxtImg :src="logo" h-auto max-h-full max-w-full rounded-4 object-cover op-60 />
      <p text="12 white/70" relative right-12 top-12 self-start justify-self-end nq-label>
        {{ type }}
      </p>
    </div>
    <div flex-1 p-26 pt-0 flex="~ col gap-12">
      <h3>{{ name }}</h3>
      <p text="neutral-800 group-hover:neutral-900" nq-prose-compact mt-0 transition-colors f-pt-2xs>
        {{ description }}
      </p>

      <div class="nq-hoverable-cta" mt-auto w-max>
        <p v-if="developer" text-14 nq-label>
          By <span text-blue>{{ developer }}</span>
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
