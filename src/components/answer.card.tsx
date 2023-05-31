"use client"

import React, { FC, useState } from "react"
import useAnswerStore from "@/stores/answer.store"

const AnswerCard: FC = () => {
  const { answer, setAnswer } = useAnswerStore()
  const [localAnswer, setLocalAnswer] = useState("")

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setAnswer(localAnswer)
    setLocalAnswer("")
  }

  return (
    <div className="flex flex-col p-5 gap-4 bg-green-700 text-center">
      <p className="text-white">User Answer:</p>
      <p className="text-red-300 text-lg">{answer}</p>
      <form
        className="flex flex-col gap-5 items-center"
        onSubmit={handleSubmit}
      >
        <label className="">
          Answer:
          <input
            type="text"
            value={localAnswer}
            onChange={(event) => setLocalAnswer(event.target.value)}
            name="answer"
            className="mx-3 border border-gray-400"
          />
        </label>
        <input
          className="bg-red-700 p-2 text-white rounded-md "
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  )
}

export default AnswerCard
