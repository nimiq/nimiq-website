<script setup lang="ts">
import type { Block, Header, Layer } from './types'

const { milestones: _milestones, layers: _layers } = defineProps<{ milestones: Header[], layers: Layer[], firstYear: number, firstMonth: number }>()

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()

function getStartOfBlock(block: Block | Block[] | Block[][]) {
  if (!block)
    throw new Error('Block is missing')
  if (Array.isArray(block))
    return getStartOfBlock(block.at(0)!)
  return { '--first-month': block.month - 1, '--first-year': block.year }
}

function getNestedBlocksStyles(blocks: Block[][], i: number) {
  if (!blocks)
    throw new Error('Block is missing')
  const nestedBlock = blocks.at(i)
  if (!nestedBlock)
    throw new Error(`Nested block at index ${i} is missing`)

  const { year: firstYear, month: firstMonth } = nestedBlock.at(0)!
  const { year: untilYear, month: untilMonth } = blocks.at(i + 1)?.at(0) || { year: undefined, month: undefined }
  if (!untilYear || !untilMonth)
    return { '--first-month': firstMonth, '--first-year': firstYear, '--column-end': 'span -1' }
  return { '--first-month': firstMonth, '--first-year': firstYear, '--until-month': untilMonth, '--until-year': untilYear }
}

function isNestedBlocks(blocks: Block[] | Block[][]): blocks is Block[][] {
  return Array.isArray(blocks[0])
}

const milestones = computed(() => {
  return _milestones.map((item, i) => {
    const currentItem = _milestones.at(i)
    const nextItem = _milestones.at(i + 1)
    const untilYear = currentItem?.untilYear || nextItem?.year || 'var(--current-year)'
    const untilMonth = currentItem?.untilMonth || (nextItem ? nextItem.month : 'var(--current-month)')
    return { ...item, untilYear, untilMonth }
  })
})
</script>

<template>
  <div class="roadmap" w-full relative of-x-auto flex="~ col" :style="`--first-month: ${firstMonth}; --first-year: ${firstYear}; --current-year: ${currentYear}; --current-month: ${currentMonth}`">
    <div class="layer milestone-lines" w-max inset-y-0 absolute of-hidden>
      <div v-for="({ month, year }, i) in milestones.slice(1)" :key="i" :style="`--year: ${year}; --month: ${month};`" text="neutral/5" relative flex="~ col">
        <div h="[calc(var(--pt)/2)]" w="$vertical-lines-w" bg-gradient="to-b from-$bg to-current" />
        <div h="[calc(var(--pt)/2-4px)]" w="$vertical-lines-w" bg-current />
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="58" fill="none"><path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M1 57v-.88a6 6 0 0 1 .82-3.02l12.42-21.33a6 6 0 0 0 0-6.04L1.82 4.4A6 6 0 0 1 1 1.38V1" /></svg>
        <div w="$vertical-lines-w" bg-current flex-1 />
        <div h="[calc(var(--pt)/2)]" w="$vertical-lines-w" bg-gradient="to-t from-$bg to-current" />
      </div>
      <div style="--year: var(--current-year); --month: var(--current-month);" text-red h-full relative flex="~ col">
        <div h="$pt" w="$vertical-lines-w" bg-gradient="to-b from-$bg to-current" />
        <div w="$vertical-lines-w" bg-current flex-1 />
        <div h="$pt" w="$vertical-lines-w" bg-gradient="to-t from-$bg to-current" />
      </div>
    </div>

    <header flex="~ items-center" w-max relative of-visible ml="$ml" pt="$pt">
      <div pl-0 left-0 absolute z-1 w="$pl" flex="~ items-center justify-center">
        <p text="center 10" px-6 bg-neutral-100 whitespace-nowrap z-1 nq-label>
          {{ firstYear }}
        </p>
        <div flex="~ items-center gap-6" right--2 absolute>
          <div v-for="i in 4" :key="i" bg-neutral-500 h-1 w-5 ring="y-0.5 neutral-500" />
        </div>
      </div>
      <div class="layer" pl="$pl" grid-rows-1 items-center z-1 of-visible style="grid-template-columns: repeat(calc(1 + var(--columns)), var(--columns-w))">
        <div v-for="({ label, month, year, untilMonth, untilYear }, i) in milestones" :key="i" :style="`--year: ${year}; --month: ${month + (i > 0 ? 1 : 0)}; --until-year: ${untilYear}; --until-month:${untilMonth}`" drop-shadow first="">
          <div text="10/12 neutral center" flex="~ justify-center items-center" bg="neutral-0 dark:neutral-400" px-16 rounded-6 h-full min-h-52 nq-label>
            {{ label }}
          </div>
        </div>
        <div :style="`--year: ${milestones.at(-1)?.untilYear}; --month: ${Number(milestones.at(-1)?.untilMonth)}; grid-column: var(--column-start) / -1`" h-full bg-repeat-x class="milestone-future" flex="~ items-center justify-center">
          <span text="12 neutral-900" whitespace-nowrap nq-label>{{ currentYear + 1 }}</span>
        </div>
      </div>
    </header>

    <ul flex="~ col gap-16" ml="$ml" w-max f-pt-lg f-mt-xs>
      <li v-for="(layer, l) in layers" :key="layer.name" :class="layer.layerClasses" flex="~ col justify-end" p-24 pr-0 rounded-l-6 w-max self-end relative pl="$pl">
        <div v-for="block in layer.blocks" :key="block.name" mt-24 first:mt-0 flex="~ justify-end">
          <div pt-12 relative>
            <span text-10 grid-row-span-full block left-0 top-0 absolute nq-label :class="layer.text">{{ block.name }}</span>
            <div v-if="isNestedBlocks(block.items)" flex="~ gap-8" :style="`--block-index:${l}`" :class="{ 'mr--3': block.items.length > 1 }">
              <div v-for="(subblock, i) in block.items" :key="i" :style="getNestedBlocksStyles(block.items, i)" :class="[layer.blocksClasses, block.nestedBlocksClasses]" class="layer force-row-height" rounded-6 p="$p-block" shadow last:rounded-r-0>
                <RoadmapBlock v-for="item in subblock" :key="item.name" v-bind="item" />
              </div>
            </div>
            <div v-else class="layer force-row-height" :style="getStartOfBlock(block.items)" :class="[layer.blocksClasses, block.nestedBlocksClasses]" p-16 pr-0 rounded-l-6 shadow>
              <RoadmapBlock v-for="(item, i) in block.items" :key="i" v-bind="item" />
            </div>
          </div>
        </div>
        <div :class="layer.text" text-18 bottom-24 left-24 absolute flex="~ items-center gap-12">
          <Icon :name="layer.icon" class="text-32" />
          <span font-bold>{{ layer.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.roadmap {
  --last-displayed-year: calc(var(--current-year) + 1);
  --columns-w: 19px;
  --ml: 96px;
  --pl: 115px;
  --pt: 48px;
  --p-block: 16px;
  --vertical-lines-w: 2px;

  .layer {
    --until-year: var(--last-displayed-year);
    --until-month: var(--current-month);
    --columns: calc((var(--until-year) - var(--first-year)) * 12 + (var(--until-month) - var(--first-month)));
    display: grid;
    grid-template-columns: repeat(var(--columns), var(--columns-w));
    row-gap: 12px;
    > div {
      --column-start: calc((var(--year) - var(--first-year)) * 12 + var(--month) - var(--first-month));
      --column-end: calc((var(--until-year) - var(--first-year)) * 12 + var(--until-month) - var(--first-month));
      grid-column: max(1, var(--column-start)) / var(--column-end, span 1);
    }
    &.force-row-height {
      grid-template-rows: repeat(auto-fill, 16px);
    }
  }

  .milestone-lines {
    left: calc(var(--ml) + var(--pl) + var(--p-block));
    > div {
      width: var(--vertical-lines-w);
      left: calc(var(--columns-w) * -1 + var(--vertical-lines-w) + var(--vertical-lines-w));
      --column-end: span 1;
    }
  }

  .milestone-future {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 54' fill='none'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-width='2' d='m1 1 13.24 22.73a6 6 0 0 1 0 6.04L1 52.5' opacity='.06'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
  }

  header {
    .layer > * {
      &:first-child {
        margin-left: calc(-1 * var(--p-block));
        padding-left: var(--p-block);
        width: calc(100% + var(--p-block));
        > div {
          clip-path: polygon(
            0% 0%,
            calc(100% - 19px) 0%,
            calc(100% - 17.57px) 0.256%,
            calc(100% - 16.88px) 0.57%,
            calc(100% - 16.22px) 1.001%,
            calc(100% - 15.59px) 1.544%,
            calc(100% - 15px) 2.194%,
            calc(100% - 14.45px) 2.947%,
            calc(100% - 13.95px) 3.797%,
            calc(100% - 13.49px) 4.739%,
            calc(100% - 13.1px) 5.769%,
            100% 44.231%,
            100.128% 45.325%,
            100.227% 46.459%,
            100.298% 47.623%,
            100.341% 48.806%,
            100.355% 50%,
            100.341% 51.194%,
            100.298% 52.377%,
            100.227% 53.541%,
            100.128% 54.675%,
            100% 55.769%,
            calc(100% - 13.1px) 94.231%,
            calc(100% - 13.49px) 95.261%,
            calc(100% - 13.95px) 96.203%,
            calc(100% - 14.45px) 97.053%,
            calc(100% - 15px) 97.806%,
            calc(100% - 15.59px) 98.456%,
            calc(100% - 16.22px) 98.999%,
            calc(100% - 16.88px) 99.43%,
            calc(100% - 17.57px) 99.744%,
            calc(100% - 18.28px) 99.935%,
            calc(100% - 19px) 100%,
            0% 100%,
            0% 0%
          );
        }
      }
      &:last-child > div {
        clip-path: polygon(
          100% 0%,
          100% 100%,
          5.68px 100%,
          5.19px 99.958%,
          4.72px 99.831%,
          4.25px 99.622%,
          3.38px 98.974%,
          2.61px 98.04%,
          1.96px 96.846%,
          1.47px 95.43%,
          1.1px 93.108%,
          1.07px 92.311%,
          1.1px 91.515%,
          1.17px 90.725%,
          1.47px 89.192%,
          1.69px 88.462%,
          12.97px 55.769%,
          13.31px 54.675%,
          13.57px 53.541%,
          13.75px 52.377%,
          13.9px 50%,
          13.75px 47.623%,
          13.57px 46.459%,
          13.31px 45.325%,
          12.97px 44.231%,
          1.69px 11.538%,
          1.47px 10.808%,
          1.3px 10.051%,
          1.17px 9.275%,
          1.1px 8.485%,
          1.07px 7.689%,
          1.1px 6.892%,
          1.17px 6.103%,
          1.3px 5.326%,
          1.47px 4.57%,
          1.69px 3.84%,
          1.96px 1.96%,
          2.61px 1.459%,
          3.38px 1.026%,
          4.25px 0.664%,
          4.72px 0.378%,
          5.19px 0.042%,
          5.68px 0%,
          100% 0%
        );
      }
      &:not(:first-child, :last-child) > div {
        clip-path: polygon(
          calc(100% - 17.57px) 0.256%,
          calc(100% - 16.88px) 0.57%,
          calc(100% - 16.22px) 1.001%,
          calc(100% - 15.59px) 1.544%,
          calc(100% - 15px) 2.194%,
          calc(100% - 14.45px) 2.947%,
          calc(100% - 13.95px) 3.797%,
          calc(100% - 13.49px) 4.739%,
          calc(100% - 13.1px) 5.769%,
          100% 44.231%,
          100.128% 45.325%,
          100.227% 46.459%,
          100.298% 47.623%,
          100.341% 48.806%,
          100.355% 50%,
          100.341% 51.194%,
          100.298% 52.377%,
          100.227% 53.541%,
          100.128% 54.675%,
          100% 55.769%,
          calc(100% - 13.1px) 94.231%,
          calc(100% - 13.49px) 95.261%,
          calc(100% - 13.95px) 96.203%,
          calc(100% - 14.45px) 97.053%,
          calc(100% - 15px) 97.806%,
          calc(100% - 15.59px) 98.456%,
          calc(100% - 16.22px) 98.999%,
          calc(100% - 16.88px) 99.43%,
          calc(100% - 17.57px) 99.744%,
          calc(100% - 18.28px) 99.935%,
          calc(100% - 19px) 100%,
          5.68px 100%,
          5.19px 99.958%,
          4.72px 99.831%,
          4.25px 99.622%,
          3.38px 98.974%,
          2.61px 98.04%,
          1.96px 96.846%,
          1.47px 95.43%,
          1.1px 93.108%,
          1.07px 92.311%,
          1.1px 91.515%,
          1.17px 90.725%,
          1.47px 89.192%,
          1.69px 88.462%,
          12.97px 55.769%,
          13.31px 54.675%,
          13.57px 53.541%,
          13.75px 52.377%,
          13.9px 50%,
          13.75px 47.623%,
          13.57px 46.459%,
          13.31px 45.325%,
          12.97px 44.231%,
          1.69px 11.538%,
          1.47px 10.808%,
          1.3px 10.051%,
          1.17px 9.275%,
          1.1px 8.485%,
          1.07px 7.689%,
          1.1px 6.892%,
          1.17px 6.103%,
          1.3px 5.326%,
          1.47px 4.57%,
          1.69px 3.84%,
          1.96px 1.96%,
          2.61px 1.459%,
          3.38px 1.026%,
          4.25px 0.664%,
          4.72px 0.378%,
          5.19px 0.042%,
          5.68px 0%
        );
      }
    }
  }
}
</style>
