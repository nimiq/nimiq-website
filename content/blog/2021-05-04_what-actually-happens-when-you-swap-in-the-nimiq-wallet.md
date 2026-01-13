---
title: What ACTUALLY happens when you swap in the Nimiq Wallet
description: A technical look under the hood of Nimiq’s Atomic Swaps.
slug: what-actually-happens-when-you-swap-in-the-nimiq-wallet
publishedAt: "2021-05-04"
updatedAt: 2023-12-07T16:44:31+0000
authors:
  - SÖREN
  - SVEN
image: /images/blog/what-actually-happens-when-you-swap-in-the-nimiq-wallet/44813ad1-b029-403c-b5d1-55ce163571ca_blog_what-actually-happens-when-you-swap-in-the-nimiq-wallet_1.png
---

Hey, welcome! As Nimiq OASIS is nearing its public release with both buying and selling of NIM and BTC enabled, we thought it would be interesting for the more tech-savvy Nimiq fans out there to learn how the atomic swaps in the Nimiq Wallet actually work!

What are atomic swaps and why do we need them? Cryptocurrencies are all about decentralization and removing the middlemen — with the goal of being able to exchange value with a complete stranger without requiring up-front trust. Open blockchains do a great job on offering transactions between anyone without any trust required upfront. But what if you want to change coin A for coin B? Or even exchange coins for something else, like Euro? Usually nowadays, you will move your coins to an exchange and cash out to Euro. Or you send Euros via bank transfer or credit card and buy crypto. But when you do that, you depend on that service to deliver the counter value to you. If they change their mind, for example demand extra documents, or simply get hacked, then your funds are inaccessible or even gone.

That’s where atomic swaps shine! They allow you to swap two assets without needing to trust a middleman to handle your funds and exchange them.

Instead, both assets get locked up on their respective chain — or if it’s about Euro, then in a bank using the OASIS API — and are then exchanged atomically, which means they are either both exchanged or they will go back to their previous owners. No other outcome is possible. That makes it very safe because even if something goes wrong, you will never lose your funds. That’s why atomic swaps are so important!

Are you wondering how that works specifically? You came to the right place! Let’s dive into the juicy technical details of how atomic swaps are prepared and performed in the Nimiq Wallet.

## Step 0: Enter amounts to be swapped

The first thing you’ll do when atomic-swapping with Nimiq is entering how much you want to buy or sell and let Fastspot — a market-rate liquidity provider for atomic swaps — make you an offer.

**Side-note for developers:** Fastspot provides quite a few options for requesting swap estimates. You can specify what amount you want to send or receive and if you want to exclude or include fees in that estimate, enabling a wallet to insert its own calculated transaction fees for example. Developers can read the [Fastspot API documentation](https://docs.fastspot.io/) and use the [Typescript library](https://github.com/nimiq/fastspot-api) to get started.

The Nimiq Wallet respects the minimum fee-per-byte suggested by Fastspot for both NIM and BTC to ensure swaps will be completed as fast and smooth as possible. For NIM, these fees are usually zero, and for BTC the wallet knows how many of your UTXOs will be used for the swap and calculates the transaction fees accordingly.

Furthermore, the wallet displays the true swap rate in the interface, listing all fees from both sides of the swap separately.

![](/assets/images/prismic/a1041731-b59c-4b04-b251-91f096be65c7_blog_what-actually-happens-when-you-swap-in-the-nimiq-wallet_2.png)

Once you are happy with the amounts to be swapped, you’ll click the “Confirm” button to trigger the next step.

![](/assets/images/prismic/f38f453b-3720-4723-a5c2-f7d02044311e_blog_what-actually-happens-when-you-swap-in-the-nimiq-wallet_3.png)

## Step 1: Create, verify and sign the swap

To sign a swap, we first need… to have one! That’s right, we haven't initiated a swap yet. What we got so far is an *estimate*. An estimate from Fastspot gives no guarantee about the available liquidity or whether the selected assets can actually be swapped currently. For example, the EUR asset might be disabled for maintenance.

So to get started, we get a definite quote first which includes the guarantee that a swap is actually possible and can be executed. The wallet is requesting a quote from Fastspot at the moment you click the confirm button. The quoted amounts should be the same or very close to the estimate displayed before.

Together with your destination and refund addresses involved in the swap and the fees calculated for your transactions, the wallet forwards the details of the swap to the Keyguard. The Keyguard will show you the amounts, swap rate, and fees for you to make sure everything is correct.

Now we arrive at an important detail. So far, the swap has not been *confirmed* with Fastspot. What does that mean? It means nothing has happened yet on-chain for this swap. It also means this swap does not yet count against your swap limits and canceling the process here, before entering your password, has no consequences. However, the quote that the swap is based on is only valid for around 15 minutes, so if not confirmed with your password within that time, you have to start over.

OK, so you entered your password and confirmed your intention to do the swap. The Keyguard — technically speaking the Hub, but for the purpose of this explanation we can consider them to be the same — now takes both your destination and refund addresses and sends them to Fastspot to confirm the quote. Fastspot then generates and returns the contract details that will be used for this swap. For NIM and BTC this is binary data encoding the rules of the respective contract, and for EUR this is the ID of an OASIS contract.

Before the Keyguard-Hub-combo now actually signs your transactions and returns them to the wallet for execution, these contract details that Fastspot just generated are validated. It is verified that your addresses are actually used in the contract data as the beneficiary and refund addresses, that the unlock-hash in both contracts is the same, that the contract expiration timestamps are in the correct order, etc. In short, it is verified that the swap will be **atomic**. Only if all those checks pass does the Keyguard sign the transactions and return them to the wallet.

Right... [mental breathing pause...] that was long and a bit complex. Feel free to go back and read this section again. We hope it is clearer now why this process is necessary to ensure a non-custodial, trustless swap.

Now that everything is prepared, we can move on to the **actual on-chain part**!

## Step 2: Wait for the incoming contract

Let’s recap the situation we are in. The Keyguard just signed two transactions - one to fund a contract and one to redeem a contract — it also signed a third refund transaction, but let’s skip that for now. The wallet still knows what swap they are for and stores the transactions for now as they will only be sent in the next steps. The wallet then fetches the confirmed swap object from the Fastspot API to learn about which contracts are involved in the swap and to confirm that the swap is still happening. For swaps involving EUR, the wallet also fetches the EUR-HTLC, including its funding details, directly from OASIS to not rely on Fastpot to correctly forward this information.

Since Fastspot controls the secret of the swap, it is also the first to create an on-chain HTLC contract, namely the contract that locks up the currency that you are going to receive. We need to wait for this contract to be created irreversibly. For NIM this means waiting for the creation transaction to be mined into a block, for BTC it is enough when the transaction is in the mempool — with ‘replace-by-fee’ disabled — and for EUR this means OASIS reporting the contract to be *cleared* — FinTech-speak for ‘funded’.

The wallet, via a swap-library — soon to be available for other projects as a package — monitors the respective blockchain or OASIS API for the criteria mentioned above, including validating that the amount, ownership, and expiry of **the contract is correct**.

You as the user see this waiting period as the puzzle piece animating its labyrinth of lines and finally being filled with full color.

![](/assets/images/prismic/40e9a531-d3c2-4235-ab64-af598f2bed62_blog_what-actually-happens-when-you-swap-in-the-nimiq-wallet_4.gif)

## Step 3: Fund the outgoing contract

Once the wallet is certain that Fastpot held up its part of the deal, the contract committing *your side* of the swap is created. This works the same way Fastspot did it: the wallet simply broadcasts your funding transaction, which you signed in the Keyguard earlier, to the respective blockchain. For EUR, it displays the payment details that you should use to send a SEPA Instant transaction to fund the OASIS contract. Again, we need to wait for the contract to be created irrevocably, meaning mined for Nimiq, in the mempool for Bitcoin, and status “cleared” in OASIS. Fastspot also waits for that.

**Note**: It can happen that the BTC transaction fees have risen sharply between when the swap quote was created and when your BTC transaction is sent. In this case, Fastspot can not accept your BTC transaction just because it is in the mempool. Instead, it requires that the transaction gets mined, which in the Bitcoin network can take a few more minutes.

Once both puzzle pieces are fully filled out, the contracts are ready and **the ownership of the assets can be swapped**.

## Step 4: Atomic swap!

In atomic swaps, ownership change happens with the publishing of the swap secret. Remember how the wallet verified in step 1 that both contracts are secured by the same unlock-hash? It is now vital that they are indeed equal. First, Fastspot claims the contract that you created and transfers the funds out into its own wallet. To do that, Fastspot must include the swap secret — the key to unlock the contracts — into that claiming transaction! Put differently, it needs to present the key to be able to unlock the funds. Since the involved blockchains, as well as the OASIS API, are public, the wallet can obtain this secret from Fastspot’s transaction or from the OASIS contract.

**Side-note for developers: **Additionally to monitoring the respective blockchain or OASIS API on which the secret will be revealed, the wallet is also periodically checking the Fastspot API itself, where Fastspot reveals the secret once the contract is claimed on-chain, too.

With the knowledge of the swap secret, the wallet can now claim your funds from the other contract. So **let’s claim them!**

## Step 5: Claim the incoming contract

You already prepared the claiming transaction when you signed the funding transaction in the Keyguard. The swap secret is not part of the transaction data that is signed, so adding the secret into the transaction is still possible and does not invalidate it. Now that the transaction — called “settlement instruction” for OASIS — is complete, the wallet can broadcast it to the respective network. This immediately shows up in your transaction history as a pending incoming transaction, which means **the swap is complete!**

**Side-note for developers: **Additionally to the wallet being on the lookout for the swap secret, Fastspot also offers a so-called “watchtower service”. This is a service that takes your pre-signed claiming transaction and monitors the swap progress. If it sees the secret, it will also broadcast your claiming transaction. This is a failover for when your wallet loses internet connection, your computer crashes, or you accidentally close the browser. However, it is important to remember that the watchtower is not a guarantee, but rather an additional safeguard to make sure that as many swaps as possible will be successful, which reduces the number of refunded swaps due to timeouts.

## Step 5b: Expired swaps and automatic refunds

But what happens when the secret never gets published? Then the timelock part of the Hashed Timelock Contract comes into play: after a predefined time, in our case 1.5 hours, the contracts expire, and the funds are automatically sent back to the original owners. That applies for both contracts, so if for whatever reason Fastspot “forgets” to pick up its funds, the contracts will time out and you will get your part back. Neither can get lost.

**Side-note for devs:** The contract that you are funding times out a little bit *before* the one that Fastspot creates. That way there is no possibility of Fastspot claiming your contract, but you not having enough time to claim the other one. Smart, eh? :)

## Conclusion

What do you think? Do you now have a better understanding of the nitty-gritty that happens under the covers of Nimiq Wallet atomic swaps? Was it enlightening or rather frightening? Do you have more questions? Let us know on Twitter and Telegram, we are happy to extend this blog post with more details and clarifications!

Until next time! Pura Vida!

Sören & Sven
