<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.NimiqWalletHoverableSlice>())
</script>

<template>
  <section bg-neutral-0>
    <!-- TODO Should be gradient-subtle-neutral -->
    <PrismicLink internal-component="a" p="32 md:40 lg:48 b-0" :field="slice.primary.link" of-hidden nq-hoverable bg="neutral-300 hocus:neutral-0" style="--ring-color: transparent" grid="~ gap-x-48 lg:gap-x-96 md:rows-[auto_auto_1fr] md:cols-[221px_1fr]">
      <div i-nimiq:logos-nimiq text-56 lg:ml-24 />
      <h3 text="22/28.6 lg:28/36.4" mt-16 text-left font-semibold lg:ml-24>
        {{ slice.primary.title }}
      </h3>
      <p mt-12 max-w-28ch lg:mx-auto text="16/24 md:17/25.5 lg:18/28 neutral-800" lg:ml-24>
        {{ slice.primary.description }}
      </p>
      <div grid="~ place-content-center" mb-32 size-32 rounded-full bg-gradient-blue max-md:mt-12 md:hidden>
        <div i-nimiq:chevron-right text="9 white" />
      </div>
      <div mt-auto>
        <h4 text-12 nq-label>
          {{ slice.primary.poweredByLabel }}
        </h4>
        <ul flex="~ gap-16" f-m-xs>
          <li v-for="({ logo }, i) in slice.primary.poweredByLogos" :key="i">
            <NuxtImg :src="$prismic.asImageSrc(logo)" w-full h="32 md:36" object-contain />
          </li>
        </ul>
      </div>
      <div h-196 md:row-span-full md:col-start-2 md:mx-auto lg:mb--68 max-md:mr--128 lg:h-490>
        <PrismicImage :field="slice.primary.screenshot" max-xl:transform-origin-top-left max-xl:scale-155 />
      </div>
    </PrismicLink>
  </section>
</template>
