export type QuizWithAnswerProps = {
  content: Tcontent
  answer: string
}

export type QuestProps = {
  taskId: TtaskId
  content: Tcontent
}

export type Tcontent = string[]
export type TtaskId = string
