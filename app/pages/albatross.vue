<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'

const page = await usePage('albatross')

const title = page.seo?.title || page.hero?.title || 'Nimiq Albatross'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/albatross' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/albatross' }] })

const dialogOpen = ref(false)
const modalTransition = { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
</script>

<template>
  <NuxtLayout dark-header footer-bg-color="darkblue">
    <section class="bg-darkerblue dark" scheme-dark>
      <HeroProduct v-bind="page.hero" />
    </section>

    <section class="bg-darkerblue dark nq-wide" scheme-dark children:max-w-none>
      <div class="flex flex-col items-center w-full overflow-x-hidden">
        <AlbatrossLiveviewBlockchain class="w-screen" />
        <AlbatrossInfo class="mt-32 lg:mt-48 xl:mt-72" />
      </div>
    </section>

    <section class="bg-darkerblue dark" scheme-dark>
      <article class="nq-prose">
        <h2 class="text-left text-white">
          Albatross
        </h2>
        <p class="text-left">
          Albatross is a proof-of-stake blockchain consensus protocol co-created by Nimiq. It achieves sub-second transaction confirmation and peak performances of over 1000 TPS without compromising censorship resistance. Validators need to deposit 100k NIM and delegated stakes can be as low as 100 NIM, offering everybody a chance to participate.
        </p>
        <p>
          That means, you will be able to conveniently use delegated staking from your browser or wallet app. Alternatively, you can setup your own node and stake directly without a third party. This will make staking easily accessible for non-technical people while staying decentralized and censorship resistant.
        </p>
        <p>
          Albatross is used as the consensus protocol in <NuxtLink to="/litepaper">
            Nimiq 2.0
          </NuxtLink> together with further optimizations and improvements. You can find the source code <NuxtLink to="https://github.com/nimiq/core-rs-albatross">
            here
          </NuxtLink>.
        </p>

        <div class="nq-not-prose max-w-[780px] mx-auto px-32 f-mt-md">
          <DialogRoot v-model:open="dialogOpen">
            <DialogTrigger as-child>
              <button class="nq-pill nq-pill-secondary nq-pill-sm cursor-pointer gap-[6px]">
                <Icon name="nimiq:info" class="size-16" />
                Technical details
              </button>
            </DialogTrigger>
            <DialogPortal force-mount>
              <AnimatePresence>
                <template v-if="dialogOpen">
                  <DialogOverlay force-mount as-child>
                    <motion.div
                      class="fixed inset-0 bg-black/60 z-100"
                      :initial="{ opacity: 0 }"
                      :animate="{ opacity: 1 }"
                      :exit="{ opacity: 0 }"
                      :transition="modalTransition"
                    />
                  </DialogOverlay>
                  <DialogContent force-mount as-child>
                    <motion.div
                      class="nq-prose-compact fixed left-1/2 top-1/2 z-101 bg-neutral-0 rounded-8 p-32 md:p-48 max-w-[640px] w-[calc(100%-32px)] max-h-[85vh] overflow-y-auto shadow-lg"
                      :initial="{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }"
                      :animate="{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }"
                      :exit="{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }"
                      :transition="modalTransition"
                    >
                      <DialogTitle class="text-f-xl font-bold text-neutral mb-24">
                        Technical details
                      </DialogTitle>
                      <DialogDescription as="div" class="text-neutral-800">
                        <p>
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
                            Byzantine Fault Tolerance (BFT) on Wikipedia
                          </NuxtLink> and <NuxtLink to="https://blockonomi.com/practical-byzantine-fault-tolerance/">
                            this page about practical BFT (PBFT)
                          </NuxtLink>.
                        </p>
                      </DialogDescription>
                      <DialogClose class="absolute top-16 right-16 p-[8px] rounded-full text-neutral-700 hocus:text-neutral hocus:bg-neutral-200 transition-colors">
                        <Icon name="nimiq:cross" class="size-20" />
                      </DialogClose>
                    </motion.div>
                  </DialogContent>
                </template>
              </AnimatePresence>
            </DialogPortal>
          </DialogRoot>
        </div>
      </article>
    </section>

    <section class="bg-darkerblue dark" scheme-dark>
      <ul class="columns-1 md:columns-2 gap-x-64" style="--nq-max-width: 716px">
        <li v-for="item in page.details.items" :key="item.headline" class="nq-prose-compact flex flex-col gap-24 f-pt-2xl [&>*]:m-0 [&>img]:mb-[8px] break-inside-avoid">
          <NuxtImg v-if="item.image" :src="item.image" :alt="`Albatross ${item.headline} representation`" class="max-w-160 rounded-6" />
          <h3 class="text-white">
            {{ item.headline }}
          </h3>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </section>

    <AppDisclaimer bg-color="darkblue" />
  </NuxtLayout>
</template>
