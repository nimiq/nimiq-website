export const useNavigation = defineStore('navigation', () => {
  const { client } = usePrismic()
  const { data: navigation } = useAsyncData('navigation', () => client.getSingle('navigation'))
  return {
    navigation,
  }
})
