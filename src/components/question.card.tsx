"use client"

import React, { FC } from "react"
import useCounterStore from "@/stores/counter.store"

const QuestionCard: FC = () => {
  const { count, increment } = useCounterStore()

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default QuestionCard
