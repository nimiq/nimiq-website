---
title: Nimiq Proof of Stake Migration Starts Now for Validator Operators!
description: The final stage in the migration to Nimiq Proof of Stake (PoS) is here. This post provides a concise guide to the essential steps for validator operators, aligning the community with the necessary preparations for a smooth transition.
slug: nimiq-proof-of-stake-migration-starts-now
publishedAt: "2024-11-14"
updatedAt: 2024-11-17T23:21:09+0000
authors:
  - Team Nimiq
image: /images/blog/nimiq-proof-of-stake-migration-starts-now/ZzZwmK8jQArT04_b_BLOGNimiqPoSActivationiscomingv1.2.png
---

This post specifically addresses **validator operators** participating in the PoS migration. For general information on the migration, see this post:[ What You Need to Know About Nimiq's Migration to Proof of Stake](https://www.nimiq.com/blog/nimiq-is-migrating-to-proof-of-stake-what-you-need-to-know/).

You can find the full documentation[ here](https://www.nimiq.com/developers/migration/validator-activation). Below is a short summary of the next steps for validator operators.

### Steps for Validator Operators

**Main Prerequisite:**

- **Validator Registration**: Your validator needs to be registered and appear on[ this list](https://nimiq.watch/#pre-staking).

**1. Join the Validator Operator's Chat**

- Join Nimiq’s [Discord](https://discord.gg/nimiq) or [Telegram](https://t.me/nimiq). Reach out to a Moderator/Team Member to verify yourself as a validator operator.

**2. Install the Latest PoW Release, now version 1.6.4, which was released on November 13, 2024.**

- Download the code[ here](https://github.com/nimiq/core-js/releases/tag/v1.6.4) or access compiled binaries[ here](https://www.nimiq.com/developers/build/nimiq-pow/downloads.html).
- **Syncing Shortcut**: Download a snapshot via [IPFS](https://ipfs.nimiq.io/ipfs/QmRKvFVpTdXagvgZG5cF9qdz13x9DkZhUvwXAS5YMaqTfu?filename=pow-main-full-consensus.zip) or [Torrent](https://repo.nimiq.com/torrents/nimiq-pow-main-full-consensus.torrent), extract it, and place it in your PoW client directory to speed up sync time. If using a third-party source, verify it with this SHA256 hash:

<code style="font-family: Fira Code; background: rgba(31, 35, 72, 0.06);padding: 4px;border-radius: 4px;color: rgba(31, 35, 72, 0.8);font-size: 0.8em;">97fba2d6a9c8eaeb5fe568337e8052097fdffaae3f047b2f283e7007f30851cf  pow-main-full-consensus.zip</code>

**3. Download the Latest PoS Release, now 1.0.0-rc.5, which was released on November 17, 2024.**

- Download[ it here](https://github.com/nimiq/core-rs-albatross/releases/tag/v1.0.0-rc.5).

**4. Verify your Configuration**

- Configure client.toml with your validator data as explained in [Step 1 of the Activation Guide](https://www.nimiq.com/developers/migration/validator-activation#step-1-add-validator-data-into-the-configuration-file).
- Verify that the seed list matches the list provided in the [client.example.toml](https://github.com/nimiq/core-rs-albatross/blob/albatross/lib/src/config/config_file/client.example.toml#L35C1-L51C2). The same list is provided below for confirmation:

<pre style="font-family: Fira Code; background: rgba(31, 35, 72, 0.06);padding: 12px;border-radius: 4px;color: rgba(31, 35, 72, 0.8);font-size: 0.8em;">seed_nodes = [
  { address = "/dns4/aurora.seed.nimiq.com/tcp/443/wss" },
  { address = "/dns4/catalyst.seed.nimiq.network/tcp/443/wss" },
  { address = "/dns4/cipher.seed.nimiq-network.com/tcp/443/wss" },
  { address = "/dns4/eclipse.seed.nimiq.cloud/tcp/443/wss" },
  { address = "/dns4/lumina.seed.nimiq.systems/tcp/443/wss" },
  { address = "/dns4/nebula.seed.nimiq.com/tcp/443/wss" },
  { address = "/dns4/nexus.seed.nimiq.network/tcp/443/wss" },
  { address = "/dns4/polaris.seed.nimiq-network.com/tcp/443/wss" },
  { address = "/dns4/photon.seed.nimiq.cloud/tcp/443/wss" },
  { address = "/dns4/pulsar.seed.nimiq.systems/tcp/443/wss" },
  { address = "/dns4/quasar.seed.nimiq.com/tcp/443/wss" },
  { address = "/dns4/solstice.seed.nimiq.network/tcp/443/wss" },
  { address = "/dns4/vortex.seed.nimiq.cloud/tcp/443/wss" },
  { address = "/dns4/zenith.seed.nimiq.systems/tcp/443/wss" },
]</pre>

- Verify the network configuration entry is set to main-albatross as provided in the [client.example.toml](https://github.com/nimiq/core-rs-albatross/blob/albatross/lib/src/config/config_file/client.example.toml#L121). The final configuration should be the same one as below

<code style="font-family: Fira Code; background: rgba(31, 35, 72, 0.06);padding: 4px;border-radius: 4px;color: rgba(31, 35, 72, 0.8);font-size: 0.8em;">network = "main-albatross"</code>

**5. Compile the PoS Client**

- Compile the PoS client as explained in [Step 4 of the Activation Guide](https://www.nimiq.com/developers/migration/validator-activation#step-4-run-the-activation-tool).

**6. Run the Activation Tool**

- The activation tool will stay active until the end of the migration. It will signal “online” starting approximately 3 days before the candidate block at Proof of Work block #3’456’000.
- Once your validator “online” signal has been sent, it will appear as ONLINE on the[ Migration Readiness Monitor](https://nimiq-migration-monitor.netlify.app).
- When the Activation Phase opens and your validator produces a Genesis Hash, it will appear as READY on the[ Migration Readiness Monitor](https://nimiq-migration-monitor.netlify.app).
- When more than 80% of the total stake has signaled readiness with the same Genesis Hash, the PoS chain will go live, and validators will begin producing blocks.

Remember to start this process as early as possible to ensure a smooth migration to Proof of Stake. Your dedication and support are invaluable in making this transition a success. Thank you for being an essential part of this journey. See you on the Proof of Stake Network!

**Pura Vida**
Team Nimiq
