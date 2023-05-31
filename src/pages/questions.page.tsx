"use client"

import React, { FC } from "react"
import QuestionCard from "@/components/question.card"
import AnswerCard from "@/components/answer.card"

const QuestionsPage: FC = () => {
  return (
    <div>
      <QuestionCard />
      <AnswerCard />
    </div>
  )
}

export default QuestionsPage
