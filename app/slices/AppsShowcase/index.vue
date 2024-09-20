<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.AppsShowcaseSlice>())
const { sectionRef } = useSection(props.slice.id, 'grey')
</script>

<template>
  <section ref="sectionRef">
    <ul v-if="slice.variation === 'nimiqsApps'" grid="~ cols-1 lg:cols-2 gap-20 md:gap-22">
      <li
        v-for="({ description, highlight, item, preview, title, link }, i) in slice.primary.apps" :key="i" :class="{ 'lg:col-span-full': highlight }"
      >
        <PrismicLink p="32 md:40 lg:48 b-0" :field="link" of-hidden nq-hoverable bg="gradient-subtle-neutral hocus:neutral-0" style="--ring-color: rgb(var(--nq-neutral-400));" :grid="`~ gap-x-48 lg:gap-x-80 md:rows-[auto_auto_1fr] md:cols-[221px_1fr] md:flow-col ${highlight ? '' : 'lg:rows-[repeat(4,auto)] lg:cols-1'}`">
          <div v-if="item === 'Nimiq Pay'" size-48 rounded-12 bg-gradient-gold grid="~ place-content-center" :class="{ 'lg:mx-auto': !highlight, 'max-xl:row-span-ful': highlight }">
            <div i-nimiq:logos-nimiq-pay-vertical-mono text="32 [#ededee]" />
          </div>
          <div v-else-if="item === 'CPL'" i-nimiq:logos-cpl-tag text-48 :class="{ 'lg:mx-auto': !highlight, 'lg:ml-24': highlight }" />
          <div v-else-if="item === 'Nimiq Wallet'" i-nimiq:logos-nimiq text-53 :class="{ 'lg:mx-auto': !highlight, 'lg:ml-24': highlight }" />
          <h3 text="22/28.6 lg:28/36.4" mt-16 font-semibold lg:mt-24 :class="!highlight ? 'lg:text-center' : 'text-left lg:ml-24'">
            {{ title }}
          </h3>
          <p mt-12 max-w-28ch font-semibold lg:mx-auto text="16/24 md:17/25.5 lg:18/28 neutral-800" :class="{ 'lg:text-center': !highlight, 'lg:ml-24': highlight }">
            {{ description }}
          </p>
          <div grid="~ place-content-center" size-32 rounded-full bg-gradient-blue max-md:mt-12 md:hidden>
            <div i-nimiq:chevron-right text="9 white" />
          </div>
          <div :class="{ 'max-md:mr--128 md:ml-16': item === 'CPL', 'max-md:mr--128': item === 'Nimiq Wallet', 'md:max-w-245': item === 'Nimiq Pay', 'lg:mt-40': !highlight, 'md:row-span-full lg:min-h-490': highlight }" h-282 md:mx-auto max-md:mt-32>
            <PrismicImage :field="preview" :class="{ 'max-xl:scale-155 max-xl:transform-origin-top-left': item === 'Nimiq Wallet' }" />
          </div>
        </PrismicLink>
      </li>
    </ul>
  </section>
</template>

<!-- /* Rectangle 1618 */

position: absolute;
width: 1008px;
height: 538px;
left: calc(50% - 1008px/2);
bottom: 0px;

background: linear-gradient(180deg, rgba(31, 35, 72, 0) 0%, #1F2348 100%);
opacity: 0.05; -->
