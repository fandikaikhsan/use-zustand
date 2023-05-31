import { create } from "zustand"
import { persist } from "zustand/middleware"

type AnswerState = {
  answer: string
}

type AnswerActions = {
  setAnswer: (answer: string) => void
}

const useAnswerStore = create<AnswerState & AnswerActions>()(
  persist(
    (set) => ({
      answer: "",
      setAnswer: (answer: string) => set({ answer }),
    }),
    {
      name: "answer-storage",
    }
  )
)

export default useAnswerStore
