import { BlanQStoreProps, BlanQStateProps } from '@/types/store/blanQ'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const initialState: BlanQStateProps = {
  taskId: '',
  quiz: '',
  code: '',
  quizChunk: [],
  answer: '',
  wrongAnswers: [],
}

export const BlanQStore = create<BlanQStoreProps>()(
  devtools((set) => ({
    ...initialState,

    actions: {
      resetBlanQ: () => set(() => ({ ...initialState })),
      setTaskId: (taskId) => set((state) => ({ ...state, taskId })),
      setQuiz: (quiz) => set((state) => ({ ...state, quiz })),
      setCode: (code) => set((state) => ({ ...state, code })),
      setAnswer: (answer) => set((state) => ({ ...state, answer })),
      setQuizChunk: (quizChunk) => set((state) => ({ ...state, quizChunk })),
      setWrongAnswers: (wrongAnswers) =>
        set((state) => ({ ...state, wrongAnswers })),
    },
  })),
)

const useBlanQStore = () =>
  BlanQStore(({ quiz, code, quizChunk, answer, wrongAnswers }) => ({
    quiz,
    code,
    quizChunk,
    answer,
    wrongAnswers,
  }))
const useBlanQActions = () => BlanQStore((state) => state.actions)
export { useBlanQStore, useBlanQActions }
