<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { WhitepaperSliceSliceDefaultItem } from '~~/prismicio-types'
import { createReusableTemplate } from '@vueuse/core'
import mediumZoom from 'medium-zoom'

const props = defineProps(getSliceComponentProps<Content.WhitepaperSliceSlice>())

const LitepaperVersion = { V1: '1.0', V2: '2.0' } as const
type LitepaperVersionType = typeof LitepaperVersion[keyof typeof LitepaperVersion]

const litepaperV1 = computed(() => props.slice.items[1]!)
const litepaperV2 = computed(() => props.slice.items[0]!)

const selected = useRouteQuery<LitepaperVersionType>('version', LitepaperVersion.V2)

const { define: DefineLitepaper, reuse: ReuseLitepaper } = createReusableTemplate<WhitepaperSliceSliceDefaultItem>()

const articleEl = useTemplateRef<HTMLElement>('articleEl')
useIntersectionObserver(articleEl, () => {
  mediumZoom(':is(header,article) img', { margin: 24, background: 'rgb(var(--nq-neutral-0) / 1)' })
})
</script>

<template>
  <div>
    <DefineLitepaper v-slot="{ headline, subline, content, date }">
      <HeroLeftAligned :headline="headline" :subline="subline" bg-neutral-100>
        <template #bottom>
          <div flex="~ gap-x-32 gap-y-20 wrap items-baseline">
            <SelectRoot v-model="selected">
              <SelectTrigger flex="~ items-center gap-12" outline-none px-16 py-10 rounded-full bg-gradient-green aria-label="Select Litepaper Version">
                <SelectValue text="f-sm white" nq-label />
                <div i-nimiq:triangle-down text="10 white" />
              </SelectTrigger>

              <SelectPortal>
                <SelectContent
                  :side-offset="5" rounded-18 bg-white min-w-120 w-full shadow z-10
                  motion-safe:animate="fade-in duration-100ms ease-out"
                >
                  <SelectViewport p-4>
                    <SelectItem
                      v-for="v in LitepaperVersion" :key="v" :value="v" flex="~ gap-8 items-center"
                      outline-none px-16 py-10 rounded-14 cursor-pointer transition-colors hocus:bg-neutral-200
                    >
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
            <span nq-label text="f-xs neutral-700">
              Updated
              <NuxtTime :datetime="getDate(date) as Date" month="long" day="numeric" year="numeric" />
            </span>
          </div>
        </template>
      </HeroLeftAligned>
      <section bg-neutral-100>
        <RichText wrapper="article" nq-prose :field="content" text-20 />
      </section>
    </DefineLitepaper>

    <div ref="articleEl">
      <div v-show="selected === LitepaperVersion.V2">
        <ReuseLitepaper v-bind="litepaperV2" />
      </div>
      <div v-show="selected === LitepaperVersion.V1">
        <ReuseLitepaper v-bind="litepaperV1" />
      </div>
    </div>

    <Disclaimer f-mt-xl />
  </div>
</template>
