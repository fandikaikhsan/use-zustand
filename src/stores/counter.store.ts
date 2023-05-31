import { create } from "zustand"

type CounterState = {
  count: number
}

type CounterActions = {
  increment: () => void
  decrement: () => void
}

const useCounterStore = create<CounterState & CounterActions>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default useCounterStore
