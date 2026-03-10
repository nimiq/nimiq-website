---
title: Zero knowledge proofs and nano nodes, part 2
description: Digging deeper into the technology behind ZPKs and nano nodes in Nimiq 2.0.
slug: zero-knowledge-proofs-and-nano-nodes-part-2
publishedAt: "2020-07-26"
updatedAt: 2023-12-07T16:44:53+0000
authors:
  - BRUNO FRANÇA
image: /assets/images/prismic/d3c60daa-2f43-4950-9b71-b214b448285c_blog_zero-knowledge-proofs-and-nano-nodes-part-2_1.png
---

In [the last post](https://www.nimiq.com/blog/zero-knowledge-proofs-and-nano-nodes/) we discussed how the nano nodes in Nimiq 2.0 and Albatross are going to use SNARKs in order to vastly reduce the time that it takes to sync the blockchain. But we did not explain the inner workings of the SNARK proofs that we are going to use. In this part we will go deeper down into the technical details and explain how these proofs are created and what this means for the performance of Nimiq 2.0. Time to put on the smarty-pants glasses. 🤓

## Interactive Zero-Knowledge Proofs

Let’s start with a simple example (inspired by [this article](https://blog.goodaudience.com/understanding-zero-knowledge-proofs-through-simple-examples-df673f796d99)) that illustrates how the process of challenge-response works. We have two people: Alice and Bob. Alice doesn’t believe Bob can see colors, but Bob swears he can. To **prove** that, Alice holds colored hexagons in her hands and shows them to Bob.

![](/assets/images/prismic/ecf5b662-29cd-4001-9716-7b5c03d1c7e7_blog_zero-knowledge-proofs-and-nano-nodes-part-2_2.png)

- Alice: I am holding a red hexagon and a blue hexagon. I will now put my hands behind my back, so you cannot see. During this time, I may or may not exchange the hexagons between my hands. Afterwards, I will show you the hexagons again.
- Bob: OK, so you want me to tell you if you switched the hexagons or not.
- Alice: Correct, only someone who can see color will be able to consistently tell me what I did.

In this case, Alice is verifying that Bob can indeed see colors, she is the verifier. While Bob is proving that he can see colors, he is the prover. For this to work, Alice needs to keep the verification process hidden, hiding her hands behind her back and making sure Bob does not see whether or not she switched the hexagons. Interestingly, Alice herself does not need to know which color each hexagon is, as far as she is concerned, only knowing that Bob can detect if she is switching them or not is enough to convince her that he can differentiate the colors of the hexagons.

- Alice: Are the colors in the same hands?
- Bob: Yes.
- Alice: How about now?
- Bob: Nope.

Every time Alice challenges Bob, she gets a response. With enough responses she can be statistically certain that Bob can see colors. Every challenge/response is called an interaction. In this case, Alice needs a set of interactions to be performed before she is certain that Bob can see colors. Zero Knowledge Proofs can also be non-interactive, which does not require the effort of a challenge-response interaction and also allows multiple parties to verify Alice’s claims, not just Bob.

## Non-Interactive Knowledge Proofs

Let’s change the example and analyze how Non-Interactive Knowledge Proof and SNARKs work. From a blockchain's perspective it’s very important that the proof is non-interactive because then it does not require the prover to be online and available for “questioning” at all times, instead, a static piece of data, the proof, is sufficient for one or many verifiers that can verify the proof independently.

The first thing to know about Succinct Non-Interactive Argument of Knowledge (SNARKs) is that they have circuits and witnesses. By circuit we mean the program or function that is part of the statement that we are trying to prove. By witness we mean the specific values that make our statement true. For example, if we are trying to prove the statement “I know a number y such that y2 – 4 = 0” then the circuit would be the function “y2 – 4 = 0” while the witness would be the number 2 because 22 – 4 = 0 is true. Thinking of the blockchain world, you can imagine the circuit to be a test whether the current blockchain is valid and the witness being the blocks in the chain. From a programmer's perspective, the circuit is the logic and the witnesses are the data.

## Private Witnesses

Another important detail is that witnesses can be public or private. Private witnesses are the ones that are known only to the prover, while public witnesses are the ones that are known to everyone, including the verifier. In the previous example the number y is a private witness. It is the prover that is saying that she knows that number, but she is not revealing it. This is a very important feature of zero knowledge proofs since it allows someone to prove something that they know without revealing what they know. A real world application of this property is that I can use a SNARK to prove that I know the secret key to a Nimiq wallet with 10 million NIMs in it, without actually revealing my secret key or even the address.

For the curious reader that checks all the footnotes: This example is actually pretty interesting and the concept used here is a big part of the circuit that Zcash uses. Without going into too much detail, imagine that you already have the latest block and checked that it’s valid. Then, I can prove to you that 1) I know a Merkle path from the state root to some data, 2) that that data contains a public key and that it contains the balance that I said, 3) that I know the secret key to that public key. Bingo!

## Public Witnesses

Adding a public witness to the previous example from before: “I know a number y such that y2 – 4 = x, where x is a number provided by you.” You can imagine x to be something meaningful and publicly known, something according to which the verifier wants to make sure that the prover either knows the secret or has performed a certain process. Back to the blockchain world, x could be the latest block and thus the proof proving that this block is indeed the last block of a valid blockchain.

Now, let’s imagine that the prover chooses y = 3 and wants to create a proof that she knows y under the condition of a known x. So she creates a proof with the private witness of y = 3 and the public witness of x = 5. For all we have to know, the resulting proof is a piece of data with a fixed length of around 200 bytes. Though, technically speaking, it's actually three points on an elliptic curve. 🤓

Now that we have the proof, the verifier can take that proof and put in the x that she wants to verify the proof for. Evidently, if the verifier chooses x = 5 (imagine this to be, for example, the current block height) then the verification will output true, while choosing x = 3 it will output false (input those numbers and try it yourself!).

Note that this is a very simplified explanation. The formula here seems to reveal y, but that is not the case in reality, it's very complex math and it is indeed possible to do this without revealing y. You can imagine the proof to be similar to a hash to some degree, you can verify that it’s correct very quickly but even better than a hash, you don’t have to know the original data to verify it.

Another, more abstract — and way less correct! 🤭 — way of how you could imagine this is a proof being some form of an outline. The secret is hidden but the verifier — having some shape that the secret has to match — can understand that the given outline of the secret would fit. 🤔 Back to the topic.

Public witnesses allow us to have more flexible circuits that can prove more things. While before we could only prove “y2 – 4 = 0”, if we add the public witness x to make “y2 – 4 = x” then we can prove “y2 – 4 = 0” or “y2 – 4 = 1” or “y2 – 4 = 2” … And we can use the same circuit for all these proofs! This is very important because it turns out that SNARKs only work with “fixed” circuits.

## The Structure of SNARKs

Diving deeper into the structure of SNARKs, we realize that they are composed of three parts or algorithms:

1. The parameter generation. Where we take the circuit and calculate a proving key and a verification key. Without going into too much detail, these keys are similar to the public and private keys that are used in digital signatures and encryption. Each specific circuit will have a corresponding proving key and verification key.
1. The proof generation. Where we take the proving key, the private and the public witnesses, and calculate a proof out of it.
1. The proof verification. Where we take the verification key, the proof and the public witnesses and check if the proof is true.

So, but how does this all come together in the nano nodes? Let’s see in more detail what our SNARK might look like. A naive way of doing it would be to try to prove that we know all macro blocks from the genesis macro block all the way to the latest macro block. Imagine we have N macro blocks. The blocks number 1 and N (the genesis block and the latest one) would be the public witnesses, the blocks from 2 to N-1 would be the private witnesses and the circuit would be the program that checks that each macro block is valid and that they form a valid chain.

![](/assets/images/prismic/48ebed8a-dd7d-4b1c-bc14-7e49a8f850a7_blog_zero-knowledge-proofs-and-nano-nodes-part-2_3.png)

As we have said before, SNARK circuits are fixed. If we want to change the circuit, then we need to run the parameter generation algorithm again and produce new proving and verifying keys. This is problematic for our naive strategy, if we create a circuit that verifies exactly N macro blocks, then when macro block number N+1 is produced, we need to create a new circuit that verifies N+1 blocks. To do this, we also need to create new verifying and proving keys.

At first glance, it might not look like a problem — after all, the keys are always the same size — but in practice it would not work. First, these keys need to be created securely by a trusted entity, in our case Team Nimiq. If Team Nimiq (for some reason) becomes unavailable then the nano nodes would not be able to sync newer blocks. This is a central point of failure that we need to avoid.

Second, the nano nodes would need to download the latest verifying key whenever they want to sync. They need to download it from a trusted source because they have no way of checking the correctness of the key. If we were going to force the nano nodes to connect to a trusted source whenever they want to sync, we might as well just give them only the last macro block. Of course, this is not acceptable. We want the verifying key to be like the genesis block. It should be created at the beginning and never change afterwards. This way the verifying key can be included with the nano node's source code.

We are now going to try a less naive way of solving the problem. Instead of having a circuit that verifies exactly N macro blocks, we can have a circuit that verifies up to N macro blocks. Just like the previous circuit, it will also take as public witnesses the first and the last macro blocks and all the other N-2 macro blocks as private witnesses. The difference now is that we will add another public witness that is simply the current block height. We can now modify the circuit so that it only checks the validity of the blocks up to the current block height.

![](/assets/images/prismic/e7cc8b05-c9a3-447f-b119-79863bfad1a0_blog_zero-knowledge-proofs-and-nano-nodes-part-2_4.png)

For example, imagine that the current block height is N-50. The prover will use the N-50 macro blocks that exist so far plus 50 “fake” macro blocks (these are just blocks with any data in them, they don’t need to be valid) as private witnesses. The circuit then will verify the validity of all of the N macro blocks but will only enforce that the first N-50 are indeed valid.

With this simple change we can now verify any number of blocks up to a predefined maximum. Then, when we have more than N macro blocks we simply produce several proofs, one proof for each chunk of N macro blocks. Note that the nano nodes still only need one verifying key, as we wanted, instead they receive several proofs.

This was actually the first strategy that we pursued when implementing the nano nodes. However, we soon found out that it was not a viable option. For this strategy to be useful we needed a circuit that would be able to prove several hundred macro blocks at once. Otherwise, the number of proofs that the nano nodes need to download and verify grows too fast. Unfortunately, we realized that verifying even a single macro block is a very intensive computation and a normal laptop could only prove a chain with a couple (below ten!) of macro blocks.

This was a big problem because we want people to be able to create these proofs on regular consumer hardware. If people need a supercomputer to create proofs then no one outside of the Nimiq team will do it, and that will create another central point of failure. Not cool. ❌ 😉

After some more research, we finally found a way to solve our problem: by using recursive SNARKs. Cool. ✔️ 😎

Remember that we said in the [previous blog post](https://www.nimiq.com/blog/zero-knowledge-proofs-and-nano-nodes/) that SNARKs can prove any statement or computation? Well, they can also prove the verification of other SNARK proofs! That means, if I have the statement “I know a proof P that is valid with the verifying key V” then I can produce a proof for that. This is important because now we can have SNARKs that verify other SNARKs that verify other SNARKs… and so on — that’s why we call them recursive SNARKs.

Recursive SNARKs actually require more complex math than regular SNARKs (for the curious reader, we need to use elliptic curve cycles) but we will not touch on that topic so that we can keep this blog post simple(r).

With recursive SNARKs we can now create a much better solution! Just like before, imagine that we have N macro blocks and the nano node knows the first and the last blocks. Our circuit now proves this statement “I know a valid block N-1 and I also know a SNARK proof that proves that there are valid blocks from 1 to N-2”. Obviously this is a proof that there are valid blocks from 1 to N-1, but the prover only had to verify a single macro block and one SNARK proof. And now, when a new macro block is created, the block number N+1, the prover can again prove the statement “I know a valid block N and I also know a SNARK proof that proves that there are valid blocks from 1 to N-1”. So, the previous proof now becomes a private witness to the new proof. This pattern starts at the genesis block and we can continue it for an infinite amount of blocks!

![](/assets/images/prismic/2e3f581f-6c21-485a-b8a5-4f4d725bb340_blog_zero-knowledge-proofs-and-nano-nodes-part-2_5.png)

This solution meets all of our requirements:

- The circuit never changes so we only need to create the verifying and proving keys one time.
- The circuit is small enough that it can be proven on a regular computer in an acceptable amount of time. Not only small, it’s fixed size for all eternity! 😎

Another advantage is that the prover doesn’t actually need to know all of the macro blocks in order to create a proof. She just needs to know the penultimate block and the previous proof.

This explanation glosses over a lot of what happens in this circuit, which is in fact very complex and at the same time very interesting. The more techie readers might want to [check out our GitHub repo](https://github.com/nimiq/nano-sync) where there is more documentation and code!

Summing it all up: we achieved an optimal solution! We have a decentralized, secure and fast way for users to sync with the Nimiq blockchain and it will stay fast even as the blockchain grows. We are very excited to finish implementing and testing this cutting-edge technology in Nimiq 2.0!

Pura Vida,

**Team Nimiq**
