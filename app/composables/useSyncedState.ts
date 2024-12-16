export function useSyncedState<T>(key: string, initialValue: (T | (() => T))): Ref<T> {
  const localValue = useLocalStorage<T>(key, typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue)
  const state = useState<T>(key, () => localValue.value)

  watch(state, (newValue) => {
    localValue.value = newValue
  }, { deep: true })

  return state
}
