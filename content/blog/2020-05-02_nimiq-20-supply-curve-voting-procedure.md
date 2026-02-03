---
title: Nimiq 2.0 Supply Curve Voting Procedure
description: Learn how to participate in the Nimiq 2.0 Supply Curve Voting Procedure
slug: nimiq-20-supply-curve-voting-procedure
publishedAt: "2020-05-02"
updatedAt: 2023-12-07T16:39:33+0000
authors:
  - TEAM NIMIQ
image: /assets/images/prismic/7b8333e7-2e54-4a5c-9126-ab0edd370fa3_blog_nimiq-20-supply-curve-voting-procedure_1.jpg
---

The decision on changing the supply curve of Nimiq is a fundamental and far reaching one. We are convinced that it is important to provide the wide range of Nimiq Stakeholders with the opportunity to be part of this process, including everyone from earliest contributors to new supporters that just discovered Nimiq. Over several months now, Team Nimiq has been working on finding and implementing a democratic, secure, and educated way to making the decision regarding the potential change of Nimiq’s Supply Curve. In a nutshell this concerns lowering the current coin supply growth rate ("inflation") by varying degrees and its shorter and longer-term considerations.

[**UPDATE 2**: The follow-up ranking vote concluded on June 8, 2020 and the NIM supply curve for Nimiq 2.0 has been determined as the "**BLUE**" curve (community suggestion). [See results here](https://www.nimiq.com/vote/#rank-curves).]

[**UPDATE 1**: First vote concluded May 18, 2020 with** "YES"** on making an adjustment to the NIM supply curve. [See results here](https://www.nimiq.com/vote/#change-curve).]

## The story so far

The steps taken by Nimiq to arrive at this decision making junction:

- Research since Q4 2019 regarding the topic and publishing of a [detailed article](https://www.nimiq.com/blog/nimiq-20-supply-curve-considerations/) early March 2020 with findings and considerations.
- Discussing these considerations with the Nimiq Community in the respective forums and social media.
- Hosting an AMA with the community to conclude such discussions in an active and engaging way.
- Adding a curve option suggested by the community.
- Defining a process which will allow supporters to vote using their NIM balance and storing this data publicly in the Nimiq Blockchain.
- Building an open source voting app for this process.
- Publishing a [blog post](https://www.nimiq.com/blog/nimiq-20-supply-curve-voting/) in April with additional information on the expanded curve options, and the decision finding process.
- Testing the voting app with the community, processing feedback and auditing the tool to get it production ready.

## The next steps

The next steps (excluding a preceding test voting round) are detailed in this image which was first presented in a previous [blog post](https://www.nimiq.com/blog/nimiq-20-supply-curve-voting/).

![](/assets/images/prismic/417f1f4d-648c-41d7-8290-336d307dbdb7_blog_nimiq-20-supply-curve-voting-procedure_2.png)

Here a more detailed description of what to expect:

**Testing **(https://nimiq-testnet.com/vote)**:** In order to get started, a test voting round will take place from **Saturday May 2** to **Wednesday May 6** a new test voting round will take place from **Saturday May 23** to **Tuesday May 26**. This way, stakeholders will have a chance to get familiar with the app before the actual vote. **Test voting uses the Testnet, so DO NOT USE your Mainnet account(s)**.

**First Vote **(https://nimiq.com/vote#change-curve)**:** **Should Nimiq adjust the current supply curve? **Stakeholders can vote “Yes” or “No” for 10 days: starting on Friday May 8, 2020 at approximately 12:00 noon UTC and ending on Monday May 18 at approximately 12:00 noon UTC (the more exact time will be determined by a specific blockheight target published at the beginning of the vote). [**UPDATE**: Vote concluded May 18, 2020 with**"YES"** on making an adjustment to the NIM supply curve. [See results here](https://www.nimiq.com/vote/#change-curve).]

**Second Vote (**[https://nimiq.com/vote#rank-curves](https://www.nimiq.com/vote#rank-curves))**:** Given that the first decision resulted in favor of a supply curve adjustment, stakeholders can vote** by ranking four options: “Green Curve”, “Red Curve”, “Blue Curve” or “None of these” **(1st choice = 1pt, 2nd = 1/2pt, 3rd = 1/4pt, 4th = 1/8pt). This vote will be open for 10 days, starting on **Friday May 29,** 2020 at approximately 12:00 noon UTC and ending on **Monday June 8** at approximately 12:00 noon UTC (the more exact time would be determined by a specific blockheight target published at the beginning of the vote). [**UPDATE**: Vote concluded on June 8, 2020 and the NIM supply curve for Nimiq 2.0 has been determined as the "**BLUE**" curve (community suggestion). [See results here](https://www.nimiq.com/vote/#rank-curves).]

You can read more about every curve in [this dedicated blog post.](https://www.nimiq.com/blog/nimiq-20-supply-curve-voting/)

In case the second vote outcome concludes that a majority of stakeholders prefer an adjustment different from the curves offered (meaning, “None of them”), the community will have 14 days to come up with a better suggestion. In this case a third vote would be scheduled to decide on accepting or rejecting the new supply curve alternative. It is important to note that if there is no alternative provided by the community, or this third vote ends with a rejection, the task for a final decision will fall back on the shoulders of Team Nimiq, to secure moving forward.

**IMPORTANT: **

1. **You can NOT vote with funds held in exchanges or third party wallets,**because they don’t support custom public messages in transactions, which are needed for the vote to be recorded on the blockchain. You can also not vote with funds in vesting contracts (please move available funds to a regular account address first).
1. **Your vote will be submitted through the Nimiq Voting app **by sending 1 Luna (= 0.00001 NIM) to the preset burn address (an address that will be calculated by the voting app based on the hash of the voting setup. This makes it verifiable that the setup is not changed during or after voting). The transaction contains the vote in form of a public message recorded on the blockchain.
1. What counts is the balance (1 NIM = 1 Vote) on your voting address **AT THE CLOSING OF THE VOTE WHEN A SNAPSHOT OF THE BLOCKCHAIN IS TAKEN AT THE FINAL BLOCK. **Example: if you submit a vote and then move the funds away from that address before the end of the voting period, the balance on that address will be zero, equivalent to no votes. Note that of course you can vote again with your new address that now has the balance. This prevents anyone from using their balance(s) more than once.
1. **You can change your vote by voting again with the same address.**Only the last vote of an address counts, at the end of the voting period, with the balance it has at that time.
1. **Do not wait until the last minute to submit your vote.** Things always take longer than expected and this way you can also correct your vote in case you made a mistake or changed your mind by re-submitting your vote.
1. **Please follow our social media for announcements of any unexpected changes to this timeline.**

## Using the Voting App

The first vote has been concluded. The second vote will be on the Mainnet at https://nimiq.com/vote#rank-curves. The voting app is available on the Testnet at https://nimiq-testnet.com/vote for you to try out. [Click here](https://getsome.nimiq-testnet.com/) for free Testnet NIM. Reminder: **DO NOT USE your Mainnet account(s) on the Testnet**.

### Guide for first vote [YES/NO, May 8 - 18]

### Step 1: Read the instructions carefully

![](/assets/images/prismic/5234b8e7-e3b1-46b0-8940-5d346cbe9b53_blog_nimiq-20-supply-curve-voting-procedure_3.png)

### Step 2: Select your preferred option

Choose the option you would like to vote for. The “VOTE” button will be enabled when you do so.

![](/assets/images/prismic/59eac8cc-4283-40ee-99c6-d3b0146d6a4f_blog_nimiq-20-supply-curve-voting-procedure_4.png)

### Step 3: Select your address

By clicking the VOTE button, the familiar Nimiq Checkout dialog will appear. If you have multiple addresses, you will be asked to select one.

![](/assets/images/prismic/beb69e3c-d652-4c04-ab75-9bf8d6a79055_blog_nimiq-20-supply-curve-voting-procedure_5.png)

### Step 4: Submit your Vote

After selecting your address, you will be prompted for your password. If you are voting with an address stored on a Ledger hardware wallet, connect your Ledger and confirm the transaction in the Ledger Nimiq app. After you confirm, the transaction will be processed and your vote recorded on the Nimiq Blockchain.

![](/assets/images/prismic/34c3fa66-ef0f-4ef5-9fda-927e29ac1f24_blog_nimiq-20-supply-curve-voting-procedure_6.png)

### Step 5: See the Results

After your vote has been submitted, you will be able to see the preliminary results. Note that your vote will take a few minutes to be recorded on the blockchain and enter the calculations. You can still vote again if you change your mind. Also you can vote with every address that has a balance to maximize your vote (instead of moving all your NIM to a single address to vote from). Only the address balances at the end of the voting period count towards the vote. In other words, for your voting balance to count, **do not move** your funds before the end of the vote.

![](/assets/images/prismic/fedee627-6603-414d-be86-a548384b8a94_blog_nimiq-20-supply-curve-voting-procedure_7.png)

### Guide for second vote [Rank, May 29 - June 8]

### Step 1: Read the instructions carefully

Your ranked choices will be counted according to a normalized geometric progression (see info icon top right).

That means the 1st choice gets 1 point, the 2nd 1/2 points, 3rd 1/4 points and 4th 1/8 points. Next, the point values are normalized to a total of 1 and the resulting factor will be multiplied with the NIM in your vote. This way, each NIM represents exactly one vote distributed over your choices.

![](/assets/images/prismic/dc6f4be9-c6c1-459e-808c-75dc1104343f_blog_nimiq-20-supply-curve-voting-procedure_8.png)

### Step 2: Rank the choices

The curve choices are randomized in their position when you enter the voting app. Drag them into the order of your preference before submitting your vote. You can read more [about the curves in this Blog](https://www.nimiq.com/blog/nimiq-20-supply-curve-voting/) as well as [this forum discussion](https://forum.nimiq.community/t/voted-yes-what-s-next/761).

![](/assets/images/prismic/477bfb6d-9355-4b79-8f61-df0c5b1848ac_blog_nimiq-20-supply-curve-voting-procedure_9.png)

### Step 3: Submit your vote

When you have finalized your ranking, click “Vote” and follow the same instructions detailed above in the guide for first vote from “Step 4”.

## What’s Next?

Try out our Testnet Vote which will run until Wednesday May 6. The important first vote on Mainnet will begin on Friday May 8 approximately at 12:00 noon UTC. UPDATE: The important first vote on Mainnet has been concluded and resulted with 78.4% in favor of making an adjustment to the NIM supply curve. The second vote on ranking NIM supply curve options will begin on **Friday May 29** at approximately 12:00 noon UTC ([https://nimiq.com/vote#rank-curves](https://www.nimiq.com/vote#rank-curves)). Try the [Testnet Ranking Vote](https://nimiq-testnet.com/vote/) from Saturday May 23 to Tuesday May 26. Nimiq will share all official information and results on its [Twitter account](https://twitter.com/nimiq) so make sure to stay tuned.

[**UPDATE**: The voting process concluded on June 8, 2020 and the NIM supply curve for Nimiq 2.0 has been determined as the "**BLUE**" curve (community suggestion)]

As always, we would like to thank everyone for their support and participation in this important decision on the path forward.

Pura Vida

**Team Nimiq**
