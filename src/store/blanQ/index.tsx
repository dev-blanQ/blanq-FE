import { BlanQStoreProps, BlanQStateProps } from '@/types/store/blanQ'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const initialState: BlanQStateProps = {
  blanQInfo: {
    quiz: '',
    code: '',
  },
}

export const BlanQStore = create<BlanQStoreProps>()(
  devtools((set) => ({
    blanQInfo: initialState.blanQInfo,

    actions: {
      resetBlanQ: () => set(() => ({ ...initialState })),
      setQuiz: (quiz) => set((state) => ({ ...state, quiz })),
      setCode: (code) => set((state) => ({ ...state, code })),
    },
  })),
)

const useBlanQStore = () => BlanQStore((state) => state.blanQInfo)
const useBlanQActions = () => BlanQStore((state) => state.actions)
export { useBlanQStore, useBlanQActions }
