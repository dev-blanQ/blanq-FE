export type QuizWithAnswerProps = {
  content: Tcontent
  answer: answer
}

export type QuestProps = {
  taskId: TtaskId
  content: Tcontent
}

export type WrongAnswerProps = {
  answer: string
  similarity: string
}

export type Tcontent = string[]
export type TtaskId = string
export type answer = string
export type isFinishedd = boolean
