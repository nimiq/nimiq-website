import { NimiqRPCClient } from 'nimiq-rpc-client-ts'

export default defineEventHandler(async () => {
  try {
    const client = new NimiqRPCClient(new URL(useRuntimeConfig().albatross.nodeRpcUrl || ''))
    const { data: policy, error } = await client.policy.getPolicyConstants()
    if (error || !policy) {
      return createError(`Failed to fetch policy: ${JSON.stringify(error)}`)
    }
    return policy
  }
  catch (error) {
    console.error('Failed to fetch policy:', JSON.stringify(error))
    return createError(`Failed to fetch policy: ${error} ${JSON.stringify(error)}`)
  }
})
