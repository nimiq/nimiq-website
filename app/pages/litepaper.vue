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
    <section bg-neutral-100>
      <div max-w-780px w-full>
        <h1 nq-heading-lg>
          {{ currentPage.headline }}
        </h1>
        <p v-if="currentPage.subline" text="neutral-700 f-lg" mt-24 max-w-prose>
          {{ currentPage.subline }}
        </p>
        <div flex="~ gap-x-32 gap-y-20 wrap items-baseline" mt-32>
          <SelectRoot v-model="selected">
            <SelectTrigger flex="~ items-center gap-12" px-16 py-10 outline-none rounded-full bg-gradient-green aria-label="Select Litepaper Version">
              <SelectValue text="f-sm white" nq-label />
              <Icon name="nimiq:triangle-down" text="10 white" />
            </SelectTrigger>

            <SelectPortal>
              <SelectContent :side-offset="5" rounded-18 bg-white min-w-120 w-full shadow z-10>
                <SelectViewport p-4>
                  <SelectItem
                    v-for="v in LitepaperVersion" :key="v" :value="v" flex="~ gap-8 items-center"
                    px-16 py-10 outline-none rounded-14 cursor-pointer transition-colors hocus:bg-neutral-200
                  >
                    <SelectItemText text-14 nq-label>
                      Version {{ v }}
                    </SelectItemText>
                    <SelectItemIndicator>
                      <Icon name="nimiq:triangle-left" text="10 neutral-800" />
                    </SelectItemIndicator>
                  </SelectItem>
                </SelectViewport>
              </SelectContent>
            </SelectPortal>
          </SelectRoot>
          <span nq-label text="f-xs neutral-700">
            Updated
            <NuxtTime :datetime="new Date(currentPage.date)" month="long" day="numeric" year="numeric" />
          </span>
        </div>
      </div>
    </section>

    <section ref="articleEl" bg-neutral-100>
      <ContentRenderer v-if="selected === LitepaperVersion.V2 && posPage" :value="posPage" article nq-prose text-20 max-w-780px />
      <ContentRenderer v-else-if="powPage" :value="powPage" article nq-prose text-20 max-w-780px />
    </section>

    <AppDisclaimer bg-color="grey" />
  </NuxtLayout>
</template>
