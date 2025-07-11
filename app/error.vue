<script setup lang="ts">
const props = defineProps<{ error: Error & { statusCode?: number, statusMessage?: string } }>()

const statusCode = computed(() => props.error.statusCode || 404)
const statusMessage = computed(() => {
  if (props.error.statusMessage)
    return props.error.statusMessage

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

const isDeveloperPage = computed(() => {
  return route.path.startsWith('/developer') || route.path.startsWith('/developers')
    || route.path.includes('/dev/') || route.path.includes('/docs/')
})

const isBlogPostError = computed(() => props.error.message === 'Article not found')
const isBlogPage = computed(() => route.path.startsWith('/blog') || isBlogPostError.value)

onMounted(() => {
  if (isDeveloperPage.value || process.env.REDIRECT_ALL_ERRORS === 'true') {
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
const stack = props.error.stack
// eslint-disable-next-line vue/no-mutating-props
delete props.error.stack
</script>

<template>
  <NuxtLayout>
    <section bg-neutral-100 f-pt-2xl>
      <h1>{{ heading }}</h1>
      <p>{{ paragraph }}</p>
      <div f-mt-lg flex="~ md:justify-center">
        <NuxtLink :to="homeRoute" nq-arrow nq-pill-lg nq-pill-blue @click="handleError">
          {{ homeLinkText }}
        </NuxtLink>
      </div>

      <div nq-prose-compact w-full f-mt-lg>
        <details>
          <summary w-full cursor-pointer text="center neutral-800">
            <span>Details</span>
          </summary>

          <pre bg="red/10" text-red-1100 outline-red-600>{{ error }}</pre>

          <span text-red-1100 f-px-sm f-mt-md nq-label>Stack</span>
          <pre bg="red/10" text-red-1100 mt-4 outline-red-600>{{ stack }}</pre>
        </details>
      </div>
    </section>
  </NuxtLayout>
</template>
