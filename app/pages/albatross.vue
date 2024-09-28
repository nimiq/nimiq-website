<script setup lang="ts">
import type { RichTextField, TitleField } from '@prismicio/client'

useHead({
  title: 'Nimiq Albatross Liveview',
  meta: [
    { name: 'description', content: 'The consensus algorithm running live in the Proof-of-Stake Testnet.' },
  ],
})

// defineOgImageComponent('DefaultImage', { title: 'Nimiq' })

const headline = computed(() => ({ type: 'heading1', text: 'Nimiq Proof-of-Stake Testnet', spans: [] } as unknown as TitleField))
const subline = computed(() => ([{ type: 'paragraph', text: 'Nimiq\'s Albatross consensus algorithm running live in the Proof-of-Stake Testnet.', spans: [], direction: 'ltr' }] as RichTextField))

const liveviewSection = useSection('liveview', 'darkblue', { paddingX: false, limitWidth: false })
const articleSection = useSection('article', 'darkblue')
const columnsSection = useSection('columns', 'darkblue')
</script>

<template>
  <NuxtLayout dark-header footer-bg-color="darkblue">
    <HeroDefault :primary="{ headline, subline, bgColor: 'darkblue' }" />

    <section ref="liveviewSection">
      <AlbatrossLiveview allow-send-tx />
    </section>

    <section ref="articleSection">
      <article class="nq-prose">
        <h2>Albatross</h2>
        <p>
          Albatross is a new proof-of-stake blockchain consensus protocol co-created by Nimiq. It achieves sub-second transaction confirmation and peak performances of over 1000 TPS without compromising censorship resistance. Validators need to deposit 100k NIM and delegated stakes can be as low as 100 NIM, offering everybody a chance to participate.
        </p>
        <p>
          That means, you will be able to conveniently use delegated staking from your browser or wallet app. Alternatively, you can setup your own node and stake directly without a third party. This will make staking easily accessible for non-technical people while staying decentralized and censorship resistant.
        </p>
        <p>
          Albatross is planned to be used as the consensus protocol in <NuxtLink to="/litepaper">
            Nimiq 2.0
          </NuxtLink> together with further optimizations and improvements. The release is planned for 2024. You can find the source code <NuxtLink to="https://github.com/nimiq/core-rs-albatross">
            here
          </NuxtLink>.
        </p>

        <details nq-mt-32>
          <summary flex="~ items-center justify-start gap-8 " text="neutral-800 hocus:neutral" ml-0 w-max cursor-pointer select-none font-semibold>
            <div i-nimiq:info mx-0 />
            Technical details
          </summary>

          <p mt-32>
            Albatross is modelled after speculative BFT algorithms, like Zyzzyva, and further inspired by Byzcoin and Tendermint for their method of making PBFT permissionless, Algorand for its resistance to adaptive adversaries, and Ouroboros-BFT for its simplicity. Regular PBFT security assumptions let us draw the conclusion that the protocol is secure and has a performance close to the theoretical maximum for single-chain Proof-of-Stake consensus algorithms. Thanks to these advantages, Albatross improves over the classic BFT consensus as used in <NuxtLink to="https://tendermint.com/">
              Tendermint
            </NuxtLink> and <NuxtLink to="https://docs.binance.org/blockchain.html">
              Binance Chain
            </NuxtLink>. <NuxtLink to="https://www.nimiq.com/blog/research-collaboration-albatross/">
              The algorithm was published
            </NuxtLink> in March 2019 by Team Nimiq and Trinkler Software. To learn more, read the <NuxtLink to="https://arxiv.org/abs/1903.01589">
              technical paper
            </NuxtLink>, <NuxtLink to="https://en.wikipedia.org/wiki/Byzantine_fault%23BFT_implementations">
              Byzantine Fault
            </NuxtLink> and <NuxtLink to="https://en.wikipedia.org/wiki/Byzantine_fault%23BFT_implementations">
              Byzantine Fault Tolerance
              (BFT) on Wikipedia
            </NuxtLink> and <NuxtLink to="https://blockonomi.com/practical-byzantine-fault-tolerance/">
              this page about practical BFT (PBFT)
            </NuxtLink>.
          </p>
        </details>
      </article>
    </section>

    <section ref="columnsSection">
      <ul columns="1 md:2" gap-64 style="--nq-max-width: 716px">
        <li class="nq-prose-compact nq-prose" flex="~ col gap-24" nq-pb-96 children:m-0>
          <NuxtImg src="/assets/images/albatross/micro-block.png" alt="Albatross Microblock representation" max-w-160 rounded-6 />
          <h3>
            Micro Block
          </h3>
          <p>Micro Blocks contain transactions. Creating and sharing a block is faster than one second on average, thus transactions are confirmed almost instantly.</p>
        </li>
        <li class="nq-prose-compact nq-prose" flex="~ col gap-24" nq-pb-96 children:m-0>
          <NuxtImg src="/assets/images/albatross/skip-block.png" alt="Albatross Skip block representation" max-w-160 rounded-6 />
          <h3>
            Skip Block
          </h3>
          <p>
            When the currently active slot fails to produce a Micro Block on time, the other validators in the epoch can vote to produce a Skip Block instead, skipping the current slot. The block is accepted when two thirds of all slots vote for the Skip Block. Skip Blocks cannot contain transactions.
          </p>
        </li>

        <li class="nq-prose-compact nq-prose" flex="~ col gap-24" nq-pb-96 children:m-0>
          <h3>
            Validator
          </h3>
          <p>
            Validators are responsible for creating blocks and validating blocks produced by others. They are chosen according to their stake — the higher the stake the more likely they are chosen. Validators are replaced in fixed intervals, called epochs. If a validator is found to be misbehaving, the validator will be punished. There are various severities of punishment, from taking away their block reward, slashing part of their stake, all the way to on-chain jail. Misbehavior includes producing invalid blocks or more than one block at a time (fork blocks). The potential loss of some of their stake and their block reward makes sure that validators don’t misbehave.
          </p>
        </li>
        <li class="nq-prose-compact nq-prose" flex="~ col gap-24" nq-pb-96 children:m-0>
          <NuxtImg src="/assets/images/albatross/macro-block.png" alt="Albatross Macro block representation" max-w-160 rounded-6 />
          <h3>
            Macro Block
          </h3>
          <p>
            Macro Blocks mark the beginning and end of batches and epochs. They must be voted for by at least two thirds of all active slots. A Macro Block finalizes all transactions of the current batch. Epoch-finalizing Macro Blocks additionally determine the slots and their validators for the next epoch.
          </p>
        </li>
        <li class="nq-prose-compact nq-prose" flex="~ col gap-24" nq-pb-96 children:m-0>
          <NuxtImg src="/assets/images/albatross/batch-epoch.png" alt="Albatross Batch and epoch representation" rounded-6 />
          <h3>
            Batch and Epoch
          </h3>
          <p>
            A batch is the time between two Macro Blocks. A fixed number of batches make up an epoch. For each epoch, 512 slots are randomly assigned to all potential validators proportionally to each validator’s stake. Parameters such as minimum stake, length of batches and epochs (i.e. number of micro blocks), number of slots, etc. are being tested and thus are subject to change before the Mainnet transition. For each micro block a slot is randomly selected — one after the other — so its validator can validate pending transactions and create the block.
          </p>
        </li>
        <li class="nq-prose-compact nq-prose" flex="~ col gap-24" nq-pb-96 children:m-0>
          <h3>
            Slot
          </h3>
          <p>
            A slot is like a ticket allowing a validator to create a block. The slots for an epoch are assigned to active validators and for each block the active slot is chosen with a Verifiable Random Function (VRF). The active slot allows a validator to create a block. A validator can have multiple slots per epoch, depending on their stake.
          </p>
        </li>
      </ul>
    </section>

    <Disclaimer color="darkblue" />
  </NuxtLayout>
</template>
