<script setup lang="ts">
const posPage = await queryCollection('litepaperPos').first()
const powPage = await queryCollection('litepaperPow').first()

if (!posPage || !powPage)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const LitepaperVersion = { V1: '1.0', V2: '2.0' } as const
type LitepaperVersionType = typeof LitepaperVersion[keyof typeof LitepaperVersion]

const route = useRoute()
const router = useRouter()
const version = useRequestURL().searchParams.get('version') as LitepaperVersionType | null
const selected = computed({
  get: () => (route.query.version as LitepaperVersionType) || version || LitepaperVersion.V2,
  set: (v: LitepaperVersionType) => router.replace({ query: { ...route.query, version: v } }),
})

const currentPage = computed(() => selected.value === LitepaperVersion.V1 ? powPage : posPage)

const title = computed(() => `Nimiq Whitepaper v${selected.value}`)
const description = posPage.seo?.description || posPage.subline || 'Nimiq\'s whitepaper - A simple, secure and censorship-resistant payment protocol, native to the web.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/litepaper' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/litepaper' }] })
</script>

<template>
  <NuxtLayout v-if="currentPage">
    <section class="bg-neutral-100">
      <div class="flex flex-col w-full px-8" style="--nq-max-width: 780px">
        <h1 class="nq-h1 !text-left">
          {{ currentPage.headline }}
        </h1>
        <p v-if="currentPage.subline" class="text-neutral-700 text-base md:text-lg mt-6 max-w-prose !text-left">
          {{ currentPage.subline }}
        </p>
        <div class="flex gap-x-8 gap-y-5 flex-wrap items-baseline mt-8">
          <SelectRoot v-model="selected">
            <SelectTrigger class="group flex items-center gap-3 px-4 py-2.5 outline-none rounded-full bg-gradient-green" aria-label="Select Litepaper Version">
              <SelectValue class="text-xs md:text-sm text-white nq-label" />
              <Icon class="text-[10px] text-white transition-transform duration-200 ease-out group-data-[state=open]:rotate-180" name="nimiq:triangle-down" />
            </SelectTrigger>

            <SelectPortal>
              <SelectContent class="select-content z-10 rounded-[18px] bg-white shadow-lg">
                <SelectViewport class="p-1">
                  <SelectItem
                    v-for="v in LitepaperVersion" :key="v" :value="v"
                    class="flex items-center gap-3 px-4 py-2.5 rounded-[14px] cursor-pointer nq-label text-xs md:text-sm text-neutral transition-colors outline-none data-[highlighted]:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-inset"
                  >
                    <SelectItemText>Version {{ v }}</SelectItemText>
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

    <section class="bg-neutral-100">
      <ContentRenderer v-if="selected === LitepaperVersion.V2 && posPage" class="nq-prose text-xl" :value="posPage" article />
      <ContentRenderer v-else-if="powPage" class="nq-prose text-xl" :value="powPage" article />
    </section>

    <AppDisclaimer class="bg-neutral-100" />
  </NuxtLayout>
</template>

<style scoped>
.select-content {
  outline: 1.5px solid color-mix(in oklch, var(--color-neutral) 6%, transparent);
  outline-offset: -1.5px;
  animation: select-in 150ms ease-out;
}

.select-content[data-state="closed"] {
  animation: select-out 100ms ease-in;
}

@keyframes select-in {
  from { opacity: 0; transform: scale(0.96); }
}

@keyframes select-out {
  to { opacity: 0; transform: scale(0.96); }
}
</style>
