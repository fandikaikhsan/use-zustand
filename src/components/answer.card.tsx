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
    <div className="flex flex-col p-5 gap-4 bg-green-900 text-center">
      <div>
        <div className="pb-3">
          <p className="text-white">User Answer:</p>
          <p className=" text-gray-300">(persistent data)</p>
        </div>
        <p className="text-red-500 text-2xl font-bold underline">{answer}</p>
      </div>

      <form
        className="flex flex-col gap-5 items-center"
        onSubmit={handleSubmit}
      >
        <label className="font-bold text-white">
          Answer:
          <input
            type="text"
            value={localAnswer}
            onChange={(event) => setLocalAnswer(event.target.value)}
            name="answer"
            className="mx-3 border text-black border-gray-400"
          />
        </label>
        <input
          className=" bg-blue-500 p-2 text-white rounded-md "
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  )
}

export default AnswerCard
