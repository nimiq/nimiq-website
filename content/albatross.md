---
seo:
  title: Nimiq Proof-of-Stake
  description: Nimiq's Albatross consensus algorithm running live in the Proof-of-Stake network.
hero:
  title: Nimiq Proof-of-Stake
  description: Nimiq's Albatross consensus algorithm running live in the Proof-of-Stake network.
details:
  items:
    - headline: Micro Block
      description: Micro Blocks contain transactions. Creating and sharing a block is faster than one second on average, thus transactions are confirmed almost instantly.
      image: /assets/images/albatross/micro-block.png
    - headline: Skip Block
      description: When the currently active slot fails to produce a Micro Block on time, the other validators in the epoch can vote to produce a Skip Block instead, skipping the current slot. The block is accepted when two thirds of all slots vote for the Skip Block. Skip Blocks cannot contain transactions.
      image: /assets/images/albatross/skip-block.png
    - headline: Validator
      description: Validators are responsible for creating blocks and validating blocks produced by others. They are chosen according to their stake — the higher the stake, the more likely they are chosen. Validators are replaced in fixed intervals, called epochs. If a validator is found to be misbehaving, the validator will be punished. There are various severities of punishment, from taking away their block reward, deactivating the validator, all the way to on-chain jail. Misbehavior includes producing invalid blocks or more than one block at a time (fork blocks). The potential loss of some of their block reward and jail time ensures that validators don't misbehave.
    - headline: Macro Block
      description: Macro Blocks mark the beginning and end of batches and epochs. They must be voted for by at least two thirds of all active slots. A Macro Block finalizes all transactions of the current batch. Epoch-finalizing Macro Blocks additionally determine the slots and their validators for the next epoch.
      image: /assets/images/albatross/macro-block.png
    - headline: Batch and Epoch
      description: A batch is the time between two Macro Blocks. A fixed number of batches make up an epoch. For each epoch, 512 slots are randomly assigned to all potential validators proportionally to each validator's stake. Parameters such as minimum stake, length of batches and epochs (i.e. number of micro blocks), number of slots, etc. are being tested and thus are subject to change before the Mainnet transition. For each micro block a slot is randomly selected — one after the other — so its validator can validate pending transactions and create the block.
      image: /assets/images/albatross/batch-epoch.png
    - headline: Slot
      description: A slot is like a ticket allowing a validator to create a block. The slots for an epoch are assigned to active validators and for each block the active slot is chosen with a Verifiable Random Function (VRF). The active slot allows a validator to create a block. A validator can have multiple slots per epoch, depending on their stake.
---
