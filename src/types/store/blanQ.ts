import { Tcontent } from '../tasks'
import { WrongAnswerProps } from '@/types/tasks'

interface BlanQStoreProps extends BlanQStateProps {
  actions: BlanQActionsProps
}

interface BlanQStateProps {
  taskId: string
  quiz: string
  code: string
  quizChunk: Tcontent
  answer: string
  wrongAnswers?: WrongAnswerProps[]
}

interface BlanQActionsProps {
  resetBlanQ: () => void
  setTaskId: (quiz: BlanQStateProps['taskId']) => void
  setQuiz: (quiz: BlanQStateProps['quiz']) => void
  setCode: (code: BlanQStateProps['code']) => void
  setQuizChunk: (quizChunk: BlanQStateProps['quizChunk']) => void
  setAnswer: (code: BlanQStateProps['answer']) => void
  setWrongAnswers: (code: BlanQStateProps['wrongAnswers']) => void
}

export type { BlanQStoreProps, BlanQStateProps, BlanQActionsProps }
