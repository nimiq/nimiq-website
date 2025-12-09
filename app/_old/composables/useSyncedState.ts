/**
 * Creates a reactive state that syncs between localStorage and server state.
 *
 * Combines `useLocalStorage` and `useState` to provide persistent state that
 * survives page refreshes and syncs across components.
 *
 * @param key - Unique identifier for the state
 * @param initialValue - Initial value or factory function
 */
export function useSyncedState<T>(key: string, initialValue: (T | (() => T))): Ref<T> {
  const localValue = useLocalStorage<T>(key, typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue)
  const state = useState<T>(key, () => localValue.value)

  watch(state, (newValue) => {
    localValue.value = newValue
  }, { deep: true })

  return state
}
