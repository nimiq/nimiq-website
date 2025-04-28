export interface NimiqExchange {
  name: string
  logo: string
  url: string
}

export function useExchanges() {
  return useAsyncData('exchanges', async () => {
    const exchanges = await $fetch('https://ungh.cc/repos/onmax/nimiq-awesome/files/main/src/data/dist/nimiq-exchanges.json')
      .then(res => JSON.parse((res as any).file.contents) as NimiqExchange[])

    if (!exchanges)
      throw new Error('Failed to fetch apps')

    return exchanges
  })
}
