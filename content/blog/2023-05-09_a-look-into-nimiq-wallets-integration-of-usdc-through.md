---
title: A Look into Nimiq Wallet's Integration of USDC through OpenGSN and Uniswap
description: The Nimiq Wallet continues to expand its feature set with the exciting new addition of USDC integration using the Polygon network, OpenGSN, and Uniswap. This innovative combination has transformed the way users send and receive USDC by offering faster, cheaper, and more streamlined transactions. In this post, we'll take a detailed look at how the Nimiq Wallet's USDC integration works.
slug: a-look-into-nimiq-wallets-integration-of-usdc-through
publishedAt: "2023-05-09"
updatedAt: 2023-05-16T14:40:54+0000
authors:
  - Team Nimiq
image: /assets/images/prismic/6690b3fa-cb51-4e81-9bd0-48b54176ea2b_supply_curve_article_5_.png
---

The Nimiq Wallet now supports USDC, a stablecoin pegged to the US Dollar, allowing users to send it with fee abstraction fees. The wallet uses USDC on Polygon, a scaling solution for Ethereum, for fast and cheap transactions. By processing transactions off-chain before anchoring them to Ethereum's blockchain, Polygon offers the benefits of Ethereum's security and decentralization while reducing fees and transaction times.

Sending USDC usually requires MATIC, the native token of the Polygon blockchain, to cover transaction fees. To simplify this process, Nimiq’s USDC Transfer Smart Contract automatically converts a small portion of USDC into MATIC to pay for these fees, making it hassle-free for users. This way, users can enjoy the advantages of USDC without the inconvenience of managing a second token themselves.

In this post, we'll take a detailed technical look at how the Nimiq Wallet's USDC integration works, using the power of the Polygon network and an innovative solution for handling transaction fees. For a visual representation of the steps involved, check out our comprehensive diagram with annotations, available **[here](https://images.prismic.io/nimiq/e7234c43-10d1-447c-a703-4d77ae294a6e_send-usdc.png?auto=compress,format)**.

The Nimiq Wallet's USDC integration offers a perfect balance of functionality, security, and user convenience. With this solution, you can experience the future of cryptocurrency transactions today. So, grab a cup of coffee and join us for a deep dive into the inner workings of this innovative integration.

## The Journey: A Step-by-Step Look at Sending USDC with Nimiq Wallet

### Step 1: Selecting the recipient and amount

First, you select the recipient and the desired amount of USDC to send. Our system then converts the amount into the smallest unit of USDC, ensuring accurate transactions by taking into account the divisibility of cryptocurrencies.

### Step 2: Calculate the fee

Next, we display the transaction fee, which consists of:

- **Native transaction fee**: Calculated by multiplying the gas limit (aka <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">requiredRelayGas</code> in the OpenGSN Contract) by the gas price (given by the network and the OpenGSN Relay). Amount is in MATIC.
- **OpenGSN fee**: Allows the wallet to send transactions on behalf of the user using a Relay Server. Calculated as follows:
  <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">nativeFee \* (1 + pctRelayFee) + baseRelayFee</code><br/><br/>

To reduce the fee as much as possible, the Nimiq Wallet scouts different relay servers and selects the one with the lowest fees. We do this by retrieving and filtering the logs from <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">RelayServerRegistered</code> event in the Relayer Hub Contract. Amount is in MATIC.

- **Uniswap fee**: Fee for exchanging USDC to MATIC to pay the OpenGSN Relay. Paid in USDC. We cannot determine the exact amount of the fee in advance, so we use a 10% buffer as a fee. You can read more about this in step 7.

We calculate the transaction fees, convert them to USDC using the MATIC-USDC exchange rate on Uniswap, and display the fee to the user prior to the transaction. The fee potentially changes with every Polygon block, so we update it regularly until the user confirms the transaction. The final fee includes an additional 10% buffer for Uniswap, which is refunded if not used.

To calculate the fees, we use the[ Quoter Contract](https://docs.uniswap.org/contracts/v3/reference/periphery/lens/Quoter) and Uniswap pool registered in the USDC Transfer Contract.

The fee does not depend on the amount sent, so sending 1 USDC will have the same fee as sending 1,000,000 USDC. You can view the code for the function that computes the fees [here](https://github.com/nimiq/wallet/blob/6a23f3defaeb69f76f65c8f9e56bc08995790801/src/ethers.ts#L544).[ ](https://github.com/nimiq/wallet/blob/usdc/src/ethers.ts#L327)

### Step 3: The user creates the request

In the Nimiq Wallet, after the user confirms the transaction details, the next step is to sign it using the Nimiq Keyguard. The Keyguard acts as an intermediary between the wallet and the user's key pair, ensuring that the wallet cannot access the user's keys directly. This process is the same whether the user wants to send NIM, BTC, or USDC.

#### Authorise USDC

To transfer funds from their wallet to another wallet, the user needs to unlock their key pair with their password in the Keyguard and sign an authorization. The authorization only allows the transfer within the USDC contract on behalf of the user, but it's not the actual transfer. To create this authorization, the USDC contract requires a structured signature from the user, which is created by the Keyguard using the EIP712 standard. This standard is widely used for structuring data in Ethereum Smart Contracts and includes a domain separator, a message type, and a set of message parameters. It verifies the authenticity of the data and the signer's identity.

The EIP712 signature approves the transfer of funds by signing a JSON object containing the total amount, which includes the transaction amount and fee. This authorizes the transfer of funds from one wallet to another by the transfer contract. You can find the code for signing the approval [here](https://github.com/nimiq/keyguard/blob/0012747244437ca27f96a4a682f4b47993eeceba/src/request/sign-polygon-transaction/SignPolygonTransaction.js#L165).

#### Open Gas Station Network v2 (OpenGSN)

To transfer funds using the OpenGSN protocol, we must pay a fee for using a special message called a meta-transaction. This message allows us to send a request to the relay server, which then sends the transaction for us. The user creates a message with transaction information (including the USDC approval signed above) and sends it to the relay server. Because the relay ultimately sends the transaction, this avoids the need for MATIC for gas in the user’s wallet.

The meta-transaction request contains an encoded function call called <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">transferWithApproval</code> on the transfer USDC contract. The meta-transaction is also an EIP712 structured object that is signed and has a domain field schema according to the Open GSN specification. The Keyguard creates the meta-transaction and returns it to the Wallet, which then sends it to the selected OpenGSN Relay. The code used is [this one](https://github.com/nimiq/keyguard/blob/0012747244437ca27f96a4a682f4b47993eeceba/src/request/sign-polygon-transaction/SignPolygonTransaction.js#L212).

#### Step 4: Sending the meta-transaction

The wallet sends the meta-transaction to the relay server via an HTTPS request containing a specific body that includes the meta-transaction,as well as other relay-specific information required by OpenGSN.

The code used to send the meta-transaction can be found [here](https://github.com/nimiq/wallet/blob/master/src/ethers.ts#L718).

Meta-transactions can be thought of as Matryoshka (nesting) dolls, with the outermost layer being the request to the OpenGSN relay. Inside this layer is an encoded function call to the <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">transferWithApproval</code> function on the Transfer USDC Contract, which acts as another layer of the doll. This function call in turn contains the necessary parameters to transfer, along with the signature that verifies the user's authorisation.

On the network side, first the relay server unpacks the outermost layer and creates a transaction from its contents that interacts with the Transfer USDC Contract. The contract further unpacks the second layer, revealing the third layer, which contains the transfer amount and recipient, the arguments for the authorization function in the USDC contract, and the exchange from USDC to MATIC.

### Step 5: Checking requirements

After the Wallet sends the meta-transaction, it goes to the <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">transferWithApproval</code> function in the Transfer USDC Contract. Before triggering the transfer, we need to check a few things to ensure that it goes through:

1. Check that the token address exists.
1. Check that the user has enough USDC for the amount and fee.
1. Check that the smart contract is given permission on behalf of the user to transfer tokens.
1. Check that the permission amount given is enough.

If any requirements are not fulfilled, the smart contract won't proceed with the transaction. You can find the smart contract code [here](https://polygonscan.com/address/0x98e69a6927747339d5e543586fc0262112ebe4bd#code).

### Step 6: Approve the transfer

The USDC token is a form of digital currency that operates on the Ethereum blockchain. It follows the ERC-20 standard, which outlines the rules for how the token can be moved and stored. To move USDC, we must use a secure method known as the ERC-20 approval method. This method enables someone else to move tokens on our behalf, but only with our “approval”.

### Step 7: Swapping USDC to MATIC

To exchange USDC for MATIC, the transfer contract calls the <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">ExactOutputSingleParams</code> function on the UniSwap Smart Contract with the following parameters::

- <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">tokenIn</code>: Smart Contract address of USDC.
- <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">tokenOut</code>: Smart Contract address of WMATIC, a 1:1 MATIC-pegged token that provides compatibility with the Ethereum virtual machine and standardisation with other ERC-20 tokens. It allows users to take advantage of decentralised EVM-based trading, DeFi protocols and applications.
- <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">fee</code>: The pool fee. This is a static number inherent to the pool.
- <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">recipient</code>: Address of the Transfer Contract.
- <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">amountOut</code>: The amount in MATIC to be paid for the OpenGSN and Polygon network fees.
- <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">amountInMaximum</code>: The maximum amount of input tokens a user is willing to spend on a trade. In our case, this value is equal to the fee calculated in step 2.

Unlike traditional exchanges, UniSwap V3 does not allow for pre-calculated exchange rates. The wallet retrieves the spot-exchange rate between USDC and MATIC (WMATIC) at the time of fee estimation, but it can fluctuate rapidly due to other transactions until the transfer is made. To account for this, a 10% buffer is added to the exchange rate received in step #2. On the Mumbai Testnet network, this buffer is adjusted to 25% due to low liquidity and thus higher volatility. However, any unused buffer is refunded to the user, which is why you usually see the final fee to be lower than what was estimated.

### Step 8: Make the transfers

The Transfer Contract now initiates two transfers. Firstly, it executes the user's requested USDC transfer by calling the <code style="background: rgba(31, 35, 72, 0.1); word-wrap: break-word; padding: .1rem .3rem .2rem; border-radius: .2rem; ">transferFrom</code> function on the USDC contract, as we have previously obtained the necessary approval authorization. Secondly, the Transfer Contract unwrapps the swapped WMATIC and sends them to the OpenGSN Relay Hub to cover the cost of the native transaction fee and the fee charged by the relay.

### Step 9: Confirming the transaction

In step #4, the wallet sent an HTTPS request to a relay server with a meta-transaction. Now, the wallet checks transaction logs to confirm the transfer.

In our scenario, the relayer sends the transaction. Unlike Nimiq and Bitcoin, EVMs allow multiple token transfers in one transaction. The transaction object holds log records and shows the transaction's activity. We look for the "transfer" log which includes the user’s address as the sender, the targeted recipient, and the amount that was sent. The wallet parses these logs and restructures them into the transaction object which is then displayed in the transaction list.

## Wrapping it up

In conclusion, we hope that this technical blog post has provided you with a clearer understanding of how Nimiq's implementation of USDC on Polygon with Gas Abstraction works. By leveraging the advantages of the Polygon network, OpenGSN, and Uniswap, Nimiq has successfully created a user-friendly and efficient solution for sending USDC without the need for users to manage MATIC themselves.

For more insights into the technical aspects of this integration and to engage with a community of like-minded enthusiasts, be sure to join our [Telegram group](https://t.me/Nimiq). Our team and fellow community members are always ready to discuss cutting-edge technologies, share insights, and address any questions you may have. Together, we can continue to advance the world of cryptocurrencies and make them more accessible to everyone.

Pura Vida
**Team Nimiq**
