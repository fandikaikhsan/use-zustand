import { create } from "zustand"

type AnswerState = {
  answer: string
}

type AnswerActions = {
  setAnswer: (answer: string) => void
}

const useAnswerStore = create<AnswerState & AnswerActions>((set) => ({
  answer: "",
  setAnswer: (answer) => set({ answer }),
}))
