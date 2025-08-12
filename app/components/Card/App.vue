<script setup lang="ts">
const { link: _link } = defineProps<{ color: string, link: string, logo: string, type: string, name: string, description: string, developer?: string }>()

const url = 'https://nimiq.com'
const link = _link.replace(/\/$/, '').replace(url, '')
</script>

<template>
  <NuxtLink :to="link" target="_blank" w="[min(calc(100vw-var(--px,32px)*2),350px)]" :style="`--c: ${color}`" group external p-6 rounded-6 gap-24 h-full nq-hoverable :aria-label="`Go to ${name} website`">
    <div bg="$c" stack mb-0 rounded-4 h-240>
      <NuxtImg :src="logo" max-w="45%" rounded-4 op-60 h-auto max-h-full object-cover />
      <p text="12 white/70" self-start right-12 top-12 justify-self-end relative nq-label>
        {{ type }}
      </p>
    </div>
    <div p-26 pt-0 flex-1 flex="~ col gap-12">
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
