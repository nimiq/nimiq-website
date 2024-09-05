export const useNavigation = defineStore('navigation', () => {
  const { client } = usePrismic()
  console.log({ client })
  const { data: navigation } = useAsyncData('navigation', () => client.getSingle('navigation'))
  return {
    navigation
  }
})
