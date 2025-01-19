<script setup lang="ts">
import type { Content } from '@prismicio/client'
import mediumZoom from 'medium-zoom'

const props = defineProps(getSliceComponentProps<Content.WhitepaperSliceSlice>())

enum LitepaperVersion {
  V1 = '1.0',
  V2 = '2.0',
}

const litepaperV1 = computed(() => props.slice.items[1]!)
const litepaperV2 = computed(() => props.slice.items[0]!)

const selected = useRouteQuery<LitepaperVersion>('version', LitepaperVersion.V2)

const litepaperProps = computed(() => selected.value === LitepaperVersion.V1 ? litepaperV1.value : litepaperV2.value)

const formatter = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' })

const articleEl = useTemplateRef<HTMLElement>('articleEl')
useIntersectionObserver(articleEl, () => {
  mediumZoom(':is(header,article) img', { margin: 24, background: 'rgb(var(--nq-neutral-0) / 1)' })
})
</script>

<template>
  <HeroLeftAligned :headline="litepaperProps.headline" :subline="litepaperProps.subline" color="bg-neutral-0">
    <template #bottom>
      <div flex="~ gap-x-32 gap-y-20 wrap items-baseline">
        <SelectRoot v-model="selected">
          <SelectTrigger flex="~ items-center gap-12" rounded-full px-16 py-10 outline-none bg-gradient-green>
            <SelectValue text="sm white" nq-label />
            <div i-nimiq:triangle-down text="10 white" />
          </SelectTrigger>

          <SelectPortal>
            <SelectContent :side-offset="5" z-10 min-w-120 w-full rounded-18 bg-white shadow motion-safe:animate="fade-in duration-100ms ease-out">
              <SelectViewport p-4>
                <SelectItem v-for="v in LitepaperVersion" :key="v" :value="v" flex="~ gap-8 items-center" cursor-pointer rounded-14 px-16 py-10 outline-none transition-colors hocus:bg-neutral-200>
                  <SelectItemText text="14" nq-label>
                    Version {{ v }}
                  </SelectItemText>
                  <SelectItemIndicator as-childr>
                    <div i-nimiq:triangle-left text="10 neutral-800" />
                  </SelectItemIndicator>
                </SelectItem>
              </SelectViewport>
            </SelectContent>
          </SelectPortal>
        </SelectRoot>
        <date nq-label text="xs neutral-700">
          Updated {{ formatter.format(getDate(litepaperProps.date) as Date) }}
        </date>
      </div>
    </template>
  </HeroLeftAligned>
  <section bg-neutral-0>
    <PrismicRichText ref="articleEl" wrapper="article" class="nq-prose" :field="litepaperProps.content" />
  </section>
  <Disclaimer f-mt-72 />
</template>
