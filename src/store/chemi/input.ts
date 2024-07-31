import { InputStoreProps } from '@/types/store/input'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const InputStore = create<InputStoreProps>()(
  devtools((set) => ({
    input: '', // 가장 최대값,
    actions: {
      resetInput: () => set(() => ({ input: '' })),

      changeInput: (input) => set(() => ({ input: input })),
    },
  })),
)

const useInputStore = () => InputStore((state) => state.input)
const useInputActions = () => InputStore((state) => state.actions)
export { useInputStore, useInputActions }
