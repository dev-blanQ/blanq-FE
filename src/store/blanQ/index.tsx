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
  member: {
    memberId: '',
    nickname: '',
    profileUrl: '',
  },
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
      setMember: (member) => set((state) => ({ ...state, member })),
    },
  })),
)

const useBlanQStore = () =>
  BlanQStore(
    ({ taskId, quiz, code, quizChunk, answer, wrongAnswers, member }) => ({
      taskId,
      quiz,
      code,
      quizChunk,
      answer,
      wrongAnswers,
      member,
    }),
  )
const useBlanQActions = () => BlanQStore((state) => state.actions)
export { useBlanQStore, useBlanQActions }
