import { Address, KeyPair, PrivateKey, TransactionBuilder } from '@nimiq/core'
import { NimiqRPCClient } from 'nimiq-rpc-client-ts'
import * as v from 'valibot'

const bodySchema = v.object({
  nonce: v.number(),
  validityStartHeight: v.number(),
})

export default defineEventHandler(async (event) => {
  const { success, output: body, issues } = await readValidatedBody(event, body => v.safeParseAsync(bodySchema, body))
  if (!success)
    throw createError({ statusCode: 400, statusMessage: JSON.stringify(issues) })

  const { liveview: { privateKey, txRecipient, txValue = 500, txFee = 500 }, nodeRpcUrl } = useRuntimeConfig().albatross
  const client = new NimiqRPCClient(nodeRpcUrl)

  const keyPair = KeyPair.derive(PrivateKey.fromHex(privateKey))
  const fee = BigInt(txFee)
  const recipient = Address.fromString(txRecipient)
  const value = BigInt(txValue)
  const { nonce, validityStartHeight } = body
  const data = new Uint8Array(new Uint32Array([nonce]).buffer).reverse()

  const tx = TransactionBuilder.newBasicWithData(keyPair.toAddress(), recipient, data, value, fee, validityStartHeight, 5)
  tx.sign(keyPair)
  const txHash = tx.hash()

  const { error } = await client.consensus.sendRawTransaction({ rawTransaction: tx.toHex() })
  if (error)
    throw createError({ statusCode: 400, statusMessage: JSON.stringify(error) })

  // eslint-disable-next-line no-console
  console.log(`Transaction sent: ${txHash}`)
  setResponseStatus(event, 201)

  return { txHash }
})
