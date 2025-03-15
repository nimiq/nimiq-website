<script setup lang="ts">
import { components } from '~/slices'

const params = useRoute().params as { uid: string[] }
const pathParams = typeof params.uid === 'string' ? [] : params?.uid.filter(Boolean) || []
const isGrandchildPage = pathParams.length === 2
const uid = pathParams.at(-1) || 'home'
const isHome = uid === 'home'

const { client } = usePrismic()
const { data: page } = await useAsyncData('$prismic-page', () => client.getByUID('page', uid))

// We check that the page.links is not empty if isGrandchildPage and that the links defined are the same as in the URL
if (isGrandchildPage) {
  const parentsLengthMatches = page.value?.data.parents.length === pathParams.length - 1
  const parentsSubpathMatches = page.value?.data.parents.every((parent, index) => (parent as { uid: string }).uid === pathParams[index])

  const notValid = !parentsLengthMatches || !parentsSubpathMatches
  if (notValid)
    throw new Error(`The page with UID "${uid}" is not valid: Check that the parents.`)
}

definePageMeta({
  middleware: [
    async function (to) {
      if (to.path !== '/supersimpleswap')
        return
      await import('~/assets/css/bg-blue-sss.css')
    },
  ],
})

useHead({
  title: page.value?.data.meta_title || 'Nimiq Website',
  meta: [
    { name: 'description', content: page.value?.data.meta_description || 'The most accepted crypto in the World' },
  ],
})

const darkHeader = computed(() => page.value?.data.darkHeader || isHome || uid === 'supersimpleswap')
const footerBgColor = computed(() => (page.value?.data.slices.at(-1)?.primary as { bgColor: 'white' | 'grey' | 'darkblue' })?.bgColor)

const draft = computed(() => page.value?.data && 'draft' in page.value.data && page.value?.data.draft)

const showSocialsHexagonBg = isHome
// defineOgImageComponent('DefaultImage')
</script>

<template>
  <NuxtLayout :footer-bg-color :dark-header :draft :show-socials-hexagon-bg>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
