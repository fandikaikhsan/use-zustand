"use client"

import React, { FC } from "react"
import useCounterStore from "@/stores/counter.store"

const QuestionCard: FC = () => {
  const { count, increment } = useCounterStore()

  return (
    <div className="flex flex-col items-center gap-2 p-2 bg-yellow-600">
      <div className="text-center text-white">
        <p>Count: {count}</p>
        <p className="text-gray-300">(non persistent data)</p>
      </div>
      <button
        className=" bg-blue-500 text-white p-2 rounded-md"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  )
}

export default QuestionCard
