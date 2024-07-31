import { BlanQStoreProps, BlanQStateProps } from '@/types/store/blanQ'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const initialState: BlanQStateProps = {
  quiz: '',
  code: '',
  quizChunk: [],
  answer: '',
}

export const BlanQStore = create<BlanQStoreProps>()(
  devtools((set) => ({
    quiz: '',
    code: '',
    quizChunk: [],
    answer: '',

    actions: {
      resetBlanQ: () => set(() => ({ ...initialState })),
      setQuiz: (quiz) => set((state) => ({ ...state, quiz: quiz })),
      setCode: (code) => set((state) => ({ ...state, code: code })),
      setAnswer: (answer) => set((state) => ({ ...state, answer: answer })),
      setQuizChunk: (quizChunk) =>
        set((state) => ({ ...state, quizChunk: quizChunk })),
    },
  })),
)

const useBlanQStore = () =>
  BlanQStore(({ quiz, code, quizChunk, answer }) => ({
    quiz,
    code,
    quizChunk,
    answer,
  }))
const useBlanQActions = () => BlanQStore((state) => state.actions)
export { useBlanQStore, useBlanQActions }
