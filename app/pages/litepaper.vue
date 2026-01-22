<script setup lang="ts">
import mediumZoom from 'medium-zoom'
import { SelectContent, SelectItem, SelectItemIndicator, SelectItemText, SelectPortal, SelectRoot, SelectTrigger, SelectValue, SelectViewport } from 'reka-ui'

const posPage = await queryCollection('litepaperPos').first()
const powPage = await queryCollection('litepaperPow').first()

if (!posPage || !powPage)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const LitepaperVersion = { V1: '1.0', V2: '2.0' } as const
type LitepaperVersionType = typeof LitepaperVersion[keyof typeof LitepaperVersion]

const route = useRoute()
const router = useRouter()
const selected = computed({
  get: () => (route.query.version as LitepaperVersionType) || LitepaperVersion.V2,
  set: (v: LitepaperVersionType) => router.replace({ query: { ...route.query, version: v } }),
})

const currentPage = computed(() => selected.value === LitepaperVersion.V1 ? powPage : posPage)

const title = posPage.seo?.title || posPage.headline || 'Whitepaper | Nimiq'
const description = posPage.seo?.description || posPage.subline || 'Nimiq\'s whitepaper - A simple, secure and censorship-resistant payment protocol, native to the web.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/litepaper' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/litepaper' }] })

const articleEl = useTemplateRef<HTMLElement>('articleEl')
onMounted(() => {
  let unwatched = false
  const unwatch = watch(articleEl, (el) => {
    if (el && !unwatched) {
      mediumZoom(':is(header,article) img', { margin: 24, background: 'var(--colors-neutral-0)' })
      unwatched = true
      nextTick(() => unwatch())
    }
  }, { immediate: true })
})
</script>

<template>
  <NuxtLayout v-if="currentPage">
    <section class="bg-neutral-100">
      <div class="max-w-780px w-full">
        <h1 class="nq-heading-lg">
          {{ currentPage.headline }}
        </h1>
        <p v-if="currentPage.subline" class="text-neutral-700 text-base md:text-lg mt-6 max-w-prose">
          {{ currentPage.subline }}
        </p>
        <div class="flex gap-x-8 gap-y-5 flex-wrap flex-items-baseline mt-8">
          <SelectRoot v-model="selected">
            <SelectTrigger class="flex flex-items-center gap-3 px-4 py-2.5 outline-none rounded-full bg-gradient-green" aria-label="Select Litepaper Version">
              <SelectValue class="text-xs md:text-sm text-white nq-label" />
              <Icon class="text-10 text-white" name="nimiq:triangle-down" />
            </SelectTrigger>

            <SelectPortal>
              <SelectContent class="rounded-[18px] bg-white min-w-[120px] w-full z-10" :side-offset="5" shadow>
                <SelectViewport class="p-1">
                  <SelectItem v-for="v in LitepaperVersion" :key="v" class="flex gap-2 flex-items-center px-4 py-2.5 outline-none rounded-3.5 cursor-pointer transition-colors" :value="v" hocus:bg-neutral-200>
                    <SelectItemText class="text-14 nq-label">
                      Version {{ v }}
                    </SelectItemText>
                    <SelectItemIndicator>
                      <Icon class="text-10 text-neutral-800" name="nimiq:triangle-left" />
                    </SelectItemIndicator>
                  </SelectItem>
                </SelectViewport>
              </SelectContent>
            </SelectPortal>
          </SelectRoot>
          <span class="nq-label text-[11px] md:text-xs text-neutral-700">
            Updated
            <NuxtTime :datetime="new Date(currentPage.date)" month="long" day="numeric" year="numeric" />
          </span>
        </div>
      </div>
    </section>

    <section ref="articleEl" class="bg-neutral-100">
      <ContentRenderer v-if="selected === LitepaperVersion.V2 && posPage" class="nq-prose text-20 max-w-780px" :value="posPage" article />
      <ContentRenderer v-else-if="powPage" class="nq-prose text-20 max-w-780px" :value="powPage" article />
    </section>

    <AppDisclaimer class="bg-color-grey" />
  </NuxtLayout>
</template>
