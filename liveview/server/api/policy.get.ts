import { NimiqRPCClient } from 'nimiq-rpc-client-ts'

export default defineEventHandler(async () => {
  const client = new NimiqRPCClient(new URL(useRuntimeConfig().rpcUrl || ''))
  const { data: policy, error } = await client.policy.getPolicyConstants()
  if (error || !policy) {
    return createError(`Failed to fetch policy: ${JSON.stringify(error)}`)
  }
  return policy
})
