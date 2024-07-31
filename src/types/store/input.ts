interface InputStoreProps extends InputStateProps {
  actions: InputActionsProps
}

interface InputStateProps {
  input: string
}

interface InputActionsProps {
  resetInput: () => void
  changeInput: (input: InputStateProps['input']) => void
}

export type { InputStateProps, InputActionsProps, InputStoreProps }
