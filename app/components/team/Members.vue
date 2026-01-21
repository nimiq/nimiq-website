<script setup lang="ts">
interface TeamMember {
  picture?: string
  fullName: string
  role: string
  description: string
  github?: string
  linkedin?: string
  twitter?: string
}

const { items } = defineProps<{ items: TeamMember[] }>()

// SSR-friendly sorted list (alphabetical by fullName)
const sortedItems = computed(() => [...items].sort((a, b) => a.fullName.localeCompare(b.fullName)))

// Client-only randomized list
const randomizedItems = ref<TeamMember[]>([])
const hasShuffled = ref(false)

onMounted(() => {
  randomizedItems.value = [...items].sort(() => Math.random() - 0.5)
  hasShuffled.value = true
})

// Which list to render
const displayItems = computed(() => hasShuffled.value ? randomizedItems.value : sortedItems.value)
</script>

<template>
  <ul class="bg-neutral-0 gap-0" columns="1 sm:2 lg:3" style="column-rule: 2px solid var(--colors-neutral-400)">
    <li v-for="member in displayItems" :key="member.fullName" class="break-inside-avoid-column border-b-2 border-solid border-neutral-400">
      <div v-if="member.picture" class="px-32 pt-32">
        <NuxtImg class="rounded-6 w-full object-cover" :src="member.picture" :alt="member.fullName" />
      </div>
      <svg v-else class="text-neutral-400 mx-auto w-156 f-mt-xs" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <mask id="team-avatar" fill="#fff">
          <path d="M5.122 13.14A10.623 10.623 0 0 0 .72 14.987 1.835 1.835 0 0 0 0 16.46v2.314a.372.372 0 0 0 .372.373h16.39a.373.373 0 0 0 .371-.373V16.46a1.836 1.836 0 0 0-.72-1.472 10.623 10.623 0 0 0-4.402-1.849.367.367 0 0 0-.356.13c-.086.103-.907 2.152-3.088 2.152-2.116 0-3.023-2.075-3.088-2.152a.374.374 0 0 0-.357-.13Z" />
          <path d="M10.492 12.443a5.22 5.22 0 0 0 3.29-4.843V6.11a5.214 5.214 0 1 0-10.428 0V7.6a5.206 5.206 0 0 0 7.138 4.843ZM4.842 7.6V6.295a.186.186 0 0 1 .186-.186h.56c.957 0 2.896.236 4.334-1.332a.185.185 0 0 1 .274 0 3.94 3.94 0 0 0 1.978 1.174.162.162 0 0 1 .122.156V7.6a3.726 3.726 0 0 1-7.452 0h-.002Z" />
        </mask>
        <path fill="currentColor" d="M5.122 13.14A10.623 10.623 0 0 0 .72 14.987 1.835 1.835 0 0 0 0 16.46v2.314a.372.372 0 0 0 .372.373h16.39a.373.373 0 0 0 .371-.373V16.46a1.836 1.836 0 0 0-.72-1.472 10.623 10.623 0 0 0-4.402-1.849.367.367 0 0 0-.356.13c-.086.103-.907 2.152-3.088 2.152-2.116 0-3.023-2.075-3.088-2.152a.374.374 0 0 0-.357-.13Z" />
        <path fill="currentColor" d="M10.492 12.443a5.22 5.22 0 0 0 3.29-4.843V6.11a5.214 5.214 0 1 0-10.428 0V7.6a5.206 5.206 0 0 0 7.138 4.843ZM4.842 7.6V6.295a.186.186 0 0 1 .186-.186h.56c.957 0 2.896.236 4.334-1.332a.185.185 0 0 1 .274 0 3.94 3.94 0 0 0 1.978 1.174.162.162 0 0 1 .122.156V7.6a3.726 3.726 0 0 1-7.452 0h-.002Z" />
      </svg>
      <div class="px-48 pb-48">
        <h3 class="f-mt-md">
          {{ member.fullName }}
        </h3>
        <div v-if="member.role" class="f-mt-2xs flex flex-col">
          <span v-for="(r, j) in member.role.split(',').map(role => role.trim())" :key="r" class="font-semibold">
            {{ r }}{{ member.role.split(',').length - 1 === j ? '' : ',' }}
          </span>
        </div>
        <p class="nq-prose-compact f-mt-sm">
          {{ member.description }}
        </p>
        <ul v-if="member.linkedin || member.github || member.twitter" class="flex flex-gap-x-4 text-neutral-100 left--8 relative f-mt-xs">
          <li v-if="member.github">
            <NuxtLink class="p-8 rounded-4 flex h-max bg-hocus:neutral/6" :to="`https://github.com/${member.github}`" title="Github" external target="_blank" aria-label="Github link">
              <Icon class="text-20" name="nimiq:logos-github" />
            </NuxtLink>
          </li>
          <li v-if="member.twitter">
            <NuxtLink class="p-8 rounded-4 flex h-max bg-hocus:neutral/6" :to="`https://twitter.com/${member.twitter}`" title="Twitter" external target="_blank" aria-label="Twitter link">
              <Icon class="text-20" name="nimiq:logos-twitter" />
            </NuxtLink>
          </li>
          <li v-if="member.linkedin">
            <NuxtLink class="p-8 rounded-4 flex h-max bg-hocus:neutral/6" :to="`https://www.linkedin.com/in/${member.linkedin}`" title="Linkedin" external target="_blank" aria-label="Linkedin link">
              <Icon class="text-20" name="logos:linkedin-icon" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
