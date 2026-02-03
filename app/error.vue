<script setup lang="ts">
const { error } = defineProps<{ error: Error & { statusCode?: number, statusMessage?: string } }>()

const statusCode = computed(() => error.statusCode || 404)
const statusMessage = computed(() => {
  if (error.statusMessage)
    return error.statusMessage

  switch (statusCode.value) {
    case 404: return 'Page not found'
    case 403: return 'Access denied'
    case 500: return 'Something went wrong'
    case 503: return 'Service temporarily unavailable'
    default: return 'Something went wrong'
  }
})

const route = useRoute()
const router = useRouter()
const { redirectAllErrors } = useRuntimeConfig().public

const isDeveloperPage = computed(() => {
  return route.path.startsWith('/developer') || route.path.startsWith('/developers')
    || route.path.includes('/dev/') || route.path.includes('/docs/')
})

const isBlogPostError = computed(() => error.message === 'Article not found')
const isBlogPage = computed(() => route.path.startsWith('/blog') || isBlogPostError.value)

onMounted(() => {
  if (isDeveloperPage.value || redirectAllErrors) {
    const originalPath = encodeURIComponent(route.fullPath)
    router.push(`/developers/error?original-path=${originalPath}&status=${statusCode.value}`)
  }
})

const homeRoute = computed(() => isBlogPage.value ? '/blog' : '/')
const homeLinkText = computed(() => isBlogPage.value ? 'Browse all articles' : 'Back to home')

const handleError = () => clearError({ redirect: homeRoute.value })

const heading = computed(() => {
  if (isBlogPostError.value)
    return 'Article not found'
  return `${statusCode.value} - ${statusMessage.value}`
})

const paragraph = computed(() => {
  if (isBlogPostError.value)
    return 'We couldn\'t find the article you\'re looking for. It may have been moved, renamed, or is not available.'

  switch (statusCode.value) {
    case 404: return 'We couldn\'t find the page you were looking for. It might have been moved or doesn\'t exist.'
    case 403: return 'You don\'t have permission to access this page.'
    case 500: return 'Something went wrong on our end. Please try again later.'
    case 503: return 'Service temporarily unavailable. Please try again later.'
    default: return 'We encountered a problem while trying to load this page. Please try again later.'
  }
})

// Error pages need proper SEO handling to prevent search engine confusion
useSeoMeta({
  title: isBlogPostError.value ? 'Article not found' : `${statusCode.value} - ${statusMessage.value}`,
  description: computed(() => paragraph.value),
  robots: 'noindex, nofollow',

  ogTitle: isBlogPostError.value ? 'Article not found' : `${statusCode.value} - ${statusMessage.value}`,
  ogDescription: computed(() => paragraph.value),
  ogType: 'website',

  twitterCard: 'summary',
  twitterTitle: isBlogPostError.value ? 'Article not found' : `${statusCode.value} - ${statusMessage.value}`,
  twitterDescription: computed(() => paragraph.value),
})
const stack = error.stack
// Create error copy without stack for display (avoid showing stack twice)
const errorWithoutStack = computed(() => {
  const { stack: _, ...rest } = { ...error }
  return rest
})

console.error(error)
</script>

<template>
  <NuxtLayout>
    <section class="bg-neutral-100 pt-12 md:pt-16">
      <h1>{{ heading }}</h1>
      <p>{{ paragraph }}</p>
      <div class="mt-6 md:mt-8 flex flex-md:justify-center">
        <NuxtLink class="nq-arrow nq-pill-lg nq-pill-blue" :to="homeRoute" @click="handleError">
          {{ homeLinkText }}
        </NuxtLink>
      </div>

      <div class="nq-prose-compact w-full mt-6 md:mt-8">
        <details>
          <summary class="w-full cursor-pointer text-center text-neutral-800">
            <span>Details</span>
          </summary>

          <pre class="bg-red/10 text-red-1100 outline-red-600">{{ errorWithoutStack }}</pre>

          <span class="text-red-1100 px-3 md:px-4 mt-4 md:mt-6 nq-label">Stack</span>
          <pre class="bg-red/10 text-red-1100 mt-1 outline-red-600">{{ stack }}</pre>
        </details>
      </div>
    </section>
  </NuxtLayout>
</template>
