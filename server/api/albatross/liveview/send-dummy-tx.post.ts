import { Address, KeyPair, PrivateKey, TransactionBuilder } from '@nimiq/core'
import { initRpcClient } from 'nimiq-rpc-client-ts/config'
import { sendRawTransaction } from 'nimiq-rpc-client-ts/http'
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
  initRpcClient({ url: nodeRpcUrl })

  const keyPair = KeyPair.derive(PrivateKey.fromHex(privateKey))
  const fee = BigInt(txFee)
  const recipient = Address.fromString(txRecipient)
  const value = BigInt(txValue)
  const { nonce, validityStartHeight } = body
  const data = new Uint8Array(new Uint32Array([nonce]).buffer).reverse()

  const tx = TransactionBuilder.newBasicWithData(keyPair.toAddress(), recipient, data, value, fee, validityStartHeight, 5)
  tx.sign(keyPair)
  const txHash = tx.hash()

  const [isOk, error] = await sendRawTransaction({ rawTransaction: tx.toHex() })
  if (!isOk)
    throw createError({ statusCode: 400, statusMessage: JSON.stringify(error) })

  // eslint-disable-next-line no-console
  console.log(`Transaction sent: ${txHash}`)
  setResponseStatus(event, 201)

  return { txHash }
})
