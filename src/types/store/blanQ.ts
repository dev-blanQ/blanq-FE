import { Tcontent } from '../tasks'

interface BlanQStoreProps extends BlanQStateProps {
  actions: BlanQActionsProps
}

interface BlanQStateProps {
  quiz: string
  code: string
  quizChunk: Tcontent
  answer: string
}

interface BlanQActionsProps {
  resetBlanQ: () => void
  setQuiz: (quiz: BlanQStateProps['quiz']) => void
  setCode: (code: BlanQStateProps['code']) => void
  setQuizChunk: (quizChunk: BlanQStateProps['quizChunk']) => void
  setAnswer: (code: BlanQStateProps['answer']) => void
}

export type { BlanQStoreProps, BlanQStateProps, BlanQActionsProps }
