---
title: "Wallet Update: Atomic Swap Nimiq and Bitcoin"
description: You can now hold Bitcoin BTC and swap back and forth with NIM using non-custodial atomic swaps!
slug: wallet-update-atomic-swap-nimiq-and-bitcoin
publishedAt: "2020-11-19"
updatedAt: 2023-12-07T16:39:08+0000
authors:
  - TEAM NIMIQ
image: /images/blog/wallet-update-atomic-swap-nimiq-and-bitcoin/33cee702-2282-41bc-b3ad-224421a714b1_blog_wallet-update-atomic-swap-nimiq-and-bitcoin_1.png
---

## Bitcoin Support

You can now add Bitcoin to your Nimiq accounts, including the ones on your Ledger hardware wallet! When you open the wallet for the next time after this update, you will get a popup asking you to activate Bitcoin. If you later on create a new account or log in with an existing account, Bitcoin support will automatically be enabled for you.

Your Bitcoins are secured with the same Login File, recovery words and password as your NIM!

Here's what it looks like:

![](/assets/images/prismic/0501967e-359e-459f-8729-2c2332a6e9c2_blog_wallet-update-atomic-swap-nimiq-and-bitcoin_2.png)

1. Here you see the NIM and BTC balance of your active account. The bars are colored like the background of your identicons and the size represents the distribution of your funds in NIM and BTC. By clicking on the button in the middle, you can do atomic swaps between NIM and BTC.
1. Click on the Bitcoin section down here to see your BTC transaction history.
1. You can generate new Bitcoin addresses to receive BTC with the "Receive" button and send BTC to any address with the "Send" button.
1. This is your BTC transaction history for this account.

Since Bitcoin has a different approach towards reusing account addresses than Nimiq, each account in the Nimiq Wallet shows one aggregate Bitcoin balance summarizing all used addresses. Everytime you send or receive Bitcoin, a new address is generated, avoiding address reuse — a best practice in Bitcoin. This mainly has privacy reasons and is due to the UTXO system used in Bitcoin, while Nimiq uses an account system similar to Ethereum.

To connect and sync with the Bitcoin network, the Nimiq Wallet uses the same mechanism as the Electrum desktop wallet, namely the network of ElectrumX servers, provided by institutions and individuals around the world. An upcoming post will go more into the technical details of how we made this work in the browser.

## Atomic Swaps

You can get started by using the Nimiq Wallet and easily swap between BTC, the most well-known cryptocurrency, and NIM, the high-performance payment coin. This new atomic swap feature is powered by [Fastspot](https://fastspot.io/), technology built by Nimiq. We will give you more in-depth information about Fastspot in a future blog post.

Fastspot enables atomic swaps, which are a non-custodial way of exchanging two assets, without any participant having control over both of them at the same time.

"Atomic" in this context means that the swap either completes successfully, or both parties get their assets returned. To learn more about the security of HTLC-based atomic swaps, [check out this article for an in-depth explanation](https://hackernoon.com/atomic-swaps-simply-explained-how-to-swap-cryptocurrencies-without-a-middleman-6cd29680c32e).

![](/assets/images/prismic/35845d92-a0cc-423c-ad9d-cafb0382bb35_blog_wallet-update-atomic-swap-nimiq-and-bitcoin_3.png)

To set up a swap, you can either move the slider to set a new ratio between your NIM and BTC holdings, or specify an amount in the input fields. You'll then get a quote from Fastspot that is calculated on the spot. The swap fees are displayed at the top — just hover your mouse over the fees (tap on mobile) — and you’ll get more details on the fee composition.

This is an “Early Access” to the swap functionality and thus comes with a 30-day volume limit of US$1000 for every account. Since each swap requires two HTLCs, one on the Bitcoin and one on the Nimiq blockchain, and each HTLC requires two transactions, one for locking up the funds and one for taking them out — network transaction fees are important. At times, Bitcoin transaction fees can get expensive, but with the limit as high as US$1000, the swap fees are actually still very low in comparison.

We plan to offer higher limits in the future. However, we can not yet share a date for when this will be available.

**Why Bitcoin? **

Bitcoin is *the *gold standard of crypto. Every other cryptocurrency is measured against Bitcoin and compared to it often. When we launched our Mainnet in 2018, Nimiq's original architecture was inspired by Bitcoin but designed from the ground up to be **browser-based**. Having a node directly in the browser improved usability and developer accessibility due to its use of JavaScript, while at the same time reducing protocol complexity. All this together made Nimiq a better currency, suitable for day-to-day payments and applications. Ongoing improvements including scalability, energy consumption, transaction speed and cost, will continue with the upcoming Nimiq 2.0.

While some focus on comparing BTC and NIM, we are convinced that there is room for both in the crypto space. As a matter of fact, Nimiq and Bitcoin complement each other as they target different use-cases and coexist perfectly:

**Bitcoin**, with its slow transaction time, higher cost per transaction, but very high hash power — and thus security — behind it, is a store of value, comparable to gold. People rarely use it to pay daily expenses or go shopping, but instead invest in it for its longer-term stability.

**Nimiq**, with its high speed and low cost transaction combined with high throughput in the up-coming switch to Proof-of-Stake, is the high performance payment coin, replacing cash or credit card in your pocket for everyday payments between friends and family. The switch to Proof-of-Stake in Nimiq 2.0 will also provide a predictable income stream in the form of staking rewards. This is comparable with interest, that if you are lucky :) you are used to getting from your bank. The significant difference is that you never give up control over your money when staking with Nimiq and you always get a positive rate.

We hope that you'll enjoy our brand-new atomic swap experience and appreciate the non-custodial nature of this unique technology. As you might know, the NIM/BTC swap is only the first release of a series of other exciting atomic swap pairs to come - so stay tuned for more news and updates!

Happy swapping and Pura Vida!

Team Nimiq
