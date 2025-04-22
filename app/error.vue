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

useHead({
  title: isBlogPostError.value ? 'Article not found | Nimiq Blog' : `${statusCode.value} - ${statusMessage.value} | Nimiq`,
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

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
    </section>
  </NuxtLayout>
</template>
